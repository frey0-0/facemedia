import { SERVICES, STEPS } from "../data/services";
import Reveal from "../components/Reveal";
import { Arrow } from "../components/Icons";

export default function Services({ onEnquire }) {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <Reveal className="section__head">
          <p className="eyebrow">Services</p>
          <h2>Anything to do with content.</h2>
          <p>
            For brands, creators, or a kid with a phone and an idea. I was that kid.
            Pick one thing, or hand over the whole thing.
          </p>
        </Reveal>

        <div className="services">
          {SERVICES.map((s, i) => (
            <Reveal as="article" key={s.id} delay={i * 70} className="service">
              <span className="service__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href="#contact" className="link-arrow" onClick={() => onEnquire(s.title)}>
                Ask about this <Arrow />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="steps-row">
          <span className="steps-row__label">How it works</span>
          <ol>
            {STEPS.map((s, i) => (
              <li key={s}><b>{i + 1}</b>{s}</li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
