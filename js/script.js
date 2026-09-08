// Highlight the current section's nav link while scrolling
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

if (sections.length && navLinks.length) {
  const setActive = () => {
    let currentId = '';
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.4) {
        currentId = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.style.borderColor =
        link.getAttribute('href') === `#${currentId}` ? 'var(--accent)' : 'transparent';
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
}
