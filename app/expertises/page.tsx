"use client";
// ============================================================
// app/expertises/page.tsx
//
// Cette page liste l'ensemble des expertises définies dans
// data/novark.ts. Elle reprend le style du composant liste
// d'expertises présent sur la page d'accueil et permet d'éviter
// une erreur 404 lorsque l'utilisateur clique sur « Voir toutes »
// dans le menu de navigation. Chaque carte renvoie vers la page
// détaillée d'une expertise.
// ============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { EXPERTISES } from "@/data/novark";

const BLUE = "#0B3D91";

export default function ExpertisesPage() {
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
      {/* Entête */}
      <section
        style={{ background: "#0D1B3E", padding: "60px 40px" }}
      >
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
            Expertises
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 520,
              lineHeight: 1.8,
            }}
          >
            Découvrez toutes les expertises maîtrisées par NOVARK.
          </p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />
      {/* Liste des expertises */}
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
            Nos domaines d'expertise
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 1,
              background: "#eee",
            }}
          >
            {EXPERTISES.map((e) => (
              <Link
                key={e.slug}
                href={`/expertises/${e.slug}`}
                style={{
                  background: "#fff",
                  padding: "22px 20px",
                  textDecoration: "none",
                  display: "block",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(ev) => (ev.currentTarget.style.background = "#f4f7fb")}
                onMouseLeave={(ev) => (ev.currentTarget.style.background = "#fff")}
              >
                <div
                  style={{
                    fontSize: 9,
                    color: "#ccc",
                    fontWeight: 700,
                    marginBottom: 9,
                  }}
                >
                  {e.num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 900,
                    color: "#0D1B3E",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginBottom: 7,
                    lineHeight: 1.3,
                  }}
                >
                  {e.name}
                </div>
                <div
                  style={{ fontSize: 11, color: "#777", lineHeight: 1.6, marginBottom: 14 }}
                >
                  {e.short}
                </div>
                <div style={{ fontSize: 13, color: "#ccc" }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}