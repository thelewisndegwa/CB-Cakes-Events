import { EventSection } from "../components/EventSection";
import { ImageGallery } from "../components/ImageGallery";
import { InquiryCTA } from "../components/InquiryCTA";
import { useLightbox } from "../components/Lightbox";
import { PageMeta } from "../components/PageMeta";
import { Process } from "../components/Process";
import { Shot } from "../components/Shot";
import { pieceById } from "../data/site";

const aisle = pieceById("wedding-aisle-tent");
const seaside = pieceById("dinner-seaside");
const gala = pieceById("gala-dinner-podium");

// First item in each list takes the double-height lead slot, so lead with a portrait photograph.
const weddings = [
  pieceById("wedding-welcome-tents"),
  pieceById("wedding-garden-cake-table"),
  pieceById("garden-reception-copper"),
  pieceById("wedding-mirror-sign"),
  pieceById("reception-orange-tent"),
  pieceById("traditional-wedding-backdrop"),
];

const dinners = [
  pieceById("dinner-seaside-tall"),
  pieceById("dinner-red-roses-detail"),
  pieceById("birthday-room-petals"),
  pieceById("birthday-room-balloons"),
];

const corporate = [
  pieceById("exhibition-stand"),
  pieceById("gala-dinner-tables"),
  pieceById("gala-dinner-table"),
  pieceById("balloon-arch-entrance"),
  pieceById("launch-stage"),
  pieceById("customer-service-week-arch"),
  pieceById("insurance-week-balloons"),
  pieceById("branch-seating"),
];

export function Events() {
  const { open } = useLightbox();

  return (
    <>
      <PageMeta
        title="Events | CB Cakes & Events"
        description="Wedding styling, private dinners and corporate event setups in Mombasa by CB Cakes & Events: tents, aisles, backdrops, table settings, gala dinners and branded activations."
      />
      <header className="page-header wrap">
        <p className="eyebrow">Events · Mombasa</p>
        <h1>The cake, in the room.</h1>
        <p>
          We style the room the celebration happens in: the tent, the aisle, the tables and the
          backdrop, as well as the cake at the centre. Weddings, private dinners and corporate
          functions, planned with you and set up on the day.
        </p>
      </header>

      <EventSection
        title="Weddings, from the aisle to the cake table."
        media={<Shot piece={aisle} eager onOpen={() => open([aisle, ...weddings], 0)} />}
      >
        <p>
          Tents, floral aisles, welcome signs and backdrops, and a table arranged around the cake.
          Many weddings in Mombasa happen in the open air, so we design for that light and that
          gathering, whether the day is white and gold or a traditional ceremony in print and woven
          baskets.
        </p>
      </EventSection>
      <section className="event-gallery" aria-label="Wedding setups">
        <ImageGallery pieces={weddings} flow />
      </section>

      <EventSection
        flip
        title="Private dinners and surprises."
        media={<Shot piece={seaside} onOpen={() => open([seaside, ...dinners], 0)} />}
      >
        <p>
          A table for two on a terrace above the sea, or a room transformed before someone walks in.
          Proposals, anniversaries and birthdays set with linen, candles, roses, petals and balloons:
          the small details that make an evening feel arranged for one person only.
        </p>
      </EventSection>
      <section className="event-gallery" aria-label="Private dinner and surprise setups">
        <ImageGallery pieces={dinners} flow />
      </section>

      <EventSection
        title="Corporate events."
        media={<Shot piece={gala} onOpen={() => open([gala, ...corporate], 0)} />}
      >
        <p>
          Gala dinners, launches, exhibition stands and branch activations. We work in the company&apos;s
          colours across the whole setup: tables and chair dressing, stage and backdrop, balloon
          installations, red carpets and the branded cake to cut.
        </p>
      </EventSection>
      <section className="event-gallery" aria-label="Corporate event setups">
        <ImageGallery pieces={corporate} flow />
      </section>

      <section className="wrap event-note">
        <h2>What to tell us</h2>
        <p>
          The date, the venue or home, how many guests you expect, and whether you already know the
          colours of the day or the brand. From there we can talk about the cake, the setting and how
          it should all be presented. We will not guess at services the day does not need.
        </p>
      </section>

      <Process />
      <InquiryCTA />
    </>
  );
}
