"use client";

import { useState } from "react";

export function TaxClock() {
  const [days, setDays] = useState(120);
  const reached = days >= 183;
  const progress = Math.min(days / 183, 1);
  const dash = 2 * Math.PI * 70;
  return (
    <section className="section" id="clock">
      <div className="split">
        <div>
          <p className="eyebrow">183-day presence check</p>
          <h2>Calculate from your actual stay dates.</h2>
          <p className="lede">Under Article 34 of Georgia&apos;s Tax Code, the general test is 183 or more days in any continuous 12-calendar-month period ending in the tax year. It is a starting point, not a standalone answer: the Code contains specific counting rules and separate routes.</p>
          <label className="form" style={{ marginTop: "1rem" }}>
            Days spent in Georgia in the relevant 12-month period · {days} days
            <input className="slider" type="range" min={0} max={365} value={days} onChange={(event) => setDays(Number(event.target.value))} />
          </label>
          <p>{reached ? "This reaches the general statutory threshold. Resident status is established for each tax period; a certificate and any treaty outcome still require a case-specific review." : "Below 183 days does not settle your position. Article 34 also provides a separate HNWI procedure, while other residence, source and treaty rules may still matter."}</p>
          <p className="fine" style={{ color: "inherit" }}>Illustrative information only — not tax or legal advice. Verify the current rules before acting. AIXCO brochure figures in EUR are indicative conversions. The references below use current official GEL/USD thresholds and should be rechecked before filing.</p>
        </div>
        <div className="ring-wrap">
          <svg width="220" height="220" viewBox="0 0 180 180" aria-hidden>
            <circle cx="90" cy="90" r="70" fill="none" stroke="#16161622" strokeWidth="10" />
            <circle cx="90" cy="90" r="70" fill="none" stroke="#9C7F3C" strokeWidth="10" strokeDasharray={`${dash}`} strokeDashoffset={`${dash * (1 - progress)}`} strokeLinecap="round" transform="rotate(-90 90 90)" />
          </svg>
          <div className="ring-label">
            <strong>{days}</strong>
            <span>{reached ? "Threshold reached" : `${183 - days} days remaining`}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
