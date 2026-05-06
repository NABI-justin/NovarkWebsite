"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getArticlesPublies } from "@/data/articles";

const BLUE = "#0B3D91";

export default function ActualitesPage() {
  const articles = getArticlesPublies();

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#111" }}>
      <Navbar />
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>NOVARK</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>Actualités</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.8 }}>Articles, publications scientifiques et communiqués de presse.</p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />

      <section style={{ padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {articles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#aaa" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#eee", marginBottom: 16 }}>Bientôt disponible</div>
              <div style={{ fontSize: 14 }}>Les articles seront publiés prochainement.</div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#eee" }}>
              {articles.map(a => (
                <Link key={a.slug} href={`/actualites/${a.slug}`} style={{ background: "#fff", textDecoration: "none", display: "block", padding: "28px" }}
                  onMouseEnter={ev => (ev.currentTarget.style.background = "#f4f7fb")}
                  onMouseLeave={ev => (ev.currentTarget.style.background = "#fff")}>
                  <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.15em", fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>{a.categorie} · {new Date(a.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#0D1B3E", lineHeight: 1.3, marginBottom: 10 }}>{a.titre}</div>
                  <div style={{ fontSize: 12, color: "#777", lineHeight: 1.6, marginBottom: 16 }}>{a.resume}</div>
                  <div style={{ fontSize: 11, color: "#aaa" }}>{a.auteur}</div>
                  <div style={{ fontSize: 11, color: BLUE, fontWeight: 700, marginTop: 12 }}>Lire la suite →</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
