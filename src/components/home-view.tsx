"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactForm } from "@/components/site-shell";
import {
  batumiBenefits,
  credibility,
  dubaiFunds,
  gallery,
  hero,
  homeFaq,
  journeys,
  legacy,
  metrics,
  partners,
  philosophyHero,
  philosophySections,
  principles,
  objectives,
  skills,
  team,
} from "@/data/content";

const film = [
  "/media/mosaic/batumi-golden-hour-coastline.webp",
  "/media/thumbs/01-hero-exterior.webp",
  "/media/mosaic/batumi-night-skyline.webp",
  "/media/thumbs/08-rooftop-sunset.webp",
  "/media/optimized/fund1-upscaled.webp",
  "/media/mosaic/batumi-evening-waterfront.webp",
];

export function HomeView() {
  const [active, setActive] = useState(0);
  const [intro, setIntro] = useState(true);
  const skill = skills[active];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || sessionStorage.getItem("aixco-v3-intro")) {
      setIntro(false);
    } else {
      const timer = window.setTimeout(() => {
        sessionStorage.setItem("aixco-v3-intro", "1");
        setIntro(false);
      }, 2400);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % skills.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {intro ? (
        <div className="intro" role="presentation">
          <div>
            <Image src="/media/AIXW.png" alt="" width={280} height={280} priority />
            <p>AIXCO.Global</p>
          </div>
        </div>
      ) : null}

      <section className="hero">
        <div className="hero-copy">
          <span className="slash" aria-hidden />
          <p className="eyebrow reveal">{hero.kicker}</p>
          <h1 className="display reveal delay-1">{hero.title}<br /><em>{hero.accent}</em></h1>
          <p className="lede reveal delay-2">{hero.body}</p>
          <div className="hero-actions reveal delay-3">
            <a className="btn-gold" href="#skills">See our capabilities</a>
            <Link className="btn-ink" href="/reverance-batumi">View current project</Link>
          </div>
        </div>
        <div className="filmstrip" aria-hidden>
          <div className="filmstrip-track">
            {[...film, ...film].map((src, index) => (
              <Image key={`${src}-${index}`} src={src} alt="" width={900} height={600} />
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrap" aria-label="AIXCO track record">
        <div className="marquee">
          {[...metrics, ...metrics].map((item, index) => (
            <span key={`${item.label}-${index}`}><strong>{item.value}</strong><em>{item.label}</em></span>
          ))}
        </div>
      </div>

      <section className="stage" id="skills">
        <p className="eyebrow" style={{ color: "var(--gold)" }}>Capabilities</p>
        <h2 className="display" style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)", maxWidth: "12ch" }}>What AIXCO actually does.</h2>
        <div className="skill-layout" style={{ marginTop: "1.5rem" }} onMouseEnter={() => undefined}>
          <div className="skill-list" onMouseLeave={() => undefined}>
            {skills.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`skill-button${index === active ? " is-active" : ""}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <small>{item.index}</small>
                <strong>{item.title}</strong>
                <span aria-hidden>↗</span>
              </button>
            ))}
          </div>
          <article className="skill-visual">
            <Image key={skill.image} src={skill.image} alt={skill.alt} width={1200} height={900} />
            <div className="skill-caption">
              <p className="eyebrow" style={{ color: "var(--gold)" }}>{skill.index}</p>
              <p style={{ fontSize: "1.15rem", maxWidth: "36rem" }}>{skill.body}</p>
              <Link className="btn-gold" href={skill.href} style={{ marginTop: "0.8rem" }}>{skill.cta}</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="philosophy">
        <div className="section-head">
          <p className="eyebrow">{philosophyHero.eyebrow}</p>
          <h2>{philosophyHero.title}</h2>
          <p className="lede">{philosophyHero.summary}</p>
        </div>
        <div className="card-grid">
          {philosophySections.map((section) => (
            <article className="card" key={section.title}>
              <p className="eyebrow">{section.eyebrow}</p>
              <h3>{section.title}</h3>
              {section.paragraphs.map((paragraph) => <p key={paragraph} style={{ marginTop: "0.7rem" }}>{paragraph}</p>)}
            </article>
          ))}
        </div>
        <div className="stat-grid" style={{ marginTop: "0.8rem" }}>
          {principles.map((item) => <article className="stat" key={item}><strong>{item}</strong></article>)}
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="split">
          <div>
            <p className="eyebrow">{objectives.eyebrow}</p>
            <h2>{objectives.title}</h2>
            {objectives.paragraphs.map((paragraph) => <p className="lede" key={paragraph} style={{ marginTop: "1rem" }}>{paragraph}</p>)}
          </div>
          <Image src="/media/mosaic/batumi-sunset-panorama.webp" alt="Batumi sea and city view" width={1600} height={900} />
        </div>
      </section>

      <section className="stage" id="legacy">
        <p className="eyebrow" style={{ color: "var(--gold)" }}>Our journey</p>
        <h2 className="display" style={{ fontSize: "clamp(2.4rem, 5vw, 4.6rem)" }}>Three markets. One discipline.</h2>
        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {legacy.map((item) => (
            <article className="card ink-card" key={item.title}>
              <p className="eyebrow" style={{ color: "var(--gold)" }}>{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p style={{ color: "var(--gold)", fontSize: "1.3rem", margin: "0.4rem 0" }}>{item.highlight}</p>
              <p>{item.body}</p>
              {item.href ? <a className="gold-link" href={item.href} style={{ display: "inline-block", marginTop: "0.8rem", color: "var(--gold)" }}>{item.link}</a> : null}
            </article>
          ))}
        </div>
        <div className="card-grid" style={{ marginTop: "0.8rem" }}>
          {dubaiFunds.map((fund) => (
            <article className="card ink-card" key={fund.name}>
              <Image src={fund.image} alt={fund.alt} width={1200} height={800} style={{ marginBottom: "1rem", height: "14rem", objectFit: "cover", width: "100%" }} />
              <h3>{fund.name}</h3>
              {fund.details.map((detail) => <p key={detail} style={{ marginTop: "0.35rem" }}>{detail}</p>)}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="reverance">
        <div className="section-head">
          <p className="eyebrow">Current project · Batumi</p>
          <h2>Reverance, on the New Boulevard.</h2>
          <p className="lede">Selected residences in one of Batumi&apos;s most dynamic coastal districts, with completion targeted for July 2028.</p>
          <Link className="btn-ink" href="/reverance-batumi">Open the project</Link>
        </div>
        <div className="rail">
          {gallery.map((item) => (
            <figure key={item.label}>
              <Image src={item.src} alt={item.alt} width={900} height={700} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="stat-grid" style={{ marginTop: "1rem" }}>
          {credibility.map((item) => (
            <article className="stat" key={item.label}><strong style={{ fontSize: "1.6rem" }}>{item.value}</strong><p>{item.label}</p></article>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div className="section-head">
          <p className="eyebrow">How to work with AIXCO</p>
          <h2>Four journeys. One desk.</h2>
        </div>
        <div className="card-grid">
          {journeys.map((journey) => (
            <article className="card" key={journey.tag}>
              <p className="eyebrow">{journey.tag}</p>
              <h3>{journey.role}</h3>
              <p>{journey.summary}</p>
              <ol style={{ margin: "0.8rem 0 0", paddingLeft: "1.1rem", lineHeight: 1.55 }}>
                {journey.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </article>
          ))}
        </div>
        <ul style={{ marginTop: "1.4rem", display: "grid", gap: "0.45rem", padding: 0, listStyle: "none" }}>
          {batumiBenefits.map((benefit) => <li key={benefit}>— {benefit}</li>)}
        </ul>
      </section>

      <section className="section" id="team">
        <div className="section-head">
          <p className="eyebrow">Team</p>
          <h2>The people behind the selection.</h2>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <Image src={person.image} alt={person.name} width={800} height={1000} style={{ width: "100%", height: "22rem", objectFit: "cover", objectPosition: "center top", marginBottom: "1rem" }} />
              <p className="eyebrow">{person.role}</p>
              <h3>{person.name}</h3>
              <p>{person.summary}</p>
              <p style={{ marginTop: "0.7rem" }}>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--navy)", color: "white" }}>
        <div className="section-head">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>Partners</p>
          <h2>Group companies and strategic partners.</h2>
        </div>
        <div className="partner-grid">
          {partners.map((partner) => (
            <article className="partner-card" key={partner.name} style={{ background: "white", color: "var(--ink)" }}>
              <Image src={partner.logo} alt="" width={220} height={80} style={{ height: "3.2rem", width: "auto", objectFit: "contain", marginBottom: "0.8rem" }} />
              <h3 style={{ margin: 0 }}>{partner.name}</h3>
              <p>{partner.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="section-head">
          <p className="eyebrow">FAQs</p>
          <h2>Real estate investment, answered plainly.</h2>
        </div>
        <div className="faq">
          {homeFaq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section" id="contact" style={{ background: "white" }}>
        <div className="split">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Tell us the objective. We will show the matching path.</h2>
            <p className="lede">info@aixco.global · Grüngasse 16, 1050 Wien, Austria</p>
          </div>
          <ContactForm
            subject="AIXCO.Global enquiry"
            submitLabel="Send enquiry"
            interestOptions={["Buy an apartment", "Broker partnership", "Property administration", "Georgia residency", "Tax residency", "Medical tourism", "AIXCO Global Bond"]}
          />
        </div>
      </section>
    </>
  );
}
