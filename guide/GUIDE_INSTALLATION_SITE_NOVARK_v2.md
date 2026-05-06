# Guide d’installation – Projet site NOVARK

Ce guide explique comment installer l’environnement nécessaire pour lancer le site NOVARK en local sur un ordinateur Windows.

Le projet est développé avec :

- Next.js
- React
- Tailwind CSS
- TypeScript
- lucide-react pour les icônes

---

## 1. Objectif

Permettre à chaque associé ou développeur de lancer le site NOVARK sur son propre ordinateur et de voir le travail déjà réalisé.

Important :

```txt
http://localhost:3000
```

veut dire que le site tourne uniquement sur l’ordinateur de la personne qui lance la commande.

Donc si une personne lance le site sur son PC, les autres ne peuvent pas forcément le voir sur leur propre ordinateur avec `localhost:3000`.

Chaque personne doit soit :

1. installer le projet sur son ordinateur et lancer `npm run dev`, ou
2. consulter une version en ligne déployée sur Vercel/Netlify.

---

## 2. Prérequis à installer

### 2.1 Installer Node.js

Installer Node.js depuis le site officiel :

```txt
https://nodejs.org
```

Choisir la version LTS ou une version récente.

Après installation, ouvrir CMD ou le terminal de VS Code et vérifier :

```cmd
node -v
npm -v
```

Exemple de versions fonctionnelles utilisées pendant l’installation :

```txt
Node.js : 24.5.0
npm : 11.2.1
```

---

## 3. Installer Visual Studio Code

Télécharger et installer VS Code :

```txt
https://code.visualstudio.com
```

---

## 4. Extensions VS Code recommandées

Dans VS Code, ouvrir l’onglet Extensions :

```txt
Ctrl + Shift + X
```

Installer les extensions suivantes :

1. Tailwind CSS IntelliSense
2. Prettier - Code formatter
3. ESLint
4. ES7+ React/Redux/React-Native snippets
5. Auto Rename Tag
6. Path Intellisense
7. GitLens
8. Error Lens

---

## 5. Configuration VS Code recommandée

Dans VS Code :

```txt
Ctrl + Shift + P
```

Chercher :

```txt
Preferences: Open User Settings (JSON)
```

Ajouter ou compléter avec :

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

Cette configuration permet de formater automatiquement le code à chaque sauvegarde.

---

## 6. Récupérer le projet NOVARK

Il y a deux possibilités.

### Option A – Depuis un dossier ZIP

Si le projet est envoyé sous forme de dossier ZIP :

1. Décompresser le dossier.
2. Placer le projet par exemple ici :

```txt
C:\Users\PC\novark-site
```

3. Ouvrir VS Code.
4. Faire :

```txt
File > Open Folder
```

5. Sélectionner le dossier :

```txt
C:\Users\PC\novark-site
```

### Option B – Depuis GitHub

Si le projet est sur GitHub :

```cmd
git clone LIEN_DU_REPO_GITHUB
cd novark-site
```

---

## 7. Installer les dépendances du projet

Dans CMD ou dans le terminal de VS Code, aller dans le dossier du projet :

```cmd
cd C:\Users\PC\novark-site
```

Puis installer les dépendances :

```cmd
npm install
```

Important :

Il ne faut pas copier ou envoyer le dossier `node_modules`.

Chaque personne doit simplement lancer :

```cmd
npm install
```

Cette commande lit le fichier `package.json` et installe automatiquement tout ce qui est nécessaire.

---

## 8. Lancer le site en local

Toujours dans le dossier du projet :

```cmd
npm run dev
```

Ensuite ouvrir le navigateur à l’adresse :

```txt
http://localhost:3000
```

Le site NOVARK doit s’afficher.

---

## 9. Structure actuelle du projet

Le projet a été créé sans dossier `src`.

La structure principale est donc :

```txt
novark-site/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
├── node_modules/
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── ...
```

Le fichier principal de la page d’accueil est :

```txt
app/page.tsx
```

et non :

```txt
src/app/page.tsx
```

---

## 10. Installer lucide-react si nécessaire

Normalement, si `npm install` a été lancé, `lucide-react` est déjà installé.

Si besoin :

```cmd
npm install lucide-react
```

Dans notre installation, les versions obtenues étaient :

```txt
Next.js : 16.2.4
React : 19.2.5
React DOM : 19.2.5
lucide-react : 1.14.0
```

---

## 11. Problèmes fréquents et solutions

### Problème 1 – `code .` n’est pas reconnu

Erreur possible :

```txt
code : Le terme «code» n'est pas reconnu
```

Solution simple :

Ouvrir VS Code manuellement, puis :

```txt
File > Open Folder
```

et choisir le dossier du projet.

---

### Problème 2 – PowerShell bloque `npx`

Erreur possible :

```txt
Impossible de charger le fichier C:\Program Files\nodejs\npx.ps1,
car l’exécution de scripts est désactivée sur ce système.
```

Solution :

Utiliser CMD au lieu de PowerShell.

Ou utiliser :

```powershell
npx.cmd create-next-app@latest novark-site
```

---

### Problème 3 – `npm.cmd` n’est pas reconnu

Solution :

Utiliser simplement CMD et taper :

```cmd
npm install
npm run dev
```

---

### Problème 4 – Conflit de versions Next.js / React

Si une erreur parle de `next@9.3.3` ou de conflit avec React, corriger avec :

```cmd
rmdir /s /q node_modules
del package-lock.json
npm install next@latest react@latest react-dom@latest lucide-react
```

Puis vérifier :

```cmd
npm list next react react-dom lucide-react
```

---

## 12. Commandes rapides pour un associé

Une fois Node.js installé et le projet récupéré :

```cmd
cd C:\Users\PC\novark-site
npm install
npm run dev
```

Puis ouvrir :

```txt
http://localhost:3000
```

---

## 13. Différence entre local et en ligne

### En local

Chaque personne lance :

```cmd
npm run dev
```

et consulte :

```txt
http://localhost:3000
```

C’est uniquement visible sur son propre ordinateur.

### En ligne

Pour que tout le monde voie le même site sans installer le projet, il faut le déployer sur :

- Vercel
- Netlify

Après déploiement, le site aura un lien public du type :

```txt
https://novark-site.vercel.app
```

ou plus tard :

```txt
https://www.novark.ai
```
