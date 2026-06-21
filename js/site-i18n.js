const SITE_I18N = {
  zh: {
    'meta.home.title': 'MK Chou | 個人網站',
    'meta.home.description': '周明坤的個人網站 — 關於我、經歷與作品。',
    'meta.projects.title': '作品 | MK Chou',
    'meta.projects.description': 'MK Chou 的作品與專案 — 邊緣 AI、應用開發與設計相關實作。',
    'meta.about.title': '關於 | MK Chou',
    'meta.about.description': '關於周明坤 — 個人簡介、經歷、興趣與專長。',
    'nav.label': '主導覽',
    'nav.toggle': '開啟選單',
    'nav.home': '首頁',
    'nav.projects': '專案',
    'nav.about': '關於',
    'lang.switch': 'EN',
    'lang.label': '切換為英文',
    'footer.copy': 'MK Chou',
    'footer.top': '回到頂端 ↑',
    'home.hero.cta.projects': '查看專案',
    'home.hero.cta.about': '關於我',
    'home.scroll': 'Scroll',
    'home.about.label': '關於',
    'home.about.title': '自我介紹',
    'home.about.p1': '大家好，我是周明坤（Chou, Ming-Kun），林邊囡仔，略懂音樂、略懂體育，家裡了一隻養臘腸狗叫做薯條，目前住在台南市，大學在成大不分系主修電機與資訊工程，認識很多不同領域很厲害的人。比起技術深度更在意題目以外真正的價值；喜歡用設計思考推進計畫與研究，也享受研究探索與發現的過程，目前與實驗室合作做很多酷酷的東西。',
    'home.contact.label': '聯絡',
    'home.contact.title': '聯絡方式',
    'home.contact.lead': '歡迎隨時與我聯繫。',
    'home.contact.email': '電子郵件',
    'home.contact.social': '社群',
    'home.section.label': '精選',
    'home.section.title': '作品',
    'home.section.lead': '部分已整理完成、可線上閱讀的專案與實作。',
    'home.p2.title': 'DST-FallNet',
    'home.p2.desc': '即時多模態跌倒偵測：在 Jetson Nano 2GB 上以 DST 融合 MoveNet + CNN 與 MFCC + LSTM，支援 GPIO 告警。',
    'home.p2.link': '查看作品 →',
    'home.p3.title': '骨架跌倒偵測與硬體協同設計',
    'home.p3.desc': '資源受限邊緣平台上的 1D-CNN 跌倒偵測 — 部署於 PC、Jetson Nano 與 PYNQ-Z2 FPGA。',
    'home.p3.link': '查看作品 →',
    'home.p4.title': '陪你想想 — 預立醫療照護 APP',
    'home.p4.desc': '高齡友善的 Flutter 預立醫療照護 APP — TTM 階段化內容、語音互動與家屬陪伴模式。',
    'home.p4.link': '查看作品 →',
    'projects.label': '作品',
    'projects.title': '專案',
    'projects.lead': '網站建置中，部分目前由AI整理內容。',
    'projects.meta.advisor': '指導老師',
    'projects.meta.period': '執行時間',
    'projects.p1.title': '台南ㄏ勝：智慧文旅設計思考提案',
    'projects.p1.desc': '2025 創見南方智慧文旅組第一名。依雙鑽石設計思考完成提案——從同理、定義、構思到原型測試，逐階段收斂至可行方案；交付為競賽簡報。',
    'projects.p1.advisor': '周麗芳 教授（成大心理系）',
    'projects.p1.period': '2025.09 — 2025.10',
    'projects.p1.status': '已結束',
    'projects.p2.title': 'DST-FallNet — 音視覺融合與 DST 的邊緣即時跌倒偵測',
    'projects.p2.desc': '即時多模態跌倒偵測：整合 MoveNet + CNN 與 MFCC + LSTM，以 Dempster-Shafer 證據理論做決策層融合，部署於 Jetson Nano 2GB。',
    'projects.p2.advisor': '李孟學 教授（成大不分系）',
    'projects.p2.period': '2025.01 — 2025.06',
    'projects.p2.status': '已結束',
    'projects.p3.title': '資源受限邊緣平台上基於骨架的跌倒偵測模型與硬體協同設計',
    'projects.p3.desc': '資源受限邊緣平台上的跌倒偵測模型與硬體協同設計 — 輕量 1D-CNN，部署於 PC、Jetson Nano 與 PYNQ-Z2 FPGA。含完整實驗數據、圖表與中英對照。',
    'projects.p3.advisor': '李孟學 教授（成大不分系）',
    'projects.p3.period': '2026.01 — 2026.05',
    'projects.p3.status': '展覽中',
    'projects.p4.title': '陪你想想 — 預立醫療照護 APP',
    'projects.p4.status': '執行中',
    'projects.p4.desc': '高齡友善的 Flutter 預立醫療照護（ACP）APP — TTM 階段化內容、語音優先互動與家屬陪伴模式。',
    'projects.p4.advisor': '羅玉岱 醫師（成大公衛系）',
    'projects.p4.advisor2': '盧文祥 教授（成大資工系）',
    'projects.p4.period': '2026.05 — 至今',
    'projects.p4.grant': '(預)國科會計畫',
    'about.label': '關於',
    'about.title': '關於我',
    'about.lead': '關於周明坤 — 個人簡介、經歷、興趣與作品。',
    'about.intro': '我始終偏愛與動物為伴。家中曾有一隻倉鼠，喚作地瓜，如今已在記憶裡；現下只剩臘腸狗薯條，仍守在身邊。我棲居台南，與多所實驗室往來於各項合作計畫，亦暗自期待——115 學年度的國科會案，都能一一順遂。',
    'about.skills.label': '專長',
    'about.skills.list': '• 設計思考\n• 邊緣運算\n• 嵌入式系統\n• 電腦視覺\n• 軟硬體協同設計\n• 工業配線',
    'about.education.label': '學歷',
    'about.education.list': '• 國立成功大學 不分系（主修電機與資訊工程）\n• 高雄高工 綜合高中',
    'about.roles.label': '經歷',
    'about.roles.list': '• 成大全校不分系 系學會長\n• 成大學代會 非屬學院學生代表\n• 臺大研究計畫兼任助理 — 教育部跨域彈性修業試辦計畫\n• 成大圖書館 資訊系統組',
    'about.clubs.label': '曾任社團',
    'about.clubs.list': '• 成大慈幼社\n• 高雄高工管樂社（單簧管）\n• 高雄市民管樂團（單簧管）\n• 雄工管樂校友團（單簧管）\n• 林邊國小田徑隊（100m、200m）\n• 林邊國中田徑隊（110mH、200m）\n• 成大田徑隊（110mH）',
    'about.creative.label': '小創作',
    'about.creative.list': '• 台語配音 — <a href="https://www.youtube.com/watch?v=bU1BQpk4FXg" target="_blank" rel="noopener">2025 成功台語歌廳 SHOW 競賽宣傳短片</a>\n• 動畫短片 — <a href="https://www.youtube.com/watch?v=KwGZsggyUwE" target="_blank" rel="noopener">成大自主防災學生短片競賽</a>'
  },
  en: {
    'meta.home.title': 'MK Chou | Personal site',
    'meta.home.description': 'Personal site of Chou, Ming-Kun — about, experience, and work.',
    'meta.projects.title': 'Work | MK Chou',
    'meta.projects.description': 'Projects and work by MK Chou — edge AI, apps, design, and more.',
    'meta.about.title': 'About | MK Chou',
    'meta.about.description': 'About Chou, Ming-Kun — background, experience, and interests.',
    'nav.label': 'Main navigation',
    'nav.toggle': 'Open menu',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'lang.switch': '中文',
    'lang.label': 'Switch to Chinese',
    'footer.copy': 'MK Chou',
    'footer.top': 'Back to top ↑',
    'home.hero.cta.projects': 'View projects',
    'home.hero.cta.about': 'About me',
    'home.scroll': 'Scroll',
    'home.about.label': 'About',
    'home.about.title': 'About me',
    'home.about.p1': 'Hi, I\'m Chou, Ming-Kun — a kid from Linbian with a little music and a little sports under my belt. I share my home in Tainan with a dachshund named Fries (薯條). I study in the Cross College Elite Program at NCKU, majoring in Electrical Engineering and Computer Science, and I\'ve been lucky to meet remarkable people across many fields. I care less about how deep the tech goes than what a project is really worth beyond the problem itself; I like moving plans and research forward through design thinking, and I enjoy exploring and discovering along the way. These days I\'m collaborating with several labs on some genuinely cool work.',
    'home.contact.label': 'Contact',
    'home.contact.title': 'Get in touch',
    'home.contact.lead': 'Feel free to reach out anytime.',
    'home.contact.email': 'Email',
    'home.contact.social': 'Social',
    'home.section.label': 'Selected',
    'home.section.title': 'Work',
    'home.section.lead': 'Some projects and builds available to read online.',
    'home.p2.title': 'DST-FallNet',
    'home.p2.desc': 'Real-time multimodal fall detection fusing MoveNet + CNN and MFCC + LSTM with DST on Jetson Nano 2GB — GPIO alerts included.',
    'home.p2.link': 'View work →',
    'home.p3.title': 'Skeleton Fall Detection Co-Design',
    'home.p3.desc': 'Lightweight 1D-CNN fall detection on resource-constrained edge platforms — PC, Jetson Nano, and PYNQ-Z2 FPGA.',
    'home.p3.link': 'View work →',
    'home.p4.title': '陪你想想 — ACP Companion App',
    'home.p4.desc': 'An elderly-friendly Flutter app for Advance Care Planning — TTM-staged content, voice interaction, and a family companion mode.',
    'home.p4.link': 'View work →',
    'projects.label': 'Work',
    'projects.title': 'Projects',
    'projects.lead': 'Site under construction; some content is currently organized with AI assistance.',
    'projects.meta.advisor': 'Advisor',
    'projects.meta.period': 'Period',
    'projects.p1.title': '台南ㄏ勝 — Tainan Play: Design-Thinking Proposal',
    'projects.p1.desc': '1st place, Smart Cultural Tourism, Visioning the South 2025. A competition pitch built through the double-diamond design process — empathize, define, ideate, prototype, and test — converging on a viable proposal. Deck only.',
    'projects.p1.advisor': 'Prof. Li-Fang Chou (Dept. of Psychology, NCKU)',
    'projects.p1.period': 'Sep 2025 — Oct 2025',
    'projects.p1.status': 'Ended',
    'projects.p2.title': 'DST-FallNet — Edge Real-Time Fall Detection with Audio-Visual Fusion and DST',
    'projects.p2.desc': 'Real-time multimodal fall detection integrating MoveNet + CNN and MFCC + LSTM with Dempster-Shafer Theory decision fusion on Jetson Nano 2GB.',
    'projects.p2.advisor': 'Prof. Meng-Hsueh Li (Cross College Elite Program, NCKU)',
    'projects.p2.period': 'Jan 2025 — Jun 2025',
    'projects.p2.status': 'Ended',
    'projects.p3.title': 'Skeleton-based Fall Detection and Hardware Co-Design on Resource-Constrained Edge Platforms',
    'projects.p3.desc': 'Model–hardware co-design for fall detection on resource-constrained edge platforms — lightweight 1D-CNN deployed on PC, Jetson Nano, and PYNQ-Z2 FPGA. Full results, charts, and bilingual documentation.',
    'projects.p3.advisor': 'Prof. Meng-Hsueh Li (Cross College Elite Program, NCKU)',
    'projects.p3.period': 'Jan 2026 — May 2026',
    'projects.p3.status': 'On display',
    'projects.p4.title': '陪你想想 — ACP Companion App',
    'projects.p4.status': 'In progress',
    'projects.p4.desc': 'An elderly-friendly Flutter app for Advance Care Planning (ACP) — TTM-staged content, voice-first interaction, and a family companion mode.',
    'projects.p4.advisor': 'Dr. Lo Yu-tai (Dept. of Public Health, NCKU)',
    'projects.p4.advisor2': 'Prof. Wen-Hsiang Lu (Dept. of Computer Science, NCKU)',
    'projects.p4.period': 'May 2026 — Present',
    'projects.p4.grant': '(Planned) NSTC Project',
    'about.label': 'About',
    'about.title': 'About me',
    'about.lead': 'About Chou, Ming-Kun — background, experience, interests, and work.',
    'about.intro': 'I\'ve always been drawn to life with animals. A hamster named Digua (地瓜) once shared my home; she lives on only in memory now. What remains is a dachshund called Fries (薯條), still at my side. I make my home in Tainan, moving among collaborative projects with several labs — quietly hoping every NSTC grant in academic year 115 finds its way through.',
    'about.skills.label': 'Skills',
    'about.skills.list': '• Design thinking\n• Edge computing\n• Embedded systems\n• Computer vision\n• Hardware–software co-design\n• Industrial wiring',
    'about.education.label': 'Education',
    'about.education.list': '• Cross College Elite Program, NCKU (major: Electrical Engineering & Computer Science)\n• Kaohsiung Industrial High School — Comprehensive Program',
    'about.roles.label': 'Experience',
    'about.roles.list': '• President, NCKU Cross College Student Association\n• Student representative, Non-Affiliated Colleges\n• Part-time research assistant, NTU — MOE Cross-Disciplinary Flexible Curriculum Pilot Program\n• Information Systems Unit, NCKU Library',
    'about.clubs.label': 'Past clubs & organizations',
    'about.clubs.list': '• NCKU Ci You Society\n• Kaohsiung Industrial High School Concert Band (clarinet)\n• Kaohsiung Civic Wind Orchestra (clarinet)\n• KIH Concert Band Alumni (clarinet)\n• Linbian Elementary School Track and Field Team (100m, 200m)\n• Linbian Junior High School Track and Field Team (110mH, 200m)\n• NCKU Track and Field Team (110mH)',
    'about.creative.label': 'On the side',
    'about.creative.list': '• Taiwanese voice-over — <a href="https://www.youtube.com/watch?v=bU1BQpk4FXg" target="_blank" rel="noopener">2025 NCKU Taiwanese Song Hall SHOW promo</a>\n• Animation short — <a href="https://www.youtube.com/watch?v=KwGZsggyUwE" target="_blank" rel="noopener">NCKU Autonomous Disaster Prevention Student Short Film Competition</a>'
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

  function usesHtmlMarkup(text) {
    return /<[a-z][\s\S]*?>/i.test(text);
  }

  function applyLang(lang) {
    const dict = SITE_I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el.hasAttribute('data-i18n-attr')) return;
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      if (text === undefined) return;
      if (el.hasAttribute('data-i18n-html') || usesHtmlMarkup(text)) {
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
