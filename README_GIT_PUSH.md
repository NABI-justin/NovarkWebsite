# Guide rapide — Se connecter et pousser (git push)

Ce fichier fournit des commandes et bonnes pratiques pour se connecter à un dépôt distant et pousser vos modifications (GitHub / GitLab / autres).

## Pré-requis
- Avoir Git installé.
- Avoir un compte sur le service distant (GitHub, GitLab, Bitbucket).

## 1) Configurer votre identité

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

## 2) Méthodes d'authentification

A) SSH (recommandé)

```bash
# Générer une clé (si n'en avez pas)
ssh-keygen -t ed25519 -C "votre.email@example.com"

# Démarrer l'agent SSH et ajouter la clé
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Afficher la clé publique à coller dans GitHub/GitLab
cat ~/.ssh/id_ed25519.pub

# Tester la connexion
ssh -T git@github.com    # ou git@gitlab.com
```

B) HTTPS (si vous préférez)

```bash
# Pour mémoriser les identifiants temporairement (cache)
git config --global credential.helper 'cache --timeout=3600'

# Ou pour stocker en clair (moins sûr)
git config --global credential.helper store
```

## 3) Ajouter un remote (si nécessaire)

```bash
# SSH
git remote add origin git@github.com:VotreUtilisateur/VotreRepo.git

# HTTPS
git remote add origin https://github.com/VotreUtilisateur/VotreRepo.git
```

## 4) Workflow recommandé pour pousser

1. Créez et basculez sur une branche feature:

```bash
git checkout -b feature/ma-fonctionnalite
```

2. Travaillez, puis ajoutez et commitez:

```bash
git add .
git commit -m "Message clair et concis"
```

3. Avant de pousser, récupérer les dernières modifications de la branche cible (ex : `main`) :

```bash
git fetch origin
git pull --rebase origin main
```

4. Pousser la branche pour la première fois (définit l'upstream) :

```bash
git push -u origin feature/ma-fonctionnalite
```

Pour les push suivants :

```bash
git push
```

## 5) Pousser des tags

```bash
git tag v1.0.0
git push origin v1.0.0
# ou tous les tags
git push --tags
```

## 6) Forcer un push (à utiliser avec précaution)

Préférez `--force-with-lease` plutôt que `--force` :

```bash
git push --force-with-lease origin votre-branche
```

## 7) Résolution d'erreurs courantes

- Erreur d'authentification : vérifier la clé SSH ou les credentials HTTPS.
- Conflits pendant `pull --rebase` : résoudre localement, `git add` puis `git rebase --continue`.
- Remote non trouvé : vérifier `git remote -v` et l'URL.

## 8) Commandes utiles

```bash
git status
git log --oneline --graph --decorate
git remote -v
git branch -vv
```

## 9) Bonnes pratiques

- Faire des commits atomiques et messages clairs.
- Puller régulièrement avant de pousser.
- Utiliser des branches de fonctionnalités et PR/MR pour revue.
- Éviter de forcer le push sur `main` ou `master`.

---

Ce guide est volontairement concis. Si vous voulez que j'ajoute une section spécifique (ex : CI/CD, Git hooks, GPG signing), dites-le et je l'intègre.
