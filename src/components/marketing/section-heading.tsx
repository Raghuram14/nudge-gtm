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
    <div className="mb-8 max-w-2xl">
      {eyebrow ? <p className="type-label mb-2 text-accent">{eyebrow}</p> : null}
      <h2 id={id} className="type-section-title text-foreground">
        {title}
      </h2>
      {description ? <p className="type-body mt-3">{description}</p> : null}
    </div>
  );
}
