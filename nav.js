/* ============================================================
   VENUS PEPTIDE — nav.js
   Nav y footer centralizados. Modifica aquí, se actualiza en todo el sitio.
   ============================================================ */

const NAV_HTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <div class="nav__logo-icon">V</div>
      Venus Peptide
    </a>
    <div class="nav__links" style="display: flex; align-items: center;">
      <a href="index.html">Inicio</a>
      <a href="categorias.html">Categorías</a>
      <a href="vertodos.html">Ver todos</a>
      <a href="nosotros.html">Nosotros</a>
      <a href="contacto.html">Contacto</a>
      <a href="carrito.html" class="nav__cart-btn" style="display: inline-flex; align-items: center; gap: 8px; background: #2563eb; color: #ffffff !important; padding: 8px 16px; border-radius: 6px; font-size: 13.5px; font-weight: 600; text-decoration: none; margin-left: 15px; transition: background 0.2s;" onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        
        <span id="navCartCount" style="background: rgba(255,255,255,0.2); padding: 1px 6px; border-radius: 4px; font-size: 11px; font-weight: 700;">(0)</span>
      </a>
    </div>
    <div class="nav__burger" id="burgerBtn">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Inicio</a>
  <a href="categorias.html">Categorías</a>
  <a href="vertodos.html">Ver todos</a>
  <a href="nosotros.html">Nosotros</a>
  <a href="contacto.html">Contacto</a>
  <a href="carrito.html" style="margin-top: 15px; background: #2563eb; color: white !important; text-align: center; padding: 12px; border-radius: 6px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px;">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    Ver Carrito (<span id="navCartCountMobile">0</span>)
  </a>
</div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__top" style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; align-items: start; padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <div class="footer__brand">
        <div class="footer__logo"><div class="footer__logo-icon">V</div>Venus Peptide</div>
        <p>Proveedor de compuestos peptídicos de investigación. Todos los productos son para uso exclusivo en laboratorio.</p>
      </div>
      <div class="footer__col">
        <div class="footer__col-title">Navegación</div>
        <a href="index.html">Inicio</a>
        <a href="categorias.html">Categorías</a>
        <a href="vertodos.html">Ver todos</a>
        <a href="nosotros.html">Nosotros</a>
        <a href="contacto.html">Contacto</a>
      </div>
      <div class="footer__col">
        <div class="footer__col-title">Categorías</div>
        <a href="vertodos.html?cat=metabolicos">Investigación Metabólica</a>
        <a href="vertodos.html?cat=gh">Moduladores GH</a>
        <a href="vertodos.html?cat=cognitivas">Neuro-Cognición</a>
        <a href="vertodos.html?cat=desempeno">Desempeño Celular</a>
      </div>
    </div>
    <div style="padding-top: 24px; display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; font-size: 13.5px; color: rgba(255,255,255,0.5);">
        <div>Copyright ©2026 Venus Peptide, All Rights Reserved.</div>
        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
          <a href="faq.html" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">FAQ</a>
          <span style="color: rgba(255,255,255,0.2);">|</span>
          <a href="terminos.html" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">Terms &amp; Conditions</a>
          <span style="color: rgba(255,255,255,0.2);">|</span>
          <a href="envios.html" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">Shipping &amp; Returns</a>
          <span style="color: rgba(255,255,255,0.2);">|</span>
          <a href="privacidad.html" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">Privacy Policy</a>
          <span style="color: rgba(255,255,255,0.2);">|</span>
          <a href="contacto.html" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">Contact Us</a>
        </div>
      </div>
      <p style="text-align: center; font-size: 13px; line-height: 1.6; color: rgba(255,255,255,0.85); margin: 4px 0 0 0; font-weight: 600; letter-spacing: 0.01em;">
        Todos los productos en este sitio son exclusivamente para uso de Investigación y Desarrollo en laboratorio. Debe tener la edad legal requerida para adquirir estos compuestos. Los productos NO son para consumo humano ni veterinario de ningún tipo. Las declaraciones hechas dentro de este sitio web no han sido evaluadas por ninguna administración de alimentos o medicamentos. Estos reactivos no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad.
      </p>
    </div>
  </div>
</footer>
`;

// Inyectar nav y footer
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder    = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder)    navPlaceholder.innerHTML    = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Marcar link activo
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  // Burger menu
  const burger = document.getElementById('burgerBtn');
  const menu   = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }

  // Contador carrito
  actualizarContadorCarrito();
  window.addEventListener('storage', e => {
    if (e.key === 'venus_cart') actualizarContadorCarrito();
  });
});

function actualizarContadorCarrito() {
  const cart  = JSON.parse(localStorage.getItem('venus_cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const navCount       = document.getElementById('navCartCount');
  const navCountMobile = document.getElementById('navCartCountMobile');
  if (navCount)       navCount.textContent       = `(${total})`;
  if (navCountMobile) navCountMobile.textContent = total;
}

window.actualizarContadorCarrito = actualizarContadorCarrito;
