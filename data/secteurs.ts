// ============================================================
// data/secteurs.ts
// GUIDE : modifier un secteur → changer le bloc correspondant
// Ajouter secteur → copier un bloc + ajouter dans novark.ts
// ============================================================

export type Secteur = {
  slug: string;
  nom: string;
  description: string;
  description_longue: string;
  projets: string[];         // slugs des projets liés
  expertises: string[];      // slugs des expertises liées
  stats?: { val: string; label: string }[];
  visible: boolean;
};

export const SECTEURS_DETAIL: Secteur[] = [
  {
    slug: "agriculture",
    nom: "Agriculture",
    description: "Détection précoce des maladies foliaires, surveillance des cultures par drone et outils d'aide à la décision.",
    description_longue: `L'agriculture représente le secteur le plus stratégique pour la souveraineté alimentaire du Burkina Faso. Les pertes post-récolte atteignent 13,9% de la production annuelle de riz, soit environ 33 000 tonnes et 27 à 30 millions USD perdus chaque année (APHLIS 2022).

NOVARK développe des solutions IA adaptées aux réalités du terrain burkinabè : sans connexion internet, sur des équipements accessibles, dans des conditions de terrain extrêmes.

Notre projet phare AgroScan détecte les maladies foliaires du riz avec 99,54% AUROC — sans aucune image de plante malade à l'entraînement.`,
    projets: ["agroscan"],
    expertises: ["intelligence-artificielle", "vision-par-ordinateur", "systemes-embarques", "rd-innovation", "deploiement-commercialisation"],
    stats: [
      { val: "27–30 M USD", label: "Pertes riz/an au BF (APHLIS 2022)" },
      { val: "13,9%", label: "Pertes post-récolte" },
      { val: "99,54%", label: "AUROC AgroScan" },
    ],
    visible: true,
  },
  {
    slug: "elevage",
    nom: "Élevage",
    description: "Surveillance de la santé animale, détection d'anomalies comportementales et gestion intelligente des troupeaux.",
    description_longue: "Solutions IA pour la surveillance de la santé animale, la détection précoce de maladies et la gestion intelligente des troupeaux en Afrique de l'Ouest.",
    projets: [],
    expertises: ["intelligence-artificielle", "systemes-embarques", "automatisation"],
    visible: true,
  },
  {
    slug: "agroalimentaire",
    nom: "Agroalimentaire",
    description: "Contrôle qualité automatisé, inspection visuelle sur ligne de production et traçabilité alimentaire.",
    description_longue: "Inspection automatisée des produits alimentaires, détection de contaminations et traçabilité complète de la chaîne de valeur agroalimentaire.",
    projets: [],
    expertises: ["vision-par-ordinateur", "automatisation", "integration-systemes"],
    visible: true,
  },
  {
    slug: "sante",
    nom: "Santé",
    description: "Aide au diagnostic médical, analyse d'images médicales et outils de santé publique.",
    description_longue: "Solutions IA pour l'aide au diagnostic, l'analyse d'images médicales et les systèmes d'alerte épidémique adaptés aux contextes à ressources limitées.",
    projets: [],
    expertises: ["intelligence-artificielle", "vision-par-ordinateur", "rd-innovation"],
    visible: true,
  },
  {
    slug: "industrie",
    nom: "Industrie",
    description: "Maintenance prédictive, inspection automatisée des équipements et contrôle qualité en production.",
    description_longue: "Optimisation des processus industriels, maintenance prédictive et inspection automatisée pour l'industrie africaine.",
    projets: [],
    expertises: ["vision-par-ordinateur", "automatisation", "integration-systemes", "robotique"],
    visible: true,
  },
  {
    slug: "energie-electricite",
    nom: "Énergie & Électricité",
    description: "Optimisation de la distribution d'énergie et maintenance prédictive des infrastructures électriques.",
    description_longue: "Systèmes intelligents de gestion énergétique et maintenance prédictive des infrastructures électriques pour l'Afrique de l'Ouest.",
    projets: [],
    expertises: ["intelligence-artificielle", "automatisation", "systemes-embarques"],
    visible: true,
  },
  {
    slug: "infrastructures",
    nom: "Infrastructures",
    description: "Surveillance structurelle des bâtiments, inspection par drone et maintenance prédictive.",
    description_longue: "Surveillance et maintenance intelligente des infrastructures publiques et privées grâce à l'IA et à la vision par ordinateur.",
    projets: [],
    expertises: ["vision-par-ordinateur", "robotique", "architecture-btp"],
    visible: true,
  },
  {
    slug: "securite-defense",
    nom: "Sécurité & Défense",
    description: "Systèmes de surveillance intelligente, détection d'intrusions et analyse vidéo en temps réel.",
    description_longue: "Solutions embarquées pour la sécurité et la défense : surveillance intelligente, détection d'intrusions et analyse vidéo temps réel.",
    projets: [],
    expertises: ["vision-par-ordinateur", "intelligence-artificielle", "systemes-embarques"],
    visible: true,
  },
  {
    slug: "environnement",
    nom: "Environnement",
    description: "Surveillance environnementale, détection de la déforestation et systèmes d'alerte.",
    description_longue: "Outils IA pour la surveillance environnementale, la détection de la déforestation et les systèmes d'alerte pour les catastrophes naturelles.",
    projets: [],
    expertises: ["vision-par-ordinateur", "systemes-embarques", "rd-innovation"],
    visible: true,
  },
  {
    slug: "education",
    nom: "Éducation",
    description: "Outils d'apprentissage adaptatif et programmes de formation en technologie.",
    description_longue: "Plateformes e-learning et programmes de formation en technologie pour renforcer les capacités locales en Afrique de l'Ouest.",
    projets: [],
    expertises: ["formation-transfert", "prestations-informatiques"],
    visible: true,
  },
  {
    slug: "services-publics",
    nom: "Services Publics",
    description: "Numérisation des services de l'État, plateformes de gestion publique et gouvernance.",
    description_longue: "Solutions numériques pour la modernisation des services publics, la gestion administrative et l'aide à la gouvernance.",
    projets: [],
    expertises: ["prestations-informatiques", "integration-systemes", "conseil-ingenierie"],
    visible: true,
  },
];

export function getSecteursVisibles() {
  return SECTEURS_DETAIL.filter(s => s.visible);
}

export function getSecteurBySlug(slug: string) {
  return SECTEURS_DETAIL.find(s => s.slug === slug && s.visible);
}
