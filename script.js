// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Sticky header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// "Presave Now" button - open link in new tab
const presaveBtn = document.getElementById('presave-btn');
presaveBtn.addEventListener('click', () => {
  window.open('https://presave.link/to/bleed', '_blank', 'noopener');
});
