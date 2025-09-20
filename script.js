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
/* === HEADER & NAVIGATION === */
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  background: rgba(10, 15, 28, 0.5);
  backdrop-filter: blur(12px);
}

header.scrolled {
  background: rgba(10, 15, 28, 0.9);
  box-shadow: 0 4px 20px rgba(0, 245, 255, 0.15);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: var(--glow);
  cursor: pointer;
  position: relative;
}

.logo::before {
  content: "⚡";
  position: absolute;
  left: -1.5rem;
  color: var(--secondary);
  animation: flicker 2s infinite;
}

.nav-menu ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  color: var(--text-light);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.hero p {
  max-width: 600px;
  margin: 0 auto 1.5rem;
}
.cta-button {
  display: inline-block;
  background: linear-gradient(90deg, #0ea5e9, #6366f1);
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: box-shadow 0.3s, transform 0.2s;
}
.cta-button {
  display: inline-block;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius);
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  box-shadow: var(--glow);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}
.cta-button {
  display: inline-block;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius);
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  box-shadow: var(--glow);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(0,245,255,0.9);
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
