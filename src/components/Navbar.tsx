import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { brand, logo, nav } from "../data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-bar">
        <Link className="brand" to="/" aria-label={`${brand.name} home`}>
          <img src={logo.src} alt="" width={logo.width} height={logo.height} />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-instagram" href={brand.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="nav-whatsapp" href={brand.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <Link className="btn btn-small" to="/contact">
            Inquire
          </Link>
          <button
            type="button"
            className={open ? "nav-toggle is-open" : "nav-toggle"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={open ? "nav-panel is-open" : "nav-panel"} hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-panel-actions">
          <Link className="btn" to="/contact">
            Inquire
          </Link>
          <a className="btn btn-ghost" href={brand.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="btn btn-ghost" href={brand.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
