
document.addEventListener('DOMContentLoaded', () => {
  // --- HEADER SCROLL EFFECT ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- MOBILE NAVIGATION TOGGLE ---
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
  const observerOptions = { root: null, threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // Animate infographic paths
  const infographicPaths = document.querySelectorAll('.draw-path');
  infographicPaths.forEach((path, i) => {
    path.style.animationDelay = `${i * 0.5}s`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  const text = typingElement.textContent;
  typingElement.textContent = "";

  let i = 0;
  const speed = 50; // ms per character
  function typeWriter() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      document.querySelector(".hero-subtext").classList.add("visible");
      
      setTimeout(() => {
        document.querySelector(".cta-button").classList.add("visible");
      }, 2000); 
      
      setTimeout(() => {
        document.querySelector(".support-text").classList.add("visible");
      }, 2000); 
   
    }
    
  }
  typeWriter();
});
