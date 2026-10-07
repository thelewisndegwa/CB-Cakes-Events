import { useState, type FormEvent } from "react";
import { PageMeta } from "../components/PageMeta";
import { brand, inquiryWhatsAppUrl } from "../data/site";

type Status = "idle" | "sent" | "blocked";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [whatsappHref, setWhatsappHref] = useState<string>(brand.whatsappUrl);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const href = inquiryWhatsAppUrl({
      name: value("name"),
      email: value("email"),
      phone: value("phone"),
      eventDate: value("event-date"),
      eventType: value("event-type"),
      eventLocation: value("event-location"),
      guests: value("guests"),
      lookingFor: value("looking-for"),
      details: value("details"),
    });

    setWhatsappHref(href);
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    if (!opened) {
      setStatus("blocked");
      return;
    }
    setStatus("sent");
    form.reset();
  }

  return (
    <>
      <PageMeta
        title="Inquire | CB Cakes & Events"
        description="Tell CB Cakes & Events about your wedding, birthday or celebration in Mombasa. Inquire by form, WhatsApp, phone or email."
      />
      <header className="page-header wrap">
        <p className="eyebrow">Inquire · {brand.place}</p>
        <h1>Tell us about your celebration.</h1>
        <p>A few details are enough to begin. Sending the form opens WhatsApp with your inquiry, ready for you to send.</p>
      </header>

      <div className="wrap contact-layout">
        <aside className="contact-aside">
          <a className="contact-channel" href={brand.whatsappUrl} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
            <strong>{brand.phoneDisplay}</strong>
          </a>
          <a className="contact-channel" href={`tel:${brand.phoneTel}`}>
            <span>Phone</span>
            <strong>{brand.phoneDisplay}</strong>
          </a>
          <a className="contact-channel" href={`mailto:${brand.email}`}>
            <span>Email</span>
            <strong>{brand.email}</strong>
          </a>
          <a className="contact-channel" href={brand.instagramUrl} target="_blank" rel="noreferrer">
            <span>Instagram</span>
            <strong>{brand.instagramHandle}</strong>
          </a>
        </aside>

        {status === "sent" ? (
          <div className="form-success" role="status">
            <h2>Your inquiry is in WhatsApp.</h2>
            <p>Press send in WhatsApp to reach CB Cakes &amp; Events. If the chat did not open, use the button below.</p>
            <a className="btn" href={whatsappHref} target="_blank" rel="noreferrer">
              Open WhatsApp
            </a>
          </div>
        ) : (
          <form
            className="inquiry-form"
            name="inquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="inquiry" />
            <p className="hp">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>

            <div className="field-grid">
              <label className="field">
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="field">
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label className="field">
                <span>Event date</span>
                <input name="event-date" type="date" />
              </label>
              <label className="field">
                <span>Event type</span>
                <select name="event-type" defaultValue="" required>
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Engagement</option>
                  <option>Anniversary</option>
                  <option>Corporate event</option>
                  <option>Other celebration</option>
                </select>
              </label>
              <label className="field">
                <span>Event location</span>
                <input name="event-location" type="text" autoComplete="address-level2" />
              </label>
              <label className="field">
                <span>Number of guests</span>
                <input name="guests" type="number" min={1} inputMode="numeric" />
              </label>
            </div>

            <label className="field">
              <span>What are you looking for?</span>
              <textarea name="looking-for" rows={4} required />
            </label>
            <label className="field">
              <span>Additional details</span>
              <textarea name="details" rows={4} />
            </label>

            {status === "blocked" ? (
              <p className="form-error" role="alert">
                WhatsApp was blocked by the browser.{" "}
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  Open the inquiry in WhatsApp
                </a>
                .
              </p>
            ) : null}

            <button className="btn" type="submit">
              Send on WhatsApp
            </button>
          </form>
        )}
      </div>
    </>
  );
}
