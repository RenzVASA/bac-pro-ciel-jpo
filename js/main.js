// ============================================================
//  BAC PRO CIEL – main.js
//  Navigation, terminal animation, accordion
// ============================================================

/* ── NAV scroll ─────────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Mobile burger ──────────────────────────────────────── */
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav__links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
}

/* ── Terminal typewriter ────────────────────────────────── */
const lines = [
  'python3 scan_network.py --target 192.168.1.0/24',
  'nmap -sV -O 192.168.1.1',
  'sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT',
  'git clone https://github.com/lycee-ciel/projet-reseau.git',
  'ping -c 4 google.com',
  'openssl req -x509 -newkey rsa:4096 -keyout key.pem',
  'wireshark &',
  'chmod 700 secure_script.sh && ./secure_script.sh',
];
const outputs = [
  ['[+] Scanning...', '[+] 12 hosts found', '[+] Open ports: 22, 80, 443', '✓ Scan terminé'],
  ['Starting Nmap 7.94 ...', 'Host: 192.168.1.1', 'Open 80/tcp nginx', '✓ Done'],
  ['[+] Rule added', '✓ Firewall mis à jour'],
  ['Clonage dans "projet-reseau"', 'remote: Counting objects...', '✓ Projet récupéré'],
  ['PING google.com: 56 bytes', '64 bytes icmp_seq=1 time=12.3ms', '64 bytes icmp_seq=2 time=11.9ms', '✓ Connexion OK'],
  ['Generating a RSA private key...', '...+++', 'writing new private key', '✓ Certificat créé'],
  ['[+] Wireshark lancé', '✓ Capture réseau active'],
  ['[+] Exécution sécurisée...', '✓ Script terminé avec succès'],
];

const termBody = document.getElementById('terminal-body');
const termText = document.getElementById('term-text');
if (termBody && termText) {
  let cmdIndex = 0;
  let charIndex = 0;
  let typing = true;
  let outputLines = [];
  let outputIndex = 0;
  let waiting = false;

  function clearOutputLines() {
    outputLines.forEach(el => el.remove());
    outputLines = [];
    outputIndex = 0;
  }

  function addOutput(text, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        const p = document.createElement('p');
        p.style.cssText = 'color: #2d936c; font-size: 0.8rem; margin-top: 4px; font-family: var(--font-mono)';
        p.textContent = text;
        termBody.appendChild(p);
        outputLines.push(p);
        resolve();
      }, delay);
    });
  }

  async function typeCmd() {
    if (waiting) return;
    const cmd = lines[cmdIndex];
    if (charIndex < cmd.length) {
      termText.textContent = cmd.slice(0, ++charIndex);
      setTimeout(typeCmd, 45 + Math.random() * 30);
    } else {
      waiting = true;
      const outs = outputs[cmdIndex];
      for (let i = 0; i < outs.length; i++) {
        await addOutput(outs[i], i * 300 + 400);
      }
      await new Promise(r => setTimeout(r, 1800));
      clearOutputLines();
      termText.textContent = '';
      charIndex = 0;
      cmdIndex = (cmdIndex + 1) % lines.length;
      waiting = false;
      setTimeout(typeCmd, 500);
    }
  }
  setTimeout(typeCmd, 800);
}

/* ── Accordion ──────────────────────────────────────────── */
document.querySelectorAll('.accordion__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    const isOpen = target.classList.contains('open');
    // close all
    document.querySelectorAll('.accordion__body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.accordion__btn').forEach(b => b.classList.remove('active'));
    if (!isOpen) {
      target.classList.add('open');
      btn.classList.add('active');
    }
  });
});

/* ── Intersection observer animations ──────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .pole, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
