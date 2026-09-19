(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const menuToggle = $('#menuToggle');
  const nav = $('#primaryNav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    $$('#primaryNav a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });

  $$('.reveal').forEach(el => observer.observe(el));
})();
