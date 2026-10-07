import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ImageGallery } from "../components/ImageGallery";
import { PageMeta } from "../components/PageMeta";
import { filters, pieces, type WorkCategory } from "../data/site";

export function Portfolio() {
  const [filter, setFilter] = useState<"all" | WorkCategory>("all");

  const visible = useMemo(() => {
    if (filter === "all") return pieces;
    return pieces.filter((piece) => piece.tags.includes(filter));
  }, [filter]);

  return (
    <>
      <PageMeta
        title="Portfolio | CB Cakes & Events"
        description="Cakes, wedding styling, private dinners and corporate event setups by CB Cakes & Events in Mombasa, photographed at the event."
      />
      <header className="page-header wrap">
        <p className="eyebrow">Portfolio · Mombasa</p>
        <h1>The work.</h1>
        <p>
          Cakes, wedding and celebration setups, private dinners and corporate events from the
          studio, photographed where they happened. Select a photograph to view it larger.
        </p>
      </header>

      <div className="wrap">
        <div className="filters" role="toolbar" aria-label="Filter photographs">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              className="filter"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <ImageGallery pieces={visible} flow />
        ) : (
          <div className="empty-archive">
            <p>
              There are no photographs in this selection yet. Tell us about the person and the day,
              and we will design the cake around them.
            </p>
            <Link className="btn" to="/contact">
              Start an inquiry
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
