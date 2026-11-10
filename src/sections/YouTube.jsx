import { useState } from "react";
import { YOUTUBE } from "../data/portfolio";
import { SITE } from "../config/site";
import Reveal from "../components/Reveal";
import YouTubeThumb from "../components/YouTubeThumb";
import { Arrow, Play } from "../components/Icons";

function Video({ v }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="yt">
      <div className="yt__media">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&start=${v.start || 0}`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="yt__play" onClick={() => setPlaying(true)} aria-label={`Play video: ${v.title}`}>
            <YouTubeThumb id={v.id} />
            <span className="yt__icon"><Play /></span>
          </button>
        )}
      </div>
      <figcaption>{v.title}</figcaption>
    </figure>
  );
}

export default function YouTube() {
  return (
    <section id="youtube" className="section section--white">
      <div className="wrap">
        <Reveal className="section__head yt__head">
          <div>
            <p className="eyebrow">On YouTube</p>
            <h2>Long videos, where the story gets room.</h2>
            <p>A few of my favourites. Watch one and notice the pacing, not the effects.</p>
          </div>
          <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="link-arrow">More on my channel <Arrow /></a>
        </Reveal>
        <div className="yts">
          {YOUTUBE.map((v, i) => (
            <Reveal key={v.id} delay={(i % 2) * 90}>
              <Video v={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
