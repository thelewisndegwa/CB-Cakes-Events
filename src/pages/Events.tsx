import { EventSection } from "../components/EventSection";
import { InquiryCTA } from "../components/InquiryCTA";
import { useLightbox } from "../components/Lightbox";
import { PageMeta } from "../components/PageMeta";
import { Process } from "../components/Process";
import { Shot } from "../components/Shot";
import { pieceById } from "../data/site";

const gold = pieceById("wedding-white-gold");
const blue = pieceById("wedding-blue-gold");
const burgundy = pieceById("wedding-burgundy");

export function Events() {
  const { open } = useLightbox();
  const all = [gold, blue, burgundy];

  return (
    <>
      <PageMeta
        title="Events | CB Cakes & Events"
        description="Cake and dessert presentations for weddings and celebrations in Mombasa by CB Cakes & Events."
      />
      <header className="page-header wrap">
        <p className="eyebrow">Events · Mombasa</p>
        <h1>The cake, in the room.</h1>
        <p>
          We create beautiful dessert experiences that complement the atmosphere, style and story of
          your celebration. Tell us about your event and we&apos;ll discuss the right cake and dessert
          experience for it.
        </p>
      </header>

      <EventSection
        title="A table arranged around the cake."
        media={<Shot piece={gold} onOpen={() => open(all, 0)} />}
      >
        <p>
          For weddings, the centrepiece is often joined by smaller cakes, so the table reads as one
          setting. Colour, height and finish are decided together.
        </p>
      </EventSection>

      <EventSection
        flip
        title="Outdoor celebrations."
        media={<Shot piece={blue} onOpen={() => open(all, 1)} />}
      >
        <p>
          Many celebrations in Mombasa happen in the open air, under a tent, with the cake as the
          point the table turns around. We design for that light and that gathering.
        </p>
      </EventSection>

      <EventSection
        title="A centrepiece, with company."
        media={<Shot piece={burgundy} onOpen={() => open(all, 2)} />}
      >
        <p>
          Larger weddings often need more than one cake on the table. The tall cake holds the design;
          the smaller ones carry it through the setting.
        </p>
      </EventSection>

      <section className="wrap event-note">
        <h2>What to tell us</h2>
        <p>
          The date, the venue or home, how many guests you expect, and whether you already know the
          colours of the day. From there we can talk about the cake and how it should be presented.
          We will not guess at services the day does not need.
        </p>
      </section>

      <Process />
      <InquiryCTA />
    </>
  );
}
