
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
      }, 1500); 
      
      setTimeout(() => {
        document.querySelector(".support-text").classList.add("visible");
      }, 1500); 
   
    }
    
  }
  typeWriter();
});

// --- LIGHTBOX / CLICK TO ENLARGE ---
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const overlay = lightbox.querySelector('.lightbox__overlay');
  const imgEl = lightbox.querySelector('.lightbox__img');
  const captionEl = lightbox.querySelector('.lightbox__caption');
  const closeButtons = lightbox.querySelectorAll('[data-close]');

  function openLightbox(src, alt, caption) {
    imgEl.src = src;
    imgEl.alt = alt || '';
    captionEl.textContent = caption || '';
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // focus trap simple: move focus to close button
    const close = lightbox.querySelector('.lightbox__close');
    if (close) close.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    imgEl.src = '';
    document.body.style.overflow = '';
  }

  // attach click on gallery images
  const galleryImages = document.querySelectorAll('.image-card img');
  galleryImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt');
      const caption = img.closest('figure')?.querySelector('figcaption')?.textContent || '';
      openLightbox(src, alt, caption);
    });
  });

  // close handlers
  closeButtons.forEach(btn => btn.addEventListener('click', closeLightbox));
  overlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') {
      closeLightbox();
    }
  });
});
