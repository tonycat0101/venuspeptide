/* ============================================================
   VENUS PEPTIDE — BASE DE DATOS DE PRODUCTOS COMPLETA
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
    vialTexto: "BPC",
    descripcion: "Péptido sintético secuencial de alta estabilidad gástrica diseñado para la investigación de la angiogénesis, angiogénesis acelerada y regeneración de tejidos in-vitro."
  },
  "tb-500": {
    id: "tb-500",
    nombre: "TB-500",
    precio: 49.00,
    rating: "4.8",
    pureza: "99.3% Pureza | 5mg",
    categoria: "desempeno",
    badge: "sale",
    vialTexto: "TB",
    descripcion: "Fracción sintética activa de la timosina beta-4. Utilizado ampliamente en ensayos biológicos de laboratorio para estudiar la migración celular y la remodelación tisular."
  },
  "semaglutide": {
    id: "semaglutide",
    nombre: "Semaglutide",
    precio: 65.00,
    rating: "5.0",
    pureza: "99.7% Pureza | 5mg",
    categoria: "metabolicos",
    vialTexto: "SEMA",
    descripcion: "Agonista del receptor GLP-1 de alta pureza optimizado para estudios metabólicos controlados y análisis de los perfiles de secreción insulínica de laboratorio."
  },
  "tirzepatide": {
    id: "tirzepatide",
    nombre: "Tirzepatide",
    precio: 95.00,
    rating: "4.9",
    pureza: "99.8% Pureza | 10mg",
    categoria: "metabolicos",
    badge: "sale",
    vialTexto: "TIRZE",
    descripcion: "Co-agonista dual de los receptores GIP y GLP-1 formulado específicamente para ensayos analíticos avanzados sobre homeostasis glucémica y receptores metabólicos."
  },
  "retatrutide": {
    id: "retatrutide",
    nombre: "Retatrutide",
    precio: 110.00,
    rating: "4.7",
    pureza: "99.4% Pureza | 4mg",
    categoria: "metabolicos",
    vialTexto: "RETA",
    descripcion: "Agonista triple dirigido a los receptores GIP, GLP-1 y Glucagón, destinado a la evaluación comparativa de rutas complejas de degradación lipídica in-vitro."
  },
  "melanotan-ii": {
    id: "melanotan-ii",
    nombre: "Melanotan II",
    precio: 38.00,
    rating: "4.6",
    pureza: "99.1% Pureza | 10mg",
    categoria: "desempeno",
    badge: "new",
    vialTexto: "MT-II",
    vialColor: "pink",
    descripcion: "Análogo sintético de la hormona estimulante de melanocitos alfa para la investigación de la melanogénesis sistémica y la foto-protección celular en entornos analíticos."
  },
  "ipamorelin": {
    id: "ipamorelin",
    nombre: "Ipamorelin",
    precio: 42.00,
    rating: "4.8",
    pureza: "99.5% Pureza | 5mg",
    categoria: "gh",
    vialTexto: "IPAM",
    descripcion: "Secretagogo altamente selectivo de la hormona del crecimiento (GH) que actúa como un potente agonista del receptor de grelina en modelos experimentales aislados."
  },
  "cjc-1295-no-dac": {
    id: "cjc-1295-no-dac",
    nombre: "CJC-1295 No DAC",
    precio: 44.00,
    rating: "4.7",
    pureza: "99.2% Pureza | 5mg",
    categoria: "gh",
    badge: "sale",
    vialTexto: "CJC",
    descripcion: "CJC-1295 No DAC (también conocido como Modified GRF 1-29) es un péptido análogo sintético del factor liberador de la hormona del crecimiento (GHRH). Ideal para ensayos analíticos estandarizados de mapeo hormonal."
  },
  "cjc-1295-with-dac": {
    id: "cjc-1295-with-dac",
    nombre: "CJC-1295 With DAC",
    precio: 52.00,
    rating: "4.6",
    pureza: "99.3% Pureza | 2mg",
    categoria: "gh",
    badge: "sale",
    vialTexto: "CJC-DAC",
    descripcion: "CJC-1295 con Complejo de Afinidad a la Droga (DAC) incrementa significativamente la vida media de la estructura molecular al unirse de forma selectiva a la albúmina en entornos de laboratorio controlados."
  },
  "pt-141": {
    id: "pt-141",
    nombre: "PT-141 (Bremelanotide)",
    precio: 48.00,
    rating: "4.8",
    pureza: "99.6% Pureza | 10mg",
    categoria: "cognitivas",
    vialTexto: "PT-141",
    descripcion: "Péptido agonista de los receptores de melanocortina (principalmente MC3R y MC4R) enfocado en estudios analíticos del sistema nervioso central y respuestas periféricas."
  },
  "epitalon": {
    id: "epitalon",
    nombre: "Epitalon",
    precio: 55.00,
    rating: "4.9",
    pureza: "99.5% Pureza | 10mg",
    categoria: "desempeno",
    vialTexto: "EPIT",
    descripcion: "Tetrapéptido sintético regulador de la actividad de la telomerasa, ampliamente estudiado en modelos de senescencia celular analítica y estabilidad cromosómica."
  },
  "ghk-cu": {
    id: "ghk-cu",
    nombre: "GHK-Cu",
    precio: 68.00,
    rating: "5.0",
    pureza: "99.8% Pureza | 50mg",
    categoria: "desempeno",
    vialTexto: "GHK-CU",
    descripcion: "Complejo de cobre y tripéptido de alta afinidad estructural para la evaluación de cascadas de señalización antioxidante y remodelación de la matriz extracelular."
  },
  "aod-9604": {
    id: "aod-9604",
    nombre: "AOD-9604",
    precio: 49.00,
    rating: "4.5",
    pureza: "99.1% Pureza | 2mg",
    categoria: "metabolicos",
    vialTexto: "AOD",
    descripcion: "Fracción peptídica lipolítica derivada de la región C-terminal de la hormona del crecimiento humana (hGH 177-191) para estudios enfocados en el metabolismo lipídico aislados."
  },
  "hgh-fragment-176-191": {
    id: "hgh-fragment-176-191",
    nombre: "HGH Fragment 176-191",
    precio: 46.00,
    rating: "4.6",
    pureza: "99.4% Pureza | 5mg",
    categoria: "gh",
    vialTexto: "FRAG",
    descripcion: "Dominio molecular aislado de la hGH optimizado para ensayos analíticos de movilización de ácidos grasos sin afectar los niveles de glucosa en plasma in-vitro."
  },
  "igf-1-lr3": {
    id: "igf-1-lr3",
    nombre: "IGF-1 LR3",
    precio: 85.00,
    rating: "4.8",
    pureza: "99.7% Pureza | 1mg",
    categoria: "gh",
    badge: "sale",
    vialTexto: "IGF-1",
    descripcion: "Análogo de vida media ultra-prolongada del factor de crecimiento insulínico tipo 1 (IGF-1) diseñado para mantener estabilidad extendida en cultivos celulares de investigación."
  },
  "tesamorelin": {
    id: "tesamorelin",
    nombre: "Tesamorelin",
    precio: 72.00,
    rating: "4.7",
    pureza: "99.5% Pureza | 5mg",
    categoria: "gh",
    vialTexto: "TESA",
    descripcion: "Péptido sintético correspondiente al factor liberador de la hormona del crecimiento (GHRH) empleado en ensayos clínicos preclínicos de mapeo metabólico graso."
  },
  "sermorelin": {
    id: "sermorelin",
    nombre: "Sermorelin",
    precio: 39.00,
    rating: "4.8",
    pureza: "99.3% Pureza | 5mg",
    categoria: "gh",
    badge: "new",
    vialTexto: "SERM",
    descripcion: "Segmento funcional truncado de 29 aminoácidos de la GHRH natural, utilizado para monitorizar de manera controlada la reserva pituitaria in-vitro."
  },
  "hexarelin": {
    id: "hexarelin",
    nombre: "Hexarelin",
    precio: 36.00,
    rating: "4.5",
    pureza: "99.2% Pureza | 2mg",
    categoria: "gh",
    vialTexto: "HEXA",
    descripcion: "Hexapéptido secretagogo sintético estructuralmente modificado que ofrece una alta estabilidad metabólica frente a la degradación enzimática selectiva en laboratorio."
  },
  "ghrp-2": {
    id: "ghrp-2",
    nombre: "GHRP-2",
    precio: 34.00,
    rating: "4.6",
    pureza: "99.4% Pureza | 5mg",
    categoria: "gh",
    vialTexto: "GHRP2",
    descripcion: "Péptido liberador de la hormona del crecimiento de segunda generación altamente purificado, ideal para ensayos de cribado sobre receptores acoplados a proteínas G."
  },
  "ghrp-6": {
    id: "ghrp-6",
    nombre: "GHRP-6",
    precio: 34.00,
    rating: "4.6",
    pureza: "99.4% Pureza | 5mg",
    categoria: "gh",
    vialTexto: "GHRP6",
    descripcion: "Hexapéptido clásico estimulador de la secreción de somatotropina mediante la modulación del receptor de secretagogos de hormona del crecimiento (GHS-R)."
  },
  "dsip-5mg": {
    id: "dsip-5mg",
    nombre: "DSIP (Sleep Peptide)",
    precio: 35.00,
    rating: "4.7",
    pureza: "99.6% Pureza | 5mg",
    categoria: "cognitivas",
    vialTexto: "DSIP",
    agotado: true,
    descripcion: "Nonapéptido modulador de los ritmos circadianos y la actividad electroencefalográfica subcortical en entornos de simulación neurológica controlada."
  },
  "nad-plus": {
    id: "nad-plus",
    nombre: "NAD+",
    precio: 60.00,
    rating: "4.9",
    pureza: "99.9% Pureza | 500mg",
    categoria: "desempeno",
    badge: "sale",
    vialTexto: "NAD+",
    descripcion: "Coenzima celular liofilizada de máxima pureza para el estudio analítico de la función mitocondrial, fosforilación oxidativa y reparación molecular genómica."
  },
  "cardarine": {
    id: "cardarine",
    nombre: "Cardarine (GW-501516)",
    precio: 45.00,
    rating: "4.7",
    pureza: "99.5% Pureza | 10mg",
    categoria: "metabolicos",
    vialTexto: "GW",
    descripcion: "Modulador selectivo de los receptores PPAR-delta utilizado en investigación bioquímica celular para rastrear los índices de beta-oxidación de ácidos grasos."
  },
  "ostarine": {
    id: "ostarine",
    nombre: "Ostarine (MK-2866)",
    precio: 42.00,
    rating: "4.6",
    pureza: "99.4% Pureza | 10mg",
    categoria: "desempeno",
    vialTexto: "MK2866",
    descripcion: "Modulador selectivo del receptor de andrógenos (SARM) para el análisis preclínico de la retención de nitrógeno e hipertrofia celular en tejidos experimentales."
  },
  "ligandrol": {
    id: "ligandrol",
    nombre: "Ligandrol (LGD-4033)",
    precio: 48.00,
    rating: "4.7",
    pureza: "99.3% Pureza | 10mg",
    categoria: "desempeno",
    vialTexto: "LGD",
    descripcion: "Compuesto analítico de alta afinidad selectiva al tejido óseo y muscular esquelético, empleado para mapear rutas moleculares de síntesis de proteínas corporales."
  },
  "ibutamoren": {
    id: "ibutamoren",
    nombre: "Ibutamoren (MK-677)",
    precio: 54.00,
    rating: "4.8",
    pureza: "99.6% Pureza | 10mg",
    categoria: "gh",
    vialTexto: "MK677",
    descripcion: "Agonista no peptídico de acción prolongada sobre los receptores de grelina, utilizado para evaluar la secreción tónica endógena continua de la hormona del crecimiento."
  },
  "testolone": {
    id: "testolone",
    nombre: "Testolone (RAD-140)",
    precio: 50.00,
    rating: "4.7",
    pureza: "99.5% Pureza | 10mg",
    categoria: "desempeno",
    vialTexto: "RAD",
    descripcion: "SARM no esteroideo altamente selectivo diseñado para la evaluación preclínica de la estabilidad celular y efectos neuroprotectores en modelos de ensayo biológicos."
  },
  "stenabolic": {
    id: "stenabolic",
    nombre: "Stenabolic (SR-9009)",
    precio: 46.00,
    rating: "4.5",
    pureza: "99.2% Pureza | 10mg",
    categoria: "metabolicos",
    vialTexto: "SR9009",
    descripcion: "Agonista sintético de los receptores nucleares Rev-ErbA que modula el reloj molecular biológico, metabolismo celular y gasto energético in-vitro."
  },
  "oxytocin": {
    id: "oxytocin",
    nombre: "Oxytocin",
    precio: 35.00,
    rating: "4.9",
    pureza: "99.7% Pureza | 5mg",
    categoria: "cognitivas",
    vialTexto: "OXY",
    descripcion: "Neuropéptido cíclico purificado de alta calidad destinado al análisis de las vías neuroendocrinas complejas y respuestas de señalización sináptica."
  },
  "tesofensine": {
    id: "tesofensine",
    nombre: "Tesofensine",
    precio: 79.00,
    rating: "4.8",
    pureza: "99.6% Pureza | 500mcg",
    categoria: "metabolicos",
    vialTexto: "TESO",
    descripcion: "Inhibidor triple de la recaptación de monoaminas optimizado para el estudio biológico de la modulación de saciedad y vías adrenérgicas a nivel hipotalámico."
  },
  "tirzepatide-glycine": {
    id: "tirzepatide-glycine",
    nombre: "Tirzepatide + Glycine",
    precio: 105.00,
    rating: "5.0",
    pureza: "Fórmula Combinada | 10mg",
    categoria: "metabolicos",
    badge: "new",
    vialTexto: "TIRZ+G",
    descripcion: "Complejo sinérgico avanzado estabilizado con aminoácidos glicina para evaluar analíticamente respuestas moleculares de sensibilidad insulínica."
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
    vialTexto1: "BPC",
    vialTexto2: "TB",
    descripcion: "Formulación combinada líquida/liofilizada de péptidos reparadores diseñada para estudiar interacciones sinérgicas en la cascada celular de curación tisular."
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
    vialTexto1: "SEMA",
    vialTexto2: "BPC",
    descripcion: "Solución analítica combinada para evaluar la modulación protectora e integral de la mucosa gástrica frente a la estimulación metabólica por GLP-1."
  },
  "kpv": {
    id: "kpv",
    nombre: "KPV",
    precio: 45.00,
    rating: "4.7",
    pureza: "99.4% Pureza | 5mg",
    categoria: "cognitivas",
    vialTexto: "KPV",
    descripcion: "Tripéptido inmunomodulador derivado de la hormona alfa-MSH, estudiado por sus potentes propiedades analíticas reguladoras de la inflamación mucosa celular."
  },
  "ll-37": {
    id: "ll-37",
    nombre: "LL-37",
    precio: 58.00,
    rating: "4.8",
    pureza: "99.5% Pureza | 2mg",
    categoria: "desempeno",
    vialTexto: "LL-37",
    descripcion: "Péptido antimicrobiano humano perteneciente a la familia de las catelicidinas, empleado para monitorear cascadas inmunes innatas en ensayos moleculares."
  },
  "selank-10mg": {
    id: "selank-10mg",
    nombre: "Selank 10 mg",
    precio: 45.00,
    rating: "4.9",
    pureza: "99.5% Pureza | 10mg",
    categoria: "cognitivas",
    vialTexto: "SELANK",
    descripcion: "Compuesto liofilizado de alta pureza diseñado para la investigación analítica de receptores ansiolíticos y la estabilidad estructural peptídica en ensayos neurológicos complejos."
  }
};

// Exponer la base de datos de manera explícita al entorno global
window.productosData = productosData;

/* ── Control Automático del Contador de la Nav ── */
function actualizarNumeroNavGlobal() {
  const cart = JSON.parse(localStorage.getItem('venus_cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  
  // Mantiene compatibilidad estricta con todas tus clases de badges (.nav__cart span, #navCartCount)
  document.querySelectorAll('.nav__cart span, #navCartCount, .nav__cart-count').forEach(badge => {
    badge.textContent = `(${totalQty})`;
  });
}

// Exponer la función para que vistas hijas puedan llamarla al añadir productos
window.actualizarNumeroNavGlobal = actualizarNumeroNavGlobal;


/* ── NUEVO: Filtro de Edad Global Inyectado dinámicamente en todo el ecosistema ── */
function verificarFiltroEdadGlobal() {
  if (localStorage.getItem('venus_age_verified') === 'true') {
    return;
  }

  // Estilos CSS rápidos inyectados con la paleta limpia del sitio web (#0f1e35)
  const modalStyles = `
    #ageModalGlobal {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(15, 30, 53, 0.96); display: flex; align-items: center;
        justify-content: center; z-index: 999999; padding: 20px;
        backdrop-filter: blur(8px); font-family: 'Inter', sans-serif;
    }
    .age-box {
        background: #ffffff; padding: 45px 35px; border-radius: 8px;
        max-width: 480px; width: 100%; text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 1px solid #e2e8f0;
    }
    .age-title { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 800; color: #0f1e35; margin-bottom: 16px; letter-spacing: -0.5px; }
    .age-text { font-size: 14px; color: #374151; line-height: 1.6; margin-bottom: 28px; }
    .age-buttons { display: flex; gap: 15px; justify-content: center; }
    .btn-age { padding: 12px 28px; font-size: 14px; font-weight: 700; border-radius: 4px; cursor: pointer; border: none; transition: all 0.2s; width: 130px; text-transform: uppercase; letter-spacing: 0.05em; }
    .btn-yes { background: #2563eb; color: white; }
    .btn-yes:hover { background: #1d4ed8; }
    .btn-no { background: #f4f7fb; color: #6b7280; border: 1px solid #e2e8f0; }
    .btn-no:hover { background: #dde6f0; }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.innerText = modalStyles;
  document.head.appendChild(styleSheet);

  const modalHtml = `
    <div id="ageModalGlobal">
        <div class="age-box">
            <div class="age-title">VENUS PEPTIDE</div>
            <p class="age-text">
                Este sitio web distribuye compuestos químicos estrictamente destinados a la investigación científica y desarrollo analítico de laboratorio. Debe ser mayor de <strong>21 años</strong> para acceder al catálogo de reactivos.
            </p>
            <div class="age-buttons">
                <button id="btnAgeYes" class="btn-age btn-yes">Soy Mayor</button>
                <button id="btnAgeNo" class="btn-age btn-no">Salir</button>
            </div>
        </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', modalHtml);

  document.getElementById('btnAgeYes').addEventListener('click', () => {
    localStorage.setItem('venus_age_verified', 'true');
    document.getElementById('ageModalGlobal').remove();
  });

  document.getElementById('btnAgeNo').addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });
}


/* ============================================================
   VENUS PEPTIDE — LÓGICA DE LA WEB NATIVA
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Ejecutar el validador de edad global en cualquier página al cargar el DOM
  verificarFiltroEdadGlobal();

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

      // Configurar apariencia del vial (Individual vs Blend)
      let vialBoxHTML = '';
      if (prod.isBlend) {
        vialBoxHTML = `
          <div style="background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 6px; padding: 30px; display: flex; justify-content: center; align-items: center; min-height: 180px; gap: 6px;">
            <div style="width: 50px; height: 110px; border: 2px solid #cbd5e1; border-radius: 10px 10px 6px 6px; position: relative; background: #fff;">
              <div style="width: 100%; height: 12px; background: #2563eb; border-radius: 8px 8px 0 0; position: absolute; top: -1px; left: 0;"></div>
              <div style="width: 26px; height: 6px; background: #cbd5e1; position: absolute; top: -7px; left: 10px; border-radius: 2px 2px 0 0;"></div>
              <div style="position: absolute; top: 35%; left: 0; width: 100%; font-size: 8px; font-weight: 700; color: #334155; text-align: center; line-height: 1; padding: 0 2px; word-wrap: break-word;">${prod.vialTexto1}</div>
            </div>
            <div style="width: 50px; height: 110px; border: 2px solid #cbd5e1; border-radius: 10px 10px 6px 6px; position: relative; background: #fff;">
              <div style="width: 100%; height: 12px; background: #2563eb; border-radius: 8px 8px 0 0; position: absolute; top: -1px; left: 0;"></div>
              <div style="width: 26px; height: 6px; background: #cbd5e1; position: absolute; top: -7px; left: 10px; border-radius: 2px 2px 0 0;"></div>
              <div style="position: absolute; top: 35%; left: 0; width: 100%; font-size: 8px; font-weight: 700; color: #334155; text-align: center; line-height: 1; padding: 0 2px; word-wrap: break-word;">${prod.vialTexto2}</div>
            </div>
          </div>`;
      } else {
        const capColor = prod.vialColor === 'pink' ? '#db2777' : '#2563eb';
        const opacityStyle = prod.agotado ? 'opacity: 0.5;' : '';
        vialBoxHTML = `
          <div style="background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 6px; padding: 30px; display: flex; justify-content: center; align-items: center; min-height: 180px; ${opacityStyle}">
            <div style="width: 60px; height: 110px; border: 2px solid #cbd5e1; border-radius: 10px 10px 6px 6px; position: relative; background: #fff;">
              <div style="width: 100%; height: 12px; background: ${capColor}; border-radius: 8px 8px 0 0; position: absolute; top: -1px; left: 0;"></div>
              <div style="width: 30px; height: 6px; background: #cbd5e1; position: absolute; top: -7px; left: 13px; border-radius: 2px 2px 0 0;"></div>
              <div style="position: absolute; top: 35%; left: 0; width: 100%; font-size: 10px; font-weight: 700; color: #334155; text-align: center; line-height: 1; padding: 0 2px; word-wrap: break-word;">${prod.vialTexto}</div>
            </div>
          </div>`;
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

      gridProductos.innerHTML += `
        <div class="product-wrap" data-cat="${prod.categoria}">
          <div class="product-card" style="position: relative; background: #fff; border: 1px solid var(--border, #e2e8f0); border-radius: 8px; padding: 24px; display: flex; flex-direction: column; gap: 12px; box-shadow: var(--shadow-card); height: 100%; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
            ${badgeHTML}
            ${vialBoxHTML}
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
