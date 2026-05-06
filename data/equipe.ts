// ============================================================
// data/equipe.ts
// GUIDE MISE À JOUR :
// Ajouter membre → copier un bloc, mettre photo dans public/images/equipe/
// Photo Rachid → mettre fichier dans public/images/equipe/rachid.jpg
// Modifier LinkedIn → changer le champ linkedin
// ============================================================

export const EQUIPE = [
  {
    id: "rachid",
    prenom: "Rachid",
    nom: "SANOGO",
    titre: "Gérant",
    role: "Supervision Projets & Construction",
    photo: "/images/equipe/rachid.jpeg", // ← ajouter rachid.jpg dans public/images/equipe/
    linkedin: "",
    email: "",
    actif: true,
    ordre: 1,
  },
  {
    id: "fadilah",
    prenom: "Fadilah",
    nom: "DOUAMBA",
    titre: "Directrice Générale",
    role: "Solutions IA, Développement Commercial & Pré-Ventes",
    photo: "/images/equipe/fadilah.jpg",
    linkedin: "",
    email: "",
    actif: true,
    ordre: 2,
  },
  {
    id: "moussa",
    prenom: "Moussa",
    nom: "MAÏGA",
    titre: "Directeur BIM & Transformation Digitale",
    role: "Architecture, BIM & Transformation Digitale",
    photo: "/images/equipe/moussa.jpeg",
    linkedin: "",
    email: "",
    actif: true,
    ordre: 3,
  },
  {
    id: "justin",
    prenom: "Justin",
    nom: "NABI",
    titre: "Directeur Systèmes, Automatique & R&D",
    role: "Systèmes de Contrôle, Automatique & Recherche",
    photo: "/images/equipe/justin.jpeg",
    linkedin: "",
    email: "",
    actif: true,
    ordre: 4,
  },
  {
    id: "ousmane",
    prenom: "Ousmane",
    nom: "MAÏGA",
    titre: "Directeur Technique IA & Robotique",
    role: "Intelligence Artificielle, Vision par Ordinateur & Robotique",
    photo: "/images/equipe/ousmane.jpeg",
    linkedin: "",
    email: "",
    actif: true,
    ordre: 5,
  },
];

export const RESPONSABLE_SITE = {
  nom: "Rachid SANOGO",
  titre: "Gérant - NOVARK",
  email: "contact@novark.ai",
};
