"use client";
// ============================================================
// app/secteurs/page.tsx
//
// Page de liste des secteurs d'intervention. Utilisée pour
// afficher l'ensemble des secteurs couverts par NOVARK afin
// d'éviter les pages 404 lorsque l'utilisateur clique sur
// « Voir tous » dans le menu de navigation ou sur le bouton
// de la section « Secteurs » de la page d'accueil.
// ============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SECTEURS } from "@/data/novark";

const BLUE = "#0B3D91";

export default function SecteursPage() {
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
      {/* En-tête */}
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
            Secteurs
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 520,
              lineHeight: 1.8,
            }}
          >
            Tous les secteurs où l'intelligence artificielle et la robotique
            peuvent avoir un impact concret.
          </p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />
      {/* Liste des secteurs */}
      <section style={{ padding: "56px 40px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 9,
              color: BLUE,
              letterSpacing: "0.25em",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Secteurs d'intervention
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 1,
              background: "#eee",
            }}
          >
            {SECTEURS.map((s) => (
              <Link
                key={s.slug}
                href={`/secteurs/${s.slug}`}
                style={{
                  background: "#fff",
                  padding: "20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(ev) => (ev.currentTarget.style.background = "#f4f7fb")}
                onMouseLeave={(ev) => (ev.currentTarget.style.background = "#fff")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      background: "#E8272A",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{ fontSize: 14, fontWeight: 700, color: "#0D1B3E" }}
                  >
                    {s.name}
                  </span>
                </div>
                <div
                  style={{ fontSize: 12, color: "#777", lineHeight: 1.5, flex: 1 }}
                >
                  {s.description}
                </div>
                <span
                  style={{ fontSize: 12, color: "#E8272A", fontWeight: 700 }}
                >
                  Découvrir →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}