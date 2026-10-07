import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { brand } from "../data/site";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="site">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
      <div className="mobile-bar">
        <Link to="/contact">Inquire</Link>
        <a href={brand.instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={brand.whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
