import { Link } from "react-router-dom";
import { brand } from "../data/site";

export function InquiryCTA() {
  return (
    <section className="inquiry-cta">
      <div className="wrap">
        <p className="eyebrow">Mombasa</p>
        <h2>Let&apos;s create something beautiful.</h2>
        <p>Planning a wedding, dinner, corporate event or birthday? Tell us what the day needs.</p>
        <div className="btn-row">
          <Link className="btn" to="/contact">
            Start your inquiry
          </Link>
          <a className="btn btn-line" href={brand.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
