import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <p className="eyebrow">404</p>
      <h1 className="display">This page is not on the map.</h1>
      <Link className="btn-ink" href="/">Back to AIXCO.Global</Link>
    </section>
  );
}
