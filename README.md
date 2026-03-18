# 🛡️ BAC PRO CIEL – Site Journées Portes Ouvertes

[![Deploy to GitHub Pages](https://renzvasa.github.io/bac-pro-ciel-jpo/index.html)](https://renzvasa.github.io/bac-pro-ciel-jpo/index.html)

Site web destiné aux **Journées Portes Ouvertes** du Bac Professionnel **CIEL** (Cybersécurité, Informatique et réseaux, ELectronique).

🔗 **Site live :** `(https://renzvasa.github.io/bac-pro-ciel-jpo/index.html)`

---

## 📋 Fonctionnalités

| Module | Description |
|--------|-------------|
| 🏠 **Accueil** | Présentation complète du Bac Pro CIEL (référentiel, pôles, filière) |
| 🎯 **Quiz** | 20 questions basées sur l'arrêté du 13 fév. 2023 – profil dominant détecté |
| 📊 **Dashboard Admin** | Graphiques Chart.js en temps réel depuis Firebase |
| 🗺️ **Illustration filière** | SVG interactif 3ème → Bac Pro → BTS → BUT → Licence Pro |

---

## 🗂️ Structure du projet

```
site-ciel/
├── index.html                  # Page d'accueil
├── pages/
│   └── quiz.html               # Quiz d'orientation (20 questions)
├── admin/
│   └── index.html              # Dashboard admin (protégé par mot de passe)
├── css/
│   ├── style.css               # Styles globaux
│   ├── quiz.css                # Styles quiz
│   └── admin.css               # Styles dashboard
├── js/
│   ├── main.js                 # Navigation, animations, accordion
│   ├── quiz.js                 # Logique quiz + sauvegarde Firebase
│   └── admin.js                # Dashboard Chart.js + lecture Firebase
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD – déploiement automatique GitHub Pages
├── firebase.rules.json         # Règles de sécurité Firebase
└── README.md
```

---

## 🚀 Installation & Déploiement

### 1. Cloner le dépôt

```bash
git clone https://github.com/VOTRE_ORG/bac-pro-ciel-jpo.git
cd bac-pro-ciel-jpo
```

### 2. Configurer Firebase

1. Créer un projet sur [console.firebase.google.com](https://console.firebase.google.com)
2. Activer la **Realtime Database** (mode test, région `europe-west1`)
3. Copier les clés de configuration
4. Remplacer `VOTRE_API_KEY`, `VOTRE_PROJECT`, etc. dans :
   - `pages/quiz.html` (section `firebaseConfig`)
   - `admin/index.html` (section `firebaseConfig`)
5. Déployer les règles de sécurité :

```bash
npm install -g firebase-tools
firebase login
firebase use VOTRE_PROJECT_ID
firebase deploy --only database
```

### 3. Activer GitHub Pages

1. Aller dans **Settings → Pages** du dépôt GitHub
2. Source : **GitHub Actions**
3. Pousser sur `main` → le site se déploie automatiquement

### 4. Mot de passe admin

Le mot de passe par défaut est `ciel2026`. **À changer** dans `js/admin.js` :

```js
const ADMIN_PASSWORD = 'VOTRE_MOT_DE_PASSE_SECURISE';
```

> ⚠️ Pour une sécurité renforcée en production, utiliser **Firebase Authentication**.

---

## 🔧 Stack technique

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| Hébergement | GitHub Pages | Gratuit, CI/CD automatique |
| Frontend | HTML5 / CSS3 / Vanilla JS | Léger, 0 dépendance build |
| Fonts | Google Fonts (Syne + Space Mono) | Design "Tech Terminal" |
| Charts | Chart.js 4.4 (CDN) | Graphiques interactifs |
| Stockage | Firebase Realtime Database | Temps réel, tier Spark gratuit |
| CI/CD | GitHub Actions | Déploiement automatique sur push |

---

## 📊 Données collectées (RGPD)

Les données sont **anonymisées** :
- ❌ Aucun nom, prénom, email collecté
- ✅ Session UUID aléatoire généré côté client
- ✅ Timestamp de la session
- ✅ Réponses au quiz et profil détecté
- ✅ Scores par pôle

**Base légale :** intérêt légitime (orientation scolaire) · Informer le DPO de l'établissement.

---

## 📖 Référentiel officiel

Ce site est basé sur le **Bac Pro CIEL** tel que défini par :
- Arrêté du 13 février 2023 (NOR: MENE2303769A)
- Bulletin Officiel spécial n°4
- Sources : [Éduscol STI](https://eduscol.education.fr) · [Légifrance](https://www.legifrance.gouv.fr)

---

## 👥 Équipe projet

| Rôle | Responsabilité |
|------|---------------|
| Chef de projet | Pilotage, planning, revues de sprint |
| Dev Front-End | Quiz, animations, CSS |
| Dev Back-End | Firebase, dashboard admin |
| Designer | SVG filière, UI/UX |
| Équipe pédagogique | Validation contenu référentiel |

---

## 📄 Licence

Projet éducatif – Lycée Professionnel – Usage libre pour établissements scolaires.

---

*Site développé dans le cadre du projet Portes Ouvertes – Bac Pro CIEL 2026*
