// Ganga Agri Genetics Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ganga Agri Genetics website loading...');

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Nav toggle clicked');
            
            navMenu.classList.toggle('active');
            
            // Change hamburger icon to X when menu is open
            if (navMenu.classList.contains('active')) {
                navToggle.innerHTML = '✕';
            } else {
                navToggle.innerHTML = '☰';
            }
        });

        // Close mobile menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    navToggle.innerHTML = '☰';
                }
            });
        });
    }

    // Enhanced smooth scrolling function
    function smoothScrollTo(targetId) {
        console.log(`Attempting to scroll to: ${targetId}`);
        
        let targetSection = document.querySelector(targetId);
        
        // If target not found, try alternative approaches
        if (!targetSection) {
            console.log(`Primary target ${targetId} not found, trying alternatives`);
            
            // Handle special cases
            if (targetId === '#products') {
                targetSection = document.querySelector('.products-section');
            } else if (targetId === '#about') {
                targetSection = document.querySelector('.about-section');
            } else if (targetId === '#services') {
                targetSection = document.querySelector('.services-section');
            } else if (targetId === '#rd') {
                targetSection = document.querySelector('.timeline-section');
            } else if (targetId === '#contact') {
                targetSection = document.querySelector('.footer');
            } else if (targetId === '#blog') {
                targetSection = document.querySelector('.blog-section');
            } else if (targetId === '#hero') {
                targetSection = document.querySelector('.hero');
            }
        }
        
        if (targetSection) {
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight + 20 : 100;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            console.log(`Scrolling to position: ${targetPosition}`);
            
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
            
            return true;
        }
        
        console.log(`Target ${targetId} still not found after alternatives`);
        return false;
    }

    // Handle all anchor links with smooth scrolling
    function handleAnchorClick(e) {
        const href = this.getAttribute('href');
        console.log(`Link clicked: ${href}`);
        
        if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            e.stopPropagation();
            
            // Small delay to ensure any animations complete
            setTimeout(() => {
                smoothScrollTo(href);
            }, 50);
        }
    }

    // Apply to all navigation links
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    console.log(`Found ${allNavLinks.length} navigation links`);
    
    allNavLinks.forEach((link, index) => {
        console.log(`Setting up link ${index}: ${link.getAttribute('href')}`);
        link.addEventListener('click', handleAnchorClick);
    });

    // Hero section button handlers with specific IDs
    const exploreProductsBtn = document.getElementById('exploreProductsBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    if (exploreProductsBtn) {
        console.log('Setting up Explore Products button');
        exploreProductsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Explore Products button clicked');
            
            // Try products first, then services as fallback
            setTimeout(() => {
                if (!smoothScrollTo('#products')) {
                    smoothScrollTo('#services');
                }
            }, 50);
        });
    }

    if (learnMoreBtn) {
        console.log('Setting up Learn More button');
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Learn More button clicked');
            
            setTimeout(() => {
                smoothScrollTo('#about');
            }, 50);
        });
    }

    // Debug: Log all available sections
    const sections = document.querySelectorAll('section[id], .hero, .footer');
    console.log('Available sections:');
    sections.forEach(section => {
        const id = section.id || section.className;
        console.log(`- ${id}: ${section.tagName}`);
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollTop = 0;
        let ticking = false;

        function updateHeader() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove shadow based on scroll position
            if (scrollTop > 10) {
                header.style.boxShadow = 'var(--shadow-lg)';
            } else {
                header.style.boxShadow = 'var(--shadow-sm)';
            }
            
            lastScrollTop = scrollTop;
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });
    }

    // Animate elements on scroll using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add a slight delay for staggered animation
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                entry.target.style.transitionDelay = `${delay}ms`;
            }
        });
    }, observerOptions);

    // Observe cards and timeline items for animation
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .product-card, .blog-card, .timeline-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-primary);
        color: var(--color-btn-primary-text);
        border: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-md);
    `;
    
    document.body.appendChild(backToTopBtn);

    // Show/hide back to top button
    let backToTopTicking = false;
    function updateBackToTop() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
        backToTopTicking = false;
    }

    window.addEventListener('scroll', function() {
        if (!backToTopTicking) {
            requestAnimationFrame(updateBackToTop);
            backToTopTicking = true;
        }
    });

    // Back to top click handler
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.timeline-item, .why-choose-list li');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
        
        // Add transition if not already present
        if (!element.style.transition.includes('transform')) {
            element.style.transition += ', transform 0.3s ease';
        }
    });

    // Handle window resize for mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu) {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.innerHTML = '☰';
            }
        }
    });

    // Add active state to navigation based on scroll position
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id], .hero');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        
        let current = '';
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.id || (section.classList.contains('hero') ? 'hero' : '');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Add CSS for active navigation state
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            background-color: var(--color-primary) !important;
            color: var(--color-btn-primary-text) !important;
        }
        
        /* Ensure mobile nav toggle is visible on smaller screens */
        @media (max-width: 768px) {
            .nav-toggle {
                display: block !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Update active navigation on scroll
    let navTicking = false;
    window.addEventListener('scroll', function() {
        if (!navTicking) {
            requestAnimationFrame(function() {
                updateActiveNavigation();
                navTicking = false;
            });
            navTicking = true;
        }
    });

    // Initialize active navigation
    updateActiveNavigation();

    // Form handling (for future contact forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value.trim();
            });
            
            // Basic validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--color-error)';
                } else {
                    field.style.borderColor = 'var(--color-border)';
                }
            });
            
            if (isValid) {
                console.log('Form submitted:', formObject);
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });

    console.log('Ganga Agri Genetics website loaded successfully!');
    console.log('Navigation elements found:', {
        navToggle: !!navToggle,
        navMenu: !!navMenu,
        exploreBtn: !!exploreProductsBtn,
        learnMoreBtn: !!learnMoreBtn,
        navLinks: allNavLinks.length,
        sections: sections.length
    });
});