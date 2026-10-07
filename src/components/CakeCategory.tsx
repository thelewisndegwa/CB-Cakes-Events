import type { ReactNode } from "react";

type CakeCategoryProps = {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
};

export function CakeCategory({ id, kicker, title, children }: CakeCategoryProps) {
  return (
    <section id={id} className="cake-category">
      <div className="cake-category-copy">
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
      </div>
      <div className="cake-category-body">{children}</div>
    </section>
  );
}
