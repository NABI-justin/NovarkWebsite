"use client";
// ============================================================
// app/page.tsx
// GUIDE : modifier contenu → data/novark.ts
// Ajouter image slideshow → data/novark.ts → HERO_SLIDES
//   + mettre fichier dans public/images/hero/
// ============================================================

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EXPERTISES, SECTEURS, STATS, CONTACT, HERO_SLIDES } from "@/data/novark";

const BLUE = "#0B3D91";

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const cur = HERO_SLIDES[slide];

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#111" }}>
      <Navbar />

      {/* ── HERO SLIDESHOW — fond noir avec image ───────────────── */}
      <section style={{ position: "relative", height: "88vh", minHeight: 500, overflow: "hidden", background: "#000" }}>

        {HERO_SLIDES.map((s, i) => (
          <div key={i} style={{ position: "absolute", inset: 0, opacity: i === slide ? 1 : 0, transition: "opacity 1.2s ease-in-out" }}>
            <Image src={s.src} alt={s.titre} fill style={{ objectFit: "cover", objectPosition: "center" }} priority={i === 0} />
            {/* Overlay fort à gauche pour lisibilité garantie */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)" }} />
          </div>
        ))}

        {/* Texte hero */}
        <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", width: "100%" }}>
            <div style={{ maxWidth: 560 }}>
              <div style={{ fontSize: 10, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 20, textShadow: "none" }}>
                Startup Technologique — Ouagadougou, Burkina Faso
              </div>
              <h1 key={`t-${slide}`} style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.08, letterSpacing: "-0.01em", textTransform: "uppercase", marginBottom: 20, animation: "slidein 0.7s ease-out", whiteSpace: "pre-line", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                {cur.titre}
              </h1>
              <p key={`s-${slide}`} style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", lineHeight: 1.8, marginBottom: 32, animation: "slidein 0.9s ease-out", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
                {cur.sous_titre}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href={cur.lien} style={{ background: "#E8272A", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "13px 28px", textDecoration: "none", textTransform: "uppercase" }}>
                  {cur.cta}
                </Link>
                <Link href="/contact" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", padding: "13px 28px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)", backdropFilter: "blur(4px)" }}>
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 10 }}>
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
              style={{ width: i === slide ? 24 : 8, height: 8, background: i === slide ? "#E8272A" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>

        {/* Arrows */}
        <button onClick={() => setSlide((slide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: 40, height: 40, cursor: "pointer", fontSize: 20, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
        <button onClick={() => setSlide((slide + 1) % HERO_SLIDES.length)}
          style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: 40, height: 40, cursor: "pointer", fontSize: 20, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>

        {/* Counter */}
        <div style={{ position: "absolute", bottom: 24, right: 40, fontSize: 11, color: "rgba(255,255,255,0.4)", zIndex: 10, fontWeight: 700 }}>
          {String(slide + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
        </div>
      </section>

      {/* ── STATS + AGROSCAN — fond blanc ───────────────────────── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px" }}>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderRight: "1px solid #eee" }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{ padding: "28px 20px", borderRight: i < 3 ? "1px solid #eee" : "none", textAlign: "center" }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: "#0D1B3E" }}>{s.val}</div>
                  <div style={{ fontSize: 9, color: "#888", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* AgroScan card */}
            <div style={{ borderLeft: "none" }}>
              <div style={{ background: "#E8272A", padding: "9px 18px", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 9, fontWeight: 900, color: "#fff", letterSpacing: "0.15em", textTransform: "uppercase" }}>Projet Phare</span>
                <span style={{ fontSize: 8, background: "rgba(0,0,0,0.15)", color: "#fff", padding: "2px 7px", fontWeight: 700 }}>EN COURS</span>
              </div>
              <div style={{ padding: "16px 18px" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#0D1B3E" }}>AgroScan</div>
                <div style={{ fontSize: 9, color: "#999", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>IA · Maladies du riz</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#eee" }}>
                  {[{ val: "99,54%", label: "AUROC" }, { val: "99,54%", label: "F1 Score" }].map(m => (
                    <div key={m.label} style={{ background: "#f8f8f8", padding: "10px 12px" }}>
                      <div style={{ fontSize: 16, fontWeight: 900, color: "#0D1B3E" }}>{m.val}</div>
                      <div style={{ fontSize: 8, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/projets/agroscan" style={{ display: "block", marginTop: 12, fontSize: 10, color: "#E8272A", fontWeight: 700, letterSpacing: "0.08em", textDecoration: "none", textTransform: "uppercase" }}>
                  Voir le projet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISES — fond blanc ──────────────────────────────── */}
      <section id="expertises" style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 40px", borderBottom: "1px solid #eee" }}>
            <span style={{ fontSize: 10, color: "#888", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600 }}>Nos Expertises</span>
            <Link href="/expertises" style={{ fontSize: 10, color: BLUE, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none" }}>Voir tout →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {EXPERTISES.map((e, i) => (
              <Link key={e.slug} href={`/expertises/${e.slug}`}
                style={{ background: "#fff", padding: "22px 20px", textDecoration: "none", display: "block", borderRight: (i + 1) % 4 !== 0 ? "1px solid #eee" : "none", borderBottom: "1px solid #eee", transition: "background 0.15s" }}
                onMouseEnter={ev => (ev.currentTarget.style.background = "#f4f7fb")}
                onMouseLeave={ev => (ev.currentTarget.style.background = "#fff")}
              >
                <div style={{ fontSize: 9, color: "#ccc", fontWeight: 700, marginBottom: 9 }}>{e.num}</div>
                <div style={{ fontSize: 12, fontWeight: 900, color: "#0D1B3E", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 7, lineHeight: 1.3 }}>{e.name}</div>
                <div style={{ fontSize: 11, color: "#777", lineHeight: 1.6, marginBottom: 14 }}>{e.short}</div>
                <div style={{ fontSize: 13, color: "#ccc" }}>→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOVARK — fond légèrement gris ──────────────── */}
      <section style={{ background: "#f8f9fa", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ padding: "60px 40px", borderRight: "1px solid #eee" }}>
            <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 18 }}>Pourquoi NOVARK</div>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#0D1B3E", lineHeight: 1.2, marginBottom: 18 }}>
              Une technologie conçue pour nos réalités.
            </h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>
              Nos solutions fonctionnent sans connexion internet, sur des équipements accessibles, dans des conditions terrain réelles. Pas des solutions importées — des systèmes pensés et construits pour l'Afrique de l'Ouest.
            </p>
          </div>
          <div>
            {[
              { val: "13", label: "Expertises maîtrisées" },
              { val: "11", label: "Secteurs d'intervention" },
              { val: "BF", label: "Conçu au Burkina Faso" },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: "32px 40px", borderBottom: i < 2 ? "1px solid #eee" : "none" }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: "#0D1B3E" }}>{s.val}</div>
                <div style={{ fontSize: 9, color: "#999", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTEURS — fond blanc ────────────────────────────────── */}
      <section id="secteurs" style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
            <div>
              <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>Secteurs d'intervention</div>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: "#0D1B3E" }}>Partout où l'IA peut faire la différence.</h2>
            </div>
            <Link href="/secteurs" style={{ fontSize: 10, color: BLUE, fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none" }}>Voir tout →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#eee" }}>
            {SECTEURS.map(s => (
              <Link key={s.slug} href={`/secteurs/${s.slug}`}
                style={{ background: "#fff", padding: "16px 22px", display: "flex", alignItems: "center", gap: 10, textDecoration: "none", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#f4f7fb")}
                onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
              >
                <div style={{ width: 4, height: 4, background: "#E8272A", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>{s.name}</span>
                <span style={{ fontSize: 11, color: "#ccc", marginLeft: "auto" }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT — fond navy ──────────────────────────────────── */}
      <section id="contact" style={{ background: "#0D1B3E" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>Contact</div>
              <h2 style={{ fontSize: 32, fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 14 }}>Collaborer avec NOVARK ?</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>Projet, partenariat, démonstration ou investissement — discutons ensemble.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.08)" }}>
              {[
                { label: "Téléphone", val: CONTACT.phone, href: `tel:${CONTACT.phone}` },
                { label: "Email", val: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { label: "Localisation", val: CONTACT.location, href: "#" },
              ].map(c => (
                <a key={c.label} href={c.href}
                  style={{ background: "transparent", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", transition: "background 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{c.label}</span>
                  <span style={{ fontSize: 13, color: "#fff", fontWeight: 700 }}>{c.val}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes slidein {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
