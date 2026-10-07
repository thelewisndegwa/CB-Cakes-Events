const steps = [
  {
    n: "01",
    title: "Tell us about your celebration",
    text: "The date, the place, who it is for, and what you already have in mind.",
  },
  {
    n: "02",
    title: "Design the experience",
    text: "We shape the cake, and the way it sits in the day, around your celebration.",
  },
  {
    n: "03",
    title: "We create your centrepiece",
    text: "The cake is made with care, for the gathering it belongs to.",
  },
  {
    n: "04",
    title: "Celebrate",
    text: "A centrepiece, ready for the moment you have been planning.",
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
