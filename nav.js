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
      <a href="vertodos.html">Productos</a>  <!-- ✅ CAMBIADO -->
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

<div class="mobile-menu" id="mobileMenu" style="display:none;">
</div>
`;
