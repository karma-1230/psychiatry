document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

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
    const heroPattern = document.querySelector('.hero-pattern');
    if (heroPattern) {
        gsap.to(heroPattern, {
            y: '20%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

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

    // Parallax Effect for Hero Background
    gsap.to('.hero-background', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
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

    // Innovation Showcase Horizontal Scroll
    const innovationShowcase = document.querySelector('.innovation-showcase');
    let isDown = false;
    let startX;
    let scrollLeft;

    innovationShowcase.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - innovationShowcase.offsetLeft;
        scrollLeft = innovationShowcase.scrollLeft;
    });

    innovationShowcase.addEventListener('mouseleave', () => {
        isDown = false;
    });

    innovationShowcase.addEventListener('mouseup', () => {
        isDown = false;
    });

    innovationShowcase.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - innovationShowcase.offsetLeft;
        const walk = (x - startX) * 2;
        innovationShowcase.scrollLeft = scrollLeft - walk;
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
    const form = document.getElementById('contact-form');
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
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    });

    // Virtual Office Tour (placeholder)
    const virtualTourContainer = document.getElementById('virtual-tour-container');
    if (virtualTourContainer) {
        // This is a placeholder for a virtual tour feature
        // You would typically integrate a 360-degree view or 3D tour library here
        virtualTourContainer.innerHTML = '<p>Virtual Tour Coming Soon</p>';
    }

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