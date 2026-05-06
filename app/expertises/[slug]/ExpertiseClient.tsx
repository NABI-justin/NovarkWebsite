"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EXPERTISES, PROJETS, CONTACT } from "@/data/novark";

const BLUE = "#0B3D91";

export default function ExpertiseClient({ slug }: { slug: string }) {
  const expertise = EXPERTISES.find(e => e.slug === slug);
  if (!expertise) return null;

  const projetsLies = Object.values(PROJETS).filter(p =>
    expertise.secteurs.some(s => s === p.secteur || s === "Tous secteurs")
  );

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#111" }}>
      <Navbar />

      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Accueil</Link>
            <span>/</span>
            <Link href="/#expertises" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Expertises</Link>
            <span>/</span>
            <span style={{ color: "#E8272A" }}>{expertise.name}</span>
          </div>
          <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>
            Expertise {expertise.num}
          </div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>{expertise.name}</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", maxWidth: 580, lineHeight: 1.8 }}>{expertise.description}</p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />

      <section style={{ padding: "48px 40px", borderBottom: "1px solid #eee", background: "#f8f9fa" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Secteurs concernés</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {expertise.secteurs.map(s => (
              <span key={s} style={{ background: "#fff", border: "1px solid #ddd", padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#333" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {projetsLies.length > 0 && (
        <section style={{ padding: "60px 40px", borderBottom: "1px solid #eee" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 24 }}>Projets dans ce domaine</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 1, background: "#eee" }}>
              {projetsLies.map(p => (
                <Link key={p.slug} href={`/projets/${p.slug}`} style={{ background: "#fff", textDecoration: "none", display: "block", overflow: "hidden" }}>
                  <div style={{ background: "#E8272A", padding: "9px 18px", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 9, fontWeight: 900, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase" }}>Projet</span>
                    <span style={{ fontSize: 8, background: "rgba(0,0,0,0.15)", color: "#fff", padding: "2px 7px", fontWeight: 700 }}>{p.statut}</span>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#0D1B3E", marginBottom: 4 }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>{p.tagline}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#eee", marginBottom: 14 }}>
                      {p.resultats.map(r => (
                        <div key={r.label} style={{ background: "#f8f9fa", padding: "10px 8px", textAlign: "center" }}>
                          <div style={{ fontSize: 14, fontWeight: 900, color: "#0D1B3E" }}>{r.val}</div>
                          <div style={{ fontSize: 8, color: "#aaa", textTransform: "uppercase" }}>{r.label}</div>
                        </div>
                      ))}
                    </div>
                    <span style={{ fontSize: 11, color: "#E8272A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Voir le projet →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ background: "#f8f9fa", padding: "48px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Autres expertises NOVARK</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#eee" }}>
            {EXPERTISES.filter(e => e.slug !== slug).slice(0, 4).map(e => (
              <Link key={e.slug} href={`/expertises/${e.slug}`} style={{ background: "#fff", padding: "20px", textDecoration: "none" }}
                onMouseEnter={ev => (ev.currentTarget.style.background = "#f4f7fb")}
                onMouseLeave={ev => (ev.currentTarget.style.background = "#fff")}>
                <div style={{ fontSize: 9, color: "#ccc", marginBottom: 6 }}>{e.num}</div>
                <div style={{ fontSize: 12, fontWeight: 900, color: "#0D1B3E", textTransform: "uppercase", marginBottom: 6 }}>{e.name}</div>
                <div style={{ fontSize: 11, color: "#777" }}>{e.short}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0D1B3E", padding: "32px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#fff" }}>Un projet en {expertise.name} ?</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>Discutons ensemble.</div>
          </div>
          <a href={`mailto:${CONTACT.email}`} style={{ background: "#E8272A", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "14px 28px", textDecoration: "none", textTransform: "uppercase" }}>
            Nous Contacter →
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
