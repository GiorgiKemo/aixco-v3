import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CalculatorView } from "@/components/calculator-view";

export const metadata: Metadata = {
  title: "Reverance investment calculator",
  description: "Illustrative Reverance investment projection using AIXCO published assumptions. Confirm availability before reservation.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculator"
        title="Price the apartment."
        accent="Then the holding."
        body="Selected Reverance apartments, priced per square metre, with the same financing, yield and growth ranges used on the current AIXCO calculator."
        image="/media/thumbs/05-front-facade.webp"
        alt="Reverance residential towers project render"
      />
      <CalculatorView />
    </>
  );
}
