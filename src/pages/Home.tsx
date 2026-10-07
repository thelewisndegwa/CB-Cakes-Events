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

const gold = pieceById("wedding-white-gold");
const blue = pieceById("wedding-blue-gold");
const seaside = pieceById("dinner-seaside");
const gala = pieceById("gala-dinner-podium");
const signature = [gold, blue];
const eventShots = [seaside, gala];

const categories = [
  {
    href: "/cakes#weddings",
    title: "Weddings",
    text: "Multi-tier cakes and the smaller cakes that gather around them.",
  },
  {
    href: "/cakes#birthdays",
    title: "Birthdays",
    text: "Personal cakes, made around the person being celebrated.",
  },
  {
    href: "/cakes#celebrations",
    title: "Celebrations",
    text: "Engagements, anniversaries and the days families come together.",
  },
  {
    href: "/cakes#custom",
    title: "Custom designs",
    text: "Colour, setting and feeling — told to us, then made for you.",
  },
];

export function Home() {
  const { open } = useLightbox();

  return (
    <>
      <PageMeta
        title="CB Cakes & Events | Custom Cakes & Events in Mombasa"
        description="CB Cakes & Events creates custom cakes, wedding cakes and beautiful dessert experiences for celebrations in Mombasa, Kenya."
      />
      <Hero />

      <section className="intro">
        <div className="wrap intro-grid">
          <SectionHeading eyebrow="The studio" title="Made to be remembered." />
          <div>
            <p>
              From an intimate birthday to a beautifully styled wedding, every celebration deserves a
              centrepiece that feels uniquely yours. We design cakes, and the dessert setting around
              them, for the day you are hosting.
            </p>
            <Link className="text-link" to="/about">
              Discover CB
            </Link>
          </div>
        </div>
      </section>

      <section className="signature">
        <div className="wrap">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected celebrations"
            intro="A few cakes from recent weddings, photographed at the celebration."
          />
          <div className="spread">
            <Shot piece={gold} eager onOpen={() => open(signature, 0)} />
            <div className="spread-side">
              <p>
                White and gold, arranged as a wedding table: the centrepiece, the smaller cakes, and
                the setting they share.
              </p>
              <Shot piece={blue} onOpen={() => open(signature, 1)} />
            </div>
          </div>
          <Link className="text-link" to="/portfolio">
            View full portfolio
          </Link>
        </div>
      </section>

      <section className="catalogue">
        <div className="wrap">
          <SectionHeading
            eyebrow="Cakes"
            title="Centrepieces for life's sweetest occasions."
            intro="Each cake is designed for the celebration in front of us, not pulled from a standing menu."
          />
          <div className="cat-index">
            {categories.map((item) => (
              <Link key={item.href} className="cat-row" to={item.href}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>View</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="events-home">
        <div className="wrap events-home-grid">
          <div>
            <SectionHeading eyebrow="Events" title="More than a cake." />
            <p>
              We style the celebration around the cake: wedding tents and aisles, a dinner for two
              above the sea, gala tables and branded corporate setups. The cake is made to belong to
              the room, the table and the people gathered there.
            </p>
            <Link className="text-link" to="/events">
              Explore events
            </Link>
            <Shot piece={gala} onOpen={() => open(eventShots, 1)} />
          </div>
          <Shot piece={seaside} onOpen={() => open(eventShots, 0)} />
        </div>
      </section>

      <Process />

      <section className="about-band">
        <div className="wrap about-band-grid">
          <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
          <div>
            <SectionHeading
              eyebrow="CB Cakes & Events · Mombasa"
              title="Created with care. Designed for your celebration."
            />
            <p>
              We are a cake and events studio in Mombasa. The work is personal: your colours, your
              gathering, your day. We would rather talk it through than hand you a catalogue.
            </p>
            <Link className="text-link" to="/about">
              About the studio
            </Link>
          </div>
        </div>
      </section>

      <InstagramCTA />
      <InquiryCTA />
    </>
  );
}
