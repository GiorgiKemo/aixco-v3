import type { Metadata } from "next";
import { ContactForm } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { TaxClock } from "@/components/tax-clock";

export const metadata: Metadata = {
  title: "Georgia Tax Residency for HNWI",
  description: "AIXCO.Global explains Georgia's 183-day tax-residency test, the HNWI procedure and separate residence-permit routes using official sources.",
};

const chapters = [
  ["01", "Understand the 183-day test", "Count actual days using the continuous 12-month rule and keep clear travel evidence."],
  ["02", "Separate the legal questions", "Tax residence, a residence permit and a tax-residency certificate are different outcomes; one does not automatically grant the others."],
  ["03", "Check the HNWI procedure", "Order No. 60 uses property over GEL 3 million or annual income over GEL 200,000 in each of the preceding three years, plus a Georgian connection condition. Confirm before relying on it."],
];

const features = [
  ["183-day baseline", "Article 34 uses 183 or more days in any continuous 12-month period ending in the tax year."],
  ["HNWI procedure", "Order No. 60 sets a separate route for significant-property individuals; wealth alone does not produce an automatic result."],
  ["GEL thresholds", "The order uses property over GEL 3 million or annual income over GEL 200,000 in each of the previous three years, plus a Georgian connection: a permit/ID or at least GEL 25,000 of Georgian-source income."],
  ["Permit is separate", "The SDA lists separate routes, including short-term property over USD 150,000 and investment residence at USD 300,000 or more. Eligibility and amounts must be checked on the official page."],
];

export default function TaxPage() {
  return (
    <>
      <PageHero
        eyebrow="Georgia tax residency"
        title="A clearer route to"
        accent="international tax residency."
        body="Georgia offers two principal pathways for individuals seeking Georgian tax-resident status: physical presence or the dedicated High-Net-Worth Individual procedure. AIXCO helps internationally mobile individuals and families understand the route, coordinate the required local elements and connect with the appropriate tax and legal professionals."
        image="/media/tax/batumi-sunset-dmitry-mottl.jpg"
        alt="Batumi coastline and modern architecture"
        note="General information only. Tax residency depends on individual facts, source-of-income rules, other-country residency rules and applicable double-tax treaties."
      />
      <TaxClock />
      <section className="section" style={{ background: "white" }}>
        <p className="eyebrow">A clear route</p>
        <h2>Make the move feel considered.</h2>
        <p className="lede">Start with the statutory test, then separate tax residence from an immigration permit and check the HNWI procedure only if the facts fit.</p>
        <div className="path-grid">
          {chapters.map(([number, title, body]) => (
            <article className="path-card" key={number}><p className="eyebrow">{number}</p><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">Why Georgia</p>
        <h2>A framework built around facts.</h2>
        <p className="lede">Georgia has a clear starting point, but tax residence is determined by the Code and the complete cross-border profile — not lifestyle alone.</p>
        <div className="card-grid">
          {features.map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <div className="credits" style={{ marginTop: "2rem" }}>
          <p><strong>Official references.</strong> Georgia Tax Code · Article 34. Minister of Finance Order No. 60 · HNWI procedure. SDA · residence permits.</p>
          <p><strong>Photography.</strong> Hero setting generated for AIXCO.Global. Skyline photograph by Esra Kaya, Pexels License. Night panorama by Giorgi Nakashidze, CC BY-SA 3.0. Sunset by Dmitry A. Mottl, CC BY-SA 4.0. <a href="/georgia-tax-residency/photo-credits">Photo credits</a></p>
        </div>
      </section>
      <section className="section" id="contact" style={{ background: "var(--navy)", color: "white" }}>
        <div className="split">
          <div>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Ready to map your position?</p>
            <h2>Understand your Georgia tax-residency options.</h2>
            <p>Tell us where you are currently based, how much time you plan to spend in Georgia and whether you are considering the HNWI route. We will help identify the appropriate next conversation.</p>
          </div>
          <ContactForm
            subject="Georgia tax residency consultation"
            submitLabel="Book a private consultation"
            interestOptions={["183-day tax residency", "HNWI tax residency", "Property + tax residency", "Residence permit + tax residency", "International relocation", "Not sure yet"]}
          />
        </div>
      </section>
    </>
  );
}
