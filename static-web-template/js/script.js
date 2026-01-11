// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        // Simple toggle for now, would typically add a class to body or nav to show/hide menu
        // Since we didn't style the mobile menu overlay deeply in CSS yet, 
        // we will just log or do a simple alert/class toggle to demonstrate logic.

        // In a real implementation:
        // nav.classList.toggle('active');
        console.log('Mobile menu clicked');
        alert('Mobile menu toggle would happen here.');
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations (optional enhancement)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(el => {
    observer.observe(el);
});
