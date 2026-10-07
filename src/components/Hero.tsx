import { Link } from "react-router-dom";
import { pieceById } from "../data/site";

const hero = pieceById("wedding-burgundy");

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">CB Cakes &amp; Events · Mombasa</p>
        <h1>Cakes made for moments worth celebrating.</h1>
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
      <div className="hero-actions">
        <p>
          Custom cakes, beautifully designed desserts and event experiences crafted for weddings,
          birthdays and unforgettable celebrations.
        </p>
        <div className="btn-row">
          <Link className="btn" to="/contact">
            Start an inquiry
          </Link>
          <Link className="btn btn-ghost" to="/portfolio">
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
