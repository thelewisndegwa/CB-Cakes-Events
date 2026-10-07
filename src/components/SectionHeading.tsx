type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;

  return (
    <header className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag>{title}</Tag>
      {intro ? <p className="intro">{intro}</p> : null}
    </header>
  );
}
