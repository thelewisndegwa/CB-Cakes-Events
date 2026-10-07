export const brand = {
  name: "CB Cakes & Events",
  shortName: "CB",
  place: "Mombasa, Kenya",
  city: "Mombasa",
  instagramHandle: "@cherry_bakers_mombasa",
  instagramUrl: "https://www.instagram.com/cherry_bakers_mombasa/",
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

export type WorkCategory = "weddings" | "birthdays" | "celebrations" | "events";

export type WorkPiece = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  tags: WorkCategory[];
};

/**
 * Real photographs only. To add work, place a file in /public/images/cakes
 * (or /public/images/events) and append an entry here.
 *
 * Sources:
 * wedding-burgundy   ← Cakes/WhatsApp Image 2026-10-07 at 11.16.50 AM.jpeg
 * wedding-blue-gold  ← Cakes/WhatsApp Image 2026-10-07 at 11.16.51 AM (2).jpeg
 * wedding-white-gold ← cake photograph from the studio Instagram post saved in QR Codes
 * logo               ← logo/cb-logo.jpeg
 */
export const pieces: WorkPiece[] = [
  {
    id: "wedding-burgundy",
    src: "/images/cakes/wedding-burgundy.jpg",
    width: 591,
    height: 1280,
    alt: "Tall white wedding cake with burgundy ribbon and flowers, displayed with smaller cakes on a gold table at an outdoor celebration",
    label: "Wedding",
    tags: ["weddings", "celebrations", "events"],
  },
  {
    id: "wedding-blue-gold",
    src: "/images/cakes/wedding-blue-gold.jpg",
    width: 738,
    height: 1600,
    alt: "Four-tier white and gold wedding cake with blue roses, set on a table of blue petals at an outdoor celebration",
    label: "Wedding",
    tags: ["weddings", "celebrations", "events"],
  },
  {
    id: "wedding-white-gold",
    src: "/images/cakes/wedding-white-gold.jpg",
    width: 708,
    height: 808,
    alt: "White and gold wedding cake with a Mr and Mrs topper, styled with smaller cakes, crystal stands and a love sign",
    label: "Wedding",
    tags: ["weddings", "celebrations", "events"],
  },
];

export const filters: { id: "all" | WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "birthdays", label: "Birthdays" },
  { id: "celebrations", label: "Celebrations" },
  { id: "events", label: "Events" },
];

export function pieceById(id: string): WorkPiece {
  const piece = pieces.find((item) => item.id === id);
  if (!piece) {
    throw new Error(`Unknown photograph: ${id}`);
  }
  return piece;
}

export const logo = {
  src: "/images/logo/cb-logo.png",
  alt: "CB Cakes & Events logo",
  width: 720,
  height: 702,
} as const;
