import { useEffect, useRef, useState } from "react";
import { REELS } from "../data/portfolio";
import { asset } from "../config/site";
import Reveal from "../components/Reveal";
import { Sound } from "../components/Icons";
import { prefersReducedMotion } from "../hooks/useInView";

function Reel({ r, soundOn, onSound }) {
  const ref = useRef(null);

  // Plays (muted) while on screen, pauses when scrolled away.
  useEffect(() => {
    const v = ref.current;
    if (!v || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = !soundOn;
    if (soundOn) v.play().catch(() => {});
  }, [soundOn]);

  return (
    <figure className="reel">
      <div className="reel__media">
        <video
          ref={ref}
          src={asset(r.file)}
          poster={asset(r.cover)}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={r.title}
        />
        <span className="reel__views"><strong>{r.views}</strong> views</span>
        <button
          className="reel__sound"
          onClick={onSound}
          aria-label={soundOn ? `Mute ${r.title}` : `Play ${r.title} with sound`}
          aria-pressed={soundOn}
        >
          <Sound on={soundOn} />
        </button>
      </div>
      <figcaption>{r.title}</figcaption>
    </figure>
  );
}

export default function Storytelling() {
  const [sound, setSound] = useState(null);

  return (
    <section id="storytelling" className="section section--dark storytelling">
      <div className="wrap">
        <div className="storytelling__head">
          <Reveal>
            <p className="eyebrow eyebrow--light">What makes the difference</p>
            <h2>Editing isn’t about flashy effects.</h2>
          </Reveal>
          <Reveal className="storytelling__copy" delay={100}>
            <p>
              Anyone can add transitions. Honestly, even AI can do that now. What makes people watch till the end is the story: understanding the content, getting the pacing right, and cutting it so that you <em>feel</em> it.
            </p>
            <p>
              These edits might look simple. That’s the point. It’s not about what you see, it’s about how the story makes you feel. That’s what I do on my videos, and it’s what I’ll do on yours.
            </p>
          </Reveal>
        </div>

        <Reveal className="reels" delay={150}>
          {REELS.map((r, i) => (
            <Reel key={r.file} r={r} soundOn={sound === i} onSound={() => setSound((s) => (s === i ? null : i))} />
          ))}
        </Reveal>
        <p className="reels__hint">Tap the speaker to hear one.</p>
      </div>
    </section>
  );
}
