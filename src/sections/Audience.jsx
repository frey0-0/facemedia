import { AUDIENCE } from "../data/content";
import Reveal from "../components/Reveal";
import storyteller from "../assets/storyteller-logo.png";

export default function Audience() {
  return (
    <section id="who" className="section">
      <div className="wrap">
        <Reveal className="section__head audience__head">
          <div>
            <p className="eyebrow">Who I help</p>
            <h2>If you have a story, I want to hear it.</h2>
          </div>
          <img src={storyteller} alt="" width="160" height="133" loading="lazy" className="audience__mark" />
        </Reveal>
        <ul className="audience">
          {AUDIENCE.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 80}>
              <span className="audience__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
