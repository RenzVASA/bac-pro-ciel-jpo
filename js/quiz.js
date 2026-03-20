// ============================================================
//  BAC PRO CIEL – quiz.js  v3
//  ✅ Réponses mélangées aléatoirement à chaque lancement
//  ✅ Firebase corrigé (attend que le SDK soit prêt)
//  ✅ Adapté grands écrans tactiles
// ============================================================

// ── QUESTIONS (la bonne réponse est toujours dans "correct")
// Le texte correct est stocké, pas l'index — le mélange se fait au rendu
const QUESTIONS_RAW = [
  // ── PÔLE ÉLECTRONIQUE ──────────────────────────────────
  {
    pole: 'elec', poleLabel: '🔌 Électronique', points: 3,
    text: "Tu dois concevoir un circuit électronique. Quel logiciel utilises-tu pour dessiner le schéma et le simuler avant fabrication ?",
    options: ["Microsoft Word", "Proteus Design Suite (ISIS/ARES)", "VirtualBox", "Wireshark"],
    correctText: "Proteus Design Suite (ISIS/ARES)"
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique', points: 3,
    text: "Sur un schéma home-cinéma, tu vois 'HDMI ARC'. À quoi sert cette fonctionnalité ?",
    options: [
      "Renvoyer l'audio du TV vers l'ampli via le même câble HDMI",
      "Augmenter la résolution de l'image",
      "Connecter deux appareils en Bluetooth",
      "Alimenter électriquement un périphérique"
    ],
    correctText: "Renvoyer l'audio du TV vers l'ampli via le même câble HDMI"
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique', points: 3,
    text: "Dans une installation DMX 512, à quoi sert la résistance de terminaison (120Ω) en bout de chaîne ?",
    options: [
      "Régler la couleur des projecteurs",
      "Limiter la consommation électrique",
      "Protéger la table de mixage",
      "Éviter les réflexions de signal sur le câble RS485 qui causeraient des dysfonctionnements"
    ],
    correctText: "Éviter les réflexions de signal sur le câble RS485 qui causeraient des dysfonctionnements"
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique', points: 3,
    text: "Un lave-linge ne chauffe plus mais tourne normalement. Quelle est ta première vérification logique ?",
    options: [
      "Mesurer la résistance de la résistance chauffante au multimètre",
      "Remplacer directement le moteur",
      "Appeler le constructeur sans rien faire",
      "Reformater le programmateur"
    ],
    correctText: "Mesurer la résistance de la résistance chauffante au multimètre"
  },
  {
    pole: 'elec', poleLabel: '🔌 Électronique', points: 3,
    text: "Quel instrument te permet de visualiser la forme d'un signal électrique (tension en fonction du temps) ?",
    options: ["Un ampèremètre", "Un ohmmètre seul", "Un multimètre numérique", "Un oscilloscope"],
    correctText: "Un oscilloscope"
  },
  // ── PÔLE RÉSEAUX & INFO ────────────────────────────────
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info', points: 3,
    text: "Tu installes Linux sur un PC. Lors du partitionnement, à quoi sert la partition swap ?",
    options: [
      "Sauvegarder les mises à jour",
      "Héberger le système d'exploitation",
      "Servir de mémoire virtuelle quand la RAM est insuffisante",
      "Stocker les documents personnels"
    ],
    correctText: "Servir de mémoire virtuelle quand la RAM est insuffisante"
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info', points: 3,
    text: "En HTML, que fait la balise <link rel=stylesheet href=style.css> ?",
    options: [
      "Elle associe une feuille de style CSS externe à la page HTML",
      "Elle insère une image dans la page",
      "Elle crée un lien hypertexte vers une autre page",
      "Elle définit le titre de l'onglet"
    ],
    correctText: "Elle associe une feuille de style CSS externe à la page HTML"
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info', points: 3,
    text: "En Python, que fait : for i in range(1, 255): print(f'192.168.1.{i}') ?",
    options: [
      "Elle configure une IP statique",
      "Elle installe un serveur DHCP",
      "Elle affiche toutes les IPs de 192.168.1.1 à 192.168.1.254",
      "Elle efface toutes les adresses IP du réseau"
    ],
    correctText: "Elle affiche toutes les IPs de 192.168.1.1 à 192.168.1.254"
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info', points: 3,
    text: "Quelles sont les 4 étapes du protocole DHCP quand un PC demande une adresse IP ?",
    options: [
      "GET → POST → PUT → DELETE",
      "DISCOVER → OFFER → REQUEST → ACK",
      "SYN → SYN-ACK → ACK → FIN",
      "Ping → Réponse → Connexion → Déconnexion"
    ],
    correctText: "DISCOVER → OFFER → REQUEST → ACK"
  },
  {
    pole: 'net', poleLabel: '🌐 Réseaux & Info', points: 3,
    text: "Dans VirtualBox, le mode 'réseau interne' signifie que la VM :",
    options: [
      "Utilise l'adresse IP de la machine physique",
      "Est désactivée",
      "Accède à Internet normalement",
      "Ne peut communiquer qu'avec les autres VMs du même réseau, isolée d'Internet"
    ],
    correctText: "Ne peut communiquer qu'avec les autres VMs du même réseau, isolée d'Internet"
  },
  // ── PÔLE CYBER ─────────────────────────────────────────
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité', points: 3,
    text: "Parmi ces mots de passe, lequel est le plus sécurisé ?",
    options: ["Lycee2026", "Xk#9mP!qL2@vN8", "abcdefgh", "password123"],
    correctText: "Xk#9mP!qL2@vN8"
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité', points: 3,
    text: "À quoi sert un gestionnaire de mots de passe comme KeePass ?",
    options: [
      "Configurer le pare-feu Windows",
      "Accélérer la connexion Internet",
      "Stocker de façon chiffrée tous ses mots de passe dans une base sécurisée",
      "Analyser les virus sur un PC"
    ],
    correctText: "Stocker de façon chiffrée tous ses mots de passe dans une base sécurisée"
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité', points: 3,
    text: "PC très lent, pop-ups intempestifs, navigateur redirigé vers des sites inconnus. De quoi s'agit-il probablement ?",
    options: [
      "Un problème de réseau",
      "Une infection par un malware (adware ou spyware)",
      "Une mise à jour Windows en cours",
      "Un problème de RAM défectueuse"
    ],
    correctText: "Une infection par un malware (adware ou spyware)"
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité', points: 3,
    text: "Qu'est-ce qu'un ransomware ?",
    options: [
      "Un type de pare-feu réseau",
      "Un outil de sauvegarde automatique",
      "Un antivirus gratuit",
      "Un malware qui chiffre tes fichiers et réclame une rançon pour les récupérer"
    ],
    correctText: "Un malware qui chiffre tes fichiers et réclame une rançon pour les récupérer"
  },
  {
    pole: 'cyber', poleLabel: '🛡️ Cybersécurité', points: 3,
    text: "Selon le RGPD, en cas de violation de données personnelles, l'entreprise doit notifier la CNIL sous quel délai ?",
    options: ["1 mois", "24 heures", "72 heures", "1 semaine"],
    correctText: "72 heures"
  },
  // ── GÉNÉRAL ────────────────────────────────────────────
  {
    pole: 'gen', poleLabel: '⚙️ Général', points: 2,
    text: "Dans le Bac Pro CIEL, combien de semaines de stages (PFMP) sur 3 ans ?",
    options: ["30 semaines", "8 semaines", "22 semaines", "15 semaines"],
    correctText: "22 semaines"
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général', points: 1,
    text: "Quelle activité t'attire le plus ?",
    options: [
      "Gérer les mots de passe, supprimer des virus, apprendre le RGPD",
      "Installer Linux, coder en Python et virtualiser des machines",
      "Tout ça m'intéresse de façon équilibrée",
      "Souder des circuits, configurer des lyres DMX, dépanner un lave-linge"
    ],
    correctText: "Tout ça m'intéresse de façon équilibrée"
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général', points: 2,
    text: "Après le Bac Pro CIEL, quelle poursuite d'études est la plus directe ?",
    options: ["Licence 1 généraliste", "Master 2 directement", "BTS CIEL ou BTS SIO (2 ans)", "Classe préparatoire CPGE"],
    correctText: "BTS CIEL ou BTS SIO (2 ans)"
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général', points: 2,
    text: "La commande Linux `apt install` sert à :",
    options: [
      "Démarrer un serveur web",
      "Configurer une adresse IP",
      "Installer un logiciel depuis les dépôts officiels",
      "Supprimer un fichier"
    ],
    correctText: "Installer un logiciel depuis les dépôts officiels"
  },
  {
    pole: 'gen', poleLabel: '⚙️ Général', points: 1,
    text: "Qu'est-ce qui te correspond le mieux ?",
    options: [
      "Je préfère les réseaux, le code et les systèmes virtuels",
      "Je n'ai pas encore de préférence marquée",
      "La sécurité informatique et la protection des données me passionnent",
      "J'aime les circuits physiques, le câblage et les appareils électroniques"
    ],
    correctText: "Je n'ai pas encore de préférence marquée"
  },
];

// ── MÉLANGE ALÉATOIRE des réponses au chargement ─────────
// Pour chaque question : on mélange les options et on note le nouvel index de la bonne réponse
function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// On prépare les questions avec options mélangées UNE FOIS au démarrage
const QUESTIONS = QUESTIONS_RAW.map(q => {
  const shuffledOptions = shuffle(q.options);
  const correctIndex = shuffledOptions.indexOf(q.correctText);
  return {
    ...q,
    options: shuffledOptions,
    correct: correctIndex  // index de la bonne réponse APRÈS mélange
  };
});

// ── PROFILS ───────────────────────────────────────────────
const PROFILES = {
  elec: {
    title: "🔌 Profil Électronique",
    description: "Tu es attiré(e) par le côté matériel et physique de la technologie. Concevoir des circuits sur Proteus, installer des systèmes audiovisuels, programmer des lyres DMX ou dépanner un électroménager : tu seras dans ton élément dans le Pôle 1 du Bac Pro CIEL.",
    jobs: ["Technicien électronique", "Technicien SAV", "Installateur audiovisuel", "Technicien lumière scénique"],
    color: "#f77f00"
  },
  net: {
    title: "🌐 Profil Réseaux & Informatique",
    description: "Tu penses en termes de flux, d'infrastructure et de code. Installer des OS, configurer DHCP, coder en Python ou virtualiser des machines : le Pôle 2 est fait pour toi. Les entreprises manquent cruellement de bons techniciens réseau.",
    jobs: ["Technicien réseau", "Admin systèmes N1/N2", "Développeur web junior", "Technicien support"],
    color: "#00b4d8"
  },
  cyber: {
    title: "🛡️ Profil Cybersécurité",
    description: "La sécurité numérique t'intéresse : gérer des mots de passe, éliminer des malwares, comprendre le RGPD. Ces compétences sont très demandées. Le Pôle 3 du CIEL te prépare aux métiers de la protection des systèmes.",
    jobs: ["Technicien support sécurité", "Technicien helpdesk", "Assistant cybersécurité", "Technicien maintenance IT"],
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
const SESSION_ID = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);

// ── ELEMENTS ──────────────────────────────────────────────
const intro   = document.getElementById('quiz-intro');
const wrap    = document.getElementById('quiz-wrap');
const results = document.getElementById('quiz-results');
const qLabel  = document.getElementById('q-label');
const qFill   = document.getElementById('q-fill');
const liveScore = document.getElementById('live-score');
const qPole   = document.getElementById('q-pole');
const qText   = document.getElementById('q-text');
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

  const pct = Math.round((currentQ / QUESTIONS.length) * 100);
  qFill.style.width = Math.max(pct, 5) + '%';
  qLabel.textContent = `Question ${currentQ + 1} / ${QUESTIONS.length}`;

  qPole.textContent = q.poleLabel;
  qPole.className = 'quiz-card__pole ' + q.pole;
  qText.textContent = q.text;

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
    btnNext.innerHTML = 'Voir mes résultats 🎯 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  } else {
    btnNext.innerHTML = 'Question suivante → <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  }
}

function updateLiveScore() {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  liveScore.textContent = total;
}

btnNext.addEventListener('click', () => {
  currentQ++;
  if (currentQ >= QUESTIONS.length) {
    showResults();
  } else {
    const card = document.getElementById('quiz-card');
    card.style.animation = 'none';
    requestAnimationFrame(() => {
      card.style.animation = '';
      renderQuestion();
    });
  }
});

// ── RESULTS ───────────────────────────────────────────────
function showResults() {
  wrap.style.display = 'none';
  results.style.display = 'block';

  const totalPossible = QUESTIONS.reduce((a, q) => a + q.points, 0);
  const totalGained = Object.values(scores).reduce((a, b) => a + b, 0);
  const pct = Math.round((totalGained / totalPossible) * 100);

  const dominant = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const profile = PROFILES[dominant];

  let trophy = '💡';
  if (pct >= 80) trophy = '🏆';
  else if (pct >= 60) trophy = '🎓';
  else if (pct >= 40) trophy = '🔍';

  document.getElementById('results-trophy').textContent = trophy;
  document.getElementById('results-title').textContent = profile.title;
  document.getElementById('results-subtitle').textContent = `Score : ${totalGained} / ${totalPossible} pts (${pct}%)`;

  const barsDiv = document.getElementById('results-bars');
  const barColors = { elec: '#f77f00', net: '#00b4d8', cyber: '#c084fc', gen: '#2d936c' };
  const barLabels = { elec: '🔌 Électronique', net: '🌐 Réseaux', cyber: '🛡️ Cybersécurité', gen: '⚙️ Général' };

  Object.entries(scores).sort((a, b) => b[1] - a[1]).forEach(([pole, score]) => {
    const poleMax = QUESTIONS.filter(q => q.pole === pole).reduce((a, q) => a + q.points, 0);
    const polePct = poleMax > 0 ? Math.round((score / poleMax) * 100) : 0;
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

  const card = document.getElementById('profile-card');
  card.style.borderTop = `4px solid ${profile.color}`;
  card.innerHTML = `
    <p class="profile-card__title">${profile.title}</p>
    <p class="profile-card__text">${profile.description}</p>
    <div class="profile-card__jobs">
      ${profile.jobs.map(j => `<span>${j}</span>`).join('')}
    </div>
  `;

  saveToFirebase(dominant, pct, totalGained, totalPossible);
}

// ── FIREBASE – attend que le SDK soit prêt ────────────────
async function saveToFirebase(profile, pct, gained, possible) {
  const status = document.getElementById('save-status');

  // Attendre jusqu'à 5 secondes que Firebase se charge
  let attempts = 0;
  while (!window._firebaseDb && attempts < 50) {
    await new Promise(r => setTimeout(r, 100));
    attempts++;
  }

  try {
    const db = window._firebaseDb;
    const refFn = window._firebaseRef;
    const pushFn = window._firebasePush;
    const setFn = window._firebaseSet;

    if (!db || !refFn || !pushFn || !setFn) {
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
    await setFn(newRef, payload);

    status.textContent = '✅ Résultats enregistrés anonymement. Merci !';
    status.style.color = '#2d936c';
  } catch (err) {
    console.warn('[Firebase] Erreur de sauvegarde:', err);
    status.textContent = '⚠️ Résultats non sauvegardés – ' + err.message;
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

  // Remélanger les réponses pour un nouveau passage
  QUESTIONS.forEach((q, idx) => {
    const raw = QUESTIONS_RAW[idx];
    const shuffled = shuffle(raw.options);
    q.options = shuffled;
    q.correct = shuffled.indexOf(raw.correctText);
  });

  renderQuestion();
});
