import { FAQS } from "../data/content";
import Reveal from "../components/Reveal";

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="wrap faq">
        <Reveal className="faq__head">
          <p className="eyebrow">FAQ</p>
          <h2>Got questions?</h2>
        </Reveal>
        <Reveal className="faq__list">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
