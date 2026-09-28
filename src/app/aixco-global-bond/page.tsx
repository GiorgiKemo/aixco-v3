import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "AIXCO Global Bond",
  description: "Participate in AIXCO's long-term real estate strategy through the AIXCO Global Bond, with a 6% fixed annual coupon and a €1,000 minimum investment.",
};

const steps = [
  ["Sourcing", "Identifying high-potential real estate and development opportunities before market pricing catches up."],
  ["Research & due diligence", "Testing the market, the asset, the legal context and the underlying assumptions before capital is committed."],
  ["Acquisition", "Securing land and property at the earliest, lowest-cost stage of the cycle."],
  ["Development", "Designing and building residential projects to institutional quality standards."],
  ["Income generation", "Producing rental income and sales revenue throughout the holding period."],
  ["Value realization", "Selling selected assets once value has been created, and reinvesting into new opportunities to grow the portfolio."],
];

export default function BondPage() {
  return (
    <>
      <PageHero
        eyebrow="AIXCO Global Bond"
        title="Direct access to AIXCO"
        accent="the company behind successful real estate."
        body="Participate in AIXCO's long-term real estate strategy through a professionally managed corporate bond."
        image="/media/mosaic/batumi-golden-hour-coastline.webp"
        alt="Batumi coastline and high-rise skyline at golden hour"
        note="Batumi, Georgia"
      />
      <section className="section">
        <div className="stat-grid">
          {[
            ["6%", "Fixed Annual Coupon"],
            ["€1,000", "Minimum Investment"],
            ["5 YEARS", "Investment Term"],
            ["€400M+", "GDV"],
            ["2,000+", "Transactions"],
            ["Since 2009", "Real Estate Experience"],
          ].map(([value, label]) => <article className="stat" key={label}><strong style={{ fontSize: "1.8rem" }}>{value}</strong><p>{label}</p></article>)}
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <p className="eyebrow">02 — Why invest in AIXCO?</p>
        <h2>An international real estate investor, built for emerging markets.</h2>
        <p className="lede">AIXCO combines Swiss discipline with an international outlook to identify real estate opportunities before they become mainstream.</p>
        <p className="lede">Our strategy begins with carefully selected emerging markets where long-term fundamentals support future growth. By acquiring assets early, actively managing development, and balancing property sales with recurring rental income, we create multiple sources of value within a single portfolio.</p>
        <p className="lede">Rather than relying on one transaction, AIXCO continuously reinvests capital to expand and strengthen its portfolio, building long-term value across market cycles.</p>
      </section>
      <section className="stage">
        <p className="eyebrow" style={{ color: "var(--gold)" }}>05 — The markets we believe in</p>
        <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}>Every market tells a chapter of the AIXCO story.</h2>
        <p>Switzerland is our foundation. Dubai strengthened our international presence and experience. Georgia is the current opportunity, positioned for long-term growth and value creation.</p>
        <p>The next chapter expands into carefully selected emerging markets as new opportunities arise and long-term fundamentals support sustainable growth.</p>
      </section>
      <section className="section">
        <p className="eyebrow">How we operate</p>
        <h2>A vertically integrated real estate model.</h2>
        <p className="lede">From the first market signal to the moment value is realized, the model keeps research, acquisition, development and portfolio growth connected.</p>
        <div className="card-grid">
          {steps.map(([title, body], index) => (
            <article className="card" key={title}><p className="eyebrow">{String(index + 1).padStart(2, "0")}</p><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>
      <section className="section" style={{ background: "var(--ink)", color: "white" }}>
        <p className="eyebrow" style={{ color: "var(--gold)" }}>09 — AIXCO Global Bond</p>
        <h2>A direct way to participate in AIXCO&apos;s long-term growth.</h2>
        <p>The AIXCO Global Bond provides access to AIXCO&apos;s professionally managed real estate strategy through a fixed annual coupon and the potential for additional profit participation. Rather than purchasing and managing an individual property, investors participate in the company behind the portfolio.</p>
        <div className="stat-grid" style={{ marginTop: "1rem" }}>
          {["Vienna, Austria HQ", "Regulated bond issuer", "Listed on Vienna MTF", "Fixed 6% coupon"].map((badge) => (
            <article className="stat" key={badge} style={{ background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.2)" }}><strong>{badge}</strong></article>
          ))}
        </div>
        <p>In December 2025, AIXCO Global Assets GmbH listed its 6% Subordinated Bond 2025–2030 (ISIN: AT0000A3QME7) on the Vienna MTF — giving investors regulated, transparent access to a diversified emerging-market real estate strategy, structured as a fixed-income instrument.</p>
      </section>
      <section className="section">
        <p className="eyebrow">Governance & transparency</p>
        <h2>Built on transparency.</h2>
        <p className="lede">AIXCO Global operates with the transparency investors expect from a regulated, listed issuer. Every investment decision, project update, and financial result is communicated clearly and on a consistent schedule — so investors always know exactly where their capital stands.</p>
        <p>We report to our investors on a quarterly basis, covering portfolio performance, project progress, and financial results — giving you continuous visibility into how your investment is performing, not just an annual snapshot.</p>
        <div className="card-grid">
          {[
            ["Quarterly reporting", "Regular updates on portfolio performance, project milestones, and financials."],
            ["Regulated structure", "Bond issued under a licensed, regulated framework and listed on the Vienna MTF."],
            ["Clear communication", "Direct access to our investment team for questions at any time."],
            ["Full disclosure", "Transparent presentation of risks, returns, and underlying real estate assets."],
          ].map(([title, body]) => <article className="card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <div className="hero-actions">
          <a className="btn-gold" href="#contact">Explore the AIXCO Global Bond</a>
          <Link className="btn-ink" href="/reverance-batumi">View current projects</Link>
        </div>
      </section>
      <section className="section" id="contact" style={{ background: "white" }}>
        <div className="split">
          <div>
            <p className="eyebrow">Begin the conversation</p>
            <h2>Invest where growth is just beginning.</h2>
            <p className="lede">AIXCO Global gives investors direct access to a professionally managed, emerging-market real estate strategy — without the burden of owning or managing property directly. Request your investor information package and schedule a private consultation with our team.</p>
          </div>
          <ContactForm
            subject="AIXCO Global Bond investor package"
            submitLabel="Request your investor package"
            interestOptions={["AIXCO Global Bond", "Current projects", "Emerging-market strategy", "Investment specialist"]}
          />
        </div>
      </section>
    </>
  );
}
