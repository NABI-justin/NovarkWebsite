// ============================================================
// data/contact.ts
// GUIDE : modifier coordonnées → changer les valeurs ici
// ============================================================

export const CONTACT_INFO = {
  email: "contact@novark.ai",
  phone: "+226 07 04 95 29",
  website: "www.novark.ai",
  adresse: "Ouagadougou, Burkina Faso",
  pays: "Burkina Faso",
  region: "Afrique de l'Ouest",
};

// ── RÉSEAUX SOCIAUX — mettre vos vrais liens ────────────────
export const RESEAUX_SOCIAUX = [
  { label: "LinkedIn",     href: "https://linkedin.com/company/novark",  icon: "in", actif: true  },
  { label: "Facebook",     href: "https://facebook.com/novark",          icon: "f",  actif: true  },
  { label: "Instagram",    href: "https://instagram.com/novark",         icon: "ig", actif: true  },
  { label: "X (Twitter)",  href: "https://x.com/novark",                 icon: "𝕏",  actif: true  },
  { label: "YouTube",      href: "https://youtube.com/@novark",          icon: "▶",  actif: true  },
  { label: "TikTok",       href: "https://tiktok.com/@novark",           icon: "♪",  actif: true  },
  { label: "GitHub",       href: "https://github.com/novark-ai",         icon: "<>", actif: true  },
  { label: "ResearchGate", href: "https://researchgate.net/lab/novark",  icon: "RG", actif: true  },
];

// ── SUJETS DE CONTACT ───────────────────────────────────────
export const SUJETS_CONTACT = [
  "Demande de démonstration AgroScan",
  "Proposition de partenariat",
  "Opportunité d'investissement",
  "Demande de formation",
  "Projet de développement logiciel",
  "Presse & Médias",
  "Autre",
];

// ── PERSONNES À CONTACTER SELON LE SUJET ───────────────────
export const CONTACTS_EQUIPE = [
  {
    sujet: "Commercial & Partenariats",
    nom: "DOUAMBA Fadilah",
    titre: "Directrice Générale",
    email: "contact@novark.ai",
  },
  {
    sujet: "Technique & Projets IA",
    nom: "MAÏGA Ousmane",
    titre: "Directeur Technique IA & Robotique",
    email: "contact@novark.ai",
  },
  {
    sujet: "Architecture & Construction",
    nom: "MAÏGA Moussa",
    titre: "Directeur BIM & Transformation Digitale",
    email: "contact@novark.ai",
  },
];

export function getReseauxActifs() {
  return RESEAUX_SOCIAUX.filter(r => r.actif);
}
