import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../hooks/useInView";
import { Arrow } from "../components/Icons";
import photo from "../assets/aryan-hero.jpg";

const fmt = (s) => `00:${String(Math.floor(s / 60) % 60).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function Hero() {
  const [t, setT] = useState(17);
  const reduced = useRef(prefersReducedMotion());

  useEffect(() => {
    if (reduced.current) return;
    const id = setInterval(() => setT((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">FaceMedia · by Aryan Bhalla</p>
          <h1 className="hero__title">
            <span><i>I’m a</i></span>
            <span><i><em>storyteller.</em></i></span>
          </h1>
          <p className="hero__tagline">Now it’s your turn to <strong>Face the Media.</strong></p>
          <p className="hero__lead">
            <span>I’ve been making videos since class 9.</span>
            <span>500+ videos and 25M+ views later,</span>
            <span>I want to help you tell <strong>your</strong> story.</span>
            <span>Editing, scripts, strategy, even the shoot. Whatever you need.</span>
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary">Let’s tell your story <Arrow /></a>
            <a href="#storytelling" className="btn btn--ghost">See my work</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="viewfinder">
            <img src={photo} alt="Aryan Bhalla, founder of FaceMedia, at his desk" width="1800" height="1013" />
            <span className="vf vf--tl" /><span className="vf vf--tr" /><span className="vf vf--bl" /><span className="vf vf--br" />
            <div className="viewfinder__rec" aria-hidden="true"><b /> REC</div>
            <div className="viewfinder__tc" aria-hidden="true">{fmt(t)}</div>
          </div>
          <div className="hero__badge hero__badge--a">
            <strong>10M+</strong>
            <span>views on YouTube</span>
          </div>
          <div className="hero__badge hero__badge--b">
            <strong>15M+</strong>
            <span>views on Instagram</span>
          </div>
          <div className="hero__badge hero__badge--c">
            <strong>500+</strong>
            <span>videos created</span>
          </div>
        </div>
      </div>
    </section>
  );
}
