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
        description="CB Cakes & Events is a cake and events studio in Mombasa, creating custom cakes for weddings, birthdays and celebrations."
      />
      <article className="about-page">
        <header className="page-header wrap">
          <p className="eyebrow">{brand.place}</p>
          <h1>Created with care. Designed for your celebration.</h1>
        </header>

        <div className="wrap about-layout">
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          <div className="about-copy">
            <p className="lede">
              CB Cakes &amp; Events is a cake and events studio in Mombasa. We make custom cakes for
              weddings, birthdays and private celebrations, and we think about how that cake lives in
              the day.
            </p>
            <p>
              The work starts with your occasion. How many people, which colours, whether the cake
              stands alone or anchors a table of smaller ones. From there the design is personal.
              Nothing here is chosen from a fixed menu.
            </p>
            <p>What we hold to:</p>
            <ul>
              <li>A cake that belongs to the celebration</li>
              <li>A clear conversation from the first message</li>
              <li>Care in the making, and in the way it is presented</li>
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
