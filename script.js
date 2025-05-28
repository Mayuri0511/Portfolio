// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.hero-text', { origin: 'left' });
ScrollReveal().reveal('.hero-img', { origin: 'right' });
ScrollReveal().reveal('.about-card', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.skill-card', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.project-item', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.achievement-table', { origin: 'right' });
ScrollReveal().reveal('.contact', { origin: 'bottom' });

// Typed.js
if (document.querySelector("#typed-text")) {
  document.querySelector("#typed-text").textContent = "Mayuri Das";
}