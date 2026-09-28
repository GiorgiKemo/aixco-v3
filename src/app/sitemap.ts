import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/reverance-batumi", "/reverance-batumi/calculator", "/invest-in-batumi", "/georgia-residency", "/georgia-tax-residency", "/georgia-tax-residency/photo-credits", "/medical-tourism", "/aixco-global-bond"];
  return routes.map((route) => ({ url: `https://aixco-v3.vercel.app${route}`, changeFrequency: "weekly", priority: route === "" ? 1 : 0.8 }));
}
