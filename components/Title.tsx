import { Em } from './Rich';

/** Every section heading. *Stars* in the client's text become the gold italic. */
export function Title({ text, className = 'title' }: { text: string; className?: string }) {
  return (
    <h2 className={className} data-split="lines">
      <Em text={text} />
    </h2>
  );
}
