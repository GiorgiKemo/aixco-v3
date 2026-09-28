import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";

export const metadata: Metadata = {
  title: "AIXCO.Global | Real Estate Investment",
  description: "Explore selected real estate opportunities with transparent euro pricing from EUR 45,000, brokerage, and property administration through AIXCO.",
};

export default function HomePage() {
  return <HomeView />;
}
