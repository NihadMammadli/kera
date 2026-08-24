type Parts = { readonly a: string; readonly em: string; readonly b: string };

/** Every section heading: plain, emphasised, plain. Split into lines on scroll. */
export function Title({ parts, className = 'title' }: { parts: Parts; className?: string }) {
  return (
    <h2 className={className} data-split="lines">
      {parts.a} <em>{parts.em}</em>
      {parts.b ? ` ${parts.b}` : ''}
    </h2>
  );
}
