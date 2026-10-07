import { Link, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { LightboxProvider } from "./components/Lightbox";
import { PageMeta } from "./components/PageMeta";
import { About } from "./pages/About";
import { Cakes } from "./pages/Cakes";
import { Contact } from "./pages/Contact";
import { Events } from "./pages/Events";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

function NotFound() {
  return (
    <header className="page-header wrap">
      <PageMeta
        title="Page not found | CB Cakes & Events"
        description="This page is not part of the CB Cakes & Events site."
      />
      <p className="eyebrow">CB Cakes &amp; Events</p>
      <h1>This page is not here.</h1>
      <p>The studio, the cakes and the inquiry are still a click away.</p>
      <Link className="btn" to="/">
        Back to the studio
      </Link>
    </header>
  );
}

export default function App() {
  return (
    <LightboxProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cakes" element={<Cakes />} />
          <Route path="events" element={<Events />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LightboxProvider>
  );
}
