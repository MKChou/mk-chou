const SITE_I18N = {
  zh: {
    'meta.home.title': 'MK Chou | 個人網站',
    'meta.home.description': 'MK Chou 個人網站 — 邊緣 AI、嵌入式系統與模型硬體協同設計相關專題與作品。',
    'meta.projects.title': '專案 | MK Chou',
    'meta.projects.description': 'MK Chou 專案作品集 — 含資源受限邊緣平台上的骨架跌倒偵測與硬體協同設計。',
    'meta.about.title': '關於 | MK Chou',
    'meta.about.description': '關於 MK Chou — 邊緣 AI、嵌入式系統與硬體協同設計。',
    'nav.label': '主導覽',
    'nav.toggle': '開啟選單',
    'nav.home': '首頁',
    'nav.projects': '專案',
    'nav.about': '關於',
    'lang.switch': 'EN',
    'lang.label': '切換為英文',
    'footer.copy': 'MK Chou',
    'footer.top': '回到頂端 ↑',
    'home.hero.label': 'Edge AI · Embedded · Co-Design',
    'home.hero.title': 'MK Chou',
    'home.hero.tagline': '邊緣人工智慧、嵌入式系統與模型–硬體協同設計。這裡整理研究專題、實驗紀錄與可公開分享的作品。',
    'home.hero.cta.projects': '查看專案',
    'home.hero.cta.about': '關於我',
    'home.scroll': 'Scroll',
    'home.section.label': '精選專案',
    'home.section.title': '近期作品',
    'home.section.lead': '以下為目前已整理完成、可線上閱讀的專題與實作。',
    'home.p3.title': '骨架跌倒偵測與硬體協同設計',
    'home.p3.desc': '資源受限邊緣平台上的 1D-CNN 跌倒偵測 — 部署於 PC、Jetson Nano 與 PYNQ-Z2 FPGA。',
    'home.p3.link': '閱讀專題 →',
    'projects.label': '作品集',
    'projects.title': '專案',
    'projects.lead': '研究、邊緣 AI 與硬體協同設計相關作品。點擊卡片可進入完整說明頁。',
    'projects.p3.title': '骨架跌倒偵測與硬體協同設計',
    'projects.p3.desc': '資源受限邊緣平台上的跌倒偵測模型與硬體協同設計 — 輕量 1D-CNN，部署於 PC、Jetson Nano 與 PYNQ-Z2 FPGA。含完整實驗數據、圖表與中英對照。',
    'about.label': 'About',
    'about.title': '關於我',
    'about.lead': 'MK Chou 的個人網站，用來整理專題研究、邊緣 AI 實作與可公開分享的技術紀錄。',
    'about.p1': '興趣與專長包含嵌入式系統、邊緣推論、FPGA 加速，以及將深度學習模型落地到資源受限硬體上的協同設計流程。',
    'about.p2': '目前網站上的代表作為<strong>專題 03：資源受限邊緣平台上基於骨架的跌倒偵測模型與硬體協同設計</strong>，可在專案頁面閱讀完整背景、設計取捨、實驗結果與圖表。',
    'about.link': '前往專題 03 →'
  },
  en: {
    'meta.home.title': 'MK Chou | Portfolio',
    'meta.home.description': 'MK Chou — edge AI, embedded systems, and model–hardware co-design projects.',
    'meta.projects.title': 'Projects | MK Chou',
    'meta.projects.description': 'MK Chou projects — including skeleton-based fall detection and hardware co-design on edge platforms.',
    'meta.about.title': 'About | MK Chou',
    'meta.about.description': 'About MK Chou — edge AI, embedded systems, and hardware co-design.',
    'nav.label': 'Main navigation',
    'nav.toggle': 'Open menu',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'lang.switch': '中文',
    'lang.label': 'Switch to Chinese',
    'footer.copy': 'MK Chou',
    'footer.top': 'Back to top ↑',
    'home.hero.label': 'Edge AI · Embedded · Co-Design',
    'home.hero.title': 'MK Chou',
    'home.hero.tagline': 'Edge AI, embedded systems, and model–hardware co-design. Research projects, experiments, and shareable work live here.',
    'home.hero.cta.projects': 'View projects',
    'home.hero.cta.about': 'About me',
    'home.scroll': 'Scroll',
    'home.section.label': 'Featured',
    'home.section.title': 'Recent work',
    'home.section.lead': 'Projects that are documented and available to read online.',
    'home.p3.title': 'Skeleton Fall Detection Co-Design',
    'home.p3.desc': 'Lightweight 1D-CNN fall detection on resource-constrained edge platforms — PC, Jetson Nano, and PYNQ-Z2 FPGA.',
    'home.p3.link': 'Read case study →',
    'projects.label': 'Portfolio',
    'projects.title': 'Projects',
    'projects.lead': 'Research, edge AI, and hardware co-design. Click a card for the full write-up.',
    'projects.p3.title': 'Skeleton-based Fall Detection',
    'projects.p3.desc': 'Model–hardware co-design for fall detection on resource-constrained edge platforms — lightweight 1D-CNN deployed on PC, Jetson Nano, and PYNQ-Z2 FPGA. Full results, charts, and bilingual documentation.',
    'about.label': 'About',
    'about.title': 'About',
    'about.lead': 'Personal site for research projects, edge AI work, and technical notes worth sharing.',
    'about.p1': 'Interests include embedded systems, edge inference, FPGA acceleration, and co-designing deep learning models for resource-constrained hardware.',
    'about.p2': 'The flagship piece on this site is <strong>Project 03: Model–Hardware Co-Design for Skeleton-based Fall Detection on Resource-Constrained Edge Platforms</strong> — background, trade-offs, results, and figures on the project page.',
    'about.link': 'Go to Project 03 →'
  }
};

(function () {
  const STORAGE_KEY = 'site-lang';
  const page = document.body.dataset.page;
  const html = document.documentElement;
  const metaDesc = document.querySelector('meta[name="description"]');

  function getDefaultLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'zh' || saved === 'en') return saved;
    const legacy = localStorage.getItem('case3-lang');
    if (legacy === 'zh' || legacy === 'en') return legacy;
    return 'en';
  }

  function applyLang(lang) {
    const dict = SITE_I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el.hasAttribute('data-i18n-attr')) return;
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      if (text === undefined) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      const attr = el.getAttribute('data-i18n-attr');
      if (text !== undefined && attr) el.setAttribute(attr, text);
    });

    const titleKey = page ? `meta.${page}.title` : null;
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];
    const descKey = page ? `meta.${page}.description` : null;
    if (descKey && dict[descKey] && metaDesc) metaDesc.content = dict[descKey];

    html.lang = lang === 'zh' ? 'zh-Hant' : 'en';

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.textContent = dict['lang.switch'];
      toggle.setAttribute('aria-label', dict['lang.label']);
      toggle.setAttribute('data-lang', lang === 'zh' ? 'en' : 'zh');
    }

    localStorage.setItem(STORAGE_KEY, lang);
  }

  const initial = getDefaultLang();
  applyLang(initial);

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = toggle.getAttribute('data-lang') || (initial === 'zh' ? 'en' : 'zh');
      applyLang(next);
    });
  }
})();
