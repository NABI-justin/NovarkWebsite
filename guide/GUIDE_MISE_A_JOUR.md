# NOVARK — Guide de Mise à Jour du Site Web
> Dernière mise à jour : Mai 2026

---

## RÈGLE D'OR

**Tout le contenu du site passe par les fichiers `data/`.**
Tu ne touches jamais aux pages (`app/`) ni aux composants (`components/`) sauf pour le design.

```
data/
├── novark.ts     ← Expertises, Secteurs, Stats, Hero Slideshow, Contact
├── equipe.ts     ← Membres de l'équipe
└── articles.ts   ← Articles, Publications, Conférences
```

---

## 1. AJOUTER UNE IMAGE AU SLIDESHOW

**Fichier** : `data/novark.ts` → section `HERO_SLIDES`

**Étape 1** — Mettre l'image dans :
```
public/images/hero/hero4.png
```

**Étape 2** — Ajouter un bloc dans `HERO_SLIDES` :
```ts
{
  src: "/images/hero/hero4.png",
  titre: "Ton titre ici.",
  sous_titre: "Description en une phrase.",
  lien: "/secteurs",      // où le bouton envoie
  cta: "Texte du bouton",
},
```

---

## 2. PUBLIER UN ARTICLE

**Fichier** : `data/articles.ts`

**Étape 1** — Copier le bloc exemple :
```ts
{
  slug: "mon-article-unique",           // URL : /actualites/mon-article-unique
  titre: "Titre de l'article",
  sous_titre: "Accroche",
  auteur: "MAÏGA Ousmane",
  role_auteur: "Directeur Technique IA & Robotique — NOVARK",
  photo_auteur: "/images/equipe/ousmane.jpg",
  date: "2026-06-15",                   // format YYYY-MM-DD
  categorie: "Article",                 // Publication | Conférence | Article | Communiqué | Recherche
  tags: ["IA", "Agriculture"],
  image_couverture: "/images/articles/mon-image.jpg",
  resume: "Résumé en 2-3 phrases.",
  contenu: `Contenu complet ici.`,
  lien_externe: "https://arxiv.org/...", // optionnel
  statut: "publie",                     // publie | en_attente | brouillon
  mis_en_avant: false,                  // true = apparaît en premier
},
```

**Étape 2** — Mettre l'image de couverture dans `public/images/articles/`

**Workflow de validation** :
```
Brouillon         → statut: "brouillon"   (invisible)
Soumis            → statut: "en_attente"  (invisible, en attente de validation)
Validé et publié  → statut: "publie"      (visible sur le site)
```

---

## 3. AJOUTER UN MEMBRE DE L'ÉQUIPE

**Fichier** : `data/equipe.ts`

**Étape 1** — Mettre la photo dans :
```
public/images/equipe/prenom.jpg
```

**Étape 2** — Copier un bloc dans `EQUIPE` :
```ts
{
  id: "prenom",
  prenom: "Prénom",
  nom: "NOM",
  titre: "Titre officiel",
  role: "Description du rôle",
  photo: "/images/equipe/prenom.jpg",
  linkedin: "https://linkedin.com/in/prenom-nom",
  email: "prenom@novark.ai",
  actif: true,
  ordre: 6,   // position dans la page À propos
},
```

**Pour ajouter la photo de Rachid** :
1. Mettre `rachid.jpg` dans `public/images/equipe/`
2. Le site l'affichera automatiquement

---

## 4. MODIFIER LE CONTACT

**Fichier** : `data/novark.ts` → bloc `CONTACT`

```ts
export const CONTACT = {
  phone: "+226 XX XX XX XX",   // ← modifier ici
  email: "contact@novark.ai",  // ← modifier ici
  website: "www.novark.ai",
  location: "Ouagadougou, Burkina Faso",
};
```

---

## 5. AJOUTER LES VRAIS LIENS RÉSEAUX SOCIAUX

**Fichier** : `components/Footer.tsx` → section `RESEAUX`

```ts
const RESEAUX = [
  { label: "LinkedIn",  href: "https://linkedin.com/company/novark", icon: "in" },
  { label: "Facebook",  href: "https://facebook.com/VOTRE_PAGE",     icon: "f"  },
  // etc.
];
```

---

## 6. AJOUTER UNE EXPERTISE

**Fichier** : `data/novark.ts` → section `EXPERTISES`

```ts
{
  num: "14",
  slug: "cybersecurite",
  name: "Cybersécurité",
  short: "Protection des systèmes et données.",
  description: "Description complète...",
  secteurs: ["Défense", "Services Publics"],
},
```

La page `/expertises/cybersecurite` se crée **automatiquement** — pas besoin de créer un nouveau fichier.

---

## 7. AJOUTER UN SECTEUR

**Fichier** : `data/novark.ts` → section `SECTEURS`

```ts
{
  slug: "transport",
  name: "Transport",
  description: "Description du secteur...",
  projets: [],
  expertises: ["automatisation", "systemes-embarques"],
},
```

La page `/secteurs/transport` se crée **automatiquement**.

---

## 8. AJOUTER UN PROJET

**Fichier** : `data/novark.ts` → section `PROJETS`

```ts
projetXYZ: {
  slug: "projetxyz",
  name: "NomDuProjet",
  tagline: "Description courte",
  secteur: "Agriculture",
  statut: "EN COURS",
  description: "Description complète...",
  resultats: [
    { val: "95%", label: "Précision" },
  ],
  points: ["Point 1", "Point 2"],
  technologies: ["Python", "TensorFlow"],
},
```

---

## 9. MODIFIER LA NAVIGATION (Explorer dropdown)

**Fichier** : `components/Navbar.tsx` → section `EXPLORER_ITEMS`

```ts
const EXPLORER_ITEMS = {
  "Expertises": [
    { label: "Nouvelle expertise", href: "/expertises/nouvelle-expertise" },
    // ...
  ],
  // ...
};
```

---

## 10. DÉPLOYER SUR VERCEL

```bash
# 1. Dans ton terminal, aller dans le projet
cd C:\Users\PC\novark-site

# 2. Vérifier que tout marche en local
npm run dev

# 3. Déployer sur Vercel (première fois)
npx vercel

# 4. Déployer une mise à jour
npx vercel --prod
```

Ou plus simple : connecter le projet à GitHub et Vercel déploie automatiquement à chaque commit.

---

## RÉCAPITULATIF FICHIERS

| Action | Fichier à modifier |
|---|---|
| Ajouter image slideshow | `data/novark.ts` → `HERO_SLIDES` |
| Publier un article | `data/articles.ts` → nouveau bloc + `statut: "publie"` |
| Ajouter membre équipe | `data/equipe.ts` + photo dans `public/images/equipe/` |
| Modifier contact | `data/novark.ts` → `CONTACT` |
| Mettre à jour réseaux sociaux | `components/Footer.tsx` → `RESEAUX` |
| Ajouter expertise | `data/novark.ts` → `EXPERTISES` |
| Ajouter secteur | `data/novark.ts` → `SECTEURS` |
| Ajouter projet | `data/novark.ts` → `PROJETS` |
| Modifier nav Explorer | `components/Navbar.tsx` → `EXPLORER_ITEMS` |
| Modifier design page accueil | `app/page.tsx` |
| Modifier design navbar | `components/Navbar.tsx` |
| Modifier design footer | `components/Footer.tsx` |
