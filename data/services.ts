// ============================================================
// data/services.ts
// GUIDE : ajouter service → copier un bloc
// Les services sont les offres commerciales de NOVARK
// ============================================================

export type Service = {
  slug: string;
  nom: string;
  description: string;
  details: string[];
  prix?: string;         // optionnel — à afficher ou non
  cible: string[];       // à qui s'adresse ce service
  expertise_liee: string; // slug de l'expertise principale
  visible: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "detection-anomalies",
    nom: "Détection d'anomalies par IA",
    description: "Développement et déploiement de modèles de détection d'anomalies sur images, capteurs ou données structurées.",
    details: [
      "Analyse du besoin et définition des cas d'usage",
      "Développement et entraînement du modèle IA",
      "Intégration et déploiement en production",
      "Formation et transfert de compétences",
      "Support et maintenance",
    ],
    cible: ["Entreprises agricoles", "Industries", "Institutions publiques"],
    expertise_liee: "intelligence-artificielle",
    visible: true,
  },
  {
    slug: "inspection-visuelle",
    nom: "Inspection visuelle automatisée",
    description: "Systèmes d'inspection visuelle par caméra pour le contrôle qualité en production.",
    details: [
      "Audit des lignes de production",
      "Installation et calibration caméras",
      "Développement du modèle de détection",
      "Interface de supervision temps réel",
    ],
    cible: ["Agroalimentaire", "Industrie", "Pharmacie"],
    expertise_liee: "vision-par-ordinateur",
    visible: true,
  },
  {
    slug: "deploiement-edge",
    nom: "Déploiement edge sans connexion",
    description: "Adaptation et optimisation de modèles IA pour déploiement sur dispositifs embarqués sans connexion internet.",
    details: [
      "Optimisation et compression du modèle",
      "Intégration sur Raspberry Pi, Jetson ou équivalent",
      "Tests en conditions terrain",
      "Documentation technique complète",
    ],
    cible: ["Zones rurales", "Terrain sans connectivité", "Drones"],
    expertise_liee: "systemes-embarques",
    visible: true,
  },
  {
    slug: "conseil-transformation",
    nom: "Conseil en transformation numérique",
    description: "Accompagnement stratégique pour la transformation numérique des entreprises et institutions.",
    details: [
      "Audit technologique de l'existant",
      "Définition de la stratégie IA",
      "Feuille de route de mise en œuvre",
      "Accompagnement à l'implémentation",
    ],
    cible: ["PME", "Institutions publiques", "ONG", "Coopératives"],
    expertise_liee: "conseil-ingenierie",
    visible: true,
  },
  {
    slug: "formation-ia",
    nom: "Formation en IA & Vision par Ordinateur",
    description: "Programmes de formation sur mesure en intelligence artificielle et vision par ordinateur.",
    details: [
      "Formation initiation IA (2 jours)",
      "Formation vision par ordinateur appliquée (3 jours)",
      "Atelier pratique PatchCore / Anomalib",
      "Certification NOVARK",
    ],
    cible: ["Équipes techniques", "Chercheurs", "Agents terrain", "Étudiants"],
    expertise_liee: "formation-transfert",
    visible: true,
  },
  {
    slug: "developpement-logiciel",
    nom: "Développement logiciel & Applications",
    description: "Développement d'applications web, mobiles et logiciels sur mesure.",
    details: [
      "Applications web Next.js / React",
      "Applications mobiles Android",
      "APIs et intégrations",
      "Tableaux de bord et interfaces de visualisation",
    ],
    cible: ["Startups", "PME", "Institutions"],
    expertise_liee: "prestations-informatiques",
    visible: true,
  },
];

export function getServicesVisibles() {
  return SERVICES.filter(s => s.visible);
}

export function getServiceBySlug(slug: string) {
  return SERVICES.find(s => s.slug === slug && s.visible);
}
