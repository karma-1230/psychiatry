document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when a link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Hero Section Animations
  gsap.to('.animated-text', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.to('.hero p, .hero-cta', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  });

  // Parallax effect for hero pattern
  gsap.to('.hero-pattern', {
    y: '20%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Scroll Animations
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Service Card Hover Effect
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    });
  });

  // Smooth Scrolling for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form Submission
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
    form.reset();
  });

  // Header Background Change on Scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-white', 'shadow-md');
    } else {
      header.classList.remove('bg-white', 'shadow-md');
    }
  });

  // Animated Counter for Experience Badge
  const experienceBadge = document.querySelector('.experience-badge');
  if (experienceBadge) {
    let count = 0;
    const target = 15;
    const duration = 2000;
    const step = target / (duration / 16);

    function updateCount() {
      if (count < target) {
        count += step;
        experienceBadge.textContent = Math.round(count) + '+ Years Experience';
        requestAnimationFrame(updateCount);
      } else {
        experienceBadge.textContent = target + '+ Years Experience';
      }
    }

    ScrollTrigger.create({
      trigger: experienceBadge,
      start: 'top 80%',
      onEnter: () => updateCount()
    });
  }
});
