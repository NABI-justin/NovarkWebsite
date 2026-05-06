"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getEvenementsPublies } from "@/data/evenements";
const BLUE = "#0B3D91";
export default function Page() {
  const events = getEvenementsPublies();
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>NOVARK</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>Événements</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.8 }}>Conférences, webinaires et événements NOVARK.</p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 40px" }}>
        {events.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#eee", marginBottom: 12 }}>Aucun événement prévu</div>
            <div style={{ fontSize: 14 }}>Les prochains événements seront annoncés ici.</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#eee" }}>
            {events.map(e => (
              <div key={e.slug} style={{ background: "#fff", padding: "28px" }}>
                <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.15em", fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>{e.type} · {new Date(e.date_debut).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "#0D1B3E", marginBottom: 8 }}>{e.titre}</div>
                <div style={{ fontSize: 12, color: "#777", marginBottom: 8 }}>{e.lieu}, {e.pays}</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{e.description}</div>
                {e.lien && <a href={e.lien} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: BLUE, fontWeight: 700, textDecoration: "none", display: "block", marginTop: 12 }}>Plus d'infos →</a>}
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
