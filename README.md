# O'Secours Web - Guide Développeur Front-End 👨‍💻

Guide complet pour l'équipe de développement front-end de la plateforme O'Secours.

## 🎯 Standards de l'équipe

Ce projet suit des standards stricts pour maintenir la qualité du code et faciliter la collaboration. Tous les développeurs doivent respecter ces règles.

## 🚀 Stack technique

- **Framework** : Next.js 15.3.3 (App Router)
- **Language** : TypeScript (obligatoire)
- **Styling** : Tailwind CSS
- **Package Manager** : pnpm (obligatoire)
- **Git Hooks** : Husky + lint-staged
- **CI/CD** : GitHub Actions

## ⚡ Setup initial développeur

### 1. Installation

```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd osecours-web

# Installer pnpm si pas déjà fait
npm install -g pnpm

# Installer les dépendances
pnpm install

# Vérifier que Husky est configuré
pnpm prepare

# Lancer en développement
pnpm dev

2. Vérification de l'environnement

bash # Tester que tout fonctionne
pnpm build     # Doit réussir
pnpm lint      # Aucune erreur
📐 Standards de développement
🔒 Règles non-négociables

TypeScript strict - Pas de any, typage complet
Format de commit obligatoire - Sinon commit rejeté
Code review - Aucun merge direct sur main
Tests du build - Le code doit compiler sans erreur

📝 Convention de commits
Format obligatoire :
category/#taskid ~ description
Catégories autorisées :

feature/#id ~ description - Nouvelle fonctionnalité
fix/#id ~ description - Correction de bug
config/#id ~ description - Configuration/outils
bug/#id ~ description - Résolution de problème
security/#id ~ description - Sécurité

Exemples corrects :
bashgit commit -m "feature/#USER-123 ~ Implémenter authentification utilisateur"
git commit -m "fix/#BUG-456 ~ Corriger validation formulaire contact"
git commit -m "config/#SETUP-789 ~ Configurer ESLint pour Material-UI"
❌ Commits refusés :
bashgit commit -m "fix login"
git commit -m "WIP"
git commit -m "update stuff"
🔧 Workflow de développement
1. Créer une feature
bash# Créer une branche depuis main
git checkout main
git pull origin main
git checkout -b feature/nom-de-la-feature

# Développer la feature
# ...

# Avant de commit : vérifier manuellement
pnpm build
pnpm lint
2. Commit et push
bash# Ajouter les fichiers
git add .

# Commit avec le format correct
# Husky va automatiquement :
# ✅ Formater le code (Prettier)
# ✅ Corriger ESLint
# ✅ Vérifier le build
# ✅ Valider le format du message
git commit -m "feature/#TASK-123 ~ Ajouter composant Header responsive"

# Push vers GitHub
git push origin feature/nom-de-la-feature
3. Pull Request

Créer une PR sur GitHub
Obligatoire : Demander review du lead dev
Obligatoire : Tous les checks GitHub Actions doivent passer
Merge uniquement après approbation

🎨 Standards de code
Structure des composants
typescript// ✅ Structure recommandée
interface ComponentProps {
  title: string;
  isActive?: boolean;
}

export default function Component({ title, isActive = false }: ComponentProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
}
Nommage des fichiers

# ✅ Composants
components/
  Header/
    Header.tsx
    Header.module.css  # Si CSS modules
    index.ts

# ✅ Pages
app/
  dashboard/
    page.tsx
    layout.tsx
    loading.tsx

# ✅ Hooks
hooks/
  useAuth.ts
  useLocalStorage.ts

# ✅ Utils
utils/
  formatDate.ts
  validateEmail.ts
Organisation Tailwind

typescript// ✅ Classes ordonnées et lisibles
<div className="
  flex items-center justify-between
  w-full max-w-4xl mx-auto
  p-4 md:p-6
  bg-white border border-gray-200 rounded-lg
  shadow-sm hover:shadow-md
  transition-shadow duration-200
">
🔍 Hooks Git automatiques
Pre-commit (automatique)
bash🔧 Formatting code...      # Prettier sur fichiers modifiés
🏗️ Building project...     # Vérification build
✅ All checks passed!
Commit-msg (automatique)
bash✅ Commit message format valid!
# ou
❌ ERROR: Commit message must follow format

Si échec : Le commit est bloqué. Corrigez et recommitez.

🚀 Scripts disponibles
bash# Développement
pnpm dev              # Serveur de développement
pnpm build            # Build de production  
pnpm start            # Serveur de production
pnpm lint             # ESLint check
pnpm lint:fix         # ESLint correction auto

# Utilitaires développement
pnpm type-check       # Vérification TypeScript
pnpm format           # Formater tout le code
📂 Architecture du projet
src/
├── app/                 # App Router (Next.js 13+)
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout racine
│   └── page.tsx        # Page d'accueil
├── components/         # Composants réutilisables
│   ├── ui/            # Composants UI de base
│   └── features/      # Composants métier
├── hooks/             # Hooks personnalisés
├── lib/               # Utilitaires et configurations
├── types/             # Types TypeScript globaux
└── utils/             # Fonctions utilitaires
🔗 Intégration continue
GitHub Actions
À chaque push sur main :

✅ Installation des dépendances
✅ Vérification TypeScript
✅ Linting ESLint
✅ Build de production
✅ Déploiement automatique

Branches protégées

main : Branche protégée, merge uniquement via PR
Review obligatoire du lead dev
Status checks doivent passer

⚠️ Règles strictes de l'équipe
❌ Interdit

Pusher directement sur main
Commits avec format incorrect
Code qui ne build pas
Types any sans justification
Merge de PR sans review

✅ Obligatoire

Format de commit respecté
Code review pour chaque PR
Tests du build en local avant push
TypeScript strict
Documentation des composants complexes

🆘 Debugging courant
Husky bloque mon commit
bash# 1. Vérifier le format du message
git commit -m "feature/#TASK-123 ~ Description claire"

# 2. Si build échoue, corriger les erreurs
pnpm build
# Corriger les erreurs affichées

# 3. Si lint échoue
pnpm lint
pnpm lint:fix
Problème de dépendances
bash# Nettoyer et réinstaller
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
👨‍💼 Lead Developer
Pour toute question technique ou clarification des standards :

Review de code : Obligatoire avant merge
Architecture : Validation des choix techniques
Standards : Application et évolution des règles

📞 Support équipe

Slack : #team-frontend
Issues : GitHub Issues pour bugs/améliorations
Documentation : Ce README (toujours à jour)


⚡ Respecter ces standards = équipe productive et code maintenable