import { PROCESS } from "../data/content";
import Reveal from "../components/Reveal";

export default function Process() {
  return (
    <section id="process" className="section section--dark">
      <div className="wrap">
        <Reveal className="section__head">
          <p className="eyebrow eyebrow--light">How it works</p>
          <h2>Simple. Four steps.</h2>
        </Reveal>
        <Reveal as="ol" className="steps">
          {PROCESS.map((s, i) => (
            <li key={s.title} style={{ "--i": i }}>
              <span className="steps__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
