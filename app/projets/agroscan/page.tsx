"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJETS, CONTACT } from "@/data/novark";

const BLUE = "#0B3D91";
const p = PROJETS["agroscan"];

export default function AgroScanPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#111" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Accueil</Link>
            <span>/</span>
            <Link href="/projets" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Projets</Link>
            <span>/</span>
            <span style={{ color: "#E8272A" }}>AgroScan</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase" }}>Projet Phare NOVARK</div>
                <span style={{ fontSize: 9, background: "#E8272A", color: "#fff", padding: "3px 10px", fontWeight: 700, letterSpacing: "0.1em" }}>{p.statut}</span>
              </div>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: 16 }}>AgroScan</h1>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: 520 }}>{p.description}</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.1)" }}>
                {p.resultats.map(r => (
                  <div key={r.label} style={{ background: "#0D1B3E", padding: "16px" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{r.val}</div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>{r.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8272A" }} />
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Fonctionne sans connexion internet</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: 3, background: BLUE }} />

      {/* COMMENT ÇA MARCHE */}
      <section style={{ padding: "72px 40px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Fonctionnement</div>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: "#0D1B3E", marginBottom: 12 }}>Comment AgroScan détecte sans jamais voir une plante malade ?</h2>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, maxWidth: 600, marginBottom: 48 }}>
            Contrairement aux approches classiques qui nécessitent des milliers d'images annotées de maladies, AgroScan n'a besoin que d'images de feuilles saines.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#eee" }}>
            {[
              { n: "01", titre: "Apprentissage", texte: "Le modèle apprend uniquement l'apparence d'une feuille de riz saine." },
              { n: "02", titre: "Analyse", texte: "Face à une nouvelle image, il compare avec ce qu'il connaît comme normal." },
              { n: "03", titre: "Détection", texte: "Toute déviation par rapport à l'état sain est signalée comme anomalie." },
              { n: "04", titre: "Carte thermique", texte: "Une carte thermique localise précisément la zone infectée sur l'image." },
            ].map(step => (
              <div key={step.n} style={{ background: "#fff", padding: "28px 24px" }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: "#f0f0f0", marginBottom: 16 }}>{step.n}</div>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#0D1B3E", marginBottom: 10 }}>{step.titre}</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{step.texte}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section style={{ background: "#f8f9fa", padding: "72px 40px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Résultats Validés</div>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: "#0D1B3E", marginBottom: 12 }}>Performances dépassant l'état de l'art officiel.</h2>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, maxWidth: 560, marginBottom: 40 }}>
            Comparaison avec PatchCore officiel (Google Research, CVPR 2022) sur le dataset Rice Leaf Disease.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#ddd", marginBottom: 24 }}>
            <div style={{ background: "#0D1B3E", padding: "36px 28px", color: "#fff" }}>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Image AUROC</div>
              <div style={{ fontSize: 52, fontWeight: 900, color: "#fff" }}>99,54%</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 8 }}>PatchCore officiel : 99,1%</div>
            </div>
            <div style={{ background: "#E8272A", padding: "36px 28px", color: "#fff" }}>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>F1 Score</div>
              <div style={{ fontSize: 52, fontWeight: 900, color: "#fff" }}>99,54%</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>PatchCore officiel : ~98%</div>
            </div>
            <div style={{ background: "#fff", padding: "36px 28px" }}>
              <div style={{ fontSize: 9, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Images malades entraînement</div>
              <div style={{ fontSize: 52, fontWeight: 900, color: "#0D1B3E" }}>0</div>
              <div style={{ fontSize: 12, color: "#aaa", marginTop: 8 }}>Entraîné sur feuilles saines uniquement</div>
            </div>
          </div>
          <div style={{ background: "#fff3cd", border: "1px solid #ffc107", padding: "14px 20px", fontSize: 13, color: "#856404" }}>
            <strong>Note :</strong> Ces résultats concernent la <strong>détection</strong> d'anomalies. La classification précise du type de maladie est en cours de développement.
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section style={{ padding: "72px 40px", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Architecture de Déploiement</div>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: "#0D1B3E", marginBottom: 40 }}>Sur drone, sans connexion, en temps réel.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#eee" }}>
            {[
              { titre: "Drone DJI Mini 3", desc: "Capture les images de la parcelle en vol à 50m de hauteur. Couvre une parcelle entière en un seul survol." },
              { titre: "Raspberry Pi 5 embarqué", desc: "Analyse chaque image en temps réel pendant le vol. Aucune connexion internet requise. ~100 USD par unité." },
              { titre: "Carte de résultats", desc: "À l'atterrissage, l'agriculteur reçoit une carte des zones à risque. Sans expert. Sans connexion." },
            ].map(c => (
              <div key={c.titre} style={{ background: "#fff", padding: "32px 28px" }}>
                <div style={{ width: 40, height: 3, background: "#E8272A", marginBottom: 20 }} />
                <div style={{ fontSize: 16, fontWeight: 900, color: "#0D1B3E", marginBottom: 12 }}>{c.titre}</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{c.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 1, background: "#f8f9fa", padding: "20px 28px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 9, color: BLUE, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Technologies utilisées :</div>
            {p.technologies.map(t => (
              <span key={t} style={{ background: "#fff", border: "1px solid #ddd", padding: "4px 12px", fontSize: 11, fontWeight: 600, color: "#333" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* POINTS CLÉS */}
      <section style={{ background: "#0D1B3E", padding: "60px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Points Clés</div>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 28 }}>Ce qui rend AgroScan unique.</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {p.points.map((point, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", padding: "14px 18px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 4, height: 4, background: "#E8272A", borderRadius: "50%", flexShrink: 0, marginTop: 5 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href={`mailto:${CONTACT.email}`} style={{ background: "#E8272A", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", padding: "16px 28px", textDecoration: "none", textTransform: "uppercase", textAlign: "center" }}>
              Demander une démonstration →
            </a>
            <Link href="/actualites?cat=Recherche" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 12, fontWeight: 600, padding: "16px 28px", textDecoration: "none", textAlign: "center", border: "1px solid rgba(255,255,255,0.15)" }}>
              Lire la publication scientifique →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
