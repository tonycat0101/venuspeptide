/* ============================================================
   VENUS PEPTIDE — BASE DE DATOS DE PRODUCTOS
   ============================================================ */

// ── FAVICON ──
(function() {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%232563eb'/%3E%3Ctext x='50' y='70' font-family='Georgia, serif' font-size='70' font-weight='bold' text-anchor='middle' fill='%23ffffff'%3EV%3C/text%3E%3C/svg%3E";
  link.type = 'image/svg+xml';
  document.head.appendChild(link);
})();

const productosData = {
  // ── GH (5 productos) ──
  "ipamorelin-5mg": {
    id: "ipamorelin-5mg",
    nombre: "Ipamorelin 5mg",
    precio: 42.00,
    rating: "4.8",
    pureza: "99.5% Pureza | 5mg",
    categoria: "gh",
    imagen: "img/vial-ipamorelin-5mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de receptores de grelina en modelos celulares in-vitro. Presentación en polvo liofilizado estéril. No apto para consumo humano."
  },
  "cjc-1295-no-dac-5mg": {
    id: "cjc-1295-no-dac-5mg",
    nombre: "CJC-1295 No DAC 5mg",
    precio: 44.00,
    rating: "4.7",
    pureza: "99.2% Pureza | 5mg",
    categoria: "gh",
    badge: "sale",
    imagen: "img/vial-cjc-1295-no-dac-5mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y análisis de receptores GHRH en modelos celulares in-vitro. Presentación en polvo liofilizado estéril. No apto para consumo humano."
  },
  "igf-1-lr3-1mg": {
    id: "igf-1-lr3-1mg",
    nombre: "IGF-1 LR3 1mg",
    precio: 85.00,
    rating: "4.8",
    pureza: "99.7% Pureza | 1mg",
    categoria: "gh",
    badge: "sale",
    imagen: "img/vial-igf-1-lr3-1mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y análisis de receptores IGF-1 en modelos celulares in-vitro. Presentación en polvo liofilizado estéril. No apto para consumo humano."
  },
  "tesamorelin-10mg": {
    id: "tesamorelin-10mg",
    nombre: "Tesamorelin 10mg",
    precio: 95.00,
    rating: "4.7",
    pureza: "99.5% Pureza | 10mg",
    categoria: "gh",
    imagen: "img/vial-tesamorelin-10mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y análisis de receptores GHRH en modelos celulares in-vitro. Presentación en polvo liofilizado estéril. No apto para consumo humano."
  },
  "tesamorelin-20mg": {
    id: "tesamorelin-20mg",
    nombre: "Tesamorelin 20mg",
    precio: 140.00,
    rating: "4.7",
    pureza: "99.5% Pureza | 20mg",
    categoria: "gh",
    imagen: "img/vial-tesamorelin-20mg.png",
    descripcion: "Compuesto sintético de alta pureza. Presentación de 20mg para investigación en ensayos de laboratorio y análisis de receptores GHRH en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },

  // ── METABÓLICOS (12 productos) ──
  "semaglutide-20mg": {
    id: "semaglutide-20mg",
    nombre: "GLP-1 RC 20mg",
    precio: 120.00,
    rating: "5.0",
    pureza: "99.7% Pureza | 20mg",
    categoria: "metabolicos",
    imagen: "img/vial-semaglutide-20mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de receptores GLP-1 en modelos celulares in-vitro. Presentación de 20mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "semaglutide-30mg": {
    id: "semaglutide-30mg",
    nombre: "GLP-1 RC 30mg",
    precio: 155.00,
    rating: "5.0",
    pureza: "99.7% Pureza | 30mg",
    categoria: "metabolicos",
    imagen: "img/vial-semaglutide-30mg.png",
    descripcion: "Compuesto sintético de alta pureza. Presentación de 30mg para investigación en ensayos de laboratorio y análisis de receptores GLP-1 en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "tirzepatide-10mg": {
    id: "tirzepatide-10mg",
    nombre: "GIP/GLP-1 RC 10mg",
    precio: 95.00,
    rating: "4.9",
    pureza: "99.8% Pureza | 10mg",
    categoria: "metabolicos",
    badge: "sale",
    imagen: "img/vial-tirzepatide-10mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de receptores GIP y GLP-1 en modelos celulares in-vitro. Presentación de 10mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "tirzepatide-20mg": {
    id: "tirzepatide-20mg",
    nombre: "GIP/GLP-1 RC 20mg",
    precio: 145.00,
    rating: "4.9",
    pureza: "99.8% Pureza | 20mg",
    categoria: "metabolicos",
    badge: "sale",
    imagen: "img/vial-tirzepatide-20mg.png",
    descripcion: "Compuesto sintético de alta pureza. Presentación de 20mg para investigación en ensayos de laboratorio y análisis de receptores GIP y GLP-1 en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "tirzepatide-30mg": {
    id: "tirzepatide-30mg",
    nombre: "GIP/GLP-1 RC 30mg",
    precio: 185.00,
    rating: "4.9",
    pureza: "99.8% Pureza | 30mg",
    categoria: "metabolicos",
    badge: "sale",
    imagen: "img/vial-tirzepatide-30mg.png",
    descripcion: "Compuesto sintético de alta pureza. Presentación de 30mg para investigación en ensayos de laboratorio y estudios de receptores GIP y GLP-1 en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "retatrutide-10mg": {
    id: "retatrutide-10mg",
    nombre: "Triple RC 10mg",
    precio: 140.00,
    rating: "4.7",
    pureza: "99.4% Pureza | 10mg",
    categoria: "metabolicos",
    imagen: "img/vial-retatrutide-10mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de receptores GLP-1, GIP y glucagón en modelos celulares in-vitro. Presentación de 10mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "retatrutide-20mg": {
    id: "retatrutide-20mg",
    nombre: "Triple RC 20mg",
    precio: 190.00,
    rating: "4.7",
    pureza: "99.4% Pureza | 20mg",
    categoria: "metabolicos",
    imagen: "img/vial-retatrutide-20mg.png",
    descripcion: "Compuesto sintético de alta pureza. Presentación de 20mg para investigación en ensayos de laboratorio y análisis de receptores GLP-1, GIP y glucagón en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "retatrutide-30mg": {
    id: "retatrutide-30mg",
    nombre: "Triple RC 30mg",
    precio: 240.00,
    rating: "4.7",
    pureza: "99.4% Pureza | 30mg",
    categoria: "metabolicos",
    imagen: "img/vial-retatrutide-30mg.png",
    descripcion: "Compuesto sintético de alta pureza. Presentación de 30mg para investigación en ensayos de laboratorio y estudios de receptores GLP-1, GIP y glucagón en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "retatrutide-60mg": {
    id: "retatrutide-60mg",
    nombre: "Triple RC 60mg",
    precio: 380.00,
    rating: "4.7",
    pureza: "99.4% Pureza | 60mg",
    categoria: "metabolicos",
    imagen: "img/vial-retatrutide-60mg.png",
    descripcion: "Compuesto sintético de alta pureza. Presentación de 60mg para investigación en ensayos de laboratorio y análisis de receptores GLP-1, GIP y glucagón en modelos celulares in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },
  "aod-9604-5mg": {
    id: "aod-9604-5mg",
    nombre: "AOD-9604 5mg",
    precio: 74.99,
    rating: "4.5",
    pureza: "99.1% Pureza | 5mg",
    categoria: "metabolicos",
    imagen: "img/vial-aod-9604-5mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y análisis de procesos bioquímicos en modelos celulares in-vitro. Presentación de 5mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "mots-c-10mg": {
    id: "mots-c-10mg",
    nombre: "MOTS-C 10mg",
    precio: 79.99,
    rating: "0",
    pureza: "98.6% Pureza | 10mg",
    categoria: "metabolicos",
    imagen: "img/vial-mots-c-10mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de metabolismo celular en modelos in-vitro. Presentación de 10mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "mots-c-20mg": {
    id: "mots-c-20mg",
    nombre: "MOTS-C 20mg",
    precio: 129.99,
    rating: "0",
    pureza: "98.6% Pureza | 20mg",
    categoria: "metabolicos",
    imagen: "img/vial-mots-c-20mg.png",
    descripcion: "Compuesto sintético de alta pureza. Presentación de 20mg para investigación en ensayos de laboratorio y análisis de metabolismo celular en modelos in-vitro. Polvo liofilizado estéril. No apto para consumo humano."
  },

  // ── DESEMPEÑO (9 productos) ──
  "bpc-157-5mg": {
    id: "bpc-157-5mg",
    nombre: "BPC-157 5mg",
    precio: 45.00,
    rating: "4.9",
    pureza: "99.5% Pureza | 5mg",
    categoria: "desempeno",
    badge: "sale",
    imagen: "img/vial-bpc-157-5mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de señalización celular en modelos in-vitro. Presentación de 5mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "tb-500-5mg": {
    id: "tb-500-5mg",
    nombre: "TB-500 5mg",
    precio: 49.00,
    rating: "4.8",
    pureza: "99.3% Pureza | 5mg",
    categoria: "desempeno",
    badge: "sale",
    imagen: "img/vial-tb-500-5mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de migración celular en modelos in-vitro. Presentación de 5mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "melanotan-ii-10mg": {
    id: "melanotan-ii-10mg",
    nombre: "Melanotan II 10mg",
    precio: 38.00,
    rating: "4.6",
    pureza: "99.1% Pureza | 10mg",
    categoria: "desempeno",
    badge: "new",
    vialColor: "pink",
    imagen: "img/vial-melanotan-ii-10mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de receptores de melanocortina en modelos celulares in-vitro. Presentación de 10mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "ghk-cu-50mg": {
    id: "ghk-cu-50mg",
    nombre: "GHK-Cu 50mg",
    precio: 68.00,
    rating: "5.0",
    pureza: "99.8% Pureza | 50mg",
    categoria: "desempeno",
    imagen: "img/vial-ghk-cu-50mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de señalización celular en modelos in-vitro. Presentación de 50mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "bpc-157-tb-500-blend-5-5mg": {
    id: "bpc-157-tb-500-blend-5-5mg",
    nombre: "BPC-157 + TB-500 Blend 5mg/5mg",
    precio: 85.00,
    rating: "4.9",
    pureza: "Mezcla Cinética | 5mg + 5mg",
    categoria: "desempeno",
    badge: "sale",
    isBlend: true,
    imagen: "img/vial-bpc-157-tb-500-blend-5-5mg.png",
    descripcion: "Mezcla de compuestos sintéticos de alta pureza. Diseñada para investigación en ensayos de laboratorio y estudios de señalización celular en modelos in-vitro. Presentación de 5mg + 5mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "nad-plus-500mg": {
    id: "nad-plus-500mg",
    nombre: "NAD+ 500mg",
    precio: 60.00,
    rating: "4.9",
    pureza: "99.9% Pureza | 500mg",
    categoria: "desempeno",
    badge: "sale",
    imagen: "img/vial-nad-plus-500mg.png",
    descripcion: "Coenzima de alta pureza. Diseñada para investigación en ensayos de laboratorio y análisis de procesos bioquímicos celulares in-vitro. Presentación de 500mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "ll-37-2mg": {
    id: "ll-37-2mg",
    nombre: "LL-37 2mg",
    precio: 58.00,
    rating: "4.8",
    pureza: "99.5% Pureza | 2mg",
    categoria: "desempeno",
    imagen: "img/vial-ll-37-2mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de respuesta celular en modelos in-vitro. Presentación de 2mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "5-amino-1mq-50mg": {
    id: "5-amino-1mq-50mg",
    nombre: "5-Amino 1MQ 50mg",
    precio: 94.99,
    rating: "0",
    pureza: "Purity ~99% | 50mg",
    categoria: "desempeno",
    imagen: "img/vial-5-amino-1mq-50mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y análisis de procesos bioquímicos en modelos celulares in-vitro. Presentación de 50mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "glutathione-1500mg": {
    id: "glutathione-1500mg",
    nombre: "Glutathione 1500mg",
    precio: 149.99,
    rating: "0",
    pureza: "99.1% Pureza | 1500mg",
    categoria: "desempeno",
    imagen: "img/vial-glutathione-1500mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y análisis de procesos bioquímicos en modelos celulares in-vitro. Presentación de 1500mg en polvo liofilizado estéril. No apto para consumo humano."
  },

  // ── COGNITIVOS (4 productos) ──
  "pt-141-10mg": {
    id: "pt-141-10mg",
    nombre: "PT-141 (Bremelanotide) 10mg",
    precio: 48.00,
    rating: "4.8",
    pureza: "99.6% Pureza | 10mg",
    categoria: "cognitivas",
    imagen: "img/vial-pt-141-10mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de receptores de melanocortina en modelos celulares in-vitro. Presentación de 10mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "dsip-5mg": {
    id: "dsip-5mg",
    nombre: "DSIP (Sleep Peptide) 5mg",
    precio: 35.00,
    rating: "4.7",
    pureza: "99.6% Pureza | 5mg",
    categoria: "cognitivas",
    imagen: "img/vial-dsip-5mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de ritmos circadianos en modelos celulares in-vitro. Presentación de 5mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "oxytocin-5mg": {
    id: "oxytocin-5mg",
    nombre: "Oxytocin 5mg",
    precio: 35.00,
    rating: "4.9",
    pureza: "99.7% Pureza | 5mg",
    categoria: "cognitivas",
    imagen: "img/vial-oxytocin-5mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y estudios de señalización sináptica en modelos celulares in-vitro. Presentación de 5mg en polvo liofilizado estéril. No apto para consumo humano."
  },
  "selank-10mg": {
    id: "selank-10mg",
    nombre: "Selank 10mg",
    precio: 45.00,
    rating: "4.9",
    pureza: "99.5% Pureza | 10mg",
    categoria: "cognitivas",
    imagen: "img/vial-selank-10mg.png",
    descripcion: "Compuesto sintético de alta pureza. Diseñado para investigación en ensayos de laboratorio y análisis de estabilidad estructural en modelos celulares in-vitro. Presentación de 10mg en polvo liofilizado estéril. No apto para consumo humano."
  }
};

// Exponer la base de datos
window.productosData = productosData;

// ── FUNCIONES DE DESCUENTO ──
function calcularDescuento(cantidad) {
  if (cantidad >= 10) return 0.15;
  if (cantidad >= 4) return 0.10;
  if (cantidad >= 2) return 0.05;
  return 0;
}

function calcularPrecioConDescuento(precio, cantidad) {
  const descuento = calcularDescuento(cantidad);
  return precio * (1 - descuento);
}

function calcularPrecioKit(precio) {
  return precio * 3 * 0.90;
}

window.calcularDescuento = calcularDescuento;
window.calcularPrecioConDescuento = calcularPrecioConDescuento;
window.calcularPrecioKit = calcularPrecioKit;

// ── MOCKUP DE VIAL DINÁMICO (FALLBACK) ──
function generarVialDinamico(prod) {
  const mgMatch = prod.pureza.match(/\|\s*(\d+mg)/);
  const mg = mgMatch ? mgMatch[1] : '';
  const purityMatch = prod.pureza.match(/(\d+\.?\d*%)/);
  const purity = purityMatch ? purityMatch[1] : '';

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

window.generarVialDinamico = generarVialDinamico;

// ── CONTADOR DEL CARRITO ──
function actualizarNumeroNavGlobal() {
  const cart = JSON.parse(localStorage.getItem('venus_cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  
  document.querySelectorAll('#navCartCount, #navCartCountMobile').forEach(badge => {
    if (badge) badge.textContent = `(${totalQty})`;
  });
}

window.actualizarNumeroNavGlobal = actualizarNumeroNavGlobal;

// ── AGREGAR AL CARRITO DESDE EL CATÁLOGO ──
window.agregarAlCarrito = function(productId) {
  const prod = productosData[productId];
  if (!prod) {
    alert('⚠️ Producto no disponible.');
    return;
  }

  let cart = JSON.parse(localStorage.getItem('venus_cart')) || [];

  // Verificar límite de 10 por producto
  const itemExistente = cart.find(i => i.id === productId);
  const cantidadActual = itemExistente ? itemExistente.qty : 0;
  if (cantidadActual + 1 > 10) {
    alert(`⚠️ Máximo 10 unidades de ${prod.nombre}.`);
    return;
  }

  // Verificar límite de 30 total
  const totalActual = cart.reduce((sum, item) => sum + item.qty, 0);
  if (totalActual + 1 > 30) {
    alert(`⚠️ Máximo 30 unidades por pedido.`);
    return;
  }

  // Agregar al carrito
  if (itemExistente) {
    itemExistente.qty += 1;
  } else {
    cart.push({
      id: productId,
      qty: 1,
      nombre: prod.nombre,
      precio: prod.precio,
      precio_original: prod.precio,
      descuento_aplicado: 0,
      tipo: 'suelto'
    });
  }

  localStorage.setItem('venus_cart', JSON.stringify(cart));

  if (typeof actualizarNumeroNavGlobal === 'function') {
    actualizarNumeroNavGlobal();
  }

  // ── MENSAJE DE CONFIRMACIÓN (COMENTADO PARA QUE NO MOLESTE) ──
  // alert(`✅ ${prod.nombre} añadido al carrito.`);
};

// ── LÓGICA DE LA WEB ──
document.addEventListener('DOMContentLoaded', () => {
  actualizarNumeroNavGlobal();

  // ── RENDERIZAR CATÁLOGO ──
  const gridProductos = document.getElementById('gridProductos');
  if (gridProductos) {
    gridProductos.innerHTML = '';

    Object.values(productosData).forEach(prod => {
      let badgeHTML = '';
      if (prod.badge) {
        const badgeColor = prod.badge === 'sale' ? '#ef4444' : '#3b82f6';
        badgeHTML = `<span style="position: absolute; top: 16px; left: 16px; background: ${badgeColor}; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; z-index: 10;">${prod.badge}</span>`;
      }

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
          <button onclick="agregarAlCarrito('${prod.id}')" class="btn" style="display: block; text-align: center; background: #2563eb; color: white; padding: 12px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 14px; border: none; cursor: pointer; transition: background 0.2s; width: 100%;" onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">
            Agregar al carrito
          </button>`;
      }

      let vialHTML = '';
      if (prod.imagen) {
        vialHTML = `
          <div style="background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 6px; padding: 10px; display: flex; justify-content: center; align-items: center; min-height: 260px;">
            <img src="${prod.imagen}" alt="${prod.nombre}" style="max-height: 240px; max-width: 100%; object-fit: contain;">
          </div>
        `;
      } else {
        vialHTML = generarVialDinamico(prod);
      }

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

  // ── PRODUCTOS POPULARES ──
  const gridPopulares = document.getElementById('productosPopulares');
  if (gridPopulares) {
    const productosDestacados = [
      'semaglutide-20mg',
      'tirzepatide-10mg',
      'retatrutide-10mg',
      'bpc-157-5mg',
      'tb-500-5mg',
      'ipamorelin-5mg',
      'ghk-cu-50mg',
      'nad-plus-500mg'
    ];

    gridPopulares.innerHTML = '';

    productosDestacados.forEach(id => {
      const prod = productosData[id];
      if (!prod) return;

      let badgeHTML = '';
      if (prod.badge) {
        const badgeColor = prod.badge === 'sale' ? '#ef4444' : '#3b82f6';
        badgeHTML = `<span style="position: absolute; top: 16px; left: 16px; background: ${badgeColor}; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; z-index: 10;">${prod.badge}</span>`;
      }

      let vialHTML = '';
      if (prod.imagen) {
        vialHTML = `
          <div style="background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 6px; padding: 10px; display: flex; justify-content: center; align-items: center; min-height: 200px;">
            <img src="${prod.imagen}" alt="${prod.nombre}" style="max-height: 180px; max-width: 100%; object-fit: contain;">
          </div>
        `;
      } else {
        vialHTML = generarVialDinamico(prod);
      }

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
          <button onclick="agregarAlCarrito('${prod.id}')" class="btn" style="display: block; text-align: center; background: #2563eb; color: white; padding: 12px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 14px; border: none; cursor: pointer; transition: background 0.2s; width: 100%;" onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">
            Agregar al carrito
          </button>`;
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

  // ── NAV: link activo ──
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  // ── MOBILE MENU ──
  const burger = document.querySelector('.nav__burger');
  const menu = document.querySelector('.mobile-menu');
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

  // ── SCROLL FADE-UP ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ── NAV SOMBRA ──
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 12 ? '0 2px 16px rgba(15,30,53,.08)' : 'none';
    }, { passive: true });
  }

  // ── FORMULARIO CONTACTO ──
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

  // ── FILTRO DE CATEGORÍAS ──
  const tabs = document.querySelectorAll('.cat-tab');
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

  const catUrl = new URLSearchParams(window.location.search).get('cat');
  if (catUrl) {
    const cardsParaFiltrar = document.querySelectorAll('.product-wrap');
    const tabsParaFiltrar = document.querySelectorAll('.cat-tab');
    if (tabsParaFiltrar.length) {
      tabsParaFiltrar.forEach(t => {
        t.classList.remove('active');
        if (t.dataset.cat === catUrl) t.classList.add('active');
      });
    }
    if (cardsParaFiltrar.length) {
      cardsParaFiltrar.forEach(c => {
        c.style.display = c.dataset.cat === catUrl ? '' : 'none';
      });
    }
  }
});
