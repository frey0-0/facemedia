import { FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { NAV, SITE } from "../config/site";
import { SERVICES } from "../data/services";
import logo from "../assets/logo.png";

const SOCIALS = [
  { href: SITE.social.instagram, label: "Aryan Bhalla on Instagram", Icon: FaInstagram },
  { href: SITE.social.youtube, label: "Aryan Bhalla on YouTube", Icon: FaYoutube },
  { href: SITE.social.linkedin, label: "Aryan Bhalla on LinkedIn", Icon: FaLinkedinIn },
  { href: SITE.social.x, label: "Aryan Bhalla on X", Icon: FaXTwitter },
];

export default function Footer({ onEnquire }) {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="FaceMedia" width="97" height="50" loading="lazy" />
          <p>Storytelling-first content by Aryan Bhalla. Editing, scripts, strategy and shoots for brands and creators.</p>
          <a href={`mailto:${SITE.email}`} className="footer__email">{SITE.email}</a>
        </div>
        <nav aria-label="Footer">
          <h4>Explore</h4>
          <ul>{NAV.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.id}><a href="#contact" onClick={() => onEnquire(s.title)}>{s.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Follow</h4>
          <a href={SITE.social.agencyInstagram} target="_blank" rel="noopener noreferrer" className="footer__agency">
            <span className="footer__agency-icon"><FaInstagram aria-hidden="true" /></span>
            <span><strong>{SITE.handles.agencyInstagram}</strong><small>FaceMedia</small></span>
          </a>
          <p className="footer__sub">Aryan Bhalla</p>
          <ul className="footer__social">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon aria-hidden="true" /></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap footer__legal">© {new Date().getFullYear()} FaceMedia. All rights reserved.</div>
    </footer>
  );
}
