// ============================================================
// data/novark.ts — FICHIER CENTRAL DU SITE
// GUIDE : tout le contenu du site passe par ici
// Ajouter expertise → copier un bloc EXPERTISES
// Ajouter secteur → copier un bloc SECTEURS
// Modifier contact → bloc CONTACT
// ============================================================

export const CONTACT = {
  phone: "+226 07 04 95 29",
  email: "contact@novark.ai",
  website: "www.novark.ai",
  location: "Ouagadougou, Burkina Faso",
};

export const HERO_SLIDES = [
  {
    src: "/images/hero/hero1.png",
    titre: "Des solutions IA\npour l'Afrique.",
    sous_titre:
      "Intelligence artificielle, robotique et systèmes embarqués pour les secteurs stratégiques de l'Afrique de l'Ouest.",
    lien: "#expertises",
    cta: "Nos Expertises",
  },
  {
    src: "/images/hero/hero2.png",
    titre: "AgroScan : détecter\navant qu'il soit trop tard.",
    sous_titre:
      "99,54% AUROC. Zéro image malade à l'entraînement. Déployable sur drone sans connexion.",
    lien: "/projets/agroscan",
    cta: "Découvrir AgroScan",
  },
  {
    src: "/images/hero/hero3.png",
    titre: "Une technologie au\nservice de tous les secteurs.",
    sous_titre:
      "De l'agriculture à la santé, de l'énergie à la défense — NOVARK intervient partout où l'IA peut faire la différence.",
    lien: "/secteurs",
    cta: "Nos Secteurs",
  },

  {
    src: "/images/hero/equipe1.png",
    titre: "AgroScan : détecter\navant qu'il soit trop tard.",
    sous_titre:
      "99,54% AUROC. Zéro image malade à l'entraînement. Déployable sur drone sans connexion.",
    lien: "/projets/agroscan",
    cta: "Découvrir AgroScan",
  },
];

export const STATS = [
  { val: "13", label: "Expertises" },
  { val: "11", label: "Secteurs" },
  { val: "5", label: "Co-fondateurs" },
  { val: "2026", label: "Fondée à Ouagadougou" },
];

export const EXPERTISES = [
  {
    num: "01",
    slug: "intelligence-artificielle",
    name: "Intelligence Artificielle",
    short: "Détection, analyse et aide à la décision par IA.",
    description:
      "Nous concevons des modèles d'intelligence artificielle adaptés aux réalités terrain : détection d'anomalies, classification, prédiction et systèmes de recommandation.",
    secteurs: ["Agriculture", "Santé", "Industrie", "Sécurité & Défense"],
  },
  {
    num: "02",
    slug: "vision-par-ordinateur",
    name: "Vision par Ordinateur",
    short: "Analyse d'images, cartes thermiques, inspection visuelle.",
    description:
      "Nos solutions analysent des images en temps réel pour détecter des défauts, localiser des anomalies et générer des cartes thermiques.",
    secteurs: [
      "Agriculture",
      "Agroalimentaire",
      "Industrie",
      "Sécurité & Défense",
    ],
  },
  {
    num: "03",
    slug: "robotique",
    name: "Robotique",
    short: "Robots intelligents, perception et automatisation terrain.",
    description:
      "Intégration de systèmes robotiques intelligents avec perception visuelle et contrôle embarqué, adaptés aux environnements contraints.",
    secteurs: ["Agriculture", "Industrie", "Infrastructures"],
  },
  {
    num: "04",
    slug: "systemes-embarques",
    name: "Systèmes Embarqués",
    short: "Solutions robustes fonctionnant sans connexion internet.",
    description:
      "Nous déployons nos modèles sur des dispositifs embarqués capables de fonctionner en zone rurale sans connexion.",
    secteurs: ["Agriculture", "Élevage", "Environnement", "Défense"],
  },
  {
    num: "05",
    slug: "automatisation",
    name: "Automatisation",
    short: "Optimisation des processus, contrôle et systèmes intelligents.",
    description:
      "Conception de systèmes automatisés pour optimiser les processus de production, de surveillance et de contrôle qualité.",
    secteurs: ["Industrie", "Agroalimentaire", "Énergie & Électricité"],
  },
  {
    num: "06",
    slug: "architecture-btp",
    name: "Architecture & BTP",
    short: "Études, conception et conseil en architecture et construction.",
    description:
      "Études architecturales, urbanisme, génie civil et conseil en construction intégrant les technologies numériques.",
    secteurs: ["Infrastructures", "Services Publics", "Éducation"],
  },
  {
    num: "07",
    slug: "rd-innovation",
    name: "R&D & Innovation",
    short: "Recherche appliquée et développement de solutions nouvelles.",
    description:
      "Travaux de recherche appliquée pour concevoir des solutions innovantes adaptées aux défis spécifiques de l'Afrique de l'Ouest.",
    secteurs: ["Agriculture", "Santé", "Énergie & Électricité"],
  },
  {
    num: "08",
    slug: "deploiement-commercialisation",
    name: "Déploiement & Commercialisation",
    short: "Mise en production, scaling et mise sur le marché.",
    description:
      "De la preuve de concept au déploiement à grande échelle : mise en production et commercialisation des solutions sur les marchés africains.",
    secteurs: ["Agriculture", "Santé", "Industrie"],
  },
  {
    num: "09",
    slug: "conseil-ingenierie",
    name: "Conseil & Ingénierie",
    short: "Expertise technique et accompagnement stratégique.",
    description:
      "Conseil en transformation numérique, audit technologique et accompagnement à la mise en œuvre pour entreprises et institutions.",
    secteurs: ["Tous secteurs"],
  },
  {
    num: "10",
    slug: "formation-transfert",
    name: "Formation & Transfert",
    short: "Renforcement des capacités et transfert de compétences.",
    description:
      "Programmes de formation sur mesure en IA, vision par ordinateur et systèmes embarqués pour renforcer la souveraineté technologique.",
    secteurs: ["Éducation", "Services Publics", "Agriculture"],
  },
  {
    num: "11",
    slug: "maintenance-support",
    name: "Maintenance & Support",
    short: "Suivi, maintenance et support technique continu.",
    description:
      "Contrats de maintenance, support technique à distance et sur site, mises à jour des modèles IA et continuité de service.",
    secteurs: ["Tous secteurs"],
  },
  {
    num: "12",
    slug: "integration-systemes",
    name: "Intégration de Systèmes",
    short: "Connexion et interopérabilité des solutions technologiques.",
    description:
      "Intégration de nos solutions dans les systèmes d'information existants : APIs, bases de données, plateformes cloud.",
    secteurs: ["Industrie", "Services Publics", "Santé"],
  },
  {
    num: "13",
    slug: "prestations-informatiques",
    name: "Prestations Informatiques",
    short: "Développement logiciel, web et applications mobiles.",
    description:
      "Développement d'applications web, mobiles et logiciels sur mesure pour entreprises et institutions.",
    secteurs: ["Tous secteurs"],
  },
];

export const SECTEURS = [
  {
    slug: "agriculture",
    name: "Agriculture",
    description:
      "Détection précoce des maladies foliaires, surveillance des cultures par drone et outils d'aide à la décision pour les producteurs.",
    projets: ["agroscan"],
    expertises: [
      "intelligence-artificielle",
      "vision-par-ordinateur",
      "systemes-embarques",
      "rd-innovation",
    ],
  },
  {
    slug: "elevage",
    name: "Élevage",
    description:
      "Surveillance de la santé animale, détection d'anomalies comportementales et gestion intelligente des troupeaux.",
    projets: [],
    expertises: ["intelligence-artificielle", "systemes-embarques"],
  },
  {
    slug: "agroalimentaire",
    name: "Agroalimentaire",
    description:
      "Contrôle qualité automatisé des produits, inspection visuelle sur ligne de production et traçabilité de la chaîne alimentaire.",
    projets: [],
    expertises: ["vision-par-ordinateur", "automatisation"],
  },
  {
    slug: "sante",
    name: "Santé",
    description:
      "Aide au diagnostic médical, analyse d'images médicales et outils de santé publique adaptés aux contextes à ressources limitées.",
    projets: [],
    expertises: ["intelligence-artificielle", "vision-par-ordinateur"],
  },
  {
    slug: "industrie",
    name: "Industrie",
    description:
      "Maintenance prédictive, inspection automatisée des équipements et contrôle qualité en production.",
    projets: [],
    expertises: ["vision-par-ordinateur", "automatisation", "robotique"],
  },
  {
    slug: "energie-electricite",
    name: "Énergie & Électricité",
    description:
      "Optimisation de la distribution d'énergie et maintenance prédictive des infrastructures électriques.",
    projets: [],
    expertises: ["intelligence-artificielle", "automatisation"],
  },
  {
    slug: "infrastructures",
    name: "Infrastructures",
    description:
      "Surveillance structurelle des bâtiments et ouvrages d'art, inspection par drone et maintenance prédictive.",
    projets: [],
    expertises: ["vision-par-ordinateur", "robotique", "architecture-btp"],
  },
  {
    slug: "securite-defense",
    name: "Sécurité & Défense",
    description:
      "Systèmes de surveillance intelligente, détection d'intrusions et analyse vidéo en temps réel.",
    projets: [],
    expertises: [
      "vision-par-ordinateur",
      "intelligence-artificielle",
      "systemes-embarques",
    ],
  },
  {
    slug: "environnement",
    name: "Environnement",
    description:
      "Surveillance environnementale, détection de la déforestation et systèmes d'alerte pour les catastrophes naturelles.",
    projets: [],
    expertises: ["vision-par-ordinateur", "systemes-embarques"],
  },
  {
    slug: "education",
    name: "Éducation",
    description:
      "Outils d'apprentissage adaptatif et programmes de formation en technologie pour renforcer les capacités locales.",
    projets: [],
    expertises: ["formation-transfert", "prestations-informatiques"],
  },
  {
    slug: "services-publics",
    name: "Services Publics",
    description:
      "Numérisation des services de l'État, plateformes de gestion publique et outils d'aide à la gouvernance.",
    projets: [],
    expertises: ["prestations-informatiques", "integration-systemes"],
  },
];

export const PROJETS: Record<
  string,
  {
    slug: string;
    name: string;
    tagline: string;
    secteur: string;
    statut: string;
    description: string;
    resultats: { val: string; label: string }[];
    points: string[];
    technologies: string[];
  }
> = {
  agroscan: {
    slug: "agroscan",
    name: "AgroScan",
    tagline: "Détection précoce des maladies foliaires du riz par IA",
    secteur: "Agriculture",
    statut: "EN COURS",
    description:
      "AgroScan est un système de détection précoce des maladies foliaires du riz basé sur l'intelligence artificielle. Le modèle apprend uniquement à reconnaître une feuille saine — aucune image de plante malade n'est nécessaire à l'entraînement.",
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
      "Résultats dépassant l'état de l'art officiel Google Research",
      "Backbone ConvNeXt Base optimisé pour déploiement embarqué",
    ],
    technologies: [
      "PatchCore",
      "ConvNeXt Base",
      "Anomalib",
      "Raspberry Pi 5",
      "DJI Mini 3",
    ],
  },
};
