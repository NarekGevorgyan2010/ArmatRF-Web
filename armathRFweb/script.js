// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Շնորհակալություն ձեր հաղորդագրության համար! Մենք շուտով կկապվենք ձեզ հետ։');
        contactForm.reset();
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Language Toggle
let currentLang = 'hy'; // Default language is Armenian

const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
    // Toggle language
    currentLang = currentLang === 'hy' ? 'en' : 'hy';
    
    // Update button text
    langToggle.textContent = currentLang === 'hy' ? 'EN' : 'ՀԱՅ';
    
    // Update all elements with data-en and data-hy attributes
    document.querySelectorAll('[data-en][data-hy]').forEach(element => {
        const text = currentLang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-hy');
        
        // Check if the element contains HTML (like <strong> tags)
        if (text.includes('<')) {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }
    });
    
    // Update page title
    document.title = currentLang === 'en' 
        ? 'ArmathRF - Security Testing Device' 
        : 'ArmathRF - Անվտանգության Ստուգման Սարք';
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
});
