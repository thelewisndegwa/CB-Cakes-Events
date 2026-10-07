export const brand = {
  name: "CB Cakes & Events",
  shortName: "CB",
  place: "Mombasa, Kenya",
  city: "Mombasa",
  instagramHandle: "@cb_cakes_and_events__mombasa",
  instagramUrl: "https://www.instagram.com/cb_cakes_and_events__mombasa/",
  whatsappUrl: "https://wa.me/message/AINMBZCKM6UXD1?src=qr",
  whatsappNumber: "254729395751",
  phoneDisplay: "0729 395 751",
  phoneTel: "+254729395751",
  email: "Cherrybakers9@gmail.com",
} as const;

export function inquiryWhatsAppUrl(fields: {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  eventLocation: string;
  guests: string;
  lookingFor: string;
  details: string;
}) {
  const date = fields.eventDate
    ? fields.eventDate.split("-").reverse().join("/")
    : "";
  const lines = [
    "Hello CB Cakes & Events,",
    "",
    "I would like to inquire about a celebration.",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    date ? `Event date: ${date}` : null,
    `Event type: ${fields.eventType}`,
    fields.eventLocation ? `Event location: ${fields.eventLocation}` : null,
    fields.guests ? `Number of guests: ${fields.guests}` : null,
    "",
    "What I am looking for:",
    fields.lookingFor,
    fields.details ? "" : null,
    fields.details ? "Additional details:" : null,
    fields.details || null,
  ].filter((line): line is string => line !== null && line !== undefined);

  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const nav = [
  { to: "/cakes", label: "Cakes" },
  { to: "/events", label: "Events" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type WorkCategory = "weddings" | "birthdays" | "celebrations" | "corporate" | "events";

/** What the photograph is of: a cake, or an event we styled. */
export type WorkKind = "cake" | "event";

export type WorkPiece = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  kind: WorkKind;
  tags: WorkCategory[];
};

/**
 * Real photographs only. To add work, place a file in /public/images/cakes,
 * /public/images/events or /public/images/corporate and append an entry here.
 *
 * Sources:
 * wedding-burgundy             ← Cakes/WhatsApp Image 2026-10-07 at 11.16.50 AM.jpeg
 * wedding-blue-gold            ← Cakes/WhatsApp Image 2026-10-07 at 11.16.51 AM (2).jpeg
 * wedding-white-gold           ← cake photograph from the studio Instagram post saved in QR Codes
 * corporate-blue-quilted       ← Cakes/WhatsApp Image 2026-10-07 at 1.28.58 PM (2).jpeg
 * birthday-bluey               ← Cakes/WhatsApp Image 2026-10-07 at 1.54.16 PM.jpeg
 * birthday-safari              ← Cakes/WhatsApp Image 2026-10-07 at 1.54.17 PM.jpeg
 * wedding-garden-cake-table    ← celebration-events/WhatsApp Image 2026-10-07 at 1.28.58 PM.jpeg
 * wedding-aisle-tent           ← celebration-events/WhatsApp Image 2026-10-07 at 1.28.59 PM (2).jpeg
 * wedding-welcome-tents        ← celebration-events/WhatsApp Image 2026-10-07 at 1.29.01 PM.jpeg
 * traditional-wedding-backdrop ← celebration-events/WhatsApp Image 2026-10-07 at 1.28.59 PM (1).jpeg
 * wedding-mirror-sign          ← celebration-events/WhatsApp Image 2026-10-07 at 1.54.16 PMrhr.jpeg
 * garden-reception-copper      ← celebration-events/WhatsApp Image 2026-10-07 at 1.28.59 PM (3).jpeg
 * reception-orange-tent        ← celebration-events/WhatsApp Image 2026-10-07 at 1.54.16 PM.jpeg
 * birthday-room-petals         ← celebration-events/bedWhatsApp Image 2026-10-07 at 1.54.16 PM.jpeg
 * birthday-room-balloons       ← celebration-events/fwfwfWhatsApp Image 2026-10-07 at 1.54.16 PM.jpeg
 * dinner-seaside               ← celebration-events/WhatsApp Image 2026-10-07 at 1.28.58 PM (4).jpeg
 * dinner-seaside-tall          ← celebration-events/WhatsApp Image 2026-10-07 at 1.28.58 PM (3).jpeg
 * dinner-red-roses-detail      ← celebration-events/WhatsApp Image 2026-10-07 at 1.28.58 PM (1).jpeg
 * gala-dinner-podium           ← corporate-events/WhatsApp Image 2026-10-07 at 1.29.00 PM.jpeg
 *                                (1.29.01 PM (3).jpeg is a byte-identical duplicate)
 * gala-dinner-tables           ← corporate-events/WhatsApp Image 2026-10-07 at 1.29.01 PM (2).jpeg
 * gala-dinner-table            ← corporate-events/WhatsApp Image 2026-10-07 at 1.29.01 PM (1).jpeg
 * exhibition-stand             ← corporate-events/WhatsApp Image 2026-10-07 at 1.29.00 PM (1).jpeg
 * launch-stage                 ← corporate-events/WhatsApp Image 2026-10-07 at 1.29.00 PM (2).jpeg
 * balloon-arch-entrance        ← corporate-events/WhatsApp Image 2026-10-07 at 1.28.59 PM.jpeg
 * branch-seating               ← corporate-events/WhatsApp Image 2026-10-07 at 1.29.00 PM (3).jpeg
 * insurance-week-balloons      ← corporate-events/WhatsApp Image 2026-10-07 at 1.29.02 PM.jpeg
 * customer-service-week-arch   ← corporate-events/WhatsApp Image 2026-10-07 at 1.54.15 PM.jpeg
 * logo                         ← logo/cb-logo.jpeg
 */
export const pieces: WorkPiece[] = [
  // Cakes
  {
    id: "wedding-burgundy",
    src: "/images/cakes/wedding-burgundy.jpg",
    width: 591,
    height: 1280,
    alt: "Tall white wedding cake with burgundy ribbon and flowers, displayed with smaller cakes on a gold table at an outdoor celebration",
    label: "Wedding",
    kind: "cake",
    tags: ["weddings", "celebrations", "events"],
  },
  {
    id: "wedding-blue-gold",
    src: "/images/cakes/wedding-blue-gold.jpg",
    width: 738,
    height: 1600,
    alt: "Four-tier white and gold wedding cake with blue roses, set on a table of blue petals at an outdoor celebration",
    label: "Wedding",
    kind: "cake",
    tags: ["weddings", "celebrations", "events"],
  },
  {
    id: "wedding-white-gold",
    src: "/images/cakes/wedding-white-gold.jpg",
    width: 708,
    height: 808,
    alt: "White and gold wedding cake with a Mr and Mrs topper, styled with smaller cakes, crystal stands and a love sign",
    label: "Wedding",
    kind: "cake",
    tags: ["weddings", "celebrations", "events"],
  },
  {
    id: "corporate-blue-quilted",
    src: "/images/cakes/corporate-blue-quilted.jpg",
    width: 591,
    height: 1280,
    alt: "Three-tier white corporate cake with a quilted sky-blue middle tier, green piped trim and a company logo, served with blue sparkling drinks",
    label: "Corporate",
    kind: "cake",
    tags: ["corporate"],
  },
  {
    id: "birthday-bluey",
    src: "/images/cakes/birthday-bluey.jpg",
    width: 738,
    height: 1600,
    alt: "Pale blue birthday cake with ribbed buttercream, piped stars and pearls, decorated with cartoon dog characters and a Happy Birthday topper",
    label: "Birthday",
    kind: "cake",
    tags: ["birthdays", "celebrations"],
  },
  {
    id: "birthday-safari",
    src: "/images/cakes/birthday-safari.jpg",
    width: 738,
    height: 1600,
    alt: "White first-birthday cake with a green number one, safari animal characters, piped grass and a jungle topper with a wooden name sign",
    label: "Birthday",
    kind: "cake",
    tags: ["birthdays", "celebrations"],
  },

  // Weddings and celebrations
  {
    id: "wedding-garden-cake-table",
    src: "/images/events/wedding-garden-cake-table.jpg",
    width: 1280,
    height: 591,
    alt: "Garden wedding cake table with a monogrammed two-tier cake and two smaller cakes trimmed in African print, on crystal stands beside champagne flutes",
    label: "Wedding",
    kind: "event",
    tags: ["weddings", "celebrations", "events"],
  },
  {
    id: "wedding-aisle-tent",
    src: "/images/events/wedding-aisle-tent.jpg",
    width: 952,
    height: 1280,
    alt: "Wedding tent with a petal-strewn white aisle lined by carved pillars of red and orange roses, leading to a gold geometric backdrop",
    label: "Wedding",
    kind: "event",
    tags: ["weddings", "events"],
  },
  {
    id: "wedding-welcome-tents",
    src: "/images/events/wedding-welcome-tents.jpg",
    width: 1200,
    height: 1600,
    alt: "Wedding welcome sign in white, green and gold set on a lawn in front of white peaked tents, with a red carpet and flower-topped pillars",
    label: "Wedding",
    kind: "event",
    tags: ["weddings", "events"],
  },
  {
    id: "traditional-wedding-backdrop",
    src: "/images/events/traditional-wedding-backdrop.jpg",
    width: 720,
    height: 1280,
    alt: "Traditional wedding backdrop printed in terracotta wood grain, hung with woven baskets and a Maasai shield, with gourds and hay bales at its base",
    label: "Traditional wedding",
    kind: "event",
    tags: ["weddings", "celebrations", "events"],
  },
  {
    id: "wedding-mirror-sign",
    src: "/images/events/wedding-mirror-sign.jpg",
    width: 738,
    height: 1600,
    alt: "Arched mirror welcome sign for a wedding with white lettering and large monogram initials, dressed with peach and white roses at the corners",
    label: "Wedding",
    kind: "event",
    tags: ["weddings", "events"],
  },
  {
    id: "garden-reception-copper",
    src: "/images/events/garden-reception-copper.jpg",
    width: 1280,
    height: 591,
    alt: "Garden reception with round tables in copper linen, white chair covers tied with copper sashes and carved gourd centrepieces on African print",
    label: "Celebration",
    kind: "event",
    tags: ["celebrations", "events"],
  },
  {
    id: "reception-orange-tent",
    src: "/images/events/reception-orange-tent.jpg",
    width: 1600,
    height: 738,
    alt: "Tented reception with round tables in white lace and orange runners, gold chargers with orange napkins, rose centrepieces and white chairs tied with orange and brown sashes on a red carpet",
    label: "Celebration",
    kind: "event",
    tags: ["weddings", "celebrations", "events"],
  },
  {
    id: "birthday-room-petals",
    src: "/images/events/birthday-room-petals.jpg",
    width: 828,
    height: 1464,
    alt: "Birthday surprise in a bedroom: red rose petals in a heart on white bedding, candles, gold HBD balloons on the headboard and red balloons with ribbons hanging from the ceiling",
    label: "Birthday surprise",
    kind: "event",
    tags: ["birthdays", "celebrations", "events"],
  },
  {
    id: "birthday-room-balloons",
    src: "/images/events/birthday-room-balloons.jpg",
    width: 828,
    height: 1467,
    alt: "Wide view of a birthday room setup with red balloons overhead, gold HBD letters, rose petals across the bed and scattered over the floor",
    label: "Birthday surprise",
    kind: "event",
    tags: ["birthdays", "celebrations", "events"],
  },
  {
    id: "dinner-seaside",
    src: "/images/events/dinner-seaside.jpg",
    width: 1280,
    height: 720,
    alt: "Private dinner for two on a stone terrace above the Indian Ocean, with white linen, a red runner, gold chargers, candles and red roses",
    label: "Private dinner",
    kind: "event",
    tags: ["celebrations", "events"],
  },
  {
    id: "dinner-seaside-tall",
    src: "/images/events/dinner-seaside-tall.jpg",
    width: 720,
    height: 1280,
    alt: "Table for two set beside the sea under a palm tree, with white chairs dressed in red and tulle, candles in gold bottles and a love sign",
    label: "Private dinner",
    kind: "event",
    tags: ["celebrations", "events"],
  },
  {
    id: "dinner-red-roses-detail",
    src: "/images/events/dinner-red-roses-detail.jpg",
    width: 1280,
    height: 720,
    alt: "Close view of a romantic table setting: gold charger plates, folded white napkins with gold rings, red roses in gold bottles, candles and scattered petals",
    label: "Private dinner",
    kind: "event",
    tags: ["celebrations", "events"],
  },

  // Corporate
  {
    id: "gala-dinner-podium",
    src: "/images/corporate/gala-dinner-podium.jpg",
    width: 1600,
    height: 1200,
    alt: "Corporate gala dinner under a string-lit pavilion at dusk, seen from the stage past a wooden podium, with a red carpet running between navy and red round tables",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
  {
    id: "gala-dinner-tables",
    src: "/images/corporate/gala-dinner-tables.jpg",
    width: 1600,
    height: 1200,
    alt: "Rows of round dinner tables in navy and deep red linen with white chair covers and rose centrepieces, set under an open-sided pavilion",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
  {
    id: "gala-dinner-table",
    src: "/images/corporate/gala-dinner-table.jpg",
    width: 1600,
    height: 1200,
    alt: "Round gala table in red damask linen with black napkins, white plates, bottled water and a small rose centrepiece, surrounded by white covered chairs",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
  {
    id: "exhibition-stand",
    src: "/images/corporate/exhibition-stand.jpg",
    width: 1200,
    height: 1600,
    alt: "Branded exhibition stand in red and white with a red carpet, bar stools, a reception counter topped with flowers, potted palms and a display screen",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
  {
    id: "launch-stage",
    src: "/images/corporate/launch-stage.jpg",
    width: 1280,
    height: 642,
    alt: "Red-carpeted stage with a row of red upholstered chairs and side tables in front of a red, black and white draped backdrop and roll-up banners",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
  {
    id: "balloon-arch-entrance",
    src: "/images/corporate/balloon-arch-entrance.jpg",
    width: 720,
    height: 1280,
    alt: "Red, black and white balloon arch framing the glass entrance of a bank branch, with a red carpet and gold rope stanchions",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
  {
    id: "branch-seating",
    src: "/images/corporate/branch-seating.jpg",
    width: 720,
    height: 1280,
    alt: "Rows of white chair covers tied with burgundy and black sashes along a red carpet inside an office, set for a company function",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
  {
    id: "insurance-week-balloons",
    src: "/images/corporate/insurance-week-balloons.jpg",
    width: 1200,
    height: 1600,
    alt: "Organic balloon garland in red, black and white wrapped around a branded sign and a service desk inside a bank branch",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
  {
    id: "customer-service-week-arch",
    src: "/images/corporate/customer-service-week-arch.jpg",
    width: 740,
    height: 1600,
    alt: "Multicoloured balloon arch in red, pink, purple, orange and yellow framing a branded Customer Service Week photo frame on a strip of green turf inside a bank branch",
    label: "Corporate",
    kind: "event",
    tags: ["corporate", "events"],
  },
];

export const filters: { id: "all" | WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "birthdays", label: "Birthdays" },
  { id: "celebrations", label: "Celebrations" },
  { id: "corporate", label: "Corporate" },
  { id: "events", label: "Events" },
];

export function pieceById(id: string): WorkPiece {
  const piece = pieces.find((item) => item.id === id);
  if (!piece) {
    throw new Error(`Unknown photograph: ${id}`);
  }
  return piece;
}

export function piecesWhere(kind: WorkKind, tag?: WorkCategory): WorkPiece[] {
  return pieces.filter((piece) => piece.kind === kind && (!tag || piece.tags.includes(tag)));
}

export const logo = {
  src: "/images/logo/cb-logo.png",
  alt: "CB Cakes & Events logo",
  width: 720,
  height: 702,
} as const;
