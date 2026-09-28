import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Invest in Batumi Property",
  description: "Explore selected Batumi property opportunities with AIXCO.Global, transparent guidance and local support from first shortlist to ownership.",
};

export default function InvestPage() {
  return (
    <>
      <PageHero
        eyebrow="Batumi, Georgia · Coastal property"
        title="Own property in one of Europe's"
        accent="fastest-growing coastal markets"
        body="Selected apartments from €45,000. 10% initial payment, up to 60% bank financing, up to 12% net rental yield, 1% rental income tax, and 100% foreign ownership."
        image="/media/mosaic/batumi-day-aerial.webp"
        alt="Batumi skyline and Black Sea from above"
        note="Black Sea coast · Georgia · AIXCO buyer advisory"
      />
      <section className="section">
        <p className="eyebrow">Choose your buyer lens</p>
        <div className="path-grid">
          <article className="path-card"><h3>Lifestyle</h3><p>A compact coastal city where sea, mountains and year-round urban life meet.</p></article>
          <article className="path-card"><h3>Income</h3><p>Compare professionally selected opportunities with clear costs, positioning and management options.</p></article>
          <article className="path-card"><h3>Long-term value</h3><p>Build a considered property strategy around location quality, delivery and future usability.</p></article>
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <p className="eyebrow">Why Batumi</p>
        <h2>One of Europe&apos;s most dynamic residential property markets.</h2>
        <p className="lede">Batumi has become one of Europe&apos;s most dynamic residential property markets, supported by economic growth, expanding tourism, modern infrastructure and increasing international demand.</p>
        <h3 style={{ marginTop: "2rem" }}>Batumi by the numbers.</h3>
        <p>Key indicators from independent market research underline the city&apos;s growing residential appeal.</p>
        <div className="stat-grid">
          {[
            ["17,478", "Property transactions (2025)"],
            ["$1.3B", "Residential market size"],
            ["+9.4%", "Primary-market price growth"],
            ["7.4%", "Average rental yield"],
            ["52%", "International buyers in surveyed projects"],
          ].map(([value, label]) => (
            <article className="stat" key={label}><strong style={{ fontSize: "1.8rem" }}>{value}</strong><p>{label}</p></article>
          ))}
        </div>
        <p className="fine" style={{ color: "inherit" }}>Sources: Galt & Taggart Research; Colliers Georgia.</p>
      </section>
      <section className="section">
        <p className="eyebrow">Investment</p>
        <h2>How much does it cost?</h2>
        <div className="stat-grid">
          {[
            ["Studio", "From €45,000"],
            ["1 Bedroom", "From €65,000"],
            ["2 Bedroom", "From €95,000"],
            ["Luxury", "From €150,000"],
          ].map(([title, price]) => <article className="stat" key={title}><h3>{title}</h3><strong>{price}</strong></article>)}
        </div>
        <div className="section-head" style={{ marginTop: "2.5rem" }}>
          <p className="eyebrow">Payment structure</p>
          <h2>Own your apartment. Pay in stages.</h2>
          <p className="lede">A structured route to ownership without paying the full property price upfront.</p>
        </div>
        <div className="path-grid">
          <article className="path-card"><p className="eyebrow">10%</p><h3>Initial payment</h3><p>Secure the selected property.</p></article>
          <article className="path-card"><p className="eyebrow">30%</p><h3>During construction</h3><p>Structured payments during the construction period.</p></article>
          <article className="path-card"><p className="eyebrow">60%</p><h3>At completion</h3><p>Up to 60% bank financing may be available subject to eligibility and lender approval.</p></article>
        </div>
        <Link className="btn-gold" href="/reverance-batumi/calculator" style={{ marginTop: "1rem" }}>Calculate my payment plan</Link>
      </section>
      <section className="stage">
        <p className="eyebrow" style={{ color: "var(--gold)" }}>Why AIXCO</p>
        <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>Why buy through AIXCO?</h2>
        <p>Since its first acquisition in 2009, AIXCO has followed a disciplined strategy built on long-term real estate ownership, careful capital allocation and international expansion.</p>
        <div className="stat-grid" style={{ marginTop: "1rem" }}>
          {[
            ["Select", "We shortlist only projects we would buy ourselves."],
            ["Negotiate", "Access developer pricing and selected inventory."],
            ["Purchase", "Complete documentation with local support."],
            ["Own", "Rental, reporting and administration."],
          ].map(([title, body]) => <article className="card ink-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="section" id="contact" style={{ background: "white" }}>
        <div className="split">
          <div>
            <p className="eyebrow">Get started</p>
            <h2>Find the right property in Batumi.</h2>
            <p className="lede">Tell us what you&apos;re looking for. We&apos;ll show you the available apartments that best match your budget and objective.</p>
          </div>
          <ContactForm
            subject="Batumi property brief"
            submitLabel="Send me available apartments"
            interestOptions={["Investment / rental income", "Lifestyle / personal use", "Long-term hold", "Not sure yet"]}
          />
        </div>
      </section>
    </>
  );
}
