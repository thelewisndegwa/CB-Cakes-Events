import { Link } from "react-router-dom";
import { brand, nav } from "../data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">CB Cakes &amp; Events</p>
          <p>{brand.place}</p>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
            <span>{brand.instagramHandle}</span>
          </a>
          <a href={brand.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
            <span>{brand.phoneDisplay}</span>
          </a>
          <a href={`mailto:${brand.email}`}>
            Email
            <span>{brand.email}</span>
          </a>
        </div>
        <nav aria-label="Footer">
          {nav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} CB Cakes &amp; Events. Mombasa, Kenya.</p>
      </div>
    </footer>
  );
}
