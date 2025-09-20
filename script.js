/* === GLOBAL STYLES === */
:root {
  --bg-dark: #0a0f1c;
  --bg-gradient: linear-gradient(135deg, #0a0f1c 0%, #1a2238 100%);
  --primary: #00f5ff;
  --secondary: #7928ca;
  --text-light: #e2e8f0;
  --text-dim: #94a3b8;
  --glow: 0 0 15px rgba(0, 245, 255, 0.8), 0 0 30px rgba(121, 40, 202, 0.6);
  --radius: 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: "Inter", sans-serif;
  background: var(--bg-gradient);
  color: var(--text-light);
  scroll-behavior: smooth;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
/* HEADER */
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0.75rem 0;
  background: rgba(10, 15, 30, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(56, 189, 248, 0.4);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
header.scrolled {
  background: rgba(10, 15, 30, 0.95);
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.5);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: var(--glow);
  cursor: pointer;
}

.logo-icon {
  filter: drop-shadow(0 0 8px rgba(0, 245, 255, 0.8)) drop-shadow(0 0 16px rgba(121, 40, 202, 0.6));
  animation: spin 12s linear infinite;
}

.logo-text {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: var(--glow);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LOGO */
.logo-glow {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0ff;
  text-shadow: 0 0 8px #0ff, 0 0 15px #3b82f6;
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glowPulse 2.5s infinite alternate;
}
@keyframes glowPulse {
  from { text-shadow: 0 0 8px #0ff, 0 0 15px #3b82f6; }
  to   { text-shadow: 0 0 15px #38bdf8, 0 0 30px #6366f1; }
}

/* NAV LINKS */
.nav-list {
  display: flex;
  gap: 2rem;
}
.nav-link {
  color: #e2e8f0;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}
.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  left: 0;
  bottom: -4px;
  background: linear-gradient(90deg, #0ea5e9, #6366f1);
  transition: width 0.3s;
}
.nav-link:hover {
  color: #38bdf8;
}
.nav-link:hover::after {
  width: 100%;
}

/* HERO */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 6rem;
  position: relative;
  overflow: hidden;
}

/* glowing animated background */
.hero-glow {
  position: absolute;
  top: -20%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(14,165,233,0.25), transparent 70%);
  filter: blur(120px);
  transform: translateX(-50%);
  animation: pulseGlow 6s infinite alternate;
  z-index: 0;
}
@keyframes pulseGlow {
  from { opacity: 0.6; }
  to   { opacity: 1; }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.glow-title {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #0ea5e9, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(14,165,233,0.7), 0 0 30px rgba(99,102,241,0.5);
  animation: textGlow 3s ease-in-out infinite alternate;
}
@keyframes textGlow {
  from { text-shadow: 0 0 15px rgba(14,165,233,0.7), 0 0 30px rgba(99,102,241,0.5); }
  to   { text-shadow: 0 0 25px rgba(56,189,248,0.9), 0 0 40px rgba(99,102,241,0.8); }
}


.nav-link:hover {
  color: var(--primary);
  text-shadow: var(--glow);
}

.nav-button {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.nav-button:hover {
  transform: scale(1.05);
  box-shadow: var(--glow);
}

/* Mobile nav toggle */
.nav-toggle {
  display: none;
  cursor: pointer;
  color: var(--primary);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    background: rgba(10, 15, 28, 0.95);
    position: absolute;
    top: 100%;
    right: 0;
    width: 220px;
    border-radius: var(--radius);
    padding: 1rem;
    box-shadow: var(--glow);
  }
  .nav-menu.active {
    display: flex;
  }
  .nav-toggle {
    display: block;
  }
}

/* === HERO SECTION === */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 6rem 1rem 2rem;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 50% 30%, rgba(0,245,255,0.1), transparent 70%);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: var(--glow);
  cursor: pointer;
}


.logo-icon {
  filter: drop-shadow(0 0 8px rgba(0, 245, 255, 0.8)) drop-shadow(0 0 16px rgba(121, 40, 202, 0.6));
  animation: spin 12s linear infinite;
}

.logo-text {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: var(--glow);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: var(--glow);
  cursor: pointer;
  text-decoration: none; /* 🔥 no underline */
  color: inherit;
}

.logo:hover,
.logo:focus,
.logo:active {
  text-decoration: none; /* prevent underline always */
  color: inherit;
}

.logo-icon {
  filter: drop-shadow(0 0 8px rgba(0, 245, 255, 0.8)) drop-shadow(0 0 16px rgba(121, 40, 202, 0.6));
  animation: spin 12s linear infinite; /* subtle slow spin */
}

.logo-text {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: var(--glow);
  transition: background-position 0.5s ease;
  background-size: 200% 200%;
  background-position: left;
}

.logo:hover .logo-text {
  background-position: right; /* ✨ gradient shift on hover */
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


.hero::before {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(121,40,202,0.3), transparent 70%);
  top: -200px;
  right: -200px;
  filter: blur(100px);
  animation: pulse 6s infinite alternate;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 1.5rem;

  /* Gradient text */
  background: linear-gradient(90deg, #00f5ff, #7928ca, #00f5ff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Softer glow */
  text-shadow: 0 0 12px rgba(0, 245, 255, 0.4);

  white-space: nowrap;         /* Prevent wrapping */
  overflow: hidden;            /* Hide text until “typed” */
  border-right: 3px solid #00f5ff; /* Cursor */
  width: 0;                    /* Start empty */
  animation: typing 4s steps(40, end) forwards, blink 0.8s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}


.hero p {
  max-width: 700px;
  margin: 0 auto 2rem;
  font-weight: 600;  
  font-size: 1.25rem;   /* bigger */
  line-height: 1.4;     /* better readability */
  color: var(--text-light); /* softer contrast to not fight the h1 */
}
.cta-button {
  display: inline-block;
  text-decoration: none; 
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(90deg, #00f5ff, #7928ca);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease;

  /* Neon glow */
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.6), 0 0 40px rgba(121, 40, 202, 0.6);

  animation: buttonPulse 3s ease-in-out infinite;
}

.cta-button:hover {
  transform: scale(1.05);
}

@keyframes buttonPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.6), 0 0 40px rgba(121, 40, 202, 0.6);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 245, 255, 0.9), 0 0 60px rgba(121, 40, 202, 0.9);
  }
}

.hero-subtext {
  opacity: 0;                /* hidden initially */
  transform: translateY(10px);
  transition: opacity 1s ease, transform 1s ease;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(0, 245, 255, 0.25);
}

.hero-subtext.visible {
  opacity: 1;
  transform: translateY(0);  /* fade + slide in */
}

.support-text {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-dim);
}

/* FEATURES */
.features {
  padding: 5rem 0;
}
.section-title h2 {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.feature-card {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
}
.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #38bdf8;
}

/* INFOGRAPHIC */
.how-it-works {
  padding: 5rem 0;
}
.infographic svg {
  width: 100%;
  height: auto;
}
.draw-path {
  stroke: #38bdf8;
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: drawLine 2s ease forwards;
}
@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}
.node-bg {
  fill: #1e293b;
  stroke: #38bdf8;
  stroke-width: 3;
  filter: drop-shadow(0 0 10px #38bdf8);
}
.node-bg-main {
  fill: #0f172a;
  stroke: #3b82f6;
  stroke-width: 4;
  filter: drop-shadow(0 0 15px #3b82f6);
}
.node-card {
  fill: rgba(30, 41, 59, 0.8);
  stroke: #6366f1;
  stroke-width: 2;
  filter: drop-shadow(0 0 10px #6366f1);
}
.label, .card-title, .card-text {
  fill: #f1f5f9;
  font-size: 0.9rem;
}
.card-title {
  font-weight: 700;
  font-size: 1rem;
}
.card-text {
  font-size: 0.8rem;
}

/* CTA */
.cta {
  padding: 5rem 0;
  text-align: center;
  background: linear-gradient(90deg, #0ea5e9, #6366f1);
  color: white;
}
.cta-form {
  margin-top: 1.5rem;
}
.cta-form input {
  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: none;
  outline: none;
  width: 250px;
  margin-right: 0.5rem;
}
.cta-form button {
  background: white;
  color: #0ea5e9;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}
.cta-form button:hover {
  transform: scale(1.05);
}

/* FOOTER */
footer {
  padding: 2rem 0;
  text-align: center;
  background: #020617;
  color: #94a3b8;
}
.social-links a {
  margin: 0 0.5rem;
  transition: transform 0.2s;
}
.social-links a:hover {
  transform: scale(1.2);
}

/* SCROLL ANIMATIONS */

@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; }
  20%, 24%, 55% { opacity: 0.3; }
}

@keyframes pulse {
  from { transform: scale(1); opacity: 0.8; }
  to { transform: scale(1.2); opacity: 0.4; }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
