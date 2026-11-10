import { useCallback, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Brands from "./sections/Brands";
import Storytelling from "./sections/Storytelling";
import YouTube from "./sections/YouTube";
import Story from "./sections/Story";
import Services from "./sections/Services";
import Faq from "./sections/Faq";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  // Lets "Ask about this" links preselect a service in the contact form.
  const [preset, setPreset] = useState(null);
  const onEnquire = useCallback((name) => setPreset({ name, at: Date.now() }), []);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Brands />
        <Storytelling />
        <YouTube />
        <Services onEnquire={onEnquire} />
        <Story />
        <Faq />
        <CTA />
        <Contact presetService={preset} />
      </main>
      <Footer onEnquire={onEnquire} />
    </>
  );
}
