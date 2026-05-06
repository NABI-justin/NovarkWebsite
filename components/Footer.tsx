"use client";
// ============================================================
// components/Footer.tsx
// GUIDE MISE À JOUR :
// Mettre vrais liens réseaux → modifier URLs dans RESEAUX
// Ajouter réseau social → copier un bloc dans RESEAUX
// Modifier mentions légales → modifier LEGAL_LINKS
// La date se met automatiquement à chaque déploiement
// ============================================================

import Link from "next/link";
import { CONTACT } from "@/data/novark";
import { RESPONSABLE_SITE } from "@/data/equipe";

// ── METTRE VOS VRAIS LIENS ICI ──────────────────────────────
const RESEAUX = [
  { label: "LinkedIn",    href: "https://linkedin.com/company/novark",  icon: "in" },
  { label: "Facebook",    href: "https://facebook.com/novark",          icon: "f"  },
  { label: "Instagram",   href: "https://instagram.com/novark",         icon: "ig" },
  { label: "X",           href: "https://x.com/novark",                 icon: "𝕏"  },
  { label: "YouTube",     href: "https://youtube.com/@novark",          icon: "▶" },
  { label: "TikTok",      href: "https://tiktok.com/@novark",           icon: "♪"  },
  { label: "GitHub",      href: "https://github.com/novark-ai",         icon: "<>" },
  { label: "ResearchGate",href: "https://researchgate.net/lab/novark",  icon: "RG" },
];

const FOOTER_COLS = {
  "Explorer": [
    { label: "Expertises",       href: "/expertises"       },
    { label: "Secteurs",         href: "/secteurs"         },
    { label: "Projets",          href: "/projets"          },
    { label: "À propos",         href: "/apropos"          },
  ],
  "Actualités": [
    { label: "Articles",         href: "/actualites"              },
    { label: "Événements",       href: "/evenements"              },
    { label: "Presse",           href: "/actualites/presse"       },
  ],
  "Multimédia": [
    { label: "Images",           href: "/multimedia/images"       },
    { label: "Vidéos",           href: "/multimedia/videos"       },
    { label: "Publications",     href: "/multimedia/publications" },
    { label: "NOVARK+",          href: "/novark-plus"             },
  ],
  "Légal": [
    { label: "Contact",                   href: "/contact"              },
    { label: "Politique de confidentialité", href: "/confidentialite"  },
    { label: "Mentions légales",          href: "/mentions-legales"     },
    { label: "Plan du site",              href: "/plan-du-site"         },
  ],
};

export default function Footer() {
  const today = new Date();
  const dateFormatted = today.toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });

  return (
    <footer style={{ background: "#000", borderTop: "3px solid #E8272A", fontFamily: "Arial, sans-serif" }}>

      {/* SUIVEZ NOVARK */}
      <div style={{ padding: "36px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase", marginBottom: 18 }}>
            Suivez NOVARK
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {RESEAUX.map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.1)", padding: "7px 14px", textDecoration: "none", color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, transition: "all 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#E8272A"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                <span style={{ fontSize: 10, fontWeight: 900, color: "#E8272A" }}>{r.icon}</span>
                {r.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COLONNES LIENS */}
      <div style={{ padding: "40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {Object.entries(FOOTER_COLS).map(([cat, links]) => (
            <div key={cat}>
              <div style={{ fontSize: 9, color: "#E8272A", letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase", marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {cat}
              </div>
              {links.map((l) => (
                <Link key={l.href} href={l.href}
                  style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", padding: "5px 0", fontWeight: 500 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CARTE DE VISITE */}
      <div style={{ padding: "28px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 40, alignItems: "center" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", width: 40, height: 16, borderRadius: "50%", border: "1.5px solid #E8272A", transform: "rotate(-22deg)" }} />
              <span style={{ fontWeight: 900, fontSize: 14, color: "#fff", fontStyle: "italic", zIndex: 1 }}>N</span>
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", color: "#fff" }}>NOVARK</div>
              <div style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em" }}>INTELLIGENCE · INNOVATION · IMPACT</div>
            </div>
          </div>

          {/* Coordonnées */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Localisation", val: CONTACT.location, href: "#" },
              { label: "Email", val: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { label: "Téléphone", val: CONTACT.phone, href: `tel:${CONTACT.phone}` },
              { label: "Site web", val: CONTACT.website, href: "#" },
            ].map((c) => (
              <div key={c.label}>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
                <a href={c.href} style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 500, textDecoration: "none" }}>{c.val}</a>
              </div>
            ))}
          </div>

          {/* Badge */}
          <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "12px 18px", textAlign: "center" }}>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Startup IA</div>
            <div style={{ fontSize: 12, color: "#fff", fontWeight: 700 }}>Burkina Faso</div>
            <div style={{ fontSize: 10, color: "#E8272A", marginTop: 4 }}>Founded 2026</div>
          </div>
        </div>
      </div>

      {/* BAS DE PAGE — mentions légales */}
      <div style={{ padding: "16px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>Éditeur de la page : </span>
              {RESPONSABLE_SITE.nom} — {RESPONSABLE_SITE.titre}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}>
              Page mise à jour pour la dernière fois : <span style={{ color: "rgba(255,255,255,0.3)" }}>{dateFormatted}</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.15)" }}>
              © {today.getFullYear()} NOVARK. Tous droits réservés.
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { label: "Plan du site", href: "/plan-du-site" },
                { label: "Politique de confidentialité", href: "/confidentialite" },
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "Accessibilité", href: "/accessibilite" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
