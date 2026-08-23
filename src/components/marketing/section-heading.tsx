type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps): React.ReactElement {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-muted">{description}</p> : null}
    </div>
  );
}
