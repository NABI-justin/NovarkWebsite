"use client";
// Page placeholder pour la section Vidéos & Démos.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BLUE = "#0B3D91";

export default function VideosPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#111" }}>
      <Navbar />
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}
          >
            Multimédia
          </div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>
            Vidéos &amp; Démos
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.8 }}>
            Les démonstrations vidéo et présentations de nos projets seront disponibles prochainement.
          </p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: "#f0f0f0", marginBottom: 16 }}>Bientôt</div>
        <div style={{ fontSize: 14, color: "#aaa", lineHeight: 1.8 }}>
          Les vidéos et démonstrations seront publiées prochainement.
        </div>
      </section>
      <Footer />
    </div>
  );
}