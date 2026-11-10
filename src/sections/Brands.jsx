import { BRANDS } from "../data/portfolio";
import Reveal from "../components/Reveal";

function Row({ hidden }) {
  return (
    <ul className="logos__row" aria-hidden={hidden || undefined}>
      {BRANDS.map((b) => (
        <li key={b.name} className={`logo-tile ${b.shape ? `logo-tile--${b.shape}` : ""}`} style={b.bg ? { background: b.bg, borderColor: b.bg } : undefined}>
          <img src={b.logo} alt={hidden ? "" : b.name} loading="lazy" decoding="async" />
          {b.label && <span>{b.label}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <Reveal className="wrap brands__head">
        <h2 id="brands-title"><em>Brands</em> I’ve made content with</h2>
      </Reveal>
      <div className="logos">
        <div className="logos__track">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
