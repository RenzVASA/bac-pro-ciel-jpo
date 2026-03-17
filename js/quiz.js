// ============================================================
//  BAC PRO CIEL – quiz.js
//  20 questions basées sur le référentiel officiel 2023
//  Pôle : elec | net | cyber | gen
// ============================================================

const QUESTIONS = [
  // ── PÔLE 1 – Électronique ────────────────────────────────
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Quel outil utilises-tu pour mesurer la tension électrique dans un circuit ?",
    options: ["Un oscilloscope", "Un multimètre", "Un ohmmètre uniquement", "Une sonde réseau"],
    correct: 1, points: 3
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Tu lis un schéma électronique. Quel symbole représente une résistance ?",
    options: ["Un rectangle avec une flèche", "Un zigzag ou rectangle selon la norme", "Un cercle avec une croix", "Une ligne droite horizontale"],
    correct: 1, points: 3
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Qu'est-ce qu'un microcontrôleur comme l'Arduino ?",
    options: ["Un processeur de serveur haute performance", "Un composant programmable qui pilote des entrées/sorties physiques", "Un type de câble réseau", "Un logiciel de simulation réseau"],
    correct: 1, points: 3
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Lors de la maintenance d'un équipement électronique, tu détectes une panne. Quelle est ta première étape ?",
    options: ["Remplacer tous les composants", "Diagnostiquer en mesurant les tensions aux points de test", "Appeler le fabricant immédiatement", "Formater le système d'exploitation"],
    correct: 1, points: 3
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Qu'est-ce que l'IoT (Internet des Objets) dans le contexte de l'électronique embarquée ?",
    options: ["Un protocole réseau haute vitesse", "Des objets physiques équipés de capteurs connectés à Internet", "Une norme de sécurité informatique", "Un logiciel de gestion de réseau"],
    correct: 1, points: 3
  },
  // ── PÔLE 2 – Réseaux ─────────────────────────────────────
  {
    pole: 'net', poleLabel: '🌐 Réseaux',
    text: "Quelle est la différence entre un switch et un routeur ?",
    options: [
      "Aucune différence, ce sont des synonymes",
      "Un switch connecte des appareils dans un même réseau local, un routeur connecte plusieurs réseaux entre eux",
      "Un routeur est plus lent qu'un switch",
      "Un switch est utilisé uniquement pour le Wi-Fi"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux',
    text: "À quoi sert une adresse IP ?",
    options: ["À identifier un utilisateur par son nom", "À identifier de manière unique un équipement sur un réseau", "À stocker des données sur le disque dur", "À mesurer la vitesse d'une connexion"],
    correct: 1, points: 3
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux',
    text: "Qu'est-ce qu'un VPN ?",
    options: ["Un type d'antivirus", "Un tunnel sécurisé qui chiffre les communications sur Internet", "Un serveur de stockage en ligne", "Un protocole d'impression réseau"],
    correct: 1, points: 3
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux',
    text: "Tu configures un pare-feu. Quelle règle permets l'accès HTTPS entrant ?",
    options: ["Autoriser le port 21 en entrant", "Autoriser le port 443 TCP en entrant", "Bloquer tous les ports", "Autoriser le port 25 SMTP"],
    correct: 1, points: 3
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux',
    text: "Qu'est-ce que la virtualisation dans un contexte réseau ?",
    options: ["Rendre le réseau invisible physiquement", "Faire fonctionner plusieurs systèmes d'exploitation sur une même machine physique", "Connecter deux réseaux sans fil", "Sauvegarder la configuration d'un switch"],
    correct: 1, points: 3
  },
  // ── PÔLE 3 – Cybersécurité & Data ────────────────────────
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "Qu'est-ce qu'un hash (empreinte) en cryptographie ?",
    options: ["Un type de mot de passe simple", "Une fonction qui transforme des données en une chaîne de longueur fixe non réversible", "Un algorithme de compression de fichiers", "Un protocole de communication sécurisé"],
    correct: 1, points: 3
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "Qu'est-ce qu'une attaque par phishing ?",
    options: ["Une attaque physique sur les serveurs", "Une tentative de tromper un utilisateur pour voler ses identifiants via un faux site ou email", "Un virus qui efface les disques durs", "Une surcharge du réseau par paquets"],
    correct: 1, points: 3
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "En Python, que fait la commande : `import socket; s = socket.socket()` ?",
    options: ["Importe un module de calcul mathématique", "Crée un objet permettant d'établir des connexions réseau bas niveau", "Ouvre un fichier texte", "Génère un nombre aléatoire"],
    correct: 1, points: 3
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "Qu'est-ce qu'une injection SQL ?",
    options: ["Une mise à jour automatique de base de données", "Une attaque qui insère du code malveillant dans une requête SQL pour manipuler la base de données", "Un type de sauvegarde incrémentale", "Un protocole de transfert de fichiers"],
    correct: 1, points: 3
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "Quel outil est couramment utilisé pour analyser le trafic réseau en temps réel ?",
    options: ["Microsoft Excel", "Wireshark", "Photoshop", "LibreOffice"],
    correct: 1, points: 3
  },
  // ── GÉNÉRAL / Polyvalent ─────────────────────────────────
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Qu'est-ce que le protocole SSH (Secure Shell) ?",
    options: ["Un protocole graphique pour bureau à distance", "Un protocole sécurisé d'accès distant en ligne de commande", "Un format de fichier compressé", "Un langage de programmation"],
    correct: 1, points: 2
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Parmi ces activités, laquelle t'attire le plus ?",
    options: [
      "Souder des composants et concevoir des circuits électroniques",
      "Configurer des serveurs et gérer une infrastructure réseau",
      "Analyser des journaux de sécurité et écrire des scripts Python",
      "Toutes ces activités m'intéressent"
    ],
    correct: 3, points: 1
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Dans le cadre du Bac Pro CIEL, combien de semaines de stage (PFMP) dois-tu réaliser sur 3 ans ?",
    options: ["8 semaines", "15 semaines", "22 semaines", "30 semaines"],
    correct: 2, points: 2
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Qu'est-ce que GNU/Linux dans un contexte professionnel IT ?",
    options: ["Un éditeur de texte avancé", "Un système d'exploitation open-source très utilisé sur les serveurs et systèmes embarqués", "Un langage de script propriétaire Microsoft", "Un logiciel de virtualisation"],
    correct: 1, points: 2
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Après le Bac Pro CIEL, quelle poursuite d'études est la plus directe ?",
    options: ["Licence 1 directement (sans BTS)", "BTS CIEL ou BTS SIO", "Master 2 en cybersécurité", "École d'ingénieur sur concours CPGE"],
    correct: 1, points: 2
  },
];

const PROFILES = {
  elec: {
    title: "🔌 Profil Électronique",
    description: "Tu es attiré(e) par le côté matériel et physique de la technologie. Concevoir des circuits, prototyper, maintenir des équipements : tu seras dans ton élément dans le Pôle 1 du Bac Pro CIEL. Des domaines comme l'IoT, la domotique et l'électronique industrielle t'attendent.",
    jobs: ["Technicien électronique", "Câbleur / Intégrateur", "Technicien SAV", "Technicien IoT"],
    color: "#f77f00"
  },
  net: {
    title: "🌐 Profil Réseaux",
    description: "Tu penses en termes de flux, de connexions et d'infrastructure. Configurer des routeurs, sécuriser des accès, superviser un réseau : le Pôle 2 est fait pour toi. Les entreprises manquent cruellement de bons techniciens réseau.",
    jobs: ["Technicien réseau", "Admin systèmes N1/N2", "Technicien support", "NOC Operator"],
    color: "#00b4d8"
  },
  cyber: {
    title: "🛡️ Profil Cybersécurité",
    description: "La sécurité, les données et le code t'animent. Tu veux comprendre comment les attaques fonctionnent pour mieux défendre. Le Pôle 3 du CIEL te prépare aux métiers les plus demandés du secteur. La cybersécurité recrute massivement.",
    jobs: ["Technicien cybersécurité", "Analyste SOC junior", "Développeur scripts", "Technicien SIEM"],
    color: "#c084fc"
  },
  gen: {
    title: "⚙️ Profil Polyvalent",
    description: "Tu es curieux de tout et tu t'adaptes facilement. Le Bac Pro CIEL te permettra d'explorer les 3 pôles avant de te spécialiser. Ta polyvalence sera un atout considérable sur le marché du travail.",
    jobs: ["Technicien IT généraliste", "Helpdesk", "Technicien maintenance", "Assistant chef de projet IT"],
    color: "#2d936c"
  }
};

// ── STATE ─────────────────────────────────────────────────
let currentQ = 0;
let answered = false;
let scores = { elec: 0, net: 0, cyber: 0, gen: 0 };
let answers = [];
const SESSION_ID = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2,8);

// ── ELEMENTS ─────────────────────────────────────────────
const intro = document.getElementById('quiz-intro');
const wrap  = document.getElementById('quiz-wrap');
const results = document.getElementById('quiz-results');
const qLabel = document.getElementById('q-label');
const qFill  = document.getElementById('q-fill');
const liveScore = document.getElementById('live-score');
const qPole = document.getElementById('q-pole');
const qText = document.getElementById('q-text');
const qOptions = document.getElementById('q-options');
const btnNext = document.getElementById('btn-next');

// ── START ─────────────────────────────────────────────────
document.getElementById('btn-start').addEventListener('click', () => {
  intro.style.display = 'none';
  wrap.style.display = 'block';
  renderQuestion();
});

function renderQuestion() {
  answered = false;
  btnNext.style.display = 'none';
  const q = QUESTIONS[currentQ];

  // progress
  const pct = Math.round(((currentQ) / QUESTIONS.length) * 100);
  qFill.style.width = Math.max(pct, 5) + '%';
  qLabel.textContent = `Question ${currentQ + 1} / ${QUESTIONS.length}`;

  // pole badge
  qPole.textContent = q.poleLabel;
  qPole.className = 'quiz-card__pole ' + q.pole;

  // question
  qText.textContent = q.text;

  // options
  qOptions.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i, btn));
    qOptions.appendChild(btn);
  });
}

function selectAnswer(idx, clickedBtn) {
  if (answered) return;
  answered = true;
  const q = QUESTIONS[currentQ];
  const allBtns = qOptions.querySelectorAll('.option-btn');

  allBtns.forEach(b => b.disabled = true);

  if (idx === q.correct) {
    clickedBtn.classList.add('correct');
    scores[q.pole] += q.points;
    updateLiveScore();
  } else {
    clickedBtn.classList.add('wrong');
    allBtns[q.correct].classList.add('reveal');
  }

  answers.push({ q: currentQ, selected: idx, correct: idx === q.correct, pole: q.pole });

  btnNext.style.display = 'inline-flex';
  if (currentQ === QUESTIONS.length - 1) {
    btnNext.textContent = 'Voir mes résultats 🎯';
    btnNext.innerHTML = 'Voir mes résultats 🎯 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  } else {
    btnNext.innerHTML = 'Question suivante → <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  }
}

function updateLiveScore() {
  const total = Object.values(scores).reduce((a,b) => a+b, 0);
  liveScore.textContent = total;
}

btnNext.addEventListener('click', () => {
  currentQ++;
  if (currentQ >= QUESTIONS.length) {
    showResults();
  } else {
    document.getElementById('quiz-card').style.animation = 'none';
    requestAnimationFrame(() => {
      document.getElementById('quiz-card').style.animation = '';
      renderQuestion();
    });
  }
});

// ── RESULTS ──────────────────────────────────────────────
function showResults() {
  wrap.style.display = 'none';
  results.style.display = 'block';

  const totalPossible = QUESTIONS.reduce((a,q) => a+q.points, 0);
  const totalGained = Object.values(scores).reduce((a,b)=>a+b,0);
  const pct = Math.round((totalGained/totalPossible)*100);

  // Find dominant profile
  const dominant = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
  const profile = PROFILES[dominant];

  // Emoji based on score
  let trophy = '🏆';
  if (pct >= 80) trophy = '🏆';
  else if (pct >= 60) trophy = '🎓';
  else if (pct >= 40) trophy = '🔍';
  else trophy = '💡';

  document.getElementById('results-trophy').textContent = trophy;
  document.getElementById('results-title').textContent = profile.title;
  document.getElementById('results-subtitle').textContent = `Score : ${totalGained} / ${totalPossible} pts (${pct}%)`;

  // Bars
  const maxScore = Math.max(...Object.values(scores), 1);
  const barsDiv = document.getElementById('results-bars');
  const barColors = { elec: '#f77f00', net: '#00b4d8', cyber: '#c084fc', gen: '#2d936c' };
  const barLabels = { elec: '🔌 Électronique', net: '🌐 Réseaux', cyber: '🛡️ Cybersécurité', gen: '⚙️ Général' };

  Object.entries(scores).sort((a,b)=>b[1]-a[1]).forEach(([pole, score]) => {
    const poleMax = QUESTIONS.filter(q=>q.pole===pole).reduce((a,q)=>a+q.points,0);
    const polePct = Math.round((score/poleMax)*100);
    const bar = document.createElement('div');
    bar.className = 'results-bar';
    bar.innerHTML = `
      <div class="results-bar__label">
        <span>${barLabels[pole]}</span>
        <span style="font-family:var(--font-mono);color:${barColors[pole]}">${score}/${poleMax} pts (${polePct}%)</span>
      </div>
      <div class="results-bar__track">
        <div class="results-bar__fill" style="width:0%;background:${barColors[pole]};"></div>
      </div>
    `;
    barsDiv.appendChild(bar);
    setTimeout(() => {
      bar.querySelector('.results-bar__fill').style.width = polePct + '%';
    }, 200);
  });

  // Profile card
  const card = document.getElementById('profile-card');
  card.style.borderTop = `4px solid ${profile.color}`;
  card.innerHTML = `
    <p class="profile-card__title">${profile.title}</p>
    <p class="profile-card__text">${profile.description}</p>
    <div class="profile-card__jobs">
      ${profile.jobs.map(j => `<span>${j}</span>`).join('')}
    </div>
  `;

  // Save to Firebase
  saveToFirebase(dominant, pct, totalGained, totalPossible);
}

async function saveToFirebase(profile, pct, gained, possible) {
  const status = document.getElementById('save-status');
  try {
    const db = window._firebaseDb;
    const refFn = window._firebaseRef;
    const pushFn = window._firebasePush;

    if (!db) {
      status.textContent = '⚠️ Firebase non configuré (mode démo)';
      return;
    }

    const payload = {
      session_id: SESSION_ID,
      timestamp: new Date().toISOString(),
      profile_dominant: profile,
      score_pct: pct,
      score_gained: gained,
      score_possible: possible,
      scores_by_pole: scores,
      nb_questions: QUESTIONS.length,
      answers_summary: answers.map(a => ({ q: a.q, correct: a.correct, pole: a.pole }))
    };

    const sessionsRef = refFn(db, 'quiz_sessions');
    const newRef = pushFn(sessionsRef);
    await window._firebaseSet(newRef, payload);

    status.textContent = '✅ Résultats enregistrés anonymement. Merci !';
    status.style.color = '#2d936c';
  } catch (err) {
    console.warn('[Firebase] Erreur de sauvegarde:', err);
    status.textContent = '⚠️ Résultats non sauvegardés (vérifier la config Firebase)';
  }
}

// ── RETRY ─────────────────────────────────────────────────
document.getElementById('btn-retry').addEventListener('click', () => {
  currentQ = 0;
  answered = false;
  scores = { elec: 0, net: 0, cyber: 0, gen: 0 };
  answers = [];
  document.getElementById('results-bars').innerHTML = '';
  results.style.display = 'none';
  wrap.style.display = 'block';
  liveScore.textContent = '0';
  renderQuestion();
});
