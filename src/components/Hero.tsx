import { Link } from "react-router-dom";
import { pieceById } from "../data/site";

const hero = pieceById("wedding-aisle-cn");

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">CB Cakes &amp; Events · Mombasa</p>
        <h1>We organise the event.</h1>
        <div className="hero-actions">
          <p>
            Weddings, private dinners, birthdays and corporate functions in Mombasa — planned and
            styled by us, with custom cakes made for the day as well.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/contact">
              Start an inquiry
            </Link>
            <Link className="btn btn-ghost" to="/events">
              Explore events
            </Link>
          </div>
        </div>
      </div>
      <figure className="hero-photo">
        <img
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          fetchPriority="high"
        />
      </figure>
    </section>
  );
}
