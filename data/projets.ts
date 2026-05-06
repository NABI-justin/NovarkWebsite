// ============================================================
// data/projets.ts
// GUIDE : ajouter projet → copier le bloc agroscan et modifier
// Pour lier à un secteur → ajouter le slug dans data/novark.ts
// ============================================================

export type Projet = {
  slug: string;
  nom: string;
  tagline: string;
  secteur: string;
  statut: "EN COURS" | "TERMINE" | "A VENIR" | "RECHERCHE";
  date_debut: string;
  description: string;
  description_longue: string;
  resultats: { val: string; label: string }[];
  points: string[];
  technologies: string[];
  lien_publication?: string;
  image?: string;
  mis_en_avant: boolean;
  visible: boolean;
};

export const PROJETS_LIST: Projet[] = [
  {
    slug: "agroscan",
    nom: "AgroScan",
    tagline: "Détection précoce des maladies foliaires du riz par IA",
    secteur: "Agriculture",
    statut: "EN COURS",
    date_debut: "2025-09-01",
    description: "AgroScan est un système de détection précoce des maladies foliaires du riz basé sur l'intelligence artificielle. Le modèle apprend uniquement à reconnaître une feuille saine — aucune image de plante malade n'est nécessaire.",
    description_longue: `AgroScan repose sur PatchCore, une architecture de détection d'anomalies publiée par Google Research (CVPR 2022) et implémentée via Anomalib (Intel OpenVINO, Apache 2.0).

Le principe fondamental : le modèle apprend uniquement l'apparence normale d'une feuille saine. Lors de l'inférence, toute déviation par rapport à cet état normal génère automatiquement une carte thermique localisant précisément la zone infectée.

Le système est déployable sur drone edge (Raspberry Pi 5 embarqué) sans connexion internet — adapté aux zones rurales du Burkina Faso.`,
    resultats: [
      { val: "99,54%", label: "AUROC" },
      { val: "99,54%", label: "F1 Score" },
      { val: "0", label: "Image malade" },
      { val: "Edge", label: "Déploiement" },
    ],
    points: [
      "Zéro image malade nécessaire à l'entraînement",
      "Localisation précise de la zone infectée par carte thermique",
      "Déployable sur drone edge sans connexion internet",
      "Résultats dépassant l'état de l'art officiel Google Research (99,1%)",
      "Backbone ConvNeXt Base optimisé pour déploiement embarqué",
      "Open source via Anomalib (Intel OpenVINO, Apache 2.0)",
    ],
    technologies: ["PatchCore", "ConvNeXt Base", "Anomalib", "PyTorch", "Raspberry Pi 5", "DJI Mini 3"],
    lien_publication: "",
    image: "/images/hero/hero1.png",
    mis_en_avant: true,
    visible: true,
  },

  // ── TEMPLATE : copier ce bloc pour ajouter un projet ──────
  // {
  //   slug: "mon-projet",
  //   nom: "Nom du projet",
  //   tagline: "Description courte",
  //   secteur: "Agriculture",
  //   statut: "A VENIR",
  //   date_debut: "2026-09-01",
  //   description: "Description courte...",
  //   description_longue: "Description longue...",
  //   resultats: [],
  //   points: [],
  //   technologies: [],
  //   mis_en_avant: false,
  //   visible: true,
  // },
];

export function getProjetsVisibles() {
  return PROJETS_LIST.filter(p => p.visible);
}

export function getProjetBySlug(slug: string) {
  return PROJETS_LIST.find(p => p.slug === slug && p.visible);
}

export function getProjetsMisEnAvant() {
  return PROJETS_LIST.filter(p => p.visible && p.mis_en_avant);
}
