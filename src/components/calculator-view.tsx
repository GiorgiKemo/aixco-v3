"use client";

import { useMemo, useState } from "react";
import {
  calculateReveranceInvestment,
  defaultReveranceCalculatorInputs,
  reveranceCalculatorAssumptions,
  reveranceCalculatorRanges,
  reveranceUnits,
  type CalculatorInputs,
} from "@/lib/reverance-investment-calculator";

const euro = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function CalculatorView() {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultReveranceCalculatorInputs);
  const result = useMemo(() => calculateReveranceInvestment(inputs), [inputs]);

  const set = (patch: Partial<CalculatorInputs>) => setInputs((current) => ({ ...current, ...patch }));

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Reverance calculator</p>
        <h2>Project the holding. Confirm the unit.</h2>
        <p className="lede">Illustrative projection using AIXCO&apos;s published calculator assumptions: {reveranceCalculatorAssumptions.interestPercent}% interest, {reveranceCalculatorAssumptions.loanYears}-year loan, {reveranceCalculatorAssumptions.completionUpliftPercent}% completion uplift, {reveranceCalculatorAssumptions.rentalTaxPercent}% rental tax, and {reveranceCalculatorAssumptions.operatingAndVoidPercent}% operating and void. Confirm availability before reservation.</p>
      </div>
      <div className="calc-grid">
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <label>Apartment
            <select value={inputs.unitCode} onChange={(event) => set({ unitCode: event.target.value })}>
              {reveranceUnits.map((unit) => (
                <option key={unit.code} value={unit.code}>{unit.code} · Building {unit.building} · Floor {unit.floor} · {unit.area} m² · {unit.type}</option>
              ))}
            </select>
          </label>
          <Slider label="Price per m²" min={reveranceCalculatorRanges.pricePerSquareMetre.min} max={reveranceCalculatorRanges.pricePerSquareMetre.max} step={reveranceCalculatorRanges.pricePerSquareMetre.step} value={inputs.pricePerSquareMetre} suffix="€" onChange={(value) => set({ pricePerSquareMetre: value })} />
          <Slider label="Down payment" min={reveranceCalculatorRanges.downPaymentPercent.min} max={reveranceCalculatorRanges.downPaymentPercent.max} step={reveranceCalculatorRanges.downPaymentPercent.step} value={inputs.downPaymentPercent} suffix="%" onChange={(value) => set({ downPaymentPercent: value })} />
          <Slider label="Financing" min={reveranceCalculatorRanges.financingPercent.min} max={reveranceCalculatorRanges.financingPercent.max} step={reveranceCalculatorRanges.financingPercent.step} value={inputs.financingPercent} suffix="%" onChange={(value) => set({ financingPercent: value })} />
          <Slider label="Gross yield" min={reveranceCalculatorRanges.grossYieldPercent.min} max={reveranceCalculatorRanges.grossYieldPercent.max} step={reveranceCalculatorRanges.grossYieldPercent.step} value={inputs.grossYieldPercent} suffix="%" onChange={(value) => set({ grossYieldPercent: value })} />
          <Slider label="Annual growth" min={reveranceCalculatorRanges.annualGrowthPercent.min} max={reveranceCalculatorRanges.annualGrowthPercent.max} step={reveranceCalculatorRanges.annualGrowthPercent.step} value={inputs.annualGrowthPercent} suffix="%" onChange={(value) => set({ annualGrowthPercent: value })} />
          <Slider label="Holding years" min={reveranceCalculatorRanges.holdingYears.min} max={reveranceCalculatorRanges.holdingYears.max} step={reveranceCalculatorRanges.holdingYears.step} value={inputs.holdingYears} suffix=" yrs" onChange={(value) => set({ holdingYears: value })} />
        </form>
        <div className="result">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>{result.unit.code} · {result.unit.type} · {result.unit.area} m² · {result.unit.orientation}</p>
          <strong>{euro.format(result.holdingProjection.netWorth)}</strong>
          <p>Projected net worth after {result.inputs.holdingYears} years · {result.holdingProjection.multiple.toFixed(2)}x invested equity</p>
          <div className="stat-grid" style={{ marginTop: "1rem" }}>
            <Metric label="List price" value={euro.format(result.listPrice)} />
            <Metric label="Down payment" value={euro.format(result.downPayment)} />
            <Metric label="During construction" value={euro.format(result.constructionInstallments)} />
            <Metric label="Loan" value={euro.format(result.loanAmount)} />
            <Metric label="Monthly bank payment" value={euro.format(result.monthlyBankPayment)} />
            <Metric label="Net monthly rent" value={euro.format(result.netMonthlyRent)} />
            <Metric label="Monthly surplus" value={euro.format(result.monthlySurplus)} />
            <Metric label="Completion value" value={euro.format(result.completionValue)} />
          </div>
          <div className="table-wrap" style={{ marginTop: "1rem" }}>
            <table>
              <thead><tr><th>Year</th><th>Property</th><th>Debt</th><th>Cash</th><th>Net worth</th></tr></thead>
              <tbody>
                {result.milestones.map((row) => (
                  <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{euro.format(row.propertyValue)}</td>
                    <td>{euro.format(row.remainingDebt)}</td>
                    <td>{euro.format(row.accumulatedCash)}</td>
                    <td>{euro.format(row.netWorth)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step, suffix, onChange }: { label: string; value: number; min: number; max: number; step: number; suffix: string; onChange: (value: number) => void }) {
  return (
    <label>{label} · {value}{suffix}
      <input className="slider" type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <article className="stat" style={{ background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.16)" }}><p>{label}</p><strong>{value}</strong></article>;
}
