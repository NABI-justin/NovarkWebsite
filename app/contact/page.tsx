"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_INFO, RESEAUX_SOCIAUX, CONTACTS_EQUIPE } from "@/data/contact";

const BLUE = "#0B3D91";

export default function ContactPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#111" }}>
      <Navbar />
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>NOVARK</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", textTransform: "uppercase", marginBottom: 16 }}>Contact</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 500, lineHeight: 1.8 }}>Projet, partenariat, démonstration ou investissement — contactez-nous.</p>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />

      <section style={{ padding: "60px 40px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          <div>
            <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 24 }}>Coordonnées</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#eee" }}>
              {[
                { label: "Email", val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { label: "Téléphone", val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                { label: "Site web", val: CONTACT_INFO.website, href: "#" },
                { label: "Localisation", val: CONTACT_INFO.adresse, href: "#" },
              ].map(c => (
                <a key={c.label} href={c.href} style={{ background: "#fff", padding: "18px 22px", display: "flex", justifyContent: "space-between", textDecoration: "none" }}>
                  <span style={{ fontSize: 9, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{c.label}</span>
                  <span style={{ fontSize: 13, color: "#0D1B3E", fontWeight: 700 }}>{c.val}</span>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Suivez NOVARK</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {RESEAUX_SOCIAUX.filter(r => r.actif).map(r => (
                  <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 7, border: "1px solid #ddd", padding: "6px 14px", textDecoration: "none", color: "#555", fontSize: 11, fontWeight: 600 }}>
                    <span style={{ fontSize: 10, fontWeight: 900, color: "#E8272A" }}>{r.icon}</span>
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 24 }}>Selon votre besoin</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#eee" }}>
              {CONTACTS_EQUIPE.map(c => (
                <div key={c.sujet} style={{ background: "#fff", padding: "20px 22px" }}>
                  <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>{c.sujet}</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#0D1B3E" }}>{c.nom}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{c.titre}</div>
                  <a href={`mailto:${c.email}`} style={{ fontSize: 11, color: BLUE, textDecoration: "none", marginTop: 6, display: "block", fontWeight: 600 }}>{c.email} →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
