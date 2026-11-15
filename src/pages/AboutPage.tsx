import { Link } from "react-router";

export function AboutPage() {
  return (
    <section>
      <Link to="/" className="small">
        ← Tous les projets
      </Link>
      <h1>À propos de TaskFlow</h1>
      <p className="muted">
        appli React, TypeScript et Vite
      </p>
    </section>
  );
}