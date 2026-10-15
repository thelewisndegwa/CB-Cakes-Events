import { Link } from "react-router-dom";
import { InquiryCTA } from "../components/InquiryCTA";
import { InstagramCTA } from "../components/InstagramCTA";
import { PageMeta } from "../components/PageMeta";
import { brand, logo } from "../data/site";

export function About() {
  return (
    <>
      <PageMeta
        title="About | CB Cakes & Events"
        description="CB Cakes & Events is an event organising company in Mombasa. We plan and style weddings, dinners and corporate events, and we make the cakes too."
      />
      <article className="about-page">
        <header className="page-header wrap">
          <p className="eyebrow">{brand.place}</p>
          <h1>An event company. Cakes included, when you want them.</h1>
        </header>

        <div className="wrap about-layout">
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          <div className="about-copy">
            <p className="lede">
              CB Cakes &amp; Events organises celebrations in Mombasa. Weddings, private dinners,
              birthdays and corporate functions are planned and styled with you, then set up on the
              day. We also design and bake the cakes for those events.
            </p>
            <p>
              The work starts with the occasion. How many people, which colours, what the room needs
              to do. A cake can be part of that plan, or the whole of it, when the day only calls for
              one. Nothing is chosen from a fixed menu.
            </p>
            <p>What we hold to:</p>
            <ul>
              <li>A celebration organised around the people in the room</li>
              <li>A clear conversation from the first message</li>
              <li>Care in the planning, the styling, and the cake when we make it</li>
            </ul>
            <p>
              If you are planning a day in Mombasa, we would like to hear what you are imagining.
            </p>
            <Link className="text-link" to="/contact">
              Start a conversation
            </Link>
          </div>
        </div>
      </article>
      <InstagramCTA />
      <InquiryCTA />
    </>
  );
}
