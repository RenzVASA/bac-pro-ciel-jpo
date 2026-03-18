# 🛡️ BAC PRO CIEL – Site Journées Portes Ouvertes

[![Deploy to GitHub Pages](https://github.com/renzvasa/bac-pro-ciel-jpo/actions/workflows/deploy.yml/badge.svg)](https://github.com/renzvasa/bac-pro-ciel-jpo/actions/workflows/deploy.yml)

Site web destiné aux **Journées Portes Ouvertes** du Bac Professionnel **CIEL** (Cybersécurité, Informatique et réseaux, ELectronique).

🔗 **Site live :** [https://renzvasa.github.io/bac-pro-ciel-jpo/](https://renzvasa.github.io/bac-pro-ciel-jpo/)

---

## 📋 Fonctionnalités

| Module | Description |
|--------|-------------|
| 🏠 **Accueil** | Présentation complète du Bac Pro CIEL – référentiel, 3 pôles, filière, projets finaux |
| 🔌 **Pôle Électronique** | Proteus/CAO, audiovisuel, home-cinéma, lumières DMX, électroménager |
| 🌐 **Pôle Réseaux & Info** | Installation OS, HTML/CSS/Python, DHCP/IP, virtualisation |
| 🛡️ **Pôle Cybersécurité** | Gestion mots de passe (KeePass), suppression malwares, RGPD |
| 🏆 **Projets Finaux** | Exemples concrets des 2 projets de certification (Élec + Info) |
| 🎯 **Quiz d'orientation** | 20 questions basées sur le référentiel officiel – profil dominant détecté |
| 📊 **Dashboard Admin** | Graphiques Chart.js en temps réel depuis Firebase |
| 🗺️ **Filière SVG** | Illustration interactive 3ème → Bac Pro → BTS → BUT → Licence Pro |

---

## 🗂️ Structure du projet

```
bac-pro-ciel-jpo/
│
├── index.html                        # Page d'accueil (présentation formation + pôles)
│
├── pages/
│   ├── quiz.html                     # Quiz d'orientation – 20 questions (Firebase)
│   ├── pole-electronique.html        # Détail pôle Électronique (Proteus, DMX, électroménager)
│   ├── pole-reseaux.html             # Détail pôle Réseaux & Info (OS, code, DHCP, VMs)
│   ├── pole-cyber.html               # Détail pôle Cybersécurité (KeePass, malwares, RGPD)
│   └── projets.html                  # Les 2 projets finaux avec exemples concrets
│
├── admin/
│   └── index.html                    # Dashboard admin (protégé par mot de passe)
│
├── css/
│   ├── style.css                     # Styles globaux + responsive mobile
│   ├── quiz.css                      # Styles spécifiques au quiz
│   └── admin.css                     # Styles dashboard admin
│
├── js/
│   ├── main.js                       # Navigation, terminal animé, accordion, animations
│   ├── quiz.js                       # 20 questions + calcul profil + sauvegarde Firebase
│   └── admin.js                      # Graphiques Chart.js + lecture Firebase + export CSV
│
├── .github/
│   └── workflows/
│       └── deploy.yml                # CI/CD – déploiement automatique sur GitHub Pages
│
├── firebase.rules.json               # Règles de sécurité Firebase (RGPD – données anonymes)
├── GUIDE_MISE_EN_LIGNE.txt           # Guide pas-à-pas pour déployer en 30 min
├── .gitignore
└── README.md
```

---

## 🔗 Pages du site

| URL | Page |
|-----|------|
| `/` | Accueil |
| `/pages/quiz.html` | Quiz d'orientation |
| `/pages/pole-electronique.html` | Pôle Électronique |
| `/pages/pole-reseaux.html` | Pôle Réseaux & Informatique |
| `/pages/pole-cyber.html` | Pôle Cybersécurité |
| `/pages/projets.html` | Projets Finaux |
| `/admin/` | Dashboard Admin 🔒 |

---

## 🚀 Installation & Déploiement

### 1. Cloner le dépôt

```bash
git clone https://github.com/renzvasa/bac-pro-ciel-jpo.git
cd bac-pro-ciel-jpo
```

### 2. Configurer Firebase (stockage des réponses quiz)

1. Créer un projet sur [console.firebase.google.com](https://console.firebase.google.com)
2. Activer la **Realtime Database** → région `europe-west1` → mode test
3. Récupérer les clés : ⚙️ Paramètres → Vos applications → Web
4. Remplacer les valeurs dans ces 2 fichiers :
   - `pages/quiz.html` → bloc `firebaseConfig`
   - `admin/index.html` → bloc `firebaseConfig`
5. Déployer les règles de sécurité :

```bash
npm install -g firebase-tools
firebase login
firebase use VOTRE_PROJECT_ID
firebase deploy --only database
```

### 3. GitHub Pages (déjà configuré ✅)

Le workflow `.github/workflows/deploy.yml` déploie automatiquement à chaque `git push` sur `main`.

Pour activer si ce n'est pas encore fait :
1. **Settings → Pages** du dépôt
2. Source : **GitHub Actions**
3. Pousser sur `main` → déploiement automatique en ~2 min

### 4. Changer le mot de passe admin

Ouvrir `js/admin.js`, ligne 7 :

```js
const ADMIN_PASSWORD = 'ciel2026'; // ← changer ici
```

> ⚠️ Pour une sécurité renforcée, utiliser **Firebase Authentication**.

---

## 🔧 Stack technique

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| Hébergement | GitHub Pages | Gratuit, CI/CD automatique |
| Frontend | HTML5 / CSS3 / Vanilla JS | Léger, 0 dépendance build |
| Design | Fonts : Syne + Space Mono | Thème "Tech Terminal" |
| Graphiques | Chart.js 4.4 (CDN) | Graphiques interactifs dashboard |
| Stockage réponses | Firebase Realtime Database | Temps réel, tier Spark = 0€ |
| CI/CD | GitHub Actions | Déploiement automatique sur push |
| Schémas | SVG inline | Filière CIEL, câblage DMX, réseau DHCP |

---

## 📊 Données collectées (RGPD)

Les réponses au quiz sont **entièrement anonymisées** :

| Donnée collectée | Détail |
|-----------------|--------|
| ✅ Session UUID | Généré aléatoirement côté client, non lié à l'identité |
| ✅ Horodatage | Date/heure de la session |
| ✅ Profil dominant | elec / net / cyber / gen |
| ✅ Score par pôle | Chiffres agrégés |
| ❌ Nom / Prénom | Non collecté |
| ❌ Email / IP | Non collecté |

**Base légale :** intérêt légitime (orientation scolaire)  
**À faire :** informer le DPO de l'établissement avant la mise en service.

---

## 🎯 Contenu pédagogique – Référentiel officiel

Basé sur l'**Arrêté du 13 février 2023** (NOR: MENE2303769A) – BO spécial n°4

### Pôle 1 – Électronique
- Conception sur **Proteus** (ISIS schéma + ARES PCB)
- Réalisation de maquettes et prototypes (soudure, breadboard)
- Maintenance et dépannage (oscilloscope, multimètre)
- **Audiovisuel** : home-cinéma, schémas de câblage HDMI/audio
- **Lumières de scène** : lyres, lasers, table DMX 512
- **Électroménager** : fonctionnement théorique + recherche de panne

### Pôle 2 – Réseaux & Informatique
- Installation et configuration d'OS (**Linux Debian/Ubuntu, Windows**)
- Développement : **HTML, CSS, Python**
- Protocoles réseau : **DHCP**, adressage IP, TCP/IP
- **Virtualisation** (VirtualBox / VMware)
- Projet final informatique

### Pôle 3 – Cybersécurité & Data
- Gestion sécurisée des mots de passe (**KeePass**)
- Détection et suppression de **malwares** (Malwarebytes)
- Bonnes pratiques **RGPD** et sécurité numérique

---

## 👥 Équipe projet

| Rôle | Responsabilité |
|------|---------------|
| Chef de projet | Pilotage, planning sprints, revues, risques |
| Dev Front-End | Pages pôles, quiz, animations, CSS responsive |
| Dev Back-End | Firebase, dashboard admin, export CSV |
| Designer | SVG filière, schémas DMX/DHCP, UI/UX |
| Équipe pédagogique | Validation contenu référentiel officiel |

---

## 📄 Licence

Projet éducatif – Lycée Professionnel – Usage libre pour établissements scolaires.

---

*Site développé dans le cadre du projet Portes Ouvertes – Bac Pro CIEL 2026*  
*Repo : [github.com/renzvasa/bac-pro-ciel-jpo](https://github.com/renzvasa/bac-pro-ciel-jpo)*
