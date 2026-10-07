import type { ReactNode } from "react";

type EventSectionProps = {
  title: string;
  children: ReactNode;
  media: ReactNode;
  flip?: boolean;
};

export function EventSection({ title, children, media, flip = false }: EventSectionProps) {
  return (
    <section className={flip ? "event-block is-flipped" : "event-block"}>
      <div className="event-media">{media}</div>
      <div className="event-copy">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
