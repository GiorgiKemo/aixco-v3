import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import {
  amenities,
  gallery,
  heroProof,
  marketStats,
  ownershipBenefits,
  paymentStages,
  projectBenefits,
  projectFaq,
  reverance,
} from "@/data/content";
import { GOLDEN_PREMIUM_SUMMARY } from "@/data/golden-premium-apartments";

export const metadata: Metadata = {
  title: "Project Reverance Batumi",
  description: reverance.metadata,
};

export default function ReverancePage() {
  return (
    <>
      <PageHero
        eyebrow="Private residences · Batumi · Black Sea coast"
        title="Be a part of enormous growth"
        accent="and exceptional stability."
        body={reverance.summary}
        image="/media/optimized/current-project-reverance.webp"
        alt="Project Reverance residential complex in Batumi"
        note="Handpicked best in class residences in Batumi, Georgia — from AIXCO’s own portfolio, with exceptional yields, light taxation and full foreign ownership."
      />
      <section className="section">
        <div className="stat-grid">
          {heroProof.map((item) => <article className="stat" key={item}><strong>{item}</strong></article>)}
        </div>
        <div className="stat-grid" style={{ marginTop: "0.8rem" }}>
          {reverance.metrics.map((item) => (
            <article className="stat" key={item.label}>
              <p className="eyebrow">{item.label}</p>
              <strong style={{ fontSize: "2.4rem" }}>{item.value}</strong>
              <p>{item.subtext}</p>
            </article>
          ))}
          <article className="stat">
            <p className="eyebrow">Golden Premium</p>
            <strong style={{ fontSize: "2.4rem" }}>{GOLDEN_PREMIUM_SUMMARY.available}</strong>
            <p>{GOLDEN_PREMIUM_SUMMARY.available} available · {GOLDEN_PREMIUM_SUMMARY.reserved} reserved · {GOLDEN_PREMIUM_SUMMARY.total} listed</p>
          </article>
        </div>
        <div className="hero-actions">
          <Link className="btn-gold" href="/reverance-batumi/calculator">Open the calculator</Link>
          <a className="btn-ink" href="#contact">Request availability</a>
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <div className="section-head">
          <p className="eyebrow">The residence</p>
          <h2>{reverance.availability}</h2>
        </div>
        <div className="card-grid">
          {reverance.highlights.map((item) => (
            <article className="card" key={item.label}><h3>{item.label}</h3><p>{item.value}</p></article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="rail">
          {gallery.map((item) => (
            <figure key={item.src}>
              <Image src={item.src} alt={item.alt} width={900} height={700} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="stage">
        <p className="eyebrow" style={{ color: "var(--gold)" }}>Resident amenities</p>
        <h2 className="display" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>See the resident experience.</h2>
        <div className="card-grid" style={{ marginTop: "1.2rem" }}>
          {amenities.map((item) => (
            <article className="card ink-card" key={item.label}>
              <Image src={item.images[0]} alt={item.label} width={800} height={520} style={{ width: "100%", height: "12rem", objectFit: "cover", marginBottom: "0.8rem" }} />
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="split">
          <div>
            <p className="eyebrow">The project</p>
            <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
              {projectBenefits.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Ownership</p>
            <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
              {ownershipBenefits.map((item) => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--navy)", color: "white" }}>
        <p className="eyebrow" style={{ color: "var(--gold)" }}>Batumi by the numbers</p>
        <div className="stat-grid" style={{ marginTop: "1rem" }}>
          {marketStats.map((item) => <article className="stat" key={item.label} style={{ background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.2)" }}><strong style={{ fontSize: "2rem" }}>{item.value}</strong><p>{item.label}</p></article>)}
        </div>
        <p className="fine">Sources: Galt & Taggart Research; Colliers Georgia.</p>
        <div className="card-grid" style={{ marginTop: "1.4rem" }}>
          {paymentStages.map((stage) => (
            <article className="card ink-card" key={stage.title}>
              <p style={{ color: "var(--gold)", fontSize: "2rem", margin: 0 }}>{stage.value}</p>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="faqs">
        <h2>Questions before you reserve.</h2>
        <div className="faq">
          {projectFaq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
        </div>
      </section>
      <section className="section" id="contact" style={{ background: "white" }}>
        <div className="split">
          <div>
            <p className="eyebrow">Request</p>
            <h2>Ask for the current Reverance selection.</h2>
            <p className="lede">Confirm availability before reservation. Budgets from €45,000, with studio, one-bedroom and two-bedroom options.</p>
          </div>
          <ContactForm subject="Reverance availability" submitLabel="Request availability" interestOptions={["Studio", "1 Bedroom", "2 Bedroom", "Golden Premium", "Not sure"]} />
        </div>
      </section>
    </>
  );
}
