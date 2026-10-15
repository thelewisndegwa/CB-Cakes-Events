import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { InquiryCTA } from "../components/InquiryCTA";
import { InstagramCTA } from "../components/InstagramCTA";
import { useLightbox } from "../components/Lightbox";
import { PageMeta } from "../components/PageMeta";
import { Process } from "../components/Process";
import { SectionHeading } from "../components/SectionHeading";
import { Shot } from "../components/Shot";
import { logo, pieceById } from "../data/site";

const aisle = pieceById("wedding-aisle-tent");
const seaside = pieceById("dinner-seaside");
const gala = pieceById("gala-dinner-podium");
const gold = pieceById("wedding-white-gold");
const blue = pieceById("wedding-blue-gold");
const eventShots = [aisle, seaside, gala];
const cakeShots = [gold, blue];

const services = [
  {
    href: "/events#weddings",
    title: "Weddings",
    text: "Aisles, tents, tables and the full setting of the day, planned around how you want to gather.",
  },
  {
    href: "/events#dinners",
    title: "Private dinners",
    text: "Proposals, anniversaries and birthdays set for a few people, or for one person walking into the room.",
  },
  {
    href: "/events#corporate",
    title: "Corporate events",
    text: "Gala dinners, launches, exhibition stands and branded activations in the company’s colours.",
  },
  {
    href: "/cakes",
    title: "Cakes",
    text: "Custom cakes for the events we organise, and for days that only need the cake.",
  },
];

export function Home() {
  const { open } = useLightbox();

  return (
    <>
      <PageMeta
        title="CB Cakes & Events | Event Organising in Mombasa"
        description="CB Cakes & Events organises weddings, private dinners and corporate events in Mombasa, and makes the custom cakes for those celebrations too."
      />
      <Hero />

      <section className="intro">
        <div className="wrap intro-grid">
          <SectionHeading eyebrow="The company" title="The day, organised." />
          <div>
            <p>
              CB is an event organising company in Mombasa. We plan and style weddings, private
              dinners, birthdays and corporate functions — and we make the cakes for those days as
              well.
            </p>
            <Link className="text-link" to="/about">
              Discover CB
            </Link>
          </div>
        </div>
      </section>

      <section className="catalogue">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we do"
            title="Events first. Cakes with them."
            intro="Tell us the occasion. We organise the celebration, and bake for it when the cake is part of the brief."
          />
          <div className="cat-index">
            {services.map((item) => (
              <Link key={item.href} className="cat-row" to={item.href}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>View</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="signature">
        <div className="wrap">
          <SectionHeading
            eyebrow="Events"
            title="Selected celebrations"
            intro="Weddings, private dinners and corporate setups, photographed on the day."
          />
          <div className="spread">
            <Shot piece={aisle} eager onOpen={() => open(eventShots, 0)} />
            <div className="spread-side">
              <p>
                A wedding aisle under a tent, a dinner above the sea, a gala table set in the
                company’s colours. The room is the work.
              </p>
              <Shot piece={seaside} onOpen={() => open(eventShots, 1)} />
            </div>
          </div>
          <Link className="text-link" to="/events">
            Explore events
          </Link>
        </div>
      </section>

      <section className="events-home">
        <div className="wrap events-home-grid">
          <div>
            <SectionHeading eyebrow="Cakes" title="And we bake, too." />
            <p>
              Custom cakes for weddings, birthdays and the events we style. The cake is made for the
              celebration — its colours, its table, the people in the room — or ordered on its own
              when that is all the day needs.
            </p>
            <Link className="text-link" to="/cakes">
              See the cakes
            </Link>
            <Shot piece={blue} onOpen={() => open(cakeShots, 1)} />
          </div>
          <Shot piece={gold} onOpen={() => open(cakeShots, 0)} />
        </div>
      </section>

      <Process />

      <section className="about-band">
        <div className="wrap about-band-grid">
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          <div>
            <SectionHeading
              eyebrow="CB Cakes & Events · Mombasa"
              title="An event company that makes its own cakes."
            />
            <p>
              Planning, styling and the cake can sit with one team. Your colours, your gathering,
              your day — talked through with you, then set up on the day itself.
            </p>
            <Link className="text-link" to="/about">
              About the company
            </Link>
          </div>
        </div>
      </section>

      <InstagramCTA />
      <InquiryCTA />
    </>
  );
}
