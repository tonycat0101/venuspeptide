/* ============================================================
   VENUS PEPTIDE — BASE DE DATOS DE PRODUCTOS
   ============================================================ */
const productosData = {
  "bpc-157": {
    id: "bpc-157",
    nombre: "BPC-157",
    precio: 45.00,
    rating: "4.9",
    pureza: "99.5% Pureza | 5mg",
    categoria: "desempeno",
    badge: "sale",
    descripcion: "Péptido sintético de alta estabilidad gástrica. Diseñado para estudios in-vitro de rutas de señalización celular y ensayos de bioquímica molecular. Suministrado como polvo liofilizado estéril. Exclusivamente para investigación y análisis de laboratorio. No apto para consumo humano."
  },
  "tb-500": {
    id: "tb-500",
    nombre: "TB-500",
    precio: 49.00,
    rating: "4.8",
    pureza: "99.3% Pureza | 5mg",
    categoria: "desempeno",
    badge: "sale",
    descripcion: "Fracción sintética de timosina beta-4 de alta pureza. Formulada para aplicaciones de investigación celular y estudios de migración en modelos in-vitro. Polvo liofilizado estéril. Uso exclusivo en laboratorio. No apto para consumo humano."
  },
  "semaglutide": {
    id: "semaglutide",
    nombre: "Semaglutide",
    precio: 65.00,
    rating: "5.0",
    pureza: "99.7% Pureza | 5mg",
    categoria: "metabolicos",
    descripcion: "Agonista de receptor GLP-1 de alta pureza (99.7%). Diseñado para investigación en ensayos de laboratorio y estudios de receptores celulares en modelos in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "tirzepatide": {
    id: "tirzepatide",
    nombre: "Tirzepatide",
    precio: 95.00,
    rating: "4.9",
    pureza: "99.8% Pureza | 10mg",
    categoria: "metabolicos",
    badge: "sale",
    descripcion: "Co-agonista de receptores GIP y GLP-1 de alta pureza (99.8%). Formulado para investigación en ensayos de laboratorio y análisis de interacciones moleculares en modelos celulares in-vitro. No apto para consumo humano."
  },
  "retatrutide": {
    id: "retatrutide",
    nombre: "Retatrutide",
    precio: 110.00,
    rating: "4.7",
    pureza: "99.4% Pureza | 4mg",
    categoria: "metabolicos",
    descripcion: "Agonista triple de alta pureza (99.4%). Diseñado para investigación en ensayos de laboratorio y estudios de rutas moleculares en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "melanotan-ii": {
    id: "melanotan-ii",
    nombre: "Melanotan II",
    precio: 38.00,
    rating: "4.6",
    pureza: "99.1% Pureza | 10mg",
    categoria: "desempeno",
    badge: "new",
    vialColor: "pink",
    descripcion: "Análogo sintético de alta pureza (99.1%). Compuesto para ensayos de laboratorio y estudios de receptores de melanocortina en entornos controlados in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "ipamorelin": {
    id: "ipamorelin",
    nombre: "Ipamorelin",
    precio: 42.00,
    rating: "4.8",
    pureza: "99.5% Pureza | 5mg",
    categoria: "gh",
    descripcion: "Péptido sintético de alta pureza (99.5%). Formulado para investigación en ensayos de laboratorio y estudios de receptores de grelina en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "cjc-1295-no-dac": {
    id: "cjc-1295-no-dac",
    nombre: "CJC-1295 No DAC",
    precio: 44.00,
    rating: "4.7",
    pureza: "99.2% Pureza | 5mg",
    categoria: "gh",
    badge: "sale",
    descripcion: "Péptido análogo sintético de alta pureza (99.2%). Diseñado para investigación en ensayos de laboratorio y análisis de receptores GHRH en modelos in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "cjc-1295-with-dac": {
    id: "cjc-1295-with-dac",
    nombre: "CJC-1295 With DAC",
    precio: 52.00,
    rating: "4.6",
    pureza: "99.3% Pureza | 2mg",
    categoria: "gh",
    badge: "sale",
    descripcion: "Péptido análogo sintético de alta pureza (99.3%). Formulado para investigación en ensayos de laboratorio y estudios de afinidad molecular en modelos in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "pt-141": {
    id: "pt-141",
    nombre: "PT-141 (Bremelanotide)",
    precio: 48.00,
    rating: "4.8",
    pureza: "99.6% Pureza | 10mg",
    categoria: "cognitivas",
    descripcion: "Péptido agonista de receptores de melanocortina de alta pureza (99.6%). Formulado para investigación en ensayos de laboratorio y análisis de interacciones moleculares en modelos celulares in-vitro. No apto para consumo humano."
  },
  "epitalon": {
    id: "epitalon",
    nombre: "Epitalon",
    precio: 55.00,
    rating: "4.9",
    pureza: "99.5% Pureza | 10mg",
    categoria: "desempeno",
    descripcion: "Tetrapéptido sintético de alta pureza (99.5%). Formulado para investigación en modelos celulares y análisis de estabilidad cromosómica in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "ghk-cu": {
    id: "ghk-cu",
    nombre: "GHK-Cu",
    precio: 68.00,
    rating: "5.0",
    pureza: "99.8% Pureza | 50mg",
    categoria: "desempeno",
    imagen: "img/vial-ghk-cu-50mg.png",
    descripcion: "Complejo de cobre y tripéptido de alta pureza (99.8%). Diseñado para estudios de laboratorio en cascadas de señalización celular y análisis de matriz extracelular in-vitro. No apto para consumo humano."
  },
  "aod-9604": {
    id: "aod-9604",
    nombre: "AOD-9604",
    precio: 49.00,
    rating: "4.5",
    pureza: "99.1% Pureza | 2mg",
    categoria: "metabolicos",
    descripcion: "Fracción peptídica sintética de alta pureza (99.1%). Formulada para investigación en ensayos de laboratorio y análisis de procesos bioquímicos en modelos celulares in-vitro. No apto para consumo humano."
  },
  "hgh-fragment-176-191": {
    id: "hgh-fragment-176-191",
    nombre: "HGH Fragment 176-191",
    precio: 46.00,
    rating: "4.6",
    pureza: "99.4% Pureza | 5mg",
    categoria: "gh",
    descripcion: "Fragmento sintético de alta pureza (99.4%). Diseñado para investigación en ensayos de laboratorio y análisis de rutas bioquímicas en modelos celulares in-vitro. No apto para consumo humano."
  },
  "igf-1-lr3": {
    id: "igf-1-lr3",
    nombre: "IGF-1 LR3",
    precio: 85.00,
    rating: "4.8",
    pureza: "99.7% Pureza | 1mg",
    categoria: "gh",
    badge: "sale",
    descripcion: "Análogo de factor de crecimiento de alta pureza (99.7%). Formulado para investigación en cultivos celulares y ensayos de laboratorio in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "tesamorelin": {
    id: "tesamorelin",
    nombre: "Tesamorelin",
    precio: 72.00,
    rating: "4.7",
    pureza: "99.5% Pureza | 5mg",
    categoria: "gh",
    imagen: "img/vial-tesamorelin-5mg.png",
    descripcion: "Péptido sintético de alta pureza (99.5%). Diseñado para investigación en ensayos de laboratorio y análisis de receptores GHRH en modelos celulares in-vitro. No apto para consumo humano."
  },
  "sermorelin": {
    id: "sermorelin",
    nombre: "Sermorelin",
    precio: 39.00,
    rating: "4.8",
    pureza: "99.3% Pureza | 5mg",
    categoria: "gh",
    badge: "new",
    descripcion: "Segmento peptídico sintético de alta pureza (99.3%). Formulado para investigación en ensayos de laboratorio y estudios de reserva pituitaria en modelos in-vitro. No apto para consumo humano."
  },
  "hexarelin": {
    id: "hexarelin",
    nombre: "Hexarelin",
    precio: 36.00,
    rating: "4.5",
    pureza: "99.2% Pureza | 2mg",
    categoria: "gh",
    descripcion: "Hexapéptido sintético de alta pureza (99.2%). Diseñado para investigación en ensayos de laboratorio y análisis de estabilidad metabólica en modelos celulares in-vitro. No apto para consumo humano."
  },
  "ghrp-2": {
    id: "ghrp-2",
    nombre: "GHRP-2",
    precio: 34.00,
    rating: "4.6",
    pureza: "99.4% Pureza | 5mg",
    categoria: "gh",
    descripcion: "Péptido sintético de alta pureza (99.4%). Formulado para investigación en ensayos de laboratorio y estudios de receptores acoplados a proteínas G en modelos in-vitro. No apto para consumo humano."
  },
  "ghrp-6": {
    id: "ghrp-6",
    nombre: "GHRP-6",
    precio: 34.00,
    rating: "4.6",
    pureza: "99.4% Pureza | 5mg",
    categoria: "gh",
    descripcion: "Hexapéptido sintético de alta pureza (99.4%). Diseñado para investigación en ensayos de laboratorio y análisis de modulación de receptores GHS-R en modelos celulares in-vitro. No apto para consumo humano."
  },
  "dsip-5mg": {
    id: "dsip-5mg",
    nombre: "DSIP (Sleep Peptide)",
    precio: 35.00,
    rating: "4.7",
    pureza: "99.6% Pureza | 5mg",
    categoria: "cognitivas",
    agotado: true,
    imagen: "img/vial-dsip-5mg.png",
    descripcion: "Nonapéptido sintético de alta pureza (99.6%). Diseñado para investigación en ensayos de laboratorio y estudios de ritmos circadianos en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "nad-plus": {
    id: "nad-plus",
    nombre: "NAD+",
    precio: 60.00,
    rating: "4.9",
    pureza: "99.9% Pureza | 500mg",
    categoria: "desempeno",
    badge: "sale",
    imagen: "img/vial-nad-plus.png",
    descripcion: "Coenzima liofilizada de alta pureza (≥99.9%). Para investigación en ensayos de laboratorio y análisis de procesos bioquímicos celulares. Uso exclusivo en investigación in-vitro. No apto para consumo humano."
  },
  "ibutamoren": {
    id: "ibutamoren",
    nombre: "Ibutamoren (MK-677)",
    precio: 54.00,
    rating: "4.8",
    pureza: "99.6% Pureza | 10mg",
    categoria: "gh",
    descripcion: "Compuesto no peptídico de alta pureza (99.6%). Formulado para investigación en ensayos de laboratorio y análisis de receptores de grelina en modelos celulares in-vitro. No apto para consumo humano."
  },
  "oxytocin": {
    id: "oxytocin",
    nombre: "Oxytocin",
    precio: 35.00,
    rating: "4.9",
    pureza: "99.7% Pureza | 5mg",
    categoria: "cognitivas",
    descripcion: "Neuropéptido sintético de alta pureza (99.7%). Formulado para investigación en ensayos de laboratorio y análisis de señalización sináptica en modelos celulares in-vitro. No apto para consumo humano."
  },
  "tesofensine": {
    id: "tesofensine",
    nombre: "Tesofensine",
    precio: 79.00,
    rating: "4.8",
    pureza: "99.6% Pureza | 500mcg",
    categoria: "metabolicos",
    descripcion: "Inhibidor triple de alta pureza (99.6%). Formulado para investigación en ensayos de laboratorio y análisis de interacciones moleculares en modelos celulares in-vitro. No apto para consumo humano."
  },
  "tirzepatide-glycine": {
    id: "tirzepatide-glycine",
    nombre: "Tirzepatide + Glycine",
    precio: 105.00,
    rating: "5.0",
    pureza: "Fórmula Combinada | 10mg",
    categoria: "metabolicos",
    badge: "new",
    descripcion: "Complejo de alta pureza de agonista de receptores GIP/GLP-1 estabilizado con glicina. Formulado para investigación en ensayos de laboratorio y análisis de interacciones moleculares en modelos celulares in-vitro. No apto para consumo humano."
  },
  "bpc-157-tb-500-blend": {
    id: "bpc-157-tb-500-blend",
    nombre: "BPC-157 + TB-500 Blend",
    precio: 85.00,
    rating: "4.9",
    pureza: "Mezcla Cinética | 5mg + 5mg",
    categoria: "desempeno",
    badge: "sale",
    isBlend: true,
    descripcion: "Mezcla de alta pureza de péptidos sintéticos. Diseñada para ensayos de laboratorio y estudios de señalización celular en modelos in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "semaglutide-bpc-blend": {
    id: "semaglutide-bpc-blend",
    nombre: "Semaglutide + BPC Blend",
    precio: 99.00,
    rating: "4.9",
    pureza: "Sinergia Analítica | 5mg + 5mg",
    categoria: "metabolicos",
    badge: "sale",
    isBlend: true,
    descripcion: "Mezcla de alta pureza de agonista GLP-1 y péptido sintético. Diseñada para investigación en ensayos de laboratorio y estudios de señalización celular en modelos in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "kpv": {
    id: "kpv",
    nombre: "KPV",
    precio: 45.00,
    rating: "4.7",
    pureza: "99.4% Pureza | 5mg",
    categoria: "cognitivas",
    descripcion: "Tripéptido inmunomodulador sintético de alta pureza (99.4%). Diseñado para investigación en ensayos de laboratorio y estudios de respuesta celular en modelos in-vitro. No apto para consumo humano."
  },
  "ll-37": {
    id: "ll-37",
    nombre: "LL-37",
    precio: 58.00,
    rating: "4.8",
    pureza: "99.5% Pureza | 2mg",
    categoria: "desempeno",
    descripcion: "Péptido antimicrobiano sintético de alta pureza (99.5%). Formulado para investigación en ensayos de laboratorio y estudios de respuesta celular en modelos in-vitro. No apto para consumo humano."
  },
  "selank-10mg": {
    id: "selank-10mg",
    nombre: "Selank 10 mg",
    precio: 45.00,
    rating: "4.9",
    pureza: "99.5% Pureza | 10mg",
    categoria: "cognitivas",
    descripcion: "Compuesto liofilizado de alta pureza (99.5%). Formulado para investigación en ensayos de laboratorio y análisis de estabilidad estructural peptídica en modelos celulares in-vitro. No apto para consumo humano."
  }
};

// Exponer la base de datos de manera explícita al entorno global
window.productosData = productosData;

/* ═══════════════════════════════════════════════════════════════════
   🖼️  MOCKUP DE VIAL DINÁMICO (HTML/CSS)
   ═══════════════════════════════════════════════════════════════════ */

function generarVialDinamico(prod) {
  // Extraer mg de la pureza (ej. "99.5% Pureza | 5mg" → "5mg")
  const mgMatch = prod.pureza.match(/\|\s*(\d+mg)/);
  const mg = mgMatch ? mgMatch[1] : '';

  // Extraer pureza (ej. "99.5% Pureza | 5mg" → "99.5%")
  const purityMatch = prod.pureza.match(/(\d+\.?\d*%)/);
  const purity = purityMatch ? purityMatch[1] : '';

  // Determinar si es un blend (tiene dos viales)
  if (prod.isBlend) {
    const mgBlendMatch = prod.pureza.match(/(\d+mg)\s*\+\s*(\d+mg)/);
    const mg1 = mgBlendMatch ? mgBlendMatch[1] : '';
    const mg2 = mgBlendMatch ? mgBlendMatch[2] : '';
    const purityBlend = purityMatch ? purityMatch[1] : '';

    const nombre1 = prod.nombre.split('+')[0] ? prod.nombre.split('+')[0].trim() : '';
    const nombre2 = prod.nombre.split('+')[1] ? prod.nombre.split('+')[1].trim() : 'Blend';

    return `
      <div class="vial-blend-container">
        <div class="vial-mockup-dinamico" style="background-image: url('img/vial-vacio.png');">
          <div class="vial-label">
            <div class="vial-brand">Venus</div>
            <div class="vial-name">${nombre1}</div>
            <div class="vial-details">${mg1}</div>
            <div class="vial-legal">Research Use</div>
          </div>
        </div>
        <span class="vial-blend-plus">+</span>
        <div class="vial-mockup-dinamico" style="background-image: url('img/vial-vacio.png');">
          <div class="vial-label">
            <div class="vial-brand">Venus</div>
            <div class="vial-name">${nombre2}</div>
            <div class="vial-details">${mg2}</div>
            <div class="vial-legal">Research Use</div>
          </div>
        </div>
      </div>
    `;
  }

  // Vial normal (único)
  return `
    <div class="vial-mockup-dinamico" style="background-image: url('img/vial-vacio.png');">
      <div class="vial-label">
        <div class="vial-brand">Venus Peptide</div>
        <div class="vial-name">${prod.nombre}</div>
        <div class="vial-details">${mg} | ${purity} Pureza</div>
        <div class="vial-legal">For Research Use Only</div>
      </div>
    </div>
  `;
}

// Exponer la función para usarla en otras páginas (producto.html)
window.generarVialDinamico = generarVialDinamico;

/* ── Control Automático del Contador de la Nav ── */
function actualizarNumeroNavGlobal() {
  const cart = JSON.parse(localStorage.getItem('venus_cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  
  document.querySelectorAll('.nav__cart span, #navCartCount').forEach(badge => {
    badge.textContent = `(${totalQty})`;
  });
}

// Exponer la función para que vistas hijas puedan llamarla al añadir productos
window.actualizarNumeroNavGlobal = actualizarNumeroNavGlobal;

/* ═══════════════════════════════════════════════════════════════════
   VENUS PEPTIDE — LÓGICA DE LA WEB
   ═══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // Sincronizar el estado del carrito inmediatamente al cargar el DOM
  actualizarNumeroNavGlobal();

  /* ── 1. Renderizar tarjetas de productos automáticamente ── */
  const gridProductos = document.getElementById('gridProductos');
  
  if (gridProductos) {
    gridProductos.innerHTML = '';

    Object.values(productosData).forEach(prod => {
      // Configurar etiquetas de badge (Sale / New)
      let badgeHTML = '';
      if (prod.badge) {
        const badgeColor = prod.badge === 'sale' ? '#ef4444' : '#3b82f6';
        badgeHTML = `<span style="position: absolute; top: 16px; left: 16px; background: ${badgeColor}; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; z-index: 10;">${prod.badge}</span>`;
      }

      // Configurar visualización según stock
      let actionBoxHTML = '';
      if (prod.agotado) {
        actionBoxHTML = `
          <div style="font-size: 18px; font-weight: 800; color: #94a3b8; margin-bottom: 4px;">Agotado</div>
          <a href="#" class="btn" style="display: block; text-align: center; background: #94a3b8; color: white; padding: 12px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 14px; cursor: not-allowed;">
            Agotado
          </a>`;
      } else {
        actionBoxHTML = `
          <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 4px;">$${prod.precio.toFixed(2)} USD</div>
          <a href="producto.html?id=${prod.id}" class="btn" style="display: block; text-align: center; background: #2563eb; color: white; padding: 12px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 14px; transition: background 0.2s;" onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">
            Ver Detalles
          </a>`;
      }

      // ── Generar el vial dinámico ──
      const vialHTML = generarVialDinamico(prod);

      gridProductos.innerHTML += `
        <div class="product-wrap" data-cat="${prod.categoria}">
          <div class="product-card" style="position: relative; background: #fff; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; padding: 24px; display: flex; flex-direction: column; gap: 12px; box-shadow: var(--shadow-card); height: 100%; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
            ${badgeHTML}
            ${vialHTML}
            <h3 style="font-size: 18px; font-weight: 700; color: #0f172a; margin: 4px 0 0 0;">${prod.nombre}</h3>
            <div style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #f59e0b;">
              ★★★★★ <span style="color: #64748b; font-weight: 600; margin-left: 2px;">(${prod.rating})</span>
            </div>
            <div style="font-size: 13px; color: #64748b; font-weight: 500; margin-bottom: auto;">${prod.pureza}</div>
            ${actionBoxHTML}
          </div>
        </div>
      `;
    });
  }

  /* ── 2. Renderizar productos populares en index.html ── */
  const gridPopulares = document.getElementById('productosPopulares');
  
  if (gridPopulares) {
    // ── DEFINE AQUÍ QUÉ PRODUCTOS QUIERES MOSTRAR ──
    // Usa los IDs de los productos que quieras destacar
    const productosDestacados = [
      'bpc-157',
      'tb-500',
      'semaglutide',
      'tirzepatide',
      'retatrutide',
      'melanotan-ii',
      'ipamorelin',
      'epitalon'
    ];

    gridPopulares.innerHTML = '';

    productosDestacados.forEach(id => {
      const prod = productosData[id];
      if (!prod) return;

      // Configurar etiquetas de badge
      let badgeHTML = '';
      if (prod.badge) {
        const badgeColor = prod.badge === 'sale' ? '#ef4444' : '#3b82f6';
        badgeHTML = `<span style="position: absolute; top: 16px; left: 16px; background: ${badgeColor}; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; z-index: 10;">${prod.badge}</span>`;
      }

      // Generar el vial dinámico
      const vialHTML = generarVialDinamico(prod);

      // Configurar acción según stock
      let actionHTML = '';
      if (prod.agotado) {
        actionHTML = `
          <div style="font-size: 18px; font-weight: 800; color: #94a3b8; margin-bottom: 4px;">Agotado</div>
          <a href="#" class="btn" style="display: block; text-align: center; background: #94a3b8; color: white; padding: 12px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 14px; cursor: not-allowed;">
            Agotado
          </a>`;
      } else {
        actionHTML = `
          <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin-bottom: 4px;">$${prod.precio.toFixed(2)} USD</div>
          <a href="producto.html?id=${prod.id}" class="btn" style="display: block; text-align: center; background: #2563eb; color: white; padding: 12px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 14px; transition: background 0.2s;" onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">
            Ver Detalles
          </a>`;
      }

      gridPopulares.innerHTML += `
        <div class="product-card" style="position: relative; background: #fff; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; padding: 24px; display: flex; flex-direction: column; gap: 12px; box-shadow: var(--shadow-card); height: 100%; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          ${badgeHTML}
          ${vialHTML}
          <h3 style="font-size: 18px; font-weight: 700; color: #0f172a; margin: 4px 0 0 0;">${prod.nombre}</h3>
          <div style="display: flex; align-items: center; gap: 4px; font-size: 13px; color: #f59e0b;">
            ★★★★★ <span style="color: #64748b; font-weight: 600; margin-left: 2px;">(${prod.rating})</span>
          </div>
          <div style="font-size: 13px; color: #64748b; font-weight: 500; margin-bottom: auto;">${prod.pureza}</div>
          ${actionHTML}
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

  /* ── Filtro de categorías (Control inteligente de URLs) ── */
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
  }

  /* Auto-activar filtro desde URL ?cat= */
  const catUrl = new URLSearchParams(window.location.search).get('cat');
  if (catUrl) {
    const cardsParaFiltrar = document.querySelectorAll('.product-wrap');
    const tabsParaFiltrar  = document.querySelectorAll('.cat-tab');
    
    if(tabsParaFiltrar.length) {
      tabsParaFiltrar.forEach(t => {
        t.classList.remove('active');
        if (t.dataset.cat === catUrl) t.classList.add('active');
      });
    }
    if(cardsParaFiltrar.length) {
      cardsParaFiltrar.forEach(c => {
        c.style.display = c.dataset.cat === catUrl ? '' : 'none';
      });
    }
  }

});
