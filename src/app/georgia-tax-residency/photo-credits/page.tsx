import type { Metadata } from "next";

export const metadata: Metadata = { title: "Photo credits" };

export default function PhotoCreditsPage() {
  return (
    <section className="section credits">
      <p className="eyebrow">Georgia tax residency</p>
      <h1 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}>Photography credits</h1>
      <p>The following photographs are used on the AIXCO.Global Georgia tax residency page.</p>
      <h2>Batumi tax residency hero</h2>
      <p>Bespoke visual generated for AIXCO.Global. Concept: Batumi private-client advisory setting and the statutory 183-day theme. Changes: responsive cropping and web delivery performed by the website.</p>
      <h2>Batumi skyline with modern architecture</h2>
      <p>Photographer: Esra Kaya. Source: Pexels. License: Pexels License. Changes: responsive cropping and web delivery performed by the website.</p>
      <h2>Panoramic view of Batumi at night</h2>
      <p>Photographer: Giorgi Nakashidze. Source: Wikimedia Commons. License: Creative Commons Attribution-ShareAlike 3.0 Unported. Changes: responsive cropping and web delivery performed by the website.</p>
      <h2>Batumi sunset</h2>
      <p>Photographer: Dmitry A. Mottl. Source: Wikimedia Commons. License: Creative Commons Attribution-ShareAlike 4.0 International. Changes: responsive cropping and web delivery performed by the website.</p>
    </section>
  );
}
