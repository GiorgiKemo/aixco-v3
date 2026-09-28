import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  accent,
  body,
  image,
  alt,
  note,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  body: string;
  image: string;
  alt: string;
  note?: string;
}) {
  return (
    <section className="page-hero">
      <Image src={image} alt={alt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      <div className="veil" />
      <div className="content">
        <p className="eyebrow" style={{ color: "var(--gold)" }}>{eyebrow}</p>
        <h1>{title}{accent ? <> <em style={{ fontStyle: "normal", color: "var(--gold)" }}>{accent}</em></> : null}</h1>
        <p>{body}</p>
        {note ? <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>{note}</p> : null}
      </div>
    </section>
  );
}
