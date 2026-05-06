// Server component for article pages
// ============================================================
// app/actualites/[slug]/page.tsx
//
// Génère la page détaillée d'un article à partir de son slug.
// Cette route empêche les erreurs 404 lorsque l'on clique sur un
// article depuis la page des actualités. Si aucun article
// correspondant n'est trouvé, la page renvoie notFound().
// ============================================================

import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticleBySlug } from "@/data/articles";

const BLUE = "#0B3D91";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  // Formater la date en français
  const date = new Date(article!.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        color: "#111",
      }}
    >
      <Navbar />
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 9,
              color: "#E8272A",
              letterSpacing: "0.3em",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            {article!.categorie}
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            {article!.titre}
          </h1>
          <div
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 8,
            }}
          >
            {date} · {article!.auteur}
          </div>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />
      <section style={{ padding: "60px 40px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 900,
              color: "#0D1B3E",
              marginBottom: 20,
            }}
          >
            {article!.sous_titre}
          </div>
          <div
            style={{
              fontSize: 14,
              color: "#555",
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}
          >
            {article!.contenu}
          </div>
          {article!.lien_externe && article!.lien_externe.trim() && (
            <p style={{ marginTop: 24 }}>
              <a
                href={article!.lien_externe}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: BLUE, textDecoration: "none", fontWeight: 700 }}
              >
                Consulter la publication originale →
              </a>
            </p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}