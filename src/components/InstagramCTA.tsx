import { brand } from "../data/site";

export function InstagramCTA() {
  return (
    <section className="instagram">
      <div className="wrap">
        <p className="eyebrow">Instagram</p>
        <h2>Follow the celebrations.</h2>
        <p>
          New cakes and celebration settings are shared on{" "}
          <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
            {brand.instagramHandle}
          </a>
          .
        </p>
        <a className="text-link" href={brand.instagramUrl} target="_blank" rel="noreferrer">
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
