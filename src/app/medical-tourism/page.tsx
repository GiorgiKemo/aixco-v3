import type { Metadata } from "next";
import { ContactForm } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Medical Tourism in Georgia",
  description: "Plan medical treatment in Georgia with AIXCO.Global: 50-80% lower costs than Western Europe, named private clinics, and recovery on the Black Sea coast in Batumi.",
};

const dental = [
  ["Implant (single)", "€500 – €1,500", "€1,500 – €4,000+"],
  ["Full mouth implants", "€3,000 – €4,000", "€15,000 – €25,000+"],
  ["Crown / veneer", "€150 – €300", "€600 – €1,200"],
  ["Filling", "€25 – €70", "€80 – €200"],
];

const cosmetic = [
  ["Botox", "€50 – €150", "€200 – €600+"],
  ["Rhinoplasty", "€2,000 – €4,500", "€4,000 – €8,000"],
  ["Breast augmentation", "€3,000 – €5,500", "€4,500 – €8,000"],
  ["Liposuction", "€2,000 – €4,000", "€4,000 – €7,000"],
  ["Facelift", "€3,000 – €6,000", "€6,000 – €15,000+"],
];

const fertility = [
  ["Georgia", "€40,000 – €70,000"],
  ["United States", "€130,000 – €180,000+"],
  ["Greece", "€75,000 – €100,000"],
  ["Canada", "€70,000 – €100,000"],
  ["Germany", "Not allowed"],
];

const clinics = [
  ["American Hospital Tbilisi", "Premium care", "Premium international-level care for complex treatments."],
  ["Evex Hospitals", "Full-service care", "Largest network with nationwide coverage."],
  ["Aversi Clinic", "Diagnostics", "Strong in diagnostics and specialist consultations."],
  ["Caucasus Medical Center", "Complex treatments", "Best for serious and complex medical cases."],
  ["American Medical Centers", "Expats and general care", "General and routine care for expatriates."],
  ["Todua Clinic", "Diagnostics", "High-level diagnostics and imaging."],
  ["MediClub Georgia", "Cosmetic and rehab", "Focus on cosmetic procedures and rehabilitation."],
];

export default function MedicalPage() {
  return (
    <>
      <PageHero
        eyebrow="Georgia healthcare"
        title="Medical care"
        accent="at European quality."
        body="Georgia offers high-value private treatment at significantly lower cost, especially for dental care, cosmetic procedures, fertility, and planned surgery."
        image="/media/mosaic/batumi-golden-hour-coastline.webp"
        alt="Batumi coastline at golden hour"
        note="A calm Black Sea city for treatment and recovery. 50-80% below Western prices."
      />
      <section className="section">
        <div className="stat-grid">
          <article className="stat"><strong>50-80%</strong><p>Typical cost saving</p></article>
          <article className="stat"><strong>Days</strong><p>Specialist access</p></article>
          <article className="stat"><strong>7</strong><p>Named private clinics</p></article>
          <article className="stat"><strong>2026</strong><p>Insurance required for entry</p></article>
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h2>Dental care</h2>
        <Compare rows={dental} />
        <h2 style={{ marginTop: "2.5rem" }}>Cosmetic procedures</h2>
        <Compare rows={cosmetic} />
        <h2 style={{ marginTop: "2.5rem" }}>Fertility, typical cost</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Country</th><th>Typical cost</th></tr></thead>
            <tbody>
              {fertility.map((row) => (
                <tr key={row[0]}><td>{row[0]}</td><td className={row[0] === "Georgia" ? "gold" : ""}>{row[1]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">Private clinics across Georgia</p>
        <div className="card-grid">
          {clinics.map((clinic) => (
            <article className="card" key={clinic[0]}><p className="eyebrow">{clinic[1]}</p><h3>{clinic[0]}</h3><p>{clinic[2]}</p></article>
          ))}
        </div>
      </section>
      <section className="section" id="contact" style={{ background: "var(--ink)", color: "white" }}>
        <div className="split">
          <div>
            <p className="eyebrow" style={{ color: "var(--gold)" }}>Request a medical brief</p>
            <h2>Treatment and recovery, planned together.</h2>
          </div>
          <ContactForm
            subject="Medical tourism brief"
            submitLabel="Request a medical brief"
            interestOptions={["Medical tourism consultation", "Dental care in Georgia", "Cosmetic surgery", "Fertility treatment", "Orthopedic surgery", "Treatment and property ownership", "Project Reverance"]}
          />
        </div>
      </section>
    </>
  );
}

function Compare({ rows }: { rows: string[][] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Treatment</th><th>Georgia</th><th>Germany</th></tr></thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}><td>{row[0]}</td><td className="gold">{row[1]}</td><td>{row[2]}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
