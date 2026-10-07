import { Link } from "react-router-dom";
import { CakeCategory } from "../components/CakeCategory";
import { ImageGallery } from "../components/ImageGallery";
import { InquiryCTA } from "../components/InquiryCTA";
import { PageMeta } from "../components/PageMeta";
import { pieces } from "../data/site";

export function Cakes() {
  return (
    <>
      <PageMeta
        title="Cakes | CB Cakes & Events"
        description="Wedding cakes, birthday cakes and custom celebration cakes by CB Cakes & Events in Mombasa."
      />
      <header className="page-header wrap">
        <p className="eyebrow">Cakes · Mombasa</p>
        <h1>Centrepieces, made for the day.</h1>
        <p>
          Weddings, birthdays and the celebrations that do not fit a category. Every cake begins with
          a conversation.
        </p>
      </header>

      <CakeCategory id="weddings" kicker="Wedding cakes" title="For the centre of the celebration.">
        <p>
          Tall cakes, a family of smaller cakes, and finishes chosen for the wedding itself. The
          photographs below are recent wedding work, shown at the event.
        </p>
        <ImageGallery pieces={pieces} />
      </CakeCategory>

      <CakeCategory id="birthdays" kicker="Birthday cakes" title="Made around one person.">
        <p>
          Birthday cakes are designed to order: the age, the colours, the feeling of the party. There
          is no standing design to pick from a grid. Tell us who it is for.
        </p>
        <Link className="text-link" to="/contact">
          Inquire about a birthday
        </Link>
      </CakeCategory>

      <CakeCategory
        id="celebrations"
        kicker="Custom celebration cakes"
        title="When the day has its own story."
      >
        <p>
          Engagements, anniversaries, family gatherings and milestones. We take the colours and the
          setting of the celebration and design a cake that belongs there — the same care you can see
          in the wedding work above.
        </p>
      </CakeCategory>

      <CakeCategory id="custom" kicker="Special occasions" title="If it matters, tell us.">
        <p>
          If the occasion is specific, the cake should be too. Share what you are marking and we will
          talk through a design that suits it.
        </p>
        <div className="inline-ask">
          <p>Have something specific in mind?</p>
          <Link className="btn" to="/contact">
            Start an inquiry
          </Link>
        </div>
      </CakeCategory>

      <InquiryCTA />
    </>
  );
}
