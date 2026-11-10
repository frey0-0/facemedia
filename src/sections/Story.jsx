import { STORY } from "../data/content";
import Reveal from "../components/Reveal";
import founder from "../assets/founder.png";
import wave from "../assets/aryan-wave.jpg";

export default function Story() {
  return (
    <section id="story" className="section">
      <div className="wrap story">
        <div className="story__side">
          <Reveal>
            <p className="eyebrow">My story</p>
            <h2>From a bored kid in class 9 to doing this full-time.</h2>
          </Reveal>
          <Reveal className="story__photo" delay={100}>
            <img src={founder} alt="Aryan Bhalla speaking on stage" width="339" height="395" loading="lazy" />
            <figcaption><strong>Aryan Bhalla</strong> Founder, FaceMedia · IIT Roorkee</figcaption>
          </Reveal>
        </div>

        <ol className="timeline">
          {STORY.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 50}>
              <span className="timeline__when">{s.when}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="wrap">
        <figure className="quote">
          <blockquote className="quote__text">
            <p>Content creation is a long and lonely journey. There was no one to help me. I’ll make sure no one else has to feel that way.</p>
            <cite>Aryan Bhalla</cite>
          </blockquote>
          <img className="quote__photo" src={wave} alt="Aryan Bhalla smiling and waving at his desk" width="1032" height="1100" loading="lazy" />
        </figure>
      </Reveal>
    </section>
  );
}
