// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks?.classList.toggle('active');
    });
  }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('WebDev site loaded!');
  initMobileMenu();
  initSmoothScroll();
});

// Log page visibility
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('User left the page');
  } else {
    console.log('User returned to the page');
  }
});
