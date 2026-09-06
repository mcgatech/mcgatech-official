(() => {
  if (typeof document === 'undefined') return;

  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  const setMenuOpen = (isOpen) => {
    if (nav) nav.classList.toggle('is-open', isOpen);
    if (menuToggle) menuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav
        ? nav.classList.contains('is-open')
        : menuToggle.getAttribute('aria-expanded') === 'true';

      setMenuOpen(!isOpen);
    });
  }

  if (nav) {
    nav.querySelectorAll('a').forEach((anchor) => {
      anchor.addEventListener('click', () => setMenuOpen(false));
    });
  }

  const updateScrollState = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  if (typeof window !== 'undefined') {
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
  }
})();
