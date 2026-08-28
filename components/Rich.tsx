import { content } from '@/content';

/**
 * The client writes *stars* around the words they want in gold italic, and
 * blank lines between paragraphs. These turn that into markup — the only
 * formatting the workbook understands, deliberately.
 */

/** `a *b* c` → a <em>b</em> c */
export function Em({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*([^*]+)\*/g).map((part, i) =>
        i % 2 ? <em key={i}>{part}</em> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

/** Blank-line-separated text → one <p> each. */
export function Paragraphs({ text, className }: { text: string; className?: string }) {
  const paras = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return (
    <div className={className}>
      {paras.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

/** Single newlines become line breaks — used for opening hours. */
export function Lines({ text }: { text: string }) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  return (
    <>
      {lines.map((l, i) => (
        <span key={l}>
          {l}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

/** `@` in the client's text becomes a link to the Instagram account. */
export function WithHandle({ text }: { text: string }) {
  const parts = text.split('@');
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <a href={content.instagramUrl} target="_blank" rel="noreferrer noopener">
              @{content.instagram}
            </a>
          )}
          {part}
        </span>
      ))}
    </>
  );
}

/** Same, but as a plain string for aria-labels and alt text. */
export function withHandleText(text: string) {
  return text.replace('@', `@${content.instagram}`);
}
