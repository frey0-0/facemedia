import { SERVICES } from "../data/services";
import Reveal from "../components/Reveal";
import { Arrow } from "../components/Icons";

export default function Services({ onEnquire }) {
  return (
    <section id="services" className="section section--white">
      <div className="wrap">
        <Reveal className="section__head">
          <p className="eyebrow">Services</p>
          <h2>Anything to do with content.</h2>
          <p>Pick one thing, or hand over the whole thing. We’ll handle it.</p>
        </Reveal>
        <div className="services">
          {SERVICES.map((s, i) => (
            <Reveal as="article" key={s.id} delay={(i % 2) * 90} className="service">
              <span className="service__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul className="service__list">
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <a href="#contact" className="link-arrow" onClick={() => onEnquire(s.title)}>
                Ask about {s.title.toLowerCase()} <Arrow />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
