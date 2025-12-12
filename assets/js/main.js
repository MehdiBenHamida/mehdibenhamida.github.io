/* Enhanced JavaScript for futuristic interactions */
(function () {
  // Navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Enhanced card magnetic effect
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth > 768) { // Only on desktop
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((centerX - x) / centerX) * 5;
        const scale = 1.02;

        card.style.transform = `
          translateY(-12px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale(${scale})
        `;
      }
    });

    card.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
      }
    });
  });

  // Cursor trail effect
  let cursorTrails = [];
  const maxTrails = 5;

  function createCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x - 10 + 'px';
    trail.style.top = y - 10 + 'px';
    document.body.appendChild(trail);

    cursorTrails.push(trail);

    if (cursorTrails.length > maxTrails) {
      const oldTrail = cursorTrails.shift();
      oldTrail.remove();
    }

    setTimeout(() => {
      trail.style.opacity = '0';
      trail.style.transform = 'scale(0)';
      setTimeout(() => {
        if (trail.parentNode) {
          trail.remove();
        }
        const index = cursorTrails.indexOf(trail);
        if (index > -1) {
          cursorTrails.splice(index, 1);
        }
      }, 300);
    }, 100);
  }

  // Add cursor trail on mouse movement (desktop only)
  if (window.innerWidth > 768) {
    let mouseTrailTimer;
    document.addEventListener('mousemove', (e) => {
      if (mouseTrailTimer) clearTimeout(mouseTrailTimer);
      mouseTrailTimer = setTimeout(() => {
        createCursorTrail(e.clientX, e.clientY);
      }, 50);
    });
  }

  // Smooth scroll enhancement for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll('.card, .hero, .content-grid');
  animatedElements.forEach(el => observer.observe(el));

  // Enhanced button hover effects
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Dynamic particle system (lightweight)
  function createParticle() {
    if (Math.random() > 0.7 && window.innerWidth > 768) { // Reduce frequency on mobile
      const particle = document.createElement('div');
      particle.className = 'dynamic-particle';
      particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: rgba(0, 212, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * window.innerWidth}px;
        top: 100vh;
        box-shadow: 0 0 6px rgba(0, 212, 255, 0.8);
        animation: float-up 8s linear forwards;
      `;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 8000);
    }
  }

  // Add particle animation CSS
  const particleStyle = document.createElement('style');
  particleStyle.textContent = `
    @keyframes float-up {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(particleStyle);

  // Create particles periodically
  setInterval(createParticle, 3000);

  // Header scroll effect
  let lastScrollY = 0;
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (header) {
      if (currentScrollY > 100) {
        header.style.background = 'rgba(26, 26, 36, 0.95)';
        header.style.backdropFilter = 'blur(30px) saturate(200%)';
      } else {
        header.style.background = 'rgba(26, 26, 36, 0.8)';
        header.style.backdropFilter = 'blur(20px) saturate(180%)';
      }
    }

    lastScrollY = currentScrollY;
  });

  // Preload critical animations
  document.addEventListener('DOMContentLoaded', () => {
    // Force hardware acceleration for smooth animations
    const criticalElements = document.querySelectorAll('.card, .btn, .hero-avatar, .nav-menu a');
    criticalElements.forEach(el => {
      el.style.transform = 'translateZ(0)';
    });
  });

})();
