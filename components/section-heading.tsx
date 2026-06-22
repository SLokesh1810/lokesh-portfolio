type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-8 space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-blue-300">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-100">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base dark:text-zinc-300">
          {description}
        </p>
      ) : null}
    </header>
  );
}
