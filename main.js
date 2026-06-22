/* ============================================================
   VENUS PEPTIDE — BASE DE DATOS DE PRODUCTOS
   ============================================================ */
const productosData = {
  "cjc-1295-no-dac": {
    id: "cjc-1295-no-dac",
    nombre: "CJC-1295 No DAC",
    precio: 44.00,
    rating: "4.7",
    pureza: "99.2% Pureza | 5mg",
    categoria: "secretagogos", // Debe coincidir con el data-cat de tus pestañas
    vialTexto: "CJC",
    descripcion: "CJC-1295 No DAC (también conocido como Modified GRF 1-29) es un péptido análogo sintético del factor liberador de la hormona del crecimiento (GHRH). Ideal para ensayos analíticos estandarizados de mapeo hormonal in-vitro."
  },
  "cjc-1295-with-dac": {
    id: "cjc-1295-with-dac",
    nombre: "CJC-1295 With DAC",
    precio: 52.00,
    rating: "4.6",
    pureza: "99.3% Pureza | 2mg",
    categoria: "secretagogos",
    vialTexto: "CJC-DAC",
    descripcion: "CJC-1295 con Complejo de Afinidad a la Droga (DAC) incrementa significativamente la vida media de la estructura molecular al unirse de forma selectiva a la albúmina en entornos de laboratorio controlados."
  },
  "selank-10mg": {
    id: "selank-10mg",
    nombre: "Selank 10 mg",
    precio: 45.00,
    rating: "4.9",
    pureza: "99.5% Pureza | 10mg",
    categoria: "nootropicos", // Ejemplo de otra categoría
    vialTexto: "SELANK",
    descripcion: "Compuesto liofilizado de alta pureza diseñado para la investigación analítica de receptores y la estabilidad estructural peptídica en ensayos biológicos complejos."
  }
};

/* ============================================================
   VENUS PEPTIDE — LÓGICA DE LA WEB
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Renderizar tarjetas de productos automáticamente ── */
  const gridProductos = document.getElementById('gridProductos');
  
  if (gridProductos) {
    // Limpiamos el contenedor por si acaso hay algo escrito en el HTML
    gridProductos.innerHTML = '';

    // Recorremos nuestra base de datos para dibujar cada tarjeta
    Object.values(productosData).forEach(prod => {
      gridProductos.innerHTML += `
        <div class="product-wrap" data-cat="${prod.categoria}">
          <div class="product-card" style="position: relative; background: #fff; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; padding: 24px; display: flex; flex-direction: column; gap: 12px; box-shadow: var(--shadow-card);">
            
            <span style="position: absolute; top: 16px; left: 16px; background: #ef4444; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">SALE</span>
            
            <div style="background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 6px; padding: 30px; display: flex; justify-content: center; align-items: center; min-height: 180px;">
              <div style="width: 60px; height: 110px; border: 2px solid #cbd5e1; border-radius: 10px 10px 6px 6px; position: relative; background: #fff;">
                <div style="width: 100%; height: 12px; background: #2563eb; border-radius: 8px 8px 0 0; position: absolute; top: -1px; left: 0;"></div>
                <div style="width: 30px; height: 6px; background: #cbd5e1; position: absolute; top: -7px; left: 13px; border-radius: 2px 2px 0 0;"></div>
                <div style="position: absolute; top: 35%; left: 0; width: 100%; font-size: 10px; font-weight: 700; color: #334155; text-align: center; line-height: 1; padding: 0 2px; word-wrap: break-word;">
                  ${prod.vialTexto}
                </div>
              </div>
            </div>

            <h3 style="font-size: 18px; font-weight: 700; color: #0f172a; margin: 4px 0 0 0;">${prod.nombre}</h3>
            
            <div style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #f59e0b;">
              ★★★★★ <span style="color: #64748b; font-weight: 600; margin-left: 2px;">(${prod.rating})</span>
            </div>

            <div style="font-size: 13px; color: #64748b; font-weight: 500;">${prod.pureza}</div>

            <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 4px;">$${prod.precio.toFixed(2)} USD</div>

            <a href="producto.html?id=${prod.id}" class="btn" style="display: block; text-align: center; background: #2563eb; color: white; padding: 12px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 14px; transition: background 0.2s;">
              Ver Detalles
            </a>

          </div>
        </div>
      `;
    });
  }

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

  /* ── Filtro de categorías (productos.html / categorias.html) ── */
  const tabs  = document.querySelectorAll('.cat-tab');
  const cards = document.querySelectorAll('.product-wrap'); // Volverá a leer las tarjetas ya inyectadas por JS
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
