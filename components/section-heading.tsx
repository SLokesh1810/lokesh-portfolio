type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{eyebrow}</p>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">{description}</p>
      ) : null}
    </header>
  );
}
