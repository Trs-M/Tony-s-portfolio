document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const contentSections = document.querySelectorAll('[data-page]');

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
      const targetPage = navLink.dataset.navLink;
      contentSections.forEach(section => {
        if (section.dataset.page === targetPage) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
      navLinks.forEach(link => {
        if (link === navLink) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  });
});
