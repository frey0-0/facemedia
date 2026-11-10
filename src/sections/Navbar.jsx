import { useEffect, useState } from "react";
import { NAV } from "../config/site";
import logo from "../assets/logo.png";

// Sections without their own menu item, and the menu item they belong to.
const ALIAS = { youtube: "storytelling", faq: "contact" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(ALIAS[e.target.id] || e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [...NAV.map((n) => n.id), ...Object.keys(ALIAS)].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="wrap nav__bar">
        <a href="#home" className="nav__logo" aria-label="FaceMedia home" onClick={() => setOpen(false)}>
          <img src={logo} alt="FaceMedia" width="97" height="50" />
        </a>
        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary nav__cta-mobile" onClick={() => setOpen(false)}>Let’s talk</a>
        </nav>
        <a href="#contact" className="btn btn--primary btn--sm nav__cta">Let’s talk</a>
        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}
