// ============================================================
//  BAC PRO CIEL – admin.js
//  Dashboard avec Chart.js + lecture Firebase
// ============================================================

// ── MOT DE PASSE LOCAL (à changer en production) ─────────
// En production : utiliser Firebase Auth ou un service d'auth dédié
const ADMIN_PASSWORD = 'ciel2026';

const loginScreen = document.getElementById('admin-login');
const mainScreen  = document.getElementById('admin-main');
const loginError  = document.getElementById('login-error');
let charts = {};

// ── LOGIN ─────────────────────────────────────────────────
document.getElementById('btn-login').addEventListener('click', checkLogin);
document.getElementById('admin-pwd').addEventListener('keydown', e => { if (e.key === 'Enter') checkLogin(); });

function checkLogin() {
  const pwd = document.getElementById('admin-pwd').value;
  if (pwd === ADMIN_PASSWORD) {
    loginScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    initDashboard();
  } else {
    loginError.textContent = '❌ Mot de passe incorrect';
    document.getElementById('admin-pwd').value = '';
  }
}

document.getElementById('btn-logout').addEventListener('click', () => {
  mainScreen.style.display = 'none';
  loginScreen.style.display = 'flex';
  destroyCharts();
});

// ── REFRESH ───────────────────────────────────────────────
document.getElementById('btn-refresh').addEventListener('click', () => {
  destroyCharts();
  initDashboard();
});

// ── INIT DASHBOARD ────────────────────────────────────────
async function initDashboard() {
  const sessions = await fetchSessions();
  if (sessions.length === 0) {
    renderDemoData();
    return;
  }
  renderDashboard(sessions);
}

// ── FETCH FROM FIREBASE ───────────────────────────────────
async function fetchSessions() {
  try {
    const fb = window._adminFirebase;
    if (!fb || !fb.db) {
      console.warn('[Admin] Firebase non configuré, données de démo utilisées');
      return [];
    }
    const sessRef = fb.ref(fb.db, 'quiz_sessions');
    const snapshot = await fb.get(sessRef);
    if (!snapshot.exists()) return [];
    const data = snapshot.val();
    return Object.entries(data).map(([id, val]) => ({ _fbid: id, ...val }));
  } catch (err) {
    console.error('[Admin] Erreur Firebase:', err);
    return [];
  }
}

// ── DEMO DATA (si Firebase pas configuré) ─────────────────
function renderDemoData() {
  const demo = generateDemoSessions(120);
  renderDashboard(demo);
  document.getElementById('admin-sub').textContent = '⚠️ Données de démonstration (Firebase non connecté)';
}

function generateDemoSessions(n) {
  const profiles = ['elec','net','cyber','gen'];
  const sessions = [];
  for (let i = 0; i < n; i++) {
    const profile = profiles[Math.floor(Math.random()*profiles.length)];
    const score = Math.round(30 + Math.random() * 40);
    const date = new Date(Date.now() - Math.random() * 7 * 24 * 3600 * 1000);
    sessions.push({
      session_id: 'demo_' + i,
      timestamp: date.toISOString(),
      profile_dominant: profile,
      score_pct: score,
      score_gained: Math.round(score * 0.56),
      score_possible: 56,
      scores_by_pole: {
        elec: Math.round(Math.random() * 15),
        net: Math.round(Math.random() * 15),
        cyber: Math.round(Math.random() * 15),
        gen: Math.round(Math.random() * 11),
      }
    });
  }
  return sessions;
}

// ── RENDER DASHBOARD ──────────────────────────────────────
function renderDashboard(sessions) {
  updateKPIs(sessions);
  buildProfilesChart(sessions);
  buildPolesChart(sessions);
  buildTimelineChart(sessions);
  buildDistributionChart(sessions);
  buildTable(sessions);
}

// ── KPIs ──────────────────────────────────────────────────
function updateKPIs(sessions) {
  const total = sessions.length;
  const avgScore = total ? Math.round(sessions.reduce((a,s)=>a+s.score_pct,0)/total) : 0;
  const today = sessions.filter(s => {
    const d = new Date(s.timestamp);
    const now = new Date();
    return d.getDate()===now.getDate() && d.getMonth()===now.getMonth();
  }).length;

  const profileCounts = {};
  sessions.forEach(s => {
    profileCounts[s.profile_dominant] = (profileCounts[s.profile_dominant]||0)+1;
  });
  const topProfile = Object.entries(profileCounts).sort((a,b)=>b[1]-a[1])[0];
  const profileLabels = { elec:'🔌 Électronique', net:'🌐 Réseaux', cyber:'🛡️ Cyber', gen:'⚙️ Général' };

  document.getElementById('kpi-total').textContent = total;
  document.getElementById('kpi-avg-score').textContent = avgScore + '%';
  document.getElementById('kpi-top-profile').textContent = topProfile ? profileLabels[topProfile[0]] : '—';
  document.getElementById('kpi-today').textContent = today;
}

// ── CHART COLORS ──────────────────────────────────────────
const COLORS = {
  elec:  '#f77f00',
  net:   '#00b4d8',
  cyber: '#c084fc',
  gen:   '#2d936c',
};

const chartDefaults = {
  plugins: { legend: { labels: { color: '#8aaccf', font: { family: 'Space Mono' } } } },
  scales: {
    x: { ticks: { color: '#8aaccf', font: { family: 'Space Mono', size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
    y: { ticks: { color: '#8aaccf', font: { family: 'Space Mono', size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
  }
};

function destroyCharts() {
  Object.values(charts).forEach(c => c.destroy());
  charts = {};
}

// ── CHART 1 : Profils dominants (Doughnut) ────────────────
function buildProfilesChart(sessions) {
  const counts = { elec:0, net:0, cyber:0, gen:0 };
  sessions.forEach(s => { if (counts[s.profile_dominant]!==undefined) counts[s.profile_dominant]++; });
  const ctx = document.getElementById('chart-profiles').getContext('2d');
  charts.profiles = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['🔌 Électronique','🌐 Réseaux','🛡️ Cyber','⚙️ Général'],
      datasets: [{
        label: 'Nb de participants',
        data: [counts.elec, counts.net, counts.cyber, counts.gen],
        backgroundColor: [COLORS.elec+'cc', COLORS.net+'cc', COLORS.cyber+'cc', COLORS.gen+'cc'],
        borderColor: [COLORS.elec, COLORS.net, COLORS.cyber, COLORS.gen],
        borderWidth: 2,
        borderRadius: 6,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8aaccf', font: { family: 'Space Mono', size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#8aaccf', font: { family: 'Space Mono', size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
      }
    }
  });
}

// ── CHART 2 : Scores par pôle (Radar) ────────────────────
function buildPolesChart(sessions) {
  const poleSums = { elec:0, net:0, cyber:0, gen:0 };
  const poleCounts = { elec:0, net:0, cyber:0, gen:0 };
  sessions.forEach(s => {
    if (s.scores_by_pole) {
      Object.entries(s.scores_by_pole).forEach(([p,v]) => {
        if (poleSums[p]!==undefined) { poleSums[p]+=v; poleCounts[p]++; }
      });
    }
  });
  const avgs = Object.fromEntries(Object.entries(poleSums).map(([p,v]) => [p, poleCounts[p] ? Math.round(v/poleCounts[p]*10)/10 : 0]));

  const ctx = document.getElementById('chart-poles').getContext('2d');
  charts.poles = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Électronique','Réseaux','Cybersécurité','Général'],
      datasets: [{
        label: 'Score moyen',
        data: [avgs.elec, avgs.net, avgs.cyber, avgs.gen],
        backgroundColor: 'rgba(0,180,216,0.2)',
        borderColor: '#00b4d8',
        borderWidth: 2,
        pointBackgroundColor: [COLORS.elec, COLORS.net, COLORS.cyber, COLORS.gen],
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#8aaccf', font: { family: 'Space Mono' } } } },
      scales: {
        r: {
          ticks: { color: '#8aaccf', backdropColor: 'transparent', font: { family: 'Space Mono', size: 10 } },
          grid: { color: 'rgba(255,255,255,0.08)' },
          pointLabels: { color: '#e8f4f8', font: { family: 'Syne', size: 12 } }
        }
      }
    }
  });
}

// ── CHART 3 : Timeline (Line) ─────────────────────────────
function buildTimelineChart(sessions) {
  const perDay = {};
  sessions.forEach(s => {
    const day = s.timestamp ? s.timestamp.slice(0,10) : 'inconnu';
    perDay[day] = (perDay[day]||0)+1;
  });
  const sortedDays = Object.keys(perDay).sort();
  const ctx = document.getElementById('chart-timeline').getContext('2d');
  charts.timeline = new Chart(ctx, {
    type: 'line',
    data: {
      labels: sortedDays,
      datasets: [{
        label: 'Participations',
        data: sortedDays.map(d => perDay[d]),
        borderColor: '#00b4d8',
        backgroundColor: 'rgba(0,180,216,0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#00b4d8',
        pointRadius: 4,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#8aaccf', font: { family: 'Space Mono' } } } },
      scales: {
        x: { ticks: { color: '#8aaccf', font: { family: 'Space Mono', size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#8aaccf', font: { family: 'Space Mono', size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
      }
    }
  });
}

// ── CHART 4 : Distribution des scores (Histogram) ─────────
function buildDistributionChart(sessions) {
  const buckets = {'0-20':0,'21-40':0,'41-60':0,'61-80':0,'81-100':0};
  sessions.forEach(s => {
    const sc = s.score_pct || 0;
    if (sc<=20) buckets['0-20']++;
    else if (sc<=40) buckets['21-40']++;
    else if (sc<=60) buckets['41-60']++;
    else if (sc<=80) buckets['61-80']++;
    else buckets['81-100']++;
  });
  const ctx = document.getElementById('chart-distribution').getContext('2d');
  charts.dist = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(buckets).map(b => b + '%'),
      datasets: [{
        label: 'Nb participants',
        data: Object.values(buckets),
        backgroundColor: ['#ef444480','#f7810080','#eab30880','#00b4d880','#2d936c80'],
        borderColor: ['#ef4444','#f77f00','#eab308','#00b4d8','#2d936c'],
        borderWidth: 2,
        borderRadius: 6,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8aaccf', font: { family: 'Space Mono', size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#8aaccf', font: { family: 'Space Mono', size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
      }
    }
  });
}

// ── TABLE ─────────────────────────────────────────────────
function buildTable(sessions) {
  const tbody = document.getElementById('table-body');
  const count = document.getElementById('table-count');
  count.textContent = sessions.length + ' entrées';

  const recent = [...sessions].sort((a,b) => new Date(b.timestamp)-new Date(a.timestamp)).slice(0,50);
  if (recent.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="table-empty">Aucune donnée</td></tr>';
    return;
  }
  tbody.innerHTML = recent.map(s => {
    const date = s.timestamp ? new Date(s.timestamp).toLocaleString('fr-FR') : '—';
    const sid = (s.session_id||'').slice(0,12) + '…';
    const profileLabels = { elec:'🔌 Électronique', net:'🌐 Réseaux', cyber:'🛡️ Cyber', gen:'⚙️ Général' };
    const pLabel = profileLabels[s.profile_dominant] || s.profile_dominant;
    const poles = s.scores_by_pole || {};
    const poleMax = { elec:15, net:15, cyber:15, gen:11 };
    const pct = (p) => poles[p] ? Math.round(poles[p]/poleMax[p]*100)+'%' : '—';
    return `<tr>
      <td>${sid}</td>
      <td>${date}</td>
      <td><span class="profile-badge ${s.profile_dominant}">${pLabel}</span></td>
      <td style="color:var(--cyan)">${s.score_pct||0}%</td>
      <td>${pct('elec')}</td>
      <td>${pct('net')}</td>
      <td>${pct('cyber')}</td>
    </tr>`;
  }).join('');
}

// ── EXPORT CSV ────────────────────────────────────────────
document.getElementById('btn-export').addEventListener('click', async () => {
  const sessions = await fetchSessions();
  const rows = [
    ['session_id','timestamp','profil','score_pct','elec','net','cyber','gen'].join(','),
    ...(sessions.length > 0 ? sessions : generateDemoSessions(50)).map(s => [
      s.session_id,
      s.timestamp,
      s.profile_dominant,
      s.score_pct,
      s.scores_by_pole?.elec||0,
      s.scores_by_pole?.net||0,
      s.scores_by_pole?.cyber||0,
      s.scores_by_pole?.gen||0
    ].join(','))
  ];
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ciel_jpo_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
});
