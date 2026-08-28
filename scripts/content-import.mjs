#!/usr/bin/env node
/**
 * Reads the client's workbook back into content/site.json.
 *
 *   npm run content:update ~/Downloads/kera-content.xlsx
 *
 * Nothing is written until the new content passes content:check, so a workbook
 * with a missing price or a misspelled photo file leaves the site untouched.
 * On success it prints what actually changed, and git shows the rest.
 */
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import ExcelJS from 'exceljs';
import { TEXT_FIELDS, SHEETS, IMAGES } from '../content/registry.mjs';

const src = process.argv[2];
const target = 'content/site.json';
const tmp = '.content-import.json';

if (!src) {
  console.error('content:update — which workbook?\n  npm run content:update -- path/to/kera-content.xlsx');
  process.exit(1);
}
if (!fs.existsSync(src)) {
  console.error(`content:update — no file at ${src}`);
  process.exit(1);
}

const clean = (v) => String(v ?? '').replace(/\r\n/g, '\n').replace(/ /g, ' ').trim();
const cellText = (row, i) => {
  const cell = row.getCell(i);
  if (cell.value == null) return '';
  if (typeof cell.value === 'object' && 'richText' in cell.value) {
    return clean(cell.value.richText.map((r) => r.text).join(''));
  }
  return clean(cell.text);
};

const wb = new ExcelJS.Workbook();
await wb.xlsx.readFile(src);

const need = (name) => {
  const ws = wb.getWorksheet(name);
  if (!ws) {
    console.error(`content:update — the workbook has no sheet called "${name}".`);
    console.error(`  sheets found: ${wb.worksheets.map((w) => w.name).join(', ')}`);
    process.exit(1);
  }
  return ws;
};

/* --------------------------------------------------------------- the text */
const text = {};
const known = new Set(TEXT_FIELDS.map((f) => f.path));
const byLabel = Object.fromEntries(TEXT_FIELDS.map((f) => [f.label.toLowerCase(), f.path]));
const seen = new Set();

need('Text').eachRow((row, n) => {
  if (n === 1) return;
  /* the hidden id column is the anchor; the visible label is the fallback */
  let path = cellText(row, 4);
  if (!known.has(path)) path = byLabel[cellText(row, 1).toLowerCase()] ?? '';
  if (!path || !known.has(path)) return;
  text[path] = cellText(row, 2);
  seen.add(path);
});

const missing = TEXT_FIELDS.filter((f) => !seen.has(f.path));
if (missing.length) {
  console.error(`content:update — ${missing.length} row(s) are missing from the Text sheet:`);
  for (const f of missing.slice(0, 10)) console.error(`  • ${f.label}  (${f.path})`);
  console.error('  Was a row deleted? Ask for the original workbook back.');
  process.exit(1);
}

/* -------------------------------------------------------------- the lists */
const lists = {};
for (const sheet of SHEETS) {
  const ws = need(sheet.name);
  const rows = [];
  ws.eachRow((row, n) => {
    if (n <= 2) return; /* 1 = the explanation, 2 = the headers */
    const values = sheet.columns.map((_, i) => cellText(row, i + 1));
    if (values.every((v) => !v)) return; /* a spare row they never used */
    rows.push(Object.fromEntries(sheet.columns.map((c, i) => [c.key, values[i]])));
  });
  lists[sheet.key] = rows;
}

/* ------------------------------------------------------------- the images */
const images = {};
const imgSheet = need('Images');
const byKey = Object.fromEntries(IMAGES.map((s) => [s.key, s]));
const byWhere = Object.fromEntries(IMAGES.map((s) => [s.where.toLowerCase(), s.key]));
imgSheet.eachRow((row, n) => {
  if (n <= 2) return;
  let key = cellText(row, 4);
  if (!byKey[key]) key = byWhere[cellText(row, 1).toLowerCase()] ?? '';
  if (!byKey[key]) return;
  images[key] = { file: cellText(row, 2), alt: cellText(row, 3) };
});

const next = { schema: 1, text, ...lists, images };

/* ------------------------------------------------- validate before writing */
fs.writeFileSync(tmp, JSON.stringify(next, null, 2) + '\n');
const check = spawnSync('node', ['scripts/content-check.mjs', tmp], { encoding: 'utf8' });
process.stdout.write(check.stdout ?? '');
process.stderr.write(check.stderr ?? '');

if (check.status !== 0) {
  fs.unlinkSync(tmp);
  console.log('\ncontent:update — nothing was changed. Fix the workbook and run it again.');
  process.exit(1);
}

/* ------------------------------------------------------------ what moved */
const prev = fs.existsSync(target) ? JSON.parse(fs.readFileSync(target, 'utf8')) : { text: {}, images: {} };
const notes = [];

const changed = [], filled = [], cleared = [];
for (const f of TEXT_FIELDS) {
  const before = clean(prev.text?.[f.path]);
  const after = clean(text[f.path]);
  if (before === after) continue;
  if (!before) filled.push(f.label);
  else if (!after) cleared.push(f.label);
  else changed.push(f.label);
}
if (filled.length) notes.push(`filled in: ${filled.join(', ')}`);
if (cleared.length) notes.push(`emptied: ${cleared.join(', ')}`);
if (changed.length) notes.push(`reworded: ${changed.length} field${changed.length === 1 ? '' : 's'} (${changed.slice(0, 6).join(', ')}${changed.length > 6 ? '…' : ''})`);

for (const sheet of SHEETS) {
  const a = prev[sheet.key] ?? [];
  const b = next[sheet.key] ?? [];
  const key = (r) => JSON.stringify(sheet.columns.map((c) => clean(r[c.key])));
  const A = a.map(key), B = b.map(key);
  const added = B.filter((r) => !A.includes(r)).length;
  const removed = A.filter((r) => !B.includes(r)).length;
  if (added || removed || a.length !== b.length) {
    const bits = [];
    if (added) bits.push(`+${added}`);
    if (removed) bits.push(`−${removed}`);
    notes.push(`${sheet.name}: ${bits.join(' ')} (${a.length} → ${b.length} rows)`);
  }
}

for (const slot of IMAGES) {
  const before = clean(prev.images?.[slot.key]?.file);
  const after = clean(images[slot.key]?.file);
  if (before !== after) notes.push(`picture "${slot.where}": ${before || '(none)'} → ${after || '(none)'}`);
}

fs.renameSync(tmp, target);

console.log('');
if (notes.length) for (const n of notes) console.log(`  · ${n}`);
else console.log('  · nothing changed — the workbook matches what is already on the site');
console.log(`\ncontent:update — ✓ ${target} written. Run "npm run dev" to look, then commit.`);
