import { useEffect, useState } from "react";
import { SITE } from "../config/site";
import { SERVICES } from "../data/services";
import Reveal from "../components/Reveal";
import { Arrow } from "../components/Icons";

const OPTIONS = [...SERVICES.map((s) => s.title), "The whole thing", "Not sure yet"];
const EMPTY = { name: "", email: "", phone: "", company: "", service: "", details: "", website: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email, like name@gmail.com.";
  const digits = v.phone.replace(/\D/g, "");
  if (v.phone.trim() && (digits.length < 8 || digits.length > 15 || /[^\d\s+()-]/.test(v.phone))) e.phone = "Enter a valid phone number, like +91 98765 43210.";
  if (!v.service) e.service = "Pick one.";
  if (v.details.trim().length < 10) e.details = "Tell me a little more (10+ characters).";
  return e;
}

export default function Contact({ presetService }) {
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mailto | error

  useEffect(() => {
    if (presetService) setV((s) => ({ ...s, service: presetService.name }));
  }, [presetService]);

  // After sending, the form is replaced by a shorter message; keep it on screen.
  useEffect(() => {
    if (status === "sent" || status === "mailto") {
      document.querySelector(".contact__card")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));

  async function onSubmit(ev) {
    ev.preventDefault();
    if (v.website) return; // spam trap
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const subject = `FaceMedia: ${v.service} (${v.name})`;
    const body = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone.trim() || "-"}\nBrand / channel: ${v.company || "-"}\nLooking for: ${v.service}\n\n${v.details}`;

    if (SITE.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: SITE.formKey,
            subject,
            from_name: "FaceMedia website",
            replyto: v.email,
            Name: v.name,
            Email: v.email,
            Phone: v.phone.trim() || "-",
            "Brand / channel": v.company || "-",
            "Looking for": v.service,
            Message: v.details,
            botcheck: "",
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.success === false) throw new Error(data.message || String(res.status));
        setStatus("sent");
        setV(EMPTY);
      } catch {
        setStatus("error");
      }
    } else {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
    }
  }

  const field = (id, label, input) => (
    <div className={`field ${errors[id] ? "has-error" : ""}`}>
      <label htmlFor={`f-${id}`}>{label}</label>
      {input}
      {errors[id] && <span className="field__err" id={`e-${id}`} role="alert">{errors[id]}</span>}
    </div>
  );
  const aria = (id) => ({ id: `f-${id}`, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `e-${id}` : undefined });

  return (
    <section id="contact" className="section">
      <div className="wrap contact">
        <Reveal className="contact__info">
          <p className="eyebrow">Contact</p>
          <h2>Tell me your story.</h2>
          <p>What are you making? Drop a few lines and I’ll get back to you, usually within a day or two.</p>
          <ul className="contact__list">
            <li><span>Email</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><span>FaceMedia on Instagram</span><a href={SITE.social.agencyInstagram} target="_blank" rel="noopener noreferrer">{SITE.handles.agencyInstagram}</a></li>
            <li><span>My Instagram</span><a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">{SITE.handles.instagram}</a></li>
            <li><span>My YouTube</span><a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer">{SITE.handles.youtube}</a></li>
          </ul>        </Reveal>

        <Reveal className="contact__card" delay={100}>
          {status === "sent" || status === "mailto" ? (
            <div className="notice notice--ok" role="status">
              <h3>{status === "sent" ? "Got it. Thanks!" : "Almost done!"}</h3>
              <p>
                {status === "sent"
                  ? "Your message is in my inbox. I’ll get back to you soon, usually within a day or two."
                  : <>Your email app should have opened with your message ready. Just hit send. If it didn’t open, email me at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</>}
              </p>
              <button className="btn btn--ghost btn--sm" onClick={() => setStatus("idle")}>Back to the form</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="form__row">
                {field("name", "Your name", <input {...aria("name")} value={v.name} onChange={set("name")} autoComplete="name" />)}
                {field("email", "Email", <input {...aria("email")} type="email" value={v.email} onChange={set("email")} autoComplete="email" />)}
              </div>
              <div className="form__row">
                {field("phone", "Phone (optional)", <input {...aria("phone")} type="tel" inputMode="tel" value={v.phone} onChange={set("phone")} autoComplete="tel" placeholder="+91" />)}
                {field("company", "Brand or channel (optional)", <input {...aria("company")} value={v.company} onChange={set("company")} autoComplete="organization" />)}
              </div>
              {field("service", "What do you need?",
                <select {...aria("service")} value={v.service} onChange={set("service")}>
                  <option value="">Pick one</option>
                  {OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>)}
              {field("details", "Tell me about it", <textarea {...aria("details")} rows="5" value={v.details} onChange={set("details")} placeholder="What are you making, who is it for, and where are you stuck?" />)}
              <input className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" name="website" value={v.website} onChange={set("website")} />
              <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send"} <Arrow />
              </button>
              {status === "error" && <p className="notice notice--err" role="alert">That didn’t go through. Please try again, or email me at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
