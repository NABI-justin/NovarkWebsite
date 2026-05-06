// ============================================================
// data/articles.ts
// ============================================================
// GUIDE RAPIDE :
// Pour publier un article → copier un bloc, mettre statut: "publie"
// Pour sauvegarder un brouillon → statut: "brouillon"
// Pour soumettre à validation → statut: "en_attente"
// Seuls les articles statut "publie" apparaissent sur le site
// ============================================================

export type Article = {
  slug: string;
  titre: string;
  sous_titre: string;
  auteur: string;
  role_auteur: string;
  photo_auteur: string;
  date: string; // format "YYYY-MM-DD"
  categorie:
    | "Publication"
    | "Conférence"
    | "Article"
    | "Communiqué"
    | "Recherche";
  tags: string[];
  image_couverture: string; // chemin dans public/images/articles/
  resume: string;
  contenu: string; // texte complet — peut contenir du Markdown
  lien_externe?: string; // lien DOI, arXiv, journal si publication externe
  statut: "publie" | "en_attente" | "brouillon";
  mis_en_avant: boolean; // apparaît en premier sur la page actualités
};

export const ARTICLES: Article[] = [
  // ──────────────────────────────────────────────────────────
  // ARTICLE 1 — Publication scientifique AgroScan
  // ──────────────────────────────────────────────────────────
  {
    slug: "agroscan-patchcore-rice-disease-detection",
    titre:
      "Zero-Shot Domain Transfer of PatchCore for Unsupervised Rice Leaf Disease Detection",
    sous_titre:
      "99,54% AUROC sans image malade à l'entraînement — dépassement de l'état de l'art officiel Google Research",
    auteur: "MAÏGA Ousmane",
    role_auteur:
      "Directeur Technique IA & Robotique — NOVARK | Assistant de Recherche, Laboratoire PRIME, Canada",
    photo_auteur: "/images/equipe/ousmane.jpg",
    date: "2026-05-06",
    categorie: "Recherche",
    tags: [
      "IA",
      "PatchCore",
      "Agriculture",
      "Vision par Ordinateur",
      "AgroScan",
      "Détection d'anomalies",
    ],
    image_couverture: "/images/articles/agroscan-cover.jpg", // à ajouter dans public/images/articles/
    resume:
      "Nous présentons AgroScan, un système de détection précoce des maladies foliaires du riz basé sur PatchCore. Sans aucune image de plante malade à l'entraînement, le modèle atteint 99,54% AUROC et 99,54% F1 Score — dépassant les métriques officielles du papier Google Research (CVPR 2022).",
    contenu: `
# Contexte

Les maladies foliaires du riz causent des pertes estimées à 27–30 millions USD par an au Burkina Faso (APHLIS 2022). La détection précoce est le principal levier pour réduire ces pertes.

# Contribution

Nous proposons un transfert domaine zéro-shot de PatchCore, modèle de détection d'anomalies industriel, vers la détection de maladies foliaires du riz en conditions terrain.

## Points clés

- **Zéro image malade** nécessaire à l'entraînement
- **Backbone ConvNeXt Base** optimisé pour déploiement embarqué
- **Déploiement edge** sur Raspberry Pi 5 sans connexion internet
- **Résultats** : 99,54% AUROC / 99,54% F1 Score

# Résultats

| Métrique | PatchCore Officiel | AgroScan |
|---|---|---|
| Image AUROC | 99,1% | **99,52%** |
| F1 Score | ~98% | **99,47%** |

# Conclusion

Ce travail démontre la faisabilité du transfert domaine zéro-shot pour la détection de maladies agricoles, ouvrant la voie à des solutions IA accessibles dans les pays à ressources limitées.
    `.trim(),
    lien_externe: "",
    statut: "publie",
    mis_en_avant: true,
  },

  // ──────────────────────────────────────────────────────────
  // ARTICLE 2 — Exemple article à compléter
  // Copier ce bloc pour ajouter un nouvel article
  // ──────────────────────────────────────────────────────────
  {
    slug: "exemple-article-a-completer",
    titre: "Titre de l'article",
    sous_titre: "Sous-titre ou accroche",
    auteur: "MAÏGA Ousmane",
    role_auteur: "Directeur Technique IA & Robotique — NOVARK",
    photo_auteur: "/images/equipe/ousmane.jpg",
    date: "2026-05-01",
    categorie: "Article",
    tags: ["IA", "NOVARK"],
    image_couverture: "/images/articles/default.jpg",
    resume: "Résumé de l'article en 2-3 phrases.",
    contenu: `Contenu complet de l'article ici.`,
    lien_externe: "",
    statut: "brouillon", // ← mettre "publie" pour publier
    mis_en_avant: false,
  },
];

// ──────────────────────────────────────────────────────────
// Helpers — ne pas modifier
// ──────────────────────────────────────────────────────────

export function getArticlesPublies(): Article[] {
  return ARTICLES.filter((a) => a.statut === "publie").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticlesMisEnAvant(): Article[] {
  return getArticlesPublies().filter((a) => a.mis_en_avant);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug && a.statut === "publie");
}

export function getArticlesByCategorie(
  categorie: Article["categorie"],
): Article[] {
  return getArticlesPublies().filter((a) => a.categorie === categorie);
}

export function getArticlesByAuteur(auteur: string): Article[] {
  return getArticlesPublies().filter((a) => a.auteur === auteur);
}

export function getArticlesByTag(tag: string): Article[] {
  return getArticlesPublies().filter((a) => a.tags.includes(tag));
}
