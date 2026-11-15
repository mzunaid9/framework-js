import type { Metadata } from "next";

export const metadata: Metadata = { title: "À propos · TaskFlow" };

export default function AboutPage() {
  return (
    <section>
      <h1>À propos</h1>
      <p>
        TaskFlow version Next.js : même projet que TP3
      </p>
      <p className="muted">React + Next.js · M2 ESIEE-IT</p>
    </section>
  );
}