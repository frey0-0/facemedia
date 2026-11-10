import { STATS } from "../data/content";

function Row({ hidden }) {
  return (
    <ul className="ticker__row" aria-hidden={hidden || undefined}>
      {STATS.map((s, i) => (
        <li key={i}>
          {s.l === "making videos since" ? <>{s.l}&nbsp;<strong>{s.n}</strong></> : <><strong>{s.n}</strong> {s.l}</>}
          <span className="ticker__dot" />
        </li>
      ))}
    </ul>
  );
}

export default function Stats() {
  return (
    <section className="ticker" aria-label="Aryan Bhalla in numbers">
      <div className="ticker__track">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
