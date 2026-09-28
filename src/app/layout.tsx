import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const gilroy = localFont({
  src: [
    { path: "../assets/fonts/Gilroy-Thin.woff2", weight: "100", style: "normal" },
    { path: "../assets/fonts/Gilroy-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/Gilroy-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/Gilroy-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../assets/fonts/Gilroy-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aixco-v3.vercel.app"),
  title: { default: "AIXCO.Global | Real Estate Investment", template: "%s | AIXCO.Global" },
  description: "Explore selected real estate opportunities with transparent euro pricing from EUR 45,000, brokerage, and property administration through AIXCO.",
  openGraph: {
    siteName: "AIXCO.Global",
    images: [{ url: "/media/mosaic/batumi-golden-hour-coastline.webp", width: 1920, height: 1080, alt: "Batumi coastline at golden hour" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${gilroy.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a className="skip-link" href="#content">Skip to content</a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
