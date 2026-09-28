import type { Metadata } from "next";
import { ContactForm } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Georgia Residency Pathways",
  description: "Explore Georgian residence pathways through qualifying business activity, property above $150,000 certified market value, or qualifying investment from $300,000, with coordinated AIXCO support.",
};

const paths = [
  { title: "Business activity", price: "BUSINESS", detail: "A residence route may be available through qualifying entrepreneurial or employment activity in Georgia, subject to the applicable legal requirements.", note: "Best suited to founders, business owners and professionals establishing an active local base." },
  { title: "Property ownership", price: "$150K+", detail: "Qualifying non-agricultural property exceeding $150,000 certified market value can support a short-term residence application.", note: "The certified market value — not solely the advertised or purchase price — is used for eligibility." },
  { title: "Qualifying investment", price: "$300K+", detail: "A qualifying investment of at least $300,000 may support an investment residence route, subject to the statutory conditions and approval.", note: "Specified dependent family members may also qualify under the investment route where the legal conditions are met." },
];

const why = [
  { title: "Property ownership", body: "Foreigners can generally own qualifying residential and commercial real estate, with agricultural land subject to separate restrictions." },
  { title: "Residency through property", body: "Qualifying non-agricultural property exceeding $150,000 certified market value can support a short-term residence application." },
  { title: "Family access", body: "Qualifying property-based residence can extend to a spouse and children." },
  { title: "Fast processing", body: "Official processing options are available from 10 to 30 calendar days for the short-term property residence permit." },
];

const steps = [
  ["Eligibility review", "Identify the most appropriate residency route."],
  ["Property / business structure", "Select qualifying property or establish the required local structure."],
  ["Documentation", "Coordinate valuations, translations, notarisation and required supporting documents."],
  ["Application", "Prepare and coordinate the residence-permit application."],
  ["Local setup", "Residence card · registered address · banking coordination*"],
  ["Tax & relocation", "Where applicable, coordinate tax-residency and relocation requirements with appropriate professional advisers."],
];

export default function ResidencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Georgia residency"
        title="Own. Establish."
        accent="Reside."
        body="Multiple pathways to establish residency in Georgia through property ownership, qualifying investment or business activity. AIXCO coordinates the process from documentation and property selection to application support and local setup."
        image="/media/mosaic/batumi-dusk-aerial-central.webp"
        alt="Batumi skyline at dusk"
        note="Residency eligibility is subject to Georgian immigration law, individual circumstances and approval by the competent Georgian authorities."
      />
      <section className="section" id="paths">
        <p className="eyebrow">01 — Three pathways to Georgian residency</p>
        <h2>Whether the goal is a business, a property, or a qualifying investment.</h2>
        <p className="lede">Whether your goal is to establish a business, purchase property or make a qualifying investment, Georgia offers several residence pathways designed to accommodate different personal and business circumstances.</p>
        <div className="path-grid" style={{ marginTop: "1.2rem" }}>
          {paths.map((path) => (
            <article className="path-card" key={path.title}>
              <p className="eyebrow">{path.price}</p>
              <h3>{path.title}</h3>
              <p>{path.detail}</p>
              <p style={{ marginTop: "0.7rem" }}>{path.note}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="stage">
        <p className="eyebrow" style={{ color: "var(--gold)" }}>05 — Why Georgia?</p>
        <div className="card-grid" style={{ marginTop: "1rem" }}>
          {why.map((item) => <article className="card ink-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">08 — AIXCO support</p>
        <h2>From the first eligibility review to local setup.</h2>
        <p>The residence permit application must be submitted in person while you are physically present in Georgia. After submitting, the client is free to leave and AIXCO continues managing the process.</p>
        <div className="card-grid" style={{ marginTop: "1rem" }}>
          {steps.map(([title, body], index) => (
            <article className="card" key={title}><p className="eyebrow">{String(index + 1).padStart(2, "0")}</p><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
        <div className="stat-grid" style={{ marginTop: "1rem" }}>
          <article className="stat"><strong>Since 2009</strong><p>Building long-term expertise in residential real estate and international expansion.</p></article>
          <article className="stat"><strong>2,000+</strong><p>Transactions across residential property acquisitions, sales and development.</p></article>
          <article className="stat"><strong>$4.2B+</strong><p>Property value transacted across multiple markets.</p></article>
          <article className="stat"><strong>90+</strong><p>Professionals across real estate, finance, legal coordination, development and private client services.</p></article>
        </div>
      </section>
      <section className="section" id="contact" style={{ background: "white" }}>
        <div className="split">
          <div>
            <p className="eyebrow">Request</p>
            <h2>Tell us which route you want to test.</h2>
          </div>
          <ContactForm
            subject="Georgia residency enquiry"
            submitLabel="Request a residency brief"
            interestOptions={["Property-based residency", "Investment residency", "Business-based residency", "Tax residency / HNWI", "Property + residency", "Not sure yet"]}
          />
        </div>
      </section>
    </>
  );
}
