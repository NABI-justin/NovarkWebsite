"use client";
// ============================================================
// components/Navbar.tsx
// GUIDE : ajouter lien → modifier NAV_ITEMS
// ============================================================

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BLUE = "#0B3D91";

const NAV_ITEMS = [
  {
    label: "Explorer", key: "explorer",
    dropdown: {
      "Expertises": [
        { label: "Intelligence Artificielle", href: "/expertises/intelligence-artificielle" },
        { label: "Vision par Ordinateur",     href: "/expertises/vision-par-ordinateur"    },
        { label: "Robotique",                 href: "/expertises/robotique"                },
        { label: "Systèmes Embarqués",        href: "/expertises/systemes-embarques"       },
        { label: "Automatisation",            href: "/expertises/automatisation"           },
        { label: "Architecture & BTP",        href: "/expertises/architecture-btp"         },
        { label: "Voir toutes →",             href: "/expertises"                          },
      ],
      "Secteurs": [
        { label: "Agriculture",           href: "/secteurs/agriculture"        },
        { label: "Santé",                 href: "/secteurs/sante"              },
        { label: "Industrie",             href: "/secteurs/industrie"          },
        { label: "Énergie & Électricité", href: "/secteurs/energie-electricite"},
        { label: "Sécurité & Défense",    href: "/secteurs/securite-defense"   },
        { label: "Voir tous →",           href: "/secteurs"                    },
      ],
      "Projets": [
        { label: "AgroScan",  href: "/projets/agroscan" },
        { label: "En cours",  href: "/projets"          },
        { label: "À venir",   href: "/projets#avenir"   },
      ],
      "À propos": [
        { label: "Notre histoire", href: "/apropos#histoire"    },
        { label: "Notre équipe",   href: "/apropos#equipe"      },
        { label: "Notre mission",  href: "/apropos#mission"     },
        { label: "Partenaires",    href: "/apropos#partenaires" },
      ],
    },
  },
  {
    label: "Actualités & Événements", key: "actualites",
    dropdown: {
      "Actualités": [
        { label: "Tous les articles",        href: "/actualites"               },
        { label: "Recherche & Publications", href: "/actualites?cat=Recherche" },
        { label: "Communiqués de presse",    href: "/actualites?cat=Communiqué"},
      ],
      "Événements": [
        { label: "Conférences",   href: "/evenements?type=conference" },
        { label: "Webinaires",    href: "/evenements?type=webinaire"  },
        { label: "Agenda NOVARK", href: "/evenements"                 },
      ],
    },
  },
  {
    label: "Multimédia", key: "multimedia",
    dropdown: {
      "Galeries": [
        { label: "Images & Visuels",  href: "/multimedia/images"         },
        { label: "Vidéos & Démos",    href: "/multimedia/videos"         },
        { label: "Heatmaps AgroScan", href: "/multimedia/images#agroscan"},
      ],
      "Documents": [
        { label: "Publications PDF", href: "/multimedia/publications"  },
        { label: "Présentations",    href: "/multimedia/presentations" },
        { label: "e-Books",          href: "/multimedia/ebooks"        },
      ],
    },
  },
  {
    label: "NOVARK+", key: "novarkplus",
    dropdown: {
      "Applications": [
        { label: "NOVARK Apps",        href: "/novark-plus#apps"  },
        { label: "NOVARK Live",        href: "/live"              },
        { label: "API & Intégrations", href: "/novark-plus#api"   },
      ],
      "Ressources": [
        { label: "Documentation", href: "/novark-plus#docs"   },
        { label: "Outils",        href: "/novark-plus#outils" },
      ],
    },
  },
];

export default function Navbar() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenKey(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setOpenKey(null); }, [pathname]);

  return (
    <>
      <header ref={navRef} style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #e0e0e0", boxShadow: "0 1px 3px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "stretch", height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", marginRight: 24, flexShrink: 0 }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#0D1B3E", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", width: 48, height: 20, borderRadius: "50%", border: "2px solid #E8272A", transform: "rotate(-22deg)" }} />
              <span style={{ fontWeight: 900, fontSize: 18, color: "#fff", fontStyle: "italic", zIndex: 1 }}>N</span>
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: "0.06em", color: "#0D1B3E" }}>NOVARK</div>
              <div style={{ fontSize: 7, color: "#E8272A", letterSpacing: "0.2em", fontWeight: 700 }}>INTELLIGENCE · INNOVATION · IMPACT</div>
            </div>
          </Link>

          {/* Nav items */}
          {NAV_ITEMS.map((item) => {
            const isOpen = openKey === item.key;
            return (
              <button key={item.key} onClick={() => setOpenKey(isOpen ? null : item.key)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "0 13px", height: "100%", display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: isOpen ? BLUE : "#111", borderBottom: isOpen ? `3px solid ${BLUE}` : "3px solid transparent", whiteSpace: "nowrap", transition: "color 0.15s" }}>
                {item.label}
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <path d="M1 1L4.5 4L8 1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            );
          })}

          <div style={{ flex: 1 }} />

          {/* Search */}
          <button onClick={() => setSearchOpen(!searchOpen)}
            style={{ background: "none", border: "1px solid #ddd", color: "#555", cursor: "pointer", padding: "6px 14px", display: "flex", alignItems: "center", gap: 7, marginRight: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em" }}>
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            RECHERCHE
          </button>

          {/* LIVE */}
          <Link href="/live" style={{ textDecoration: "none", display: "flex", alignItems: "center", marginRight: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, border: "1px solid #E8272A", padding: "5px 10px" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8272A", animation: "livepulse 1.5s ease-in-out infinite" }} />
              <span style={{ fontSize: 10, fontWeight: 900, color: "#E8272A", letterSpacing: "0.15em" }}>LIVE</span>
            </div>
          </Link>

          {/* Contact */}
          <Link href="/contact" style={{ background: "#E8272A", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "0 20px", textDecoration: "none", display: "flex", alignItems: "center" }}>
            CONTACT
          </Link>
        </div>

        {/* Blue line */}
        <div style={{ height: 2, background: BLUE }} />

        {/* DROPDOWN */}
        {openKey && (() => {
          const item = NAV_ITEMS.find(i => i.key === openKey);
          if (!item?.dropdown) return null;
          const cols = Object.entries(item.dropdown);
          return (
            <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", borderTop: "none", borderBottom: `3px solid ${BLUE}`, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", zIndex: 200 }}>
              <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px", display: "grid", gridTemplateColumns: `repeat(${cols.length}, 1fr)`, gap: 32 }}>
                {cols.map(([cat, links]) => (
                  <div key={cat}>
                    <div style={{ fontSize: 9, color: BLUE, letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase", marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #eee" }}>
                      {cat}
                    </div>
                    {(links as { label: string; href: string }[]).map(l => (
                      <Link key={l.href} href={l.href}
                        style={{ display: "block", fontSize: 13, color: "#333", textDecoration: "none", padding: "7px 0", fontWeight: 500, borderBottom: "1px solid #f5f5f5", transition: "all 0.12s" }}
                        onMouseEnter={e => { e.currentTarget.style.color = BLUE; e.currentTarget.style.paddingLeft = "6px"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "#333"; e.currentTarget.style.paddingLeft = "0"; }}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Search bar */}
        {searchOpen && (
          <div style={{ background: "#f7f7f7", borderBottom: "1px solid #eee", padding: "14px 32px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="15" height="15" fill="none" stroke="#aaa" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input type="text" placeholder="Rechercher sur novark.ai..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} autoFocus
                style={{ flex: 1, background: "none", border: "none", outline: "none", color: "#111", fontSize: 15, fontFamily: "Arial, sans-serif" }} />
              <button onClick={() => setSearchOpen(false)} style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", fontSize: 22 }}>×</button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @keyframes livepulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
      `}</style>
    </>
  );
}
