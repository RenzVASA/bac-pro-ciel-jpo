// ============================================================
//  BAC PRO CIEL – quiz.js
//  20 questions basées sur le référentiel officiel 2023
//  Pôle : elec | net | cyber | gen
// ============================================================

const QUESTIONS = [
  // ── PÔLE ÉLECTRONIQUE ──────────────────────────────────
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Tu dois concevoir un circuit électronique. Quel logiciel utilises-tu pour dessiner le schéma et le simuler avant fabrication ?",
    options: ["Microsoft Word", "Proteus Design Suite (ISIS/ARES)", "VirtualBox", "Wireshark"],
    correct: 1, points: 3
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Sur un schéma home-cinéma, tu vois 'HDMI ARC'. À quoi sert cette fonctionnalité ?",
    options: [
      "Augmenter la résolution de l'image",
      "Renvoyer l'audio du TV vers l'ampli via le même câble HDMI",
      "Connecter deux appareils en Bluetooth",
      "Alimenter électriquement un périphérique"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Dans une installation DMX 512, à quoi sert la résistance de terminaison (120Ω) en bout de chaîne ?",
    options: [
      "Limiter la consommation électrique",
      "Éviter les réflexions de signal sur le câble RS485 qui causeraient des dysfonctionnements",
      "Régler la couleur des projecteurs",
      "Protéger la table de mixage"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Un lave-linge ne chauffe plus mais tourne normalement. Quelle est ta première vérification logique ?",
    options: [
      "Remplacer directement le moteur",
      "Mesurer la résistance de la résistance chauffante au multimètre",
      "Reformater le programmateur",
      "Appeler le constructeur sans rien faire"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique',
    text: "Quel instrument te permet de visualiser la forme d'un signal électrique (tension en fonction du temps) ?",
    options: ["Un multimètre numérique", "Un oscilloscope", "Un ohmmètre seul", "Un ampèremètre"],
    correct: 1, points: 3
  },
  // ── PÔLE RÉSEAUX & INFO ────────────────────────────────
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info',
    text: "Tu installes Linux sur un PC. Lors du partitionnement, à quoi sert la partition swap ?",
    options: [
      "Stocker les documents personnels",
      "Servir de mémoire virtuelle quand la RAM est insuffisante",
      "Héberger le système d'exploitation",
      "Sauvegarder les mises à jour"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info',
    text: "En HTML, que fait la balise <link rel=stylesheet href=style.css> ?",
    options: [
      "Elle crée un lien hypertexte vers une autre page",
      "Elle associe une feuille de style CSS externe à la page HTML",
      "Elle insère une image dans la page",
      "Elle définit le titre de l'onglet"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info',
    text: "En Python, que fait : for i in range(1, 255): print(f'192.168.1.{i}') ?",
    options: [
      "Elle efface toutes les adresses IP du réseau",
      "Elle affiche toutes les IPs de 192.168.1.1 à 192.168.1.254",
      "Elle configure une IP statique",
      "Elle installe un serveur DHCP"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info',
    text: "Quelles sont les 4 étapes du protocole DHCP quand un PC demande une adresse IP ?",
    options: [
      "Ping → Réponse → Connexion → Déconnexion",
      "DISCOVER → OFFER → REQUEST → ACK",
      "SYN → SYN-ACK → ACK → FIN",
      "GET → POST → PUT → DELETE"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info',
    text: "Dans VirtualBox, le mode 'réseau interne' signifie que la VM :",
    options: [
      "Accède à Internet normalement",
      "Ne peut communiquer qu'avec les autres VMs du même réseau, isolée d'Internet",
      "Est désactivée",
      "Utilise l'adresse IP de la machine physique"
    ],
    correct: 1, points: 3
  },
  // ── PÔLE CYBER ─────────────────────────────────────────
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "Parmi ces mots de passe, lequel est le plus sécurisé ?",
    options: ["password123", "Lycee2026", "Xk#9mP!qL2@vN8", "abcdefgh"],
    correct: 2, points: 3
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "À quoi sert un gestionnaire de mots de passe comme KeePass ?",
    options: [
      "Accélérer la connexion Internet",
      "Stocker de façon chiffrée tous ses mots de passe dans une base sécurisée",
      "Analyser les virus sur un PC",
      "Configurer le pare-feu Windows"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "PC très lent, pop-ups intempestifs, navigateur redirigé vers des sites inconnus. De quoi s'agit-il probablement ?",
    options: [
      "Un problème de RAM défectueuse",
      "Une infection par un malware (adware ou spyware)",
      "Une mise à jour Windows en cours",
      "Un problème de réseau"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "Qu'est-ce qu'un ransomware ?",
    options: [
      "Un antivirus gratuit",
      "Un malware qui chiffre tes fichiers et réclame une rançon pour les récupérer",
      "Un outil de sauvegarde automatique",
      "Un type de pare-feu réseau"
    ],
    correct: 1, points: 3
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité',
    text: "Selon le RGPD, en cas de violation de données personnelles, l'entreprise doit notifier la CNIL sous quel délai ?",
    options: ["24 heures", "72 heures", "1 semaine", "1 mois"],
    correct: 1, points: 3
  },
  // ── GÉNÉRAL ────────────────────────────────────────────
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Dans le Bac Pro CIEL, combien de semaines de stages (PFMP) sur 3 ans ?",
    options: ["8 semaines", "15 semaines", "22 semaines", "30 semaines"],
    correct: 2, points: 2
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Quelle activité t'attire le plus ?",
    options: [
      "Souder des circuits, configurer des lyres DMX, dépanner un lave-linge",
      "Installer Linux, coder en Python et virtualiser des machines",
      "Gérer les mots de passe, supprimer des virus, apprendre le RGPD",
      "Tout ça m'intéresse de façon équilibrée"
    ],
    correct: 3, points: 1
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Après le Bac Pro CIEL, quelle poursuite d'études est la plus directe ?",
    options: ["Master 2 directement", "BTS CIEL ou BTS SIO (2 ans)", "Classe préparatoire CPGE", "Licence 1 généraliste"],
    correct: 1, points: 2
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "La commande Linux `apt install` sert à :",
    options: [
      "Supprimer un fichier",
      "Installer un logiciel depuis les dépôts officiels",
      "Configurer une adresse IP",
      "Démarrer un serveur web"
    ],
    correct: 1, points: 2
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général',
    text: "Qu'est-ce qui te correspond le mieux ?",
    options: [
      "J'aime les circuits physiques, le câblage et les appareils électroniques",
      "Je préfère les réseaux, le code et les systèmes virtuels",
      "La sécurité informatique et la protection des données me passionnent",
      "Je n'ai pas encore de préférence marquée"
    ],
    correct: 3, points: 1
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
