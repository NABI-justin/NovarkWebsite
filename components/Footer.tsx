"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/data/novark";
import { RESPONSABLE_SITE } from "@/data/equipe";

const RESEAUX = [
  { label: "LinkedIn", href: "https://linkedin.com/company/novark", icon: "in", actif: false },
  { label: "Facebook", href: "https://facebook.com/novark", icon: "f", actif: false },
  { label: "Instagram", href: "https://instagram.com/novark", icon: "ig", actif: false },
  { label: "X", href: "https://x.com/novark", icon: "𝕏", actif: false },
];

type FooterLink = { label: string; href?: string; actif?: boolean };

const FOOTER_COLS: Record<string, FooterLink[]> = {
  Explorer: [
    { label: "Expertises", href: "/expertises", actif: true },
    { label: "Secteurs", href: "/secteurs", actif: true },
    { label: "Projets", href: "/projets", actif: true },
    { label: "À propos", href: "/apropos", actif: true },
  ],
  Actualités: [
    { label: "Articles", href: "/actualites", actif: true },
    { label: "Événements", href: "/evenements", actif: true },
    { label: "Presse", actif: false },
  ],
  Multimédia: [
    { label: "Images", href: "/multimedia/images", actif: true },
    { label: "Vidéos", href: "/multimedia/videos", actif: true },
    { label: "Publications", href: "/multimedia/publications", actif: true },
    { label: "NOVARK+", href: "/novark-plus", actif: true },
  ],
  Légal: [
    { label: "Contact", href: "/contact", actif: true },
    { label: "Politique de confidentialité", actif: false },
    { label: "Mentions légales", actif: false },
    { label: "Plan du site", actif: false },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const today = new Date();
  const dateFormatted = today.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <footer style={{ background: "#000", borderTop: "3px solid #E8272A", fontFamily: "var(--font-sans)" }}>
      <div style={{ padding: "36px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="section-label" style={{ color: "#E8272A", marginBottom: 18 }}>Suivez NOVARK</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {RESEAUX.map((r) => (
              <a key={r.label} href={r.actif ? r.href : pathname} aria-disabled={!r.actif}
                style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.1)", padding: "7px 14px", textDecoration: "none", color: r.actif ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.22)", fontSize: 11, fontWeight: 600, pointerEvents: r.actif ? "auto" : "none" }}>
                <span style={{ fontSize: 10, fontWeight: 900, color: "#E8272A" }}>{r.icon}</span>{r.label}{!r.actif ? " (bientôt)" : ""}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {Object.entries(FOOTER_COLS).map(([cat, links]) => (
            <div key={cat}>
              <div className="section-label" style={{ color: "#E8272A", marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{cat}</div>
              {links.map((l) => l.actif && l.href ? (
                <Link key={l.label} href={l.href} style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", padding: "5px 0", fontWeight: 500 }}>{l.label}</Link>
              ) : (
                <span key={l.label} style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.2)", padding: "5px 0" }}>{l.label} (bientôt)</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px 40px", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
        © {today.getFullYear()} NOVARK · Éditeur: {RESPONSABLE_SITE.nom} · Mise à jour: {dateFormatted} · {CONTACT.email}
      </div>
    </footer>
  );
}
