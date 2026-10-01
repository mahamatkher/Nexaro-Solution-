// Tailwind Config
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                heading: ['Sora', 'sans-serif'],
            },
            colors: {
                navy: {
                    500: '#123a6b',
                    700: '#0c2340',
                    900: '#081a30',
                },
                teal: {
                    400: '#0e9488',
                    500: '#0b7a70',
                },
                gold: {
                    400: '#f0a828',
                    500: '#d6901c',
                }
            }
        }
    }
}

// Scripts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    }

    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real production system, you would gather form data and send it to an API endpoint here using fetch() or axios
            // const formData = new FormData(contactForm);
            // fetch('/api/contact', { method: 'POST', body: formData })
            
            alert('Thank you for reaching out! Your message has been sent successfully.');
            contactForm.reset();
        });
    }
});
