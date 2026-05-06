"use client";
// ============================================================
// app/projets/page.tsx
//
// Page listant tous les projets répertoriés dans data/novark.ts.
// Permet d'accéder à la liste des projets via /projets sans
// générer d'erreur 404. Chaque carte redirige vers la page
// individuelle du projet. Les données du projet sont extraites
// à partir de PROJETS, qui est un objet indexé par slug.
// ============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { PROJETS } from "@/data/novark";

const BLUE = "#0B3D91";

export default function ProjetsPage() {
  const projets = Object.values(PROJETS);
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
            NOVARK
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Projets
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 520,
              lineHeight: 1.8,
            }}
          >
            Nos projets illustrent l'application concrète de nos
            technologies sur le terrain.
          </p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />
      <section style={{ padding: "60px 40px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {projets.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#eee", marginBottom: 12 }}>
                Aucun projet pour le moment
              </div>
              <div style={{ fontSize: 14 }}>Les projets seront publiés prochainement.</div>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: 1,
                background: "#eee",
              }}
            >
              {projets.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projets/${p.slug}`}
                  style={{ background: "#fff", textDecoration: "none", display: "block" }}
                >
                  <div
                    style={{
                      background: "#E8272A",
                      padding: "9px 18px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 900,
                        color: "#fff",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Projet
                    </span>
                    <span
                      style={{
                        fontSize: 8,
                        background: "rgba(0,0,0,0.15)",
                        color: "#fff",
                        padding: "2px 7px",
                        fontWeight: 700,
                      }}
                    >
                      {p.statut}
                    </span>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div
                      style={{ fontSize: 22, fontWeight: 900, color: "#0D1B3E", marginBottom: 4 }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#999",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 16,
                      }}
                    >
                      {p.tagline}
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 1,
                        background: "#eee",
                        marginBottom: 14,
                      }}
                    >
                      {p.resultats.map((r) => (
                        <div
                          key={r.label}
                          style={{
                            background: "#f8f9fa",
                            padding: "10px 8px",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{ fontSize: 15, fontWeight: 900, color: "#0D1B3E" }}
                          >
                            {r.val}
                          </div>
                          <div
                            style={{ fontSize: 8, color: "#aaa", textTransform: "uppercase" }}
                          >
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#E8272A",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Voir le projet →
                    </span>
                  </div>
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