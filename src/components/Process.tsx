const steps = [
  {
    n: "01",
    title: "Tell us about the event",
    text: "The date, the place, how many guests, and what the day needs to feel like.",
  },
  {
    n: "02",
    title: "Plan the celebration",
    text: "We work out the styling, the flow of the day, and whether a cake from us belongs in it.",
  },
  {
    n: "03",
    title: "Set the day",
    text: "Tents, tables, florals, signage and backdrops — and the cake, when it is part of the brief.",
  },
  {
    n: "04",
    title: "Celebrate",
    text: "You host. The room, the table and the details are already in place.",
  },
];

export function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <p className="eyebrow">The CB experience</p>
        <ol>
          {steps.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
