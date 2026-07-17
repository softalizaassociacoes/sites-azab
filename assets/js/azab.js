/* ============================================================
   AZAB — App JS · navegação, dados, interações
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Ícones (feather-style) ---------- */
  var I = {
    book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 22c1.5-5 6-8 11-9"/>',
    grad:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"/>',
    flask:'<path d="M9 2v6l-5 9a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 17l-5-9V2"/><path d="M8 2h8"/><path d="M7.5 15h9"/>',
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
    bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M12 3c1.5 1.5 1.5 3 0 4.5"/><path d="M8.5 4c1 1 1 2 0 3"/>',
    wave:'<path d="M2 8c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"/><path d="M2 14c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2"/>',
    sun:'<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M12 19v3"/>',
    archive:'<rect x="2" y="4" width="20" height="5" rx="1"/><path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/><path d="M10 13h4"/>',
    chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    award:'<circle cx="12" cy="8" r="6"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/>',
    megaphone:'<path d="m3 11 15-6v14L3 13z"/><path d="M11.5 6.5v11"/><path d="M18 8a3 3 0 0 1 0 6"/>',
    news:'<path d="M4 4h13v16H5a2 2 0 0 1-2-2V4z"/><path d="M17 8h3v10a2 2 0 0 1-2 2"/><path d="M7 8h6M7 12h6M7 16h4"/>',
    file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    scale:'<path d="M12 3v18"/><path d="M6 7h12l4 8H2z"/><path d="M8 21h8"/>',
    map:'<path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/>',
    arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    up:'<path d="m18 15-6-6-6 6"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    pin:'<path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    ig:'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>',
    fb:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    in:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'
  };
  function svg(name, cls){ return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+(I[name]||'')+'</svg>'; }

  /* ---------- Configuração global ---------- */
  var SOCIAL = {
    instagram: 'https://www.instagram.com/azab_oficial',
    facebook:  'https://www.facebook.com/share/1CUZzQTkzC/',
    linkedin:  'https://www.linkedin.com/company/associa%C3%A7%C3%A3o-de-zool%C3%B3gicos-e-aqu%C3%A1rios-do-brasil-azab/',
    email:     'secretaria@azab.org.br'
  };
  var CONGRESSO_URL = 'https://www.49congressoazab.softaliza.com.br/';
  var ASSOCIAR_URL  = 'https://associacoes.softaliza.com.br/login/azab';

  var NAV = [
    { label:'Início', href:'index.html' },
    { label:'Institucional', mega:[
      { t:'História',        d:'Nossa trajetória desde 1977',       href:'historia.html',      icon:'book' },
      { t:'Missão e Visão',  d:'Propósito e objetivos estratégicos', href:'missao-visao.html',  icon:'compass' },
      { t:'Diretoria',       d:'Gestão atual da AZAB',              href:'diretoria.html',     icon:'users' },
      { t:'Comitês',         d:'Grupos técnicos de trabalho',       href:'comites.html',       icon:'grid' }
    ]},
    { label:'Atuação', wide:true, mega:[
      { t:'Conservação',      d:'Manejo ex situ da fauna brasileira', href:'conservacao.html',     icon:'leaf' },
      { t:'Educação',         d:'Educação para a conservação',        href:'educacao.html',        icon:'grad' },
      { t:'Pesquisa',         d:'Ciência aplicada à biodiversidade',  href:'pesquisa.html',        icon:'flask' },
      { t:'Bem-Estar Animal', d:'Padrões de excelência e auditoria',  href:'bem-estar-animal.html',icon:'heart' },
      { t:'Nutrição',         d:'Comitê de Nutrição',                 href:'nutricao.html',        icon:'bowl' },
      { t:'Aquários',         d:'Comitê de Aquários',                 href:'aquarios.html',        icon:'wave' },
      { t:'Lazer e Conexão',  d:'Experiências com a natureza',        href:'lazer.html',           icon:'sun' }
    ]},
    { label:'Certificação', href:'certificacao.html' },
    { label:'Associados', href:'associados.html' },
    { label:'Eventos', mega:[
      { t:'49º Congresso AZAB',     d:'Bioparque Pantanal · 2026',      href:'congresso.html',            icon:'mic' },
      { t:'Congressos Anteriores',  d:'Anais e certificados',           href:'congressos-anteriores.html',icon:'archive' },
      { t:'Encontro de Educadores', d:'VII edição · Salvador (BA)',     href:'encontro-de-educacao.html', icon:'chat' },
      { t:'Capacitações',           d:'Cursos e treinamentos técnicos', href:'capacitacoes.html',         icon:'award' }
    ]},
    { label:'Recursos', mega:[
      { t:'Campanhas',    d:'Educação para conservação',      href:'campanhas.html',   icon:'megaphone' },
      { t:'Comunicação',  d:'Comitê e redes sociais',         href:'comunicacao.html', icon:'megaphone' },
      { t:'Notícias',     d:'Comunicados da AZAB',            href:'noticias.html',    icon:'news' },
      { t:'Biblioteca',   d:'Materiais técnicos',             href:'biblioteca.html',  icon:'book' },
      { t:'Documentos',   d:'Documentos da associação',       href:'documentos.html',  icon:'file' },
      { t:'Legislação',   d:'Leis e normas do setor',         href:'legislacao.html',  icon:'scale' }
    ]},
    { label:'Contato', href:'contato.html' }
  ];

  /* ---------- Dados: Zoológicos e Aquários associados ---------- */
  // type: 'zoo' | 'aqua' | 'parque'
  var MEMBERS = [
    { n:'Fundação Parque Zoológico de São Paulo', t:'zoo',  uf:'SP', img:'Zoologico-Sao-Paulo.png' },
    { n:'Zoológico de Belo Horizonte',            t:'zoo',  uf:'MG', img:'ZOOLOGICO-DE-BH.png' },
    { n:'Fundação Zoológico de Brasília',         t:'zoo',  uf:'DF', img:'FUNDACAO-ZOOLOGICO-DE-BRASILIA.jpg' },
    { n:'Zoo Curitiba',                           t:'zoo',  uf:'PR', img:'ZOO-CURITIBA.jpg' },
    { n:'Zoo Sorocaba',                           t:'zoo',  uf:'SP', img:'ZOO-SOROCABA.jpg' },
    { n:'Zoo Bauru',                              t:'zoo',  uf:'SP', img:'ZOO-BAURU.jpg' },
    { n:'Zoo Piracicaba',                         t:'zoo',  uf:'SP', img:'Zoo-Piracicaba.jpg' },
    { n:'Zoo Ribeirão Preto',                     t:'zoo',  uf:'SP', img:'Zoo-Ribeirao-Preto.jpg' },
    { n:'Zoológico de Catanduva',                 t:'zoo',  uf:'SP', img:'Zoologico-Catanduva.jpg' },
    { n:'Zoológico de Guarulhos',                 t:'zoo',  uf:'SP', img:'ZOOLOGICO-DE-GUARULHOS.png' },
    { n:'Zoo Municipal de São Vicente',           t:'zoo',  uf:'SP', img:'ZOO-MUNICIPAL-SAO-VICENTE.jpeg' },
    { n:'Zooparque Itatiba',                      t:'zoo',  uf:'SP', img:'Zooparque-Itatiba.png' },
    { n:'Zoo de Cascavel',                        t:'zoo',  uf:'PR', img:'Zoo-de-Cascavel.jpg' },
    { n:'Zoo Pomerode',                           t:'zoo',  uf:'SC', img:'ZOO-POMERODE.jpg' },
    { n:'Fundação Zoobotânico de Brusque',        t:'zoo',  uf:'SC', img:'FUNDACAO-ZOOBOTANICO-BRUSQUE.jpg' },
    { n:'Complexo Ambiental Cyro Gevaerd',        t:'zoo',  uf:'SC', img:'COMPLEXO-AMBIENTAL-CYRO-GEVAERD.jpg' },
    { n:'Parque Zoobotânico Arruda Câmara',       t:'zoo',  uf:'PB', img:'PARQUE-ZOOBOTANICO-ARRUDA-CAMARA.png' },
    { n:'Parque Zoobotânico Vale',                t:'parque', uf:'PA', img:'PARQUE-ZOOBOTANICO-VALE.jpg' },
    { n:'Parque Zoológico SEMA',                  t:'zoo',  uf:'',   img:'PARQUE-ZOOLOGICO-SEMA.png' },
    { n:'Parque das Aves',                        t:'parque', uf:'PR', img:'PARQUE-DAS-AVES.png' },
    { n:'Zoo das Aves',                           t:'zoo',  uf:'',   img:'ZOO-DAS-AVES.png' },
    { n:'Parque Ecológico Dois Irmãos',           t:'parque', uf:'PE', img:'PARQUE-ECOLOGICO-DOIS-IRMAOS.png' },
    { n:'Parque Ecológico de Americana',          t:'parque', uf:'SP', img:'PARQUE-ECOLOGICO-DE-AMERICANA.png' },
    { n:'Parque Ecológico de São Carlos',         t:'parque', uf:'SP', img:'PARQUE-ECOLOGICO-SAO-CARLOS.png' },
    { n:'Parque Ecológico Klabin',                t:'parque', uf:'PR', img:'PARQUE-ECOLOGICO-Klabin.jpg' },
    { n:'Parque Vida Cerrado',                    t:'parque', uf:'GO', img:'Parque-Vida-Cerrado-_-Parque-Vida-Cerrado-Colorido-logo_02.png' },
    { n:'Bioparque Pantanal',                     t:'parque', uf:'MS', img:'BIOPARQUE-PANTANAL.png' },
    { n:'BioParque do Rio',                       t:'parque', uf:'RJ', img:'BIO-PARQUE-DO-RIO.png' },
    { n:'Safari Portobello',                      t:'parque', uf:'SC', img:'SAFARI-PORTOBELLO.png' },
    { n:'Refúgio Biológico Bela Vista · Itaipu',  t:'parque', uf:'PR', img:'Copia-de-ITAIPU.png' },
    { n:'Eco Park Foz',                           t:'parque', uf:'PR', img:'Copia-de-Eco-Park-Foz.jpeg' },
    { n:'Reserva do Congo',                       t:'parque', uf:'',   img:'Copia-de-Reserva-do-Congo-logotipo-1.png' },
    { n:'Zoo Sonho de Criança',                   t:'zoo',  uf:'',   img:'Copia-de-Zoo-sonho-de-crianca.jpeg' },
    { n:'CEBUS',                                  t:'parque', uf:'',  img:'CEBUS.png' },
    { n:'Museu de História Natural Dante Aliguieri', t:'parque', uf:'', img:'MUSEU-DE-HISTORIA-NATURAL-DANTE-ALIGUIERI.png' },
    { n:'Santos Orquidário',                      t:'parque', uf:'SP', img:'SANTOS-ORQUIDARIO.jpg' },
    { n:'Aqua Rio',                               t:'aqua', uf:'RJ', img:'Aqua-Rio.jpg' },
    { n:'Aquário de Santos',                      t:'aqua', uf:'SP', img:'Aquario-de-Santos.jpg' },
    { n:'Aquário de Ubatuba',                     t:'aqua', uf:'SP', img:'Aquario-de-Ubatuba.png' },
    { n:'Aquário Natal',                          t:'aqua', uf:'RN', img:'AQUARIO-NATAL-01.png' },
    { n:'Aquário Paraíba',                        t:'aqua', uf:'PB', img:'AQUARIO-PARAIBA.png' },
    { n:'AquaFoz',                                t:'aqua', uf:'PR', img:'AquaFoz-Site-e1778267675116.png' },
    { n:'Oceanic Aquarium',                       t:'aqua', uf:'SC', img:'OCEANIC-AQUARIUM.jpg' }
  ];
  var TYPE_LABEL = { zoo:'Zoológico', aqua:'Aquário', parque:'Parque · Instituição' };
  // Estados com presença comprovada de associados (+ Bahia, sede do Encontro de Educadores)
  var PRESENT_UFS = (function(){ var s={}; MEMBERS.forEach(function(m){ if(m.uf) s[m.uf]=1; }); s['BA']=1; return Object.keys(s); })();

  var PARTNERS = [
    { n:'WAZA',       img:'Captura-de-tela_20-2-2025_95122_docs.google.com_-1-e1740055958819.jpeg', href:'https://www.waza.org/' },
    { n:'ALPZA',      img:'alpza.png',      href:'https://www.alpza.com/pt' },
    { n:'IUCN',       img:'unnamed-4.png',  href:'https://iucn.org/' },
    { n:'Species360', img:'Species360.png', href:'https://species360.org/' }
  ];

  /* ---------- Utilidades ---------- */
  var ASSET = 'assets/img/';
  function el(html){ var t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; }
  function currentPage(){ var p=location.pathname.split('/').pop(); return p || 'index.html'; }

  /* ---------- Header ---------- */
  function buildHeader() {
    var cur = currentPage();
    var itemsHtml = NAV.map(function (item) {
      var active = false;
      if (item.href && item.href === cur) active = true;
      if (item.mega && item.mega.some(function(s){ return s.href === cur; })) active = true;
      if (item.mega) {
        var links = item.mega.map(function (s) {
          return '<a class="mega__link" href="'+s.href+'"><span class="mega__ico">'+svg(s.icon)+'</span>'+
                 '<span><span class="mega__t">'+s.t+'</span><span class="mega__d">'+s.d+'</span></span></a>';
        }).join('');
        return '<li class="nav__item has-mega'+(active?' is-active':'')+'">'+
               '<a class="nav__link" href="'+item.mega[0].href+'">'+item.label+svg('chev','chev')+'</a>'+
               '<div class="mega'+(item.wide?' mega--wide':'')+'">'+links+'</div></li>';
      }
      return '<li class="nav__item'+(active?' is-active':'')+'"><a class="nav__link" href="'+item.href+'">'+item.label+'</a></li>';
    }).join('');
    // chevron icon inj/ small
    var header = el(
      '<header class="site-header" id="siteHeader">'+
        '<div class="container site-header__inner">'+
          '<a class="brand" href="index.html" aria-label="AZAB - Início">'+
            '<img src="'+ASSET+'Logo-AZAB-PNG.png" alt="AZAB — Associação de Zoológicos e Aquários do Brasil" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'">'+
            '<span class="brand__fallback" style="display:none">AZAB</span>'+
          '</a>'+
          '<nav class="nav" aria-label="Menu principal"><ul style="display:flex;list-style:none;margin:0;padding:0;gap:2px">'+itemsHtml+'</ul></nav>'+
          '<div class="header-cta">'+
            '<a class="btn btn--gold btn--sm" href="associe-se.html">Associe-se</a>'+
            '<button class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>'+
          '</div>'+
        '</div>'+
      '</header>'
    );
    // replace chev placeholder (svg('chev') returns empty path) with a real chevron
    header.querySelectorAll('.chev').forEach(function(s){ s.innerHTML='<path d="m6 9 6 6 6-6"/>'; });
    return header;
  }

  function buildMobileNav() {
    var cur = currentPage();
    var groups = NAV.map(function (item) {
      if (item.mega) {
        var subs = item.mega.map(function (s) { return '<a href="'+s.href+'">'+s.t+'</a>'; }).join('');
        return '<div class="m-group"><button class="m-top" type="button">'+item.label+
               '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg></button>'+
               '<div class="m-sub">'+subs+'</div></div>';
      }
      return '<div class="m-group"><a class="m-top" href="'+item.href+'" style="text-decoration:none">'+item.label+'</a></div>';
    }).join('');
    return el('<div class="mobile-nav" id="mobileNav">'+groups+
      '<a class="btn btn--gold" href="associe-se.html">Associe-se à AZAB</a></div>');
  }

  /* ---------- Footer ---------- */
  function footerCol(title, links) {
    return '<div class="footer-col"><h4>'+title+'</h4><ul>'+
      links.map(function(l){ return '<li><a href="'+l.href+'">'+l.t+'</a></li>'; }).join('')+'</ul></div>';
  }
  function buildFooter() {
    var f = el(
      '<footer class="site-footer">'+
        '<div class="container">'+
          '<div class="footer-grid">'+
            '<div class="footer-brand">'+
              '<img src="'+ASSET+'Logo-AZAB-PNG.png" alt="AZAB">'+
              '<p>A Associação de Zoológicos e Aquários do Brasil congrega e fortalece as instituições brasileiras, promovendo a conservação da biodiversidade, o bem-estar animal, a educação e a pesquisa desde 1977.</p>'+
              '<div class="footer-social">'+
                '<a href="'+SOCIAL.instagram+'" target="_blank" rel="noopener" aria-label="Instagram">'+svg('ig')+'</a>'+
                '<a href="'+SOCIAL.facebook+'" target="_blank" rel="noopener" aria-label="Facebook">'+svg('fb')+'</a>'+
                '<a href="'+SOCIAL.linkedin+'" target="_blank" rel="noopener" aria-label="LinkedIn">'+svg('in')+'</a>'+
                '<a href="mailto:'+SOCIAL.email+'" aria-label="E-mail">'+svg('mail')+'</a>'+
              '</div>'+
            '</div>'+
            footerCol('Institucional', [
              {t:'História', href:'historia.html'}, {t:'Missão e Visão', href:'missao-visao.html'},
              {t:'Diretoria', href:'diretoria.html'}, {t:'Comitês', href:'comites.html'},
              {t:'Associados', href:'associados.html'}
            ])+
            footerCol('Atuação', [
              {t:'Conservação', href:'conservacao.html'}, {t:'Educação', href:'educacao.html'},
              {t:'Pesquisa', href:'pesquisa.html'}, {t:'Bem-Estar Animal', href:'bem-estar-animal.html'},
              {t:'Certificação', href:'certificacao.html'}
            ])+
            '<div class="footer-col">'+
              '<h4>Contato</h4>'+
              '<ul>'+
                '<li><a href="mailto:'+SOCIAL.email+'">'+SOCIAL.email+'</a></li>'+
                '<li><a href="contato.html">Fale conosco</a></li>'+
                '<li><a href="associe-se.html">Seja um associado</a></li>'+
                '<li><a href="'+CONGRESSO_URL+'" target="_blank" rel="noopener">49º Congresso AZAB</a></li>'+
              '</ul>'+
              '<div class="footer-partners">'+
                PARTNERS.map(function(p){ return '<a href="'+p.href+'" target="_blank" rel="noopener" title="'+p.n+'"><img src="'+ASSET+p.img+'" alt="'+p.n+'"></a>'; }).join('')+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="footer-bottom">'+
            '<span>© '+new Date().getFullYear()+' AZAB — Associação de Zoológicos e Aquários do Brasil. Todos os direitos reservados.</span>'+
            '<span>Conservação · Bem-estar · Educação · Pesquisa</span>'+
          '</div>'+
        '</div>'+
      '</footer>'
    );
    return f;
  }

  /* ---------- Interações ---------- */
  function initHeaderBehaviour() {
    var header = document.getElementById('siteHeader');
    var hero = document.body.getAttribute('data-hero') === 'true';
    function apply() {
      var scrolled = window.scrollY > 40;
      if (hero && !scrolled) { header.classList.add('is-transparent'); header.classList.remove('is-solid'); }
      else { header.classList.add('is-solid'); header.classList.remove('is-transparent'); }
    }
    apply();
    window.addEventListener('scroll', apply, { passive:true });

    var burger = document.getElementById('burger');
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true':'false');
    });
    document.querySelectorAll('#mobileNav .m-top').forEach(function (btn) {
      if (btn.tagName === 'BUTTON') btn.addEventListener('click', function(){ btn.parentElement.classList.toggle('open'); });
    });
    // close menu on link click
    document.querySelectorAll('#mobileNav a').forEach(function(a){ a.addEventListener('click', function(){ document.body.classList.remove('menu-open'); }); });
  }

  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) { els.forEach(function(e){ e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  function initCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var node = e.target, target = parseInt(node.getAttribute('data-count'), 10), suf = node.getAttribute('data-suffix')||'';
        var start = null, dur = 1600;
        function step(ts){ if(!start) start=ts; var p=Math.min((ts-start)/dur,1); var val=Math.floor((1-Math.pow(1-p,3))*target); node.textContent=val+suf; if(p<1) requestAnimationFrame(step); }
        requestAnimationFrame(step); io.unobserve(node);
      });
    }, { threshold: 0.5 });
    nums.forEach(function(n){ io.observe(n); });
  }

  function initToTop() {
    var btn = el('<button class="to-top" aria-label="Voltar ao topo">'+svg('up')+'</button>');
    document.body.appendChild(btn);
    btn.addEventListener('click', function(){ window.scrollTo({ top:0, behavior:'smooth' }); });
    window.addEventListener('scroll', function(){ btn.classList.toggle('show', window.scrollY > 600); }, { passive:true });
  }

  /* ---------- Marquee de logos (home) ---------- */
  function initMarquee() {
    var host = document.querySelector('[data-logo-marquee]');
    if (!host) return;
    var logos = MEMBERS.slice();
    function chip(m){ return '<div class="logo-chip"><img src="'+ASSET+m.img+'" alt="'+m.n+'" loading="lazy"></div>'; }
    var html = logos.map(chip).join('');
    host.innerHTML = '<div class="logo-track">'+html+html+'</div>';
  }

  /* ---------- Grid de associados (página associados) ---------- */
  function initMembers() {
    var grid = document.querySelector('[data-members-grid]');
    if (!grid) return;
    function card(m){
      return '<div class="member-card" data-type="'+m.t+'" data-name="'+m.n.toLowerCase()+'">'+
        '<div class="member-card__logo"><img src="'+ASSET+m.img+'" alt="'+m.n+'" loading="lazy"></div>'+
        '<div><div class="member-type">'+TYPE_LABEL[m.t]+(m.uf?' · '+m.uf:'')+'</div>'+
        '<div class="member-card__name">'+m.n+'</div></div></div>';
    }
    grid.innerHTML = MEMBERS.slice().sort(function(a,b){ return a.n.localeCompare(b.n,'pt'); }).map(card).join('');

    var chips = document.querySelectorAll('[data-filter]');
    var search = document.querySelector('[data-member-search]');
    var countEl = document.querySelector('[data-member-count]');
    var activeType = 'all';
    function apply(){
      var q = (search && search.value || '').toLowerCase().trim();
      var shown = 0;
      grid.querySelectorAll('.member-card').forEach(function(c){
        var okT = activeType==='all' || c.getAttribute('data-type')===activeType;
        var okQ = !q || c.getAttribute('data-name').indexOf(q) > -1;
        var vis = okT && okQ; c.classList.toggle('is-hidden', !vis); if(vis) shown++;
      });
      if (countEl) countEl.textContent = shown;
    }
    chips.forEach(function(ch){ ch.addEventListener('click', function(){
      chips.forEach(function(x){ x.classList.remove('is-active'); }); ch.classList.add('is-active');
      activeType = ch.getAttribute('data-filter'); apply();
    }); });
    if (search) search.addEventListener('input', apply);
    apply();
  }

  /* ---------- Mapa do Brasil ---------- */
  function initMap() {
    var host = document.querySelector('[data-brazil-map]');
    if (!host) return;
    fetch(ASSET + 'brasil.svg').then(function(r){ return r.text(); }).then(function(txt){
      host.innerHTML = txt;
      var tip = host.querySelector('[data-map-tip]');
      PRESENT_UFS.forEach(function(uf){ var p = host.querySelector('#uf-'+uf); if (p) p.classList.add('has'); });
      var label = document.querySelector('[data-map-count]');
      if (label) label.textContent = PRESENT_UFS.length;
    }).catch(function(){ host.style.display='none'; });
  }

  /* ---------- Ano atual em qualquer [data-year] ---------- */
  function initYear(){ document.querySelectorAll('[data-year]').forEach(function(e){ e.textContent=new Date().getFullYear(); }); }

  /* ---------- Boot ---------- */
  function boot() {
    var header = buildHeader();
    document.body.insertBefore(header, document.body.firstChild);
    document.body.insertBefore(buildMobileNav(), header.nextSibling);
    document.body.appendChild(buildFooter());

    initHeaderBehaviour();
    initReveal();
    initCounters();
    initToTop();
    initMarquee();
    initMembers();
    initMap();
    initYear();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  // expose for pages that need data
  window.AZAB = { MEMBERS: MEMBERS, PRESENT_UFS: PRESENT_UFS, SOCIAL: SOCIAL, svg: svg, CONGRESSO_URL: CONGRESSO_URL, ASSOCIAR_URL: ASSOCIAR_URL };
})();
