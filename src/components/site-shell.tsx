"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { menu, nav, company } from "@/data/content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <Link href="/" aria-label="AIXCO.Global home">
          <Image className="brand-lockup" src="/media/AIXCOGlobal-horizontal-dark.webp" alt="AIXCO.Global" width={640} height={133} priority />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <Link className="header-cta" href="/#contact">Request a brief</Link>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobile">
          <button type="button" className="btn-ghost" style={{ alignSelf: "flex-end", color: "white" }} onClick={() => setOpen(false)}>Close</button>
          {menu.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <small>{String(index + 1).padStart(2, "0")}</small>
            </Link>
          ))}
        </nav>
      ) : null}
      <div id="content">{children}</div>
      <footer className="site-footer">
        <Image src="/media/AIXCOGlobal-horizontal-light.webp" alt="AIXCO.Global" width={220} height={46} />
        <p className="fine">{company.address}<br />{company.email}<br />Vienna · Dubai · Batumi · Since {company.founded}</p>
        <div className="footer-links">
          {menu.slice(0, 9).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <a href={company.socials.linkedin}>LinkedIn</a>
          <a href={company.socials.instagram}>Instagram</a>
          <a href={company.socials.whatsapp}>WhatsApp</a>
          <a href={company.portals.customer}>Client portal</a>
        </div>
        <p className="fine">© {new Date().getFullYear()} AIXCO.Global. All rights reserved. General information only. Eligibility, tax treatment, financing and availability depend on individual circumstances and the applicable rules.</p>
      </footer>
    </>
  );
}

export function ContactForm({
  interestOptions,
  submitLabel,
  subject,
}: {
  interestOptions: string[];
  submitLabel: string;
  subject: string;
}) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const lines = [
          `Name: ${String(data.get("name") ?? "")}`,
          `Email: ${String(data.get("email") ?? "")}`,
          `Phone: ${String(data.get("phone") ?? "")}`,
          `Interest: ${String(data.get("interest") ?? "")}`,
          "",
          String(data.get("message") ?? ""),
        ];
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
        setSent(true);
      }}
    >
      <label>Full name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
      <label>Email address<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
      <label>WhatsApp / Phone<input name="phone" autoComplete="tel" placeholder="+995 …" /></label>
      <label>Area of interest
        <select name="interest" defaultValue={interestOptions[0]}>
          {interestOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label>Your message<textarea name="message" placeholder="Tell us what you are exploring" /></label>
      <p className="fine" style={{ color: "inherit" }}>By sending this form, you agree that AIXCO may contact you about your request. The message opens in your email app to {company.email}.</p>
      <button className="btn-gold" type="submit">{submitLabel}</button>
      {sent ? <p>Your email draft is ready. Send it to complete the request.</p> : null}
    </form>
  );
}
