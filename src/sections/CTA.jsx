import Reveal from "../components/Reveal";
import { Arrow } from "../components/Icons";

export default function CTA() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <Reveal className="wrap cta__inner">
        <h2 id="cta-title">
          <span>I’m a storyteller.</span>
          <span>Now it’s your turn to <em>Face the Media.</em></span>
        </h2>
        <div>
          <p>Brand, creator, or just getting started. Tell me what you want to make.</p>
          <a href="#contact" className="btn btn--dark">Let’s talk <Arrow /></a>
        </div>
      </Reveal>
    </section>
  );
}
