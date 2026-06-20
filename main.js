/* ============================================================
   VENUS PEPTIDE — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav: link activo según página ─────────────────────── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  /* ── Mobile menu ────────────────────────────────────────── */
  const burger = document.querySelector('.nav__burger');
  const menu   = document.querySelector('.mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  /* ── Scroll fade-up ─────────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Nav sombra al hacer scroll ─────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 12
        ? '0 2px 16px rgba(15,30,53,.08)'
        : 'none';
    }, { passive: true });
  }

  /* ── Formulario contacto ────────────────────────────────── */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = '¡Mensaje enviado! ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Enviar mensaje';
        btn.disabled = false;
        form.reset();
      }, 3500);
    });
  }

  /* ── Filtro de categorías (productos.html) ──────────────── */
  const tabs  = document.querySelectorAll('.cat-tab');
  const cards = document.querySelectorAll('.product-wrap');
  if (tabs.length && cards.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.cat;
        cards.forEach(c => {
          c.style.display = (cat === 'all' || c.dataset.cat === cat) ? '' : 'none';
        });
      });
    });

    /* Auto-activar desde URL ?cat= */
    const cat = new URLSearchParams(window.location.search).get('cat');
    if (cat) {
      tabs.forEach(t => {
        t.classList.remove('active');
        if (t.dataset.cat === cat) t.classList.add('active');
      });
      cards.forEach(c => {
        c.style.display = c.dataset.cat === cat ? '' : 'none';
      });
    }
  }

});
