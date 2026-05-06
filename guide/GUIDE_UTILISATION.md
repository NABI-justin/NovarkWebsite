# NOVARK — Guide d'Utilisation du Site Web
> Pour tous les membres de l'équipe NOVARK

---

## STRUCTURE DU SITE

```
novark.ai
│
├── Accueil
├── Explorer ▼
│   ├── Expertises (13 expertises cliquables)
│   ├── Secteurs (11 secteurs cliquables)
│   ├── Projets (AgroScan + à venir)
│   └── À propos (équipe, mission, partenaires)
│
├── Actualités & Événements
│   ├── Articles & Publications
│   ├── Conférences & Événements
│   └── Presse
│
├── Multimédia
│   ├── Images & Visuels
│   ├── Vidéos & Démos
│   └── Publications PDF
│
├── NOVARK+
│   └── Applications et outils NOVARK
│
├── [🔍] Recherche
├── [● LIVE]
└── [CONTACT]
```

---

## COMMENT PUBLIER UN ARTICLE

### Qui peut publier ?
Tout le monde dans l'équipe peut soumettre un article. Il doit être validé avant publication.

### Workflow complet

```
1. Tu écris l'article
        ↓
2. Tu l'ajoutes dans data/articles.ts avec statut: "brouillon"
        ↓
3. Tu passes à statut: "en_attente" pour soumettre à validation
        ↓
4. Le responsable valide → statut: "publie"
        ↓
5. L'article apparaît sur le site
```

### Types d'articles possibles

| Catégorie | Exemple |
|---|---|
| **Recherche** | Paper IEEE, arXiv, résultats AgroScan |
| **Publication** | Article dans un journal scientifique |
| **Conférence** | Participation à SACAIR, CVPR, WACV |
| **Article** | Article de fond, opinion, analyse |
| **Communiqué** | Annonce officielle NOVARK |

### Bonnes pratiques pour un article

- **Slug** : utiliser des tirets, pas d'espaces ni accents → `mon-article-2026`
- **Image de couverture** : format 16:9, minimum 1200×675px, mettre dans `public/images/articles/`
- **Date** : format `YYYY-MM-DD` → `2026-06-15`
- **Tags** : 3 à 6 tags maximum, cohérents avec le sujet
- **Résumé** : 2 à 3 phrases maximum — c'est ce que Google affiche
- **`mis_en_avant: true`** : seulement pour les contenus importants — max 3 articles à la fois

---

## COMMENT AJOUTER UNE CONFÉRENCE / ÉVÉNEMENT

Dans `data/articles.ts` avec `categorie: "Conférence"` :

```ts
{
  slug: "sacair-2026-agroscan",
  titre: "NOVARK présente AgroScan à SACAIR 2026",
  sous_titre: "Southern African Conference on AI Research",
  auteur: "MAÏGA Ousmane",
  date: "2026-11-15",
  categorie: "Conférence",
  tags: ["IA", "AgroScan", "Conférence", "SACAIR"],
  resume: "NOVARK présente ses travaux sur AgroScan à la conférence SACAIR 2026.",
  contenu: `Détails de la conférence...`,
  lien_externe: "https://sacair.org.za",
  statut: "publie",
  mis_en_avant: true,
}
```

---

## COMMENT UTILISER LA RECHERCHE

Le bouton **RECHERCHE** dans la nav permet aux visiteurs de chercher du contenu sur le site.

Pour que vos articles soient bien trouvés :
- Mettez des **tags pertinents**
- Écrivez un **résumé clair** avec les mots-clés importants
- Utilisez un **slug descriptif**

---

## COMMENT UTILISER NOVARK LIVE

Le badge **● LIVE** dans la nav peut pointer vers :
- Une démonstration en direct d'AgroScan
- Un webinaire NOVARK
- Un événement en cours

Pour modifier la destination du LIVE :
→ `components/Navbar.tsx` → changer `href="/live"` par l'URL voulue

---

## STRUCTURE DES DOSSIERS D'IMAGES

```
public/
├── images/
│   ├── hero/          ← Images du slideshow page d'accueil
│   │   ├── hero1.png  ← Équipe NOVARK lab
│   │   ├── hero2.png  ← Multi-secteurs
│   │   └── hero3.png  ← Agriculteur + heatmap
│   │
│   ├── equipe/        ← Photos des membres
│   │   ├── rachid.jpg    ← À ajouter
│   │   ├── fadilah.jpg
│   │   ├── moussa.jpg
│   │   ├── justin.jpg
│   │   └── ousmane.jpg
│   │
│   └── articles/      ← Images de couverture des articles
│       └── ...
```

**Formats recommandés** :
- Hero : PNG ou JPEG, 1920×1080px minimum
- Équipe : JPEG, format portrait, minimum 400×400px
- Articles : JPEG, format 16:9, minimum 1200×675px

---

## LANCER LE SITE EN LOCAL

```bash
# Aller dans le dossier
cd C:\Users\PC\novark-site

# Installer les dépendances (première fois seulement)
npm install

# Lancer le serveur local
npm run dev

# Ouvrir dans le navigateur
http://localhost:3000
```

---

## DÉPLOIEMENT SUR VERCEL

### Première fois
```bash
npx vercel
# Suivre les instructions — choisir le projet novark-site
```

### Mise à jour
```bash
npx vercel --prod
```

### Via GitHub (recommandé)
1. Connecter le repo GitHub à Vercel
2. Chaque `git push` sur la branche `main` déploie automatiquement
3. URL finale : `novark.ai` (après configuration du domaine)

---

## CONTACTS TECHNIQUES

| Besoin | Qui contacter |
|---|---|
| Bug ou erreur sur le site | MAÏGA Ousmane |
| Valider un article | Responsable validation NOVARK |
| Acheter le domaine `novark.ai` | Gérant — Rachid SANOGO |
| Accès Vercel | MAÏGA Ousmane |

---

## FAQ

**Q : Mon article ne s'affiche pas sur le site.**
→ Vérifier que `statut: "publie"` est bien mis.

**Q : L'image de couverture ne s'affiche pas.**
→ Vérifier que le fichier est dans `public/images/articles/` et que le chemin dans `articles.ts` est exact.

**Q : Je veux supprimer un article.**
→ Passer `statut: "brouillon"` — l'article disparaît sans être supprimé.

**Q : Je veux modifier un article déjà publié.**
→ Passer `statut: "brouillon"`, modifier, puis repasser `statut: "publie"`.

**Q : Comment ajouter une deuxième langue (anglais) ?**
→ C'est possible avec Next.js i18n — à prévoir pour la Phase 2 du site.
