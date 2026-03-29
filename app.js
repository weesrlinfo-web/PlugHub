/* =========================================================
   PLUGHUB - Map + List (no search)
   - Lista stazioni a sinistra, mappa a destra
   - Card overlay in stile "app"
   - Cookie gate: se rifiuti, la mappa resta off ma la lista funziona
   - Multi-language support: IT, EN, ES, ZH, JA
   ========================================================= */

'use strict';

/** =========================
 *  TRANSLATIONS
 *  ========================= */
const TRANSLATIONS = {
  it: {
    meta: {
      title: "PLUGHUB | Power Bank Sharing Italia",
      description: "PLUGHUB - Power bank sharing in Italia. Trova una stazione vicino a te e ottieni indicazioni in un tap."
    },
    cookie: {
      title: "Informativa breve:",
      message: "questo sito usa cookie tecnici e servizi di terze parti (Google Maps) per mostrarti la mappa. Accettando, consenti l'uso di Google Maps. Rifiutando, vedrai comunque la lista delle stazioni, ma la mappa resterà disattivata.",
      accept: "Accetta",
      reject: "Rifiuta",
      policy: "Cookie Policy"
    },
    nav: {
      map: "Mappa",
      prices: "Prezzi",
      venues: "Per i Locali",
      faq: "FAQ",
      contact: "Contatti",
      partner: "Diventa Partner"
    },
    hero: {
      badge: "Power bank sharing",
      title: "Non restare mai senza <span class='text-brand-blue'>batteria</span>.",
      subtitle: "Trova una stazione vicino a te, ritira un powerbank e continua la giornata. Restituiscilo in qualsiasi stazione.",
      cta: {
        find: "Trova una stazione",
        partner: "Diventa partner"
      },
      stats: {
        price: "ogni 30 min",
        staff: "gestione staff",
        stations: "stazioni"
      },
      card: {
        title: "Mappa + Lista",
        subtitle: "Seleziona un bar e apri le indicazioni.",
        description: "Ora puoi vedere tutte le stazioni nella mappa e, a sinistra, la lista completa dei locali. Tocca un locale per vedere i dettagli e ottenere le indicazioni su Google Maps."
      }
    },
    map: {
      title: "Stazioni PLUGHUB",
      subtitle: "Lista a sinistra, mappa a destra. Clicca un locale per vedere i dettagli e aprire le indicazioni.",
      showAll: "Mostra tutte",
      list: {
        title: "Locali",
        total: "totali",
        hint: "Suggerimento: consenti la posizione per vedere le distanze."
      },
      overlay: {
        title: "Mappa disattivata",
        message: "Per visualizzare la mappa interattiva, accetta i cookie di terze parti (Google Maps). La lista dei locali resta sempre disponibile.",
        cta: "Accetta e visualizza la mappa",
        policy: "Leggi la Cookie Policy"
      },
      card: {
        payment: "Pagamento:",
        available: "powerbank disponibili",
        directions: "Indicazioni"
      }
    },
    prices: {
      title: "Tariffe trasparenti",
      subtitle: "Paga solo per il tempo che utilizzi. Niente abbonamenti, niente sorprese.",
      badge: "PAGA E USA",
      rate: {
        title: "Tariffa",
        item1: "<strong class='text-white'>1€</strong> ogni 30 minuti",
        item2: "Pagamento al momento del prelievo",
        item3: "Restituisci in qualunque stazione"
      },
      card: {
        label: "Tariffa",
        period: "Ogni 30 minuti",
        simple: "Semplice e trasparente"
      },
      secure: "Pagamento sicuro tramite POS contactless"
    },
    partnership: {
      badge: "Partnership",
      title: "Ospita PLUGHUB nel tuo locale",
      subtitle: "Installazione a costo zero. Commissione su ogni noleggio. Zero gestione per lo staff.",
      feature1: {
        title: "Attrai clienti",
        desc: "Un servizio utile che aumenta il valore percepito."
      },
      feature2: {
        title: "Guadagno condiviso",
        desc: "Entrate su ogni noleggio senza investimenti."
      },
      cta: {
        contact: "Contattaci",
        map: "Vedi la mappa"
      },
      requirements: {
        title: "Cosa serve?",
        item1: "Un punto vicino alla cassa (visibile)",
        item2: "Una presa di corrente",
        item3: "Stop: lo staff non gestisce nulla",
        note: "Scrivici e ti mandiamo una proposta in 2 minuti."
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "Risposte rapide alle domande più comuni.",
      q1: {
        question: "Come funziona?",
        answer: "Ritiri un powerbank in una stazione e lo restituisci in qualunque altra. Paghi in base al tempo."
      },
      q2: {
        question: "Devo installare un'app?",
        answer: "Dipende dal flusso di pagamento scelto. In generale puoi pagare con carta / app."
      },
      q3: {
        question: "La mappa non si vede: perché?",
        answer: "La mappa usa Google Maps e richiede il consenso ai cookie di terze parti. La lista rimane sempre visibile."
      },
      q4: {
        question: "Cosa succede se non riconsegno il powerbank?",
        answer: "Se non riconsegui il powerbank entro 24 ore dal prelievo, ti verrà addebitata automaticamente sulla carta utilizzata una penale di 30€. In questo caso il dispositivo diventa di tua proprietà."
      }
    },
    contact: {
      title: "Contatti",
      subtitle: "Scrivici e ti rispondiamo velocemente.",
      email: {
        label: "Email",
        cta: "Invia email"
      }
    },
    footer: {
      tagline: "Il servizio di power bank sharing. Ricarica ovunque, in qualsiasi momento.",
      links: {
        title: "Link"
      },
      legal: {
        title: "Legale",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy"
      },
      contact: {
        title: "Contatti"
      },
      company: "PLUGHUB è un brand di Wee S.R.L.S.",
      copyright: "Tutti i diritti riservati © 2026"
    }
  },
  en: {
    meta: {
      title: "PLUGHUB | Power Bank Sharing Italy",
      description: "PLUGHUB - Power bank sharing in Italy. Find a station near you and get directions in one tap."
    },
    cookie: {
      title: "Brief notice:",
      message: "This site uses technical cookies and third-party services (Google Maps) to show you the map. By accepting, you consent to the use of Google Maps. If you decline, you will still see the station list, but the map will remain disabled.",
      accept: "Accept",
      reject: "Decline",
      policy: "Cookie Policy"
    },
    nav: {
      map: "Map",
      prices: "Prices",
      venues: "For Venues",
      faq: "FAQ",
      contact: "Contact",
      partner: "Become a Partner"
    },
    hero: {
      badge: "Power bank sharing",
      title: "Never run out of <span class='text-brand-blue'>battery</span>.",
      subtitle: "Find a station near you, pick up a power bank, and continue your day. Return it at any station.",
      cta: {
        find: "Find a Station",
        partner: "Become a Partner"
      },
      stats: {
        price: "per 30 min",
        staff: "staff management",
        stations: "stations"
      },
      card: {
        title: "Map + List",
        subtitle: "Select a venue and open directions.",
        description: "Now you can see all stations on the map and, on the left, the complete list of venues. Tap a venue to see details and get directions on Google Maps."
      }
    },
    map: {
      title: "PLUGHUB Stations",
      subtitle: "List on the left, map on the right. Click a venue to see details and open directions.",
      showAll: "Show All",
      list: {
        title: "Venues",
        total: "total",
        hint: "Tip: allow location to see distances."
      },
      overlay: {
        title: "Map Disabled",
        message: "To view the interactive map, please accept third-party cookies (Google Maps). The venue list remains always available.",
        cta: "Accept and View Map",
        policy: "Read Cookie Policy"
      },
      card: {
        payment: "Payment:",
        available: "power banks available",
        directions: "Directions"
      }
    },
    prices: {
      title: "Transparent Pricing",
      subtitle: "Pay only for the time you use. No subscriptions, no surprises.",
      badge: "PAY & USE",
      rate: {
        title: "Rate",
        item1: "<strong class='text-white'>€1</strong> every 30 minutes",
        item2: "Payment at pickup",
        item3: "Return at any station"
      },
      card: {
        label: "Rate",
        period: "Every 30 minutes",
        simple: "Simple and transparent"
      },
      secure: "Secure payment via contactless POS"
    },
    partnership: {
      badge: "Partnership",
      title: "Host PLUGHUB at Your Venue",
      subtitle: "Zero installation cost. Commission on every rental. Zero staff management.",
      feature1: {
        title: "Attract Customers",
        desc: "A useful service that increases perceived value."
      },
      feature2: {
        title: "Shared Revenue",
        desc: "Earnings on every rental with no investment."
      },
      cta: {
        contact: "Contact Us",
        map: "View the Map"
      },
      requirements: {
        title: "What do you need?",
        item1: "A spot near the counter (visible)",
        item2: "A power outlet",
        item3: "Stop: staff manages nothing",
        note: "Write to us and we'll send you a proposal in 2 minutes."
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "Quick answers to the most common questions.",
      q1: {
        question: "How does it work?",
        answer: "Pick up a power bank at one station and return it at any other. You pay according to the time used."
      },
      q2: {
        question: "Do I need to install an app?",
        answer: "It depends on the payment flow chosen. In general, you can pay with card / app."
      },
      q3: {
        question: "Why can't I see the map?",
        answer: "The map uses Google Maps and requires consent to third-party cookies. The list always remains visible."
      },
      q4: {
        question: "What happens if I don't return the power bank?",
        answer: "If you do not return the power bank within 24 hours from pickup, a €30 penalty will automatically be charged to the card used. In this case, the device becomes your property."
      }
    },
    contact: {
      title: "Contact",
      subtitle: "Write to us and we'll reply quickly.",
      email: {
        label: "Email",
        cta: "Send email"
      }
    },
    footer: {
      tagline: "The power bank sharing service. Charge anywhere, anytime.",
      links: {
        title: "Links"
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy"
      },
      contact: {
        title: "Contact"
      },
      company: "PLUGHUB is a brand of Wee S.R.L.S.",
      copyright: "All rights reserved © 2026"
    }
  },
  es: {
    meta: {
      title: "PLUGHUB | Power Bank Sharing Italia",
      description: "PLUGHUB - Power bank sharing en Italia. Encuentra una estación cerca de ti y obtén indicaciones en un toque."
    },
    cookie: {
      title: "Aviso breve:",
      message: "Este sitio utiliza cookies técnicas y servicios de terceros (Google Maps) para mostrarte el mapa. Al aceptar, consientes el uso de Google Maps. Si rechazas, seguirás viendo la lista de estaciones, pero el mapa permanecerá desactivado.",
      accept: "Aceptar",
      reject: "Rechazar",
      policy: "Política de Cookies"
    },
    nav: {
      map: "Mapa",
      prices: "Precios",
      venues: "Para Locales",
      faq: "FAQ",
      contact: "Contactos",
      partner: "Hazte Partner"
    },
    hero: {
      badge: "Power bank sharing",
      title: "Nunca te quedes sin <span class='text-brand-blue'>batería</span>.",
      subtitle: "Encuentra una estación cerca de ti, toma un power bank y sigue con tu día. Devuélvelo en cualquier estación.",
      cta: {
        find: "Encuentra una estación",
        partner: "Hazte partner"
      },
      stats: {
        price: "cada 30 min",
        staff: "gestión staff",
        stations: "estaciones"
      },
      card: {
        title: "Mapa + Lista",
        subtitle: "Selecciona un local y abre las indicaciones.",
        description: "Ahora puedes ver todas las estaciones en el mapa y, a la izquierda, la lista completa de locales. Toca un local para ver detalles y obtener indicaciones en Google Maps."
      }
    },
    map: {
      title: "Estaciones PLUGHUB",
      subtitle: "Lista a la izquierda, mapa a la derecha. Haz clic en un local para ver detalles y abrir indicaciones.",
      showAll: "Mostrar todo",
      list: {
        title: "Locales",
        total: "totales",
        hint: "Consejo: permite la ubicación para ver las distancias."
      },
      overlay: {
        title: "Mapa desactivado",
        message: "Para ver el mapa interactivo, acepta las cookies de terceros (Google Maps). La lista de locales siempre está disponible.",
        cta: "Aceptar y ver mapa",
        policy: "Leer Política de Cookies"
      },
      card: {
        payment: "Pago:",
        available: "powerbanks disponibles",
        directions: "Indicaciones"
      }
    },
    prices: {
      title: "Precios transparentes",
      subtitle: "Paga solo por el tiempo que utilizas. Sin suscripciones, sin sorpresas.",
      badge: "PAGA Y USA",
      rate: {
        title: "Tarifa",
        item1: "<strong class='text-white'>1€</strong> cada 30 minutos",
        item2: "Pago al retirar",
        item3: "Devuélvelo en cualquier estación"
      },
      card: {
        label: "Tarifa",
        period: "Cada 30 minutos",
        simple: "Simple y transparente"
      },
      secure: "Pago seguro mediante POS contactless"
    },
    partnership: {
      badge: "Partnership",
      title: "Aloja PLUGHUB en tu local",
      subtitle: "Instalación sin coste. Comisión en cada alquiler. Cero gestión para el staff.",
      feature1: {
        title: "Atrae clientes",
        desc: "Un servicio útil que aumenta el valor percibido."
      },
      feature2: {
        title: "Ganancia compartida",
        desc: "Ingresos por cada alquiler sin inversiones."
      },
      cta: {
        contact: "Contáctanos",
        map: "Ver el mapa"
      },
      requirements: {
        title: "¿Qué se necesita?",
        item1: "Un punto cerca de la caja (visible)",
        item2: "Una toma de corriente",
        item3: "Stop: el staff no gestiona nada",
        note: "Escríbenos y te enviamos una propuesta en 2 minutos."
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "Respuestas rápidas a las preguntas más comunes.",
      q1: {
        question: "¿Cómo funciona?",
        answer: "Retiras un power bank en una estación y lo devuelves en cualquier otra. Pagas según el tiempo."
      },
      q2: {
        question: "¿Necesito instalar una app?",
        answer: "Depende del flujo de pago elegido. En general, puedes pagar con tarjeta / app."
      },
      q3: {
        question: "No se ve el mapa: ¿por qué?",
        answer: "El mapa usa Google Maps y requiere consentimiento para cookies de terceros. La lista siempre permanece visible."
      },
      q4: {
        question: "¿Qué pasa si no devuelvo el power bank?",
        answer: "Si no devuelves el power bank dentro de las 24 horas desde la recogida, se te cargará automáticamente una penalización de 30€ en la tarjeta utilizada. En este caso, el dispositivo pasa a ser de tu propiedad."
      }
    },
    contact: {
      title: "Contactos",
      subtitle: "Escríbenos y te responderemos rápido.",
      email: {
        label: "Email",
        cta: "Enviar email"
      }
    },
    footer: {
      tagline: "El servicio de power bank sharing. Carga en cualquier lugar, en cualquier momento.",
      links: {
        title: "Enlaces"
      },
      legal: {
        title: "Legal",
        privacy: "Política de Privacidad",
        cookies: "Política de Cookies"
      },
      contact: {
        title: "Contactos"
      },
      company: "PLUGHUB es una marca de Wee S.R.L.S.",
      copyright: "Todos los derechos reservados © 2026"
    }
  },
  zh: {
    meta: {
      title: "PLUGHUB | 意大利共享充电宝",
      description: "PLUGHUB - 意大利共享充电宝。查找离你最近的站点，一键获取路线。"
    },
    cookie: {
      title: "简要说明：",
      message: "本网站使用技术性 Cookie 和第三方服务（Google Maps）来向你显示地图。接受即表示你同意使用 Google Maps。拒绝后，你仍然可以查看站点列表，但地图将保持禁用状态。",
      accept: "接受",
      reject: "拒绝",
      policy: "Cookie 政策"
    },
    nav: {
      map: "地图",
      prices: "价格",
      venues: "商家合作",
      faq: "常见问题",
      contact: "联系我们",
      partner: "成为合作伙伴"
    },
    hero: {
      badge: "共享充电宝",
      title: "再也不用担心 <span class='text-brand-blue'>手机没电</span>。",
      subtitle: "查找附近站点，领取充电宝，继续你的旅程。可在任意站点归还。",
      cta: {
        find: "查找站点",
        partner: "成为合作伙伴"
      },
      stats: {
        price: "每 30 分钟",
        staff: "员工管理",
        stations: "站点"
      },
      card: {
        title: "地图 + 列表",
        subtitle: "选择一家商户并打开路线。",
        description: "现在你可以在地图上查看所有站点，并在左侧看到完整的商户列表。点击商户可查看详情并获取 Google Maps 路线。"
      }
    },
    map: {
      title: "PLUGHUB 站点",
      subtitle: "左侧是列表，右侧是地图。点击商户可查看详情并打开路线。",
      showAll: "显示全部",
      list: {
        title: "商户",
        total: "总数",
        hint: "提示：允许定位以查看距离。"
      },
      overlay: {
        title: "地图已禁用",
        message: "要查看交互式地图，请接受第三方 Cookie（Google Maps）。商户列表始终可用。",
        cta: "接受并查看地图",
        policy: "阅读 Cookie 政策"
      },
      card: {
        payment: "支付：",
        available: "可用充电宝",
        directions: "路线"
      }
    },
    prices: {
      title: "透明收费",
      subtitle: "只为你实际使用的时间付费。无订阅，无隐藏费用。",
      badge: "支付即用",
      rate: {
        title: "收费",
        item1: "<strong class='text-white'>1€</strong> 每 30 分钟",
        item2: "取用时支付",
        item3: "可在任意站点归还"
      },
      card: {
        label: "收费",
        period: "每 30 分钟",
        simple: "简单透明"
      },
      secure: "通过非接触式 POS 安全支付"
    },
    partnership: {
      badge: "合作",
      title: "在你的店铺部署 PLUGHUB",
      subtitle: "零安装成本。每次租借获得佣金。员工零管理。",
      feature1: {
        title: "吸引顾客",
        desc: "一项实用服务，可提升顾客感知价值。"
      },
      feature2: {
        title: "共享收益",
        desc: "每次租借都能获得收入，无需投资。"
      },
      cta: {
        contact: "联系我们",
        map: "查看地图"
      },
      requirements: {
        title: "需要什么？",
        item1: "收银台附近一个显眼的位置",
        item2: "一个电源插座",
        item3: "停止：员工无需管理任何内容",
        note: "给我们留言，我们 2 分钟内发你方案。"
      }
    },
    faq: {
      title: "常见问题",
      subtitle: "快速解答常见问题。",
      q1: {
        question: "如何使用？",
        answer: "你可以在一个站点领取充电宝，并在任意其他站点归还。按使用时间付费。"
      },
      q2: {
        question: "我需要安装 App 吗？",
        answer: "取决于所选择的支付流程。通常你可以使用银行卡 / App 支付。"
      },
      q3: {
        question: "为什么我看不到地图？",
        answer: "地图使用 Google Maps，需要同意第三方 Cookie。列表始终可见。"
      },
      q4: {
        question: "如果我不归还充电宝会怎样？",
        answer: "如果你在取用后 24 小时内未归还充电宝，系统将自动向你使用的银行卡收取 30€ 的罚金。在这种情况下，设备归你所有。"
      }
    },
    contact: {
      title: "联系我们",
      subtitle: "给我们留言，我们会尽快回复。",
      email: {
        label: "邮箱",
        cta: "发送邮件"
      }
    },
    footer: {
      tagline: "共享充电宝服务。随时随地充电。",
      links: {
        title: "链接"
      },
      legal: {
        title: "法律",
        privacy: "隐私政策",
        cookies: "Cookie 政策"
      },
      contact: {
        title: "联系方式"
      },
      company: "PLUGHUB 是 Wee S.R.L.S. 的品牌。",
      copyright: "版权所有 © 2026"
    }
  },
  ja: {
    meta: {
      title: "PLUGHUB | イタリアのモバイルバッテリーシェア",
      description: "PLUGHUB - イタリアのモバイルバッテリーシェア。近くのステーションを探して、ワンタップでルート案内。"
    },
    cookie: {
      title: "簡易通知：",
      message: "このサイトでは、地図表示のために技術的 Cookie と第三者サービス（Google Maps）を使用しています。承諾すると、Google Maps の利用に同意したことになります。拒否してもステーション一覧は表示されますが、地図は無効のままです。",
      accept: "承諾",
      reject: "拒否",
      policy: "Cookie ポリシー"
    },
    nav: {
      map: "地図",
      prices: "料金",
      venues: "店舗向け",
      faq: "FAQ",
      contact: "お問い合わせ",
      partner: "パートナーになる"
    },
    hero: {
      badge: "モバイルバッテリーシェア",
      title: "もう <span class='text-brand-blue'>充電切れ</span> の心配はありません。",
      subtitle: "近くのステーションを探し、モバイルバッテリーを借りて一日を続けましょう。どのステーションでも返却できます。",
      cta: {
        find: "ステーションを探す",
        partner: "パートナーになる"
      },
      stats: {
        price: "30分ごと",
        staff: "スタッフ管理",
        stations: "ステーション"
      },
      card: {
        title: "地図 + 一覧",
        subtitle: "店舗を選択してルートを開きます。",
        description: "地図上ですべてのステーションを確認し、左側で店舗一覧を見ることができます。店舗をタップすると詳細と Google Maps のルート案内が表示されます。"
      }
    },
    map: {
      title: "PLUGHUB ステーション",
      subtitle: "左に一覧、右に地図。店舗をクリックすると詳細とルート案内を表示できます。",
      showAll: "すべて表示",
      list: {
        title: "店舗",
        total: "合計",
        hint: "ヒント：距離を表示するには位置情報を許可してください。"
      },
      overlay: {
        title: "地図は無効です",
        message: "インタラクティブ地図を表示するには、第三者 Cookie（Google Maps）を承諾してください。店舗一覧は常に利用できます。",
        cta: "承諾して地図を表示",
        policy: "Cookie ポリシーを読む"
      },
      card: {
        payment: "支払い：",
        available: "利用可能なバッテリー",
        directions: "経路案内"
      }
    },
    prices: {
      title: "わかりやすい料金",
      subtitle: "使った時間だけ支払い。サブスクなし、追加費用なし。",
      badge: "使った分だけ支払い",
      rate: {
        title: "料金",
        item1: "<strong class='text-white'>1€</strong> / 30分",
        item2: "受け取り時に支払い",
        item3: "どのステーションでも返却可能"
      },
      card: {
        label: "料金",
        period: "30分ごと",
        simple: "シンプルで明確"
      },
      secure: "非接触 POS による安全な支払い"
    },
    partnership: {
      badge: "パートナーシップ",
      title: "あなたの店舗に PLUGHUB を設置",
      subtitle: "設置費用ゼロ。レンタルごとに収益。スタッフ管理ゼロ。",
      feature1: {
        title: "顧客を惹きつける",
        desc: "便利なサービスで店舗価値を高めます。"
      },
      feature2: {
        title: "収益を共有",
        desc: "投資なしでレンタルごとに収益が得られます。"
      },
      cta: {
        contact: "お問い合わせ",
        map: "地図を見る"
      },
      requirements: {
        title: "必要なものは？",
        item1: "レジ近くの目立つ場所",
        item2: "電源コンセント",
        item3: "スタッフの管理は不要",
        note: "ご連絡いただければ、2分で提案をお送りします。"
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "よくある質問への簡単な回答。",
      q1: {
        question: "どうやって使いますか？",
        answer: "1つのステーションでモバイルバッテリーを借り、別のどのステーションでも返却できます。利用時間に応じて支払います。"
      },
      q2: {
        question: "アプリのインストールは必要ですか？",
        answer: "選択した支払いフローによります。通常はカード / アプリで支払えます。"
      },
      q3: {
        question: "地図が表示されないのはなぜ？",
        answer: "地図は Google Maps を使用しており、第三者 Cookie の同意が必要です。一覧は常に表示されます。"
      },
      q4: {
        question: "モバイルバッテリーを返却しないとどうなりますか？",
        answer: "受け取りから24時間以内に返却しない場合、使用したカードに30€のペナルティが自動的に請求されます。その場合、デバイスはあなたの所有物になります。"
      }
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "ご連絡いただければ迅速に返信します。",
      email: {
        label: "メール",
        cta: "メールを送る"
      }
    },
    footer: {
      tagline: "モバイルバッテリーシェアサービス。いつでもどこでも充電。",
      links: {
        title: "リンク"
      },
      legal: {
        title: "法務",
        privacy: "プライバシーポリシー",
        cookies: "Cookie ポリシー"
      },
      contact: {
        title: "お問い合わせ"
      },
      company: "PLUGHUB は Wee S.R.L.S. のブランドです。",
      copyright: "All rights reserved © 2026"
    }
  }
};

/** =========================
 *  CONFIG
 *  ========================= */
const CONFIG = {
  DEFAULT_LANG: 'it',
  COOKIE_CONSENT_KEY: 'plugHubCookieConsent',
  LANGUAGE_KEY: 'plugHubLanguage',
  MAP_CONTAINER_ID: 'map',
  MAP_STYLE_ID: 'plughub-map-style',
  DIRECTIONS_BASE_URL: 'https://www.google.com/maps/dir/?api=1&destination=',
  LIST_SORT_MODE: 'distance'
};

/** =========================
 *  STATIONS DATA
 *  ========================= */
const STATIONS = [
  {
    id: 'venezia-1',
    name: 'Hard Rock Cafe Venice',
    coords: [45.4343729, 12.3362308],
    address: 'Bacino Orseolo, 1192, 30124 Venezia VE',
    city: 'Venezia',
    available: 8,
    payment: 'POS',
    featured: true,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=45.4343729,12.3362308'
  },
  {
    id: 'padova-1',
    name: 'Centro Giotto',
    coords: [45.4021534, 11.907059],
    address: 'Via Venezia, 61, 35131 Padova PD',
    city: 'Padova',
    available: 8,
    payment: 'POS',
    featured: true,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=45.4021534,11.907059'
  }
];

/** =========================
 *  STATE
 *  ========================= */
const state = {
  lang: CONFIG.DEFAULT_LANG,
  map: null,
  mapReady: false,
  markers: [],
  activeStationId: null,
  userLocation: null,
  mapEnabled: false
};

/** =========================
 *  HELPERS
 *  ========================= */
function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function safeJSONParse(value, fallback = null) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function t(path) {
  return getNested(TRANSLATIONS[state.lang], path) ?? path;
}

function setDocumentMeta() {
  const meta = TRANSLATIONS[state.lang]?.meta;
  if (!meta) return;

  document.title = meta.title;
  const descriptionEl = qs('meta[name="description"]');
  if (descriptionEl) descriptionEl.setAttribute('content', meta.description);
}

function saveLanguage(lang) {
  try {
    localStorage.setItem(CONFIG.LANGUAGE_KEY, lang);
  } catch {}
}

function loadLanguage() {
  try {
    return localStorage.getItem(CONFIG.LANGUAGE_KEY) || CONFIG.DEFAULT_LANG;
  } catch {
    return CONFIG.DEFAULT_LANG;
  }
}

function saveConsent(value) {
  try {
    localStorage.setItem(CONFIG.COOKIE_CONSENT_KEY, value);
  } catch {}
}

function getConsent() {
  try {
    return localStorage.getItem(CONFIG.COOKIE_CONSENT_KEY);
  } catch {
    return null;
  }
}

function removeConsent() {
  try {
    localStorage.removeItem(CONFIG.COOKIE_CONSENT_KEY);
  } catch {}
}

function show(el) {
  if (!el) return;
  el.classList.remove('hidden');
}

function hide(el) {
  if (!el) return;
  el.classList.add('hidden');
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function formatDistance(meters) {
  if (meters == null || Number.isNaN(meters)) return '';
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function distanceMeters([lat1, lon1], [lat2, lon2]) {
  const R = 6371000;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function stationWithDistance(station) {
  if (!state.userLocation) return { ...station, distance: null };
  return {
    ...station,
    distance: distanceMeters(state.userLocation, station.coords)
  };
}

function getSortedStations() {
  const enriched = STATIONS.map(stationWithDistance);

  if (CONFIG.LIST_SORT_MODE === 'distance' && state.userLocation) {
    return enriched.sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));
  }

  return enriched.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.name.localeCompare(b.name, state.lang);
  });
}

/** =========================
 *  DOM REFERENCES
 *  ========================= */
const el = {
  html: document.documentElement,
  body: document.body,
  langToggle: qs('#lang-toggle'),
  langMenu: qs('#lang-menu'),
  langButtons: qsa('[data-lang]'),
  currentLang: qs('#current-lang'),
  burger: qs('#mobile-menu-toggle'),
  mobileMenu: qs('#mobile-menu'),
  navLinks: qsa('[data-scroll-to]'),
  cookieBanner: qs('#cookie-banner'),
  cookieAccept: qs('#cookie-accept'),
  cookieReject: qs('#cookie-reject'),
  cookiePolicyLinks: qsa('[data-cookie-policy-link]'),
  reviewCookieLinks: qsa('[data-review-cookies]'),
  mapContainer: qs(`#${CONFIG.MAP_CONTAINER_ID}`),
  mapOverlay: qs('#map-overlay'),
  mapOverlayCta: qs('#map-overlay-cta'),
  stationList: qs('#station-list'),
  stationCount: qs('#station-count'),
  stationCard: qs('#station-card'),
  stationCardName: qs('#card-name'),
  stationCardAddress: qs('#card-address'),
  stationCardCity: qs('#card-city'),
  stationCardPayment: qs('#card-payment'),
  stationCardAvailable: qs('#card-available'),
  stationCardDistance: qs('#card-distance'),
  stationDirections: qs('#card-directions'),
  showAllBtn: qs('#show-all-stations'),
  heroFindBtn: qs('#hero-find-station'),
  heroPartnerBtn: qs('#hero-become-partner')
};

/** =========================
 *  LANGUAGE
 *  ========================= */
function applyTranslations() {
  qsa('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = t(key);
    if (typeof value === 'string') {
      node.innerHTML = value;
    }
  });

  setDocumentMeta();

  if (el.currentLang) {
    el.currentLang.textContent = state.lang.toUpperCase();
  }

  el.html.setAttribute('lang', state.lang);
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  state.lang = lang;
  saveLanguage(lang);
  applyTranslations();
  renderStationList();
  refreshActiveStationCard();
}

/** =========================
 *  NAV / MENU
 *  ========================= */
function closeMobileMenu() {
  hide(el.mobileMenu);
  el.burger?.setAttribute('aria-expanded', 'false');
}

function toggleMobileMenu() {
  if (!el.mobileMenu || !el.burger) return;
  const isHidden = el.mobileMenu.classList.contains('hidden');
  if (isHidden) {
    show(el.mobileMenu);
    el.burger.setAttribute('aria-expanded', 'true');
  } else {
    closeMobileMenu();
  }
}

function closeLangMenu() {
  hide(el.langMenu);
  el.langToggle?.setAttribute('aria-expanded', 'false');
}

function toggleLangMenu() {
  if (!el.langMenu || !el.langToggle) return;
  const isHidden = el.langMenu.classList.contains('hidden');
  if (isHidden) {
    show(el.langMenu);
    el.langToggle.setAttribute('aria-expanded', 'true');
  } else {
    closeLangMenu();
  }
}

/** =========================
 *  COOKIE BANNER
 *  ========================= */
function showCookieBanner() {
  show(el.cookieBanner);
}

function closeCookieBanner() {
  hide(el.cookieBanner);
}

function acceptCookies() {
  saveConsent('accepted');
  closeCookieBanner();
  enableMap();
}

function rejectCookies() {
  saveConsent('rejected');
  closeCookieBanner();
  disableMap();
  show(el.mapOverlay);
}

function openCookiePolicy() {
  window.location.href = '/cookie-policy.html';
}

function reviewCookiePreferences() {
  removeConsent();
  showCookieBanner();
  disableMap();
  show(el.mapOverlay);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** =========================
 *  MAP
 *  ========================= */
function ensureLeafletAssets() {
  return new Promise((resolve, reject) => {
    if (window.L) {
      resolve();
      return;
    }

    const existingCss = document.getElementById(CONFIG.MAP_STYLE_ID);
    if (!existingCss) {
      const link = document.createElement('link');
      link.id = CONFIG.MAP_STYLE_ID;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector('script[data-leaflet]');
    if (existingScript) {
      existingScript.addEventListener('load', resolve, { once: true });
      existingScript.addEventListener('error', reject, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    script.defer = true;
    script.dataset.leaflet = 'true';
    script.addEventListener('load', resolve, { once: true });
    script.addEventListener('error', reject, { once: true });
    document.body.appendChild(script);
  });
}

function createMarkerIcon(isActive = false) {
  const size = isActive ? 34 : 28;
  const html = `
    <div style="
      width:${size}px;
      height:${size}px;
      border-radius:999px;
      background:${isActive ? '#41B3E7' : '#111111'};
      border:3px solid ${isActive ? '#111111' : '#41B3E7'};
      box-shadow:0 6px 18px rgba(0,0,0,.22);
    "></div>
  `;
  return window.L.divIcon({
    html,
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
}

async function initMap() {
  if (state.mapReady || !el.mapContainer) return;

  await ensureLeafletAssets();

  state.map = window.L.map(CONFIG.MAP_CONTAINER_ID, {
    zoomControl: true,
    attributionControl: true
  }).setView([45.4064, 11.8768], 8);

  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(state.map);

  state.markers = STATIONS.map((station) => {
    const marker = window.L.marker(station.coords, {
      icon: createMarkerIcon(false)
    })
      .addTo(state.map)
      .on('click', () => setActiveStation(station.id, true));

    marker.stationId = station.id;
    return marker;
  });

  fitMapToStations();
  state.mapReady = true;
}

function fitMapToStations() {
  if (!state.map || !state.markers.length) return;
  const latlngs = STATIONS.map((s) => s.coords);
  const bounds = window.L.latLngBounds(latlngs);
  state.map.fitBounds(bounds.pad(0.25), { animate: true });
}

function refreshMarkers() {
  if (!state.mapReady) return;
  state.markers.forEach((marker) => {
    const isActive = marker.stationId === state.activeStationId;
    marker.setIcon(createMarkerIcon(isActive));
  });
}

function enableMap() {
  state.mapEnabled = true;
  hide(el.mapOverlay);

  initMap()
    .then(() => {
      setTimeout(() => {
        state.map?.invalidateSize();
        fitMapToStations();
      }, 120);
    })
    .catch(() => {
      state.mapEnabled = false;
      show(el.mapOverlay);
    });
}

function disableMap() {
  state.mapEnabled = false;
  if (state.map) {
    state.map.remove();
    state.map = null;
  }
  state.mapReady = false;
  state.markers = [];
}

/** =========================
 *  LOCATION
 *  ========================= */
function requestUserLocation() {
  if (!('geolocation' in navigator)) return;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.userLocation = [position.coords.latitude, position.coords.longitude];
      renderStationList();
      refreshActiveStationCard();
    },
    () => {
      state.userLocation = null;
      renderStationList();
      refreshActiveStationCard();
    },
    {
      enableHighAccuracy: false,
      maximumAge: 5 * 60 * 1000,
      timeout: 8000
    }
  );
}

/** =========================
 *  STATION LIST + CARD
 *  ========================= */
function createStationListItem(station) {
  const item = document.createElement('button');
  item.type = 'button';
  item.className =
    'w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-4 py-4 transition-all duration-200';
  item.dataset.stationId = station.id;

  const distance = station.distance != null ? `
    <span class="text-xs text-brand-blue font-semibold">${formatDistance(station.distance)}</span>
  ` : '';

  item.innerHTML = `
    <div class="flex items-start justify-between gap-3">
      <div class="min-w-0">
        <div class="font-semibold text-white truncate">${station.name}</div>
        <div class="text-sm text-white/70 mt-1">${station.address}</div>
        <div class="text-xs text-white/50 mt-2">${station.city}</div>
      </div>
      <div class="shrink-0 text-right">
        ${distance}
      </div>
    </div>
  `;

  item.addEventListener('click', () => {
    setActiveStation(station.id, true);
    scrollToId('map-section');
  });

  return item;
}

function renderStationList() {
  if (!el.stationList) return;

  const stations = getSortedStations();
  el.stationList.innerHTML = '';

  stations.forEach((station) => {
    el.stationList.appendChild(createStationListItem(station));
  });

  if (el.stationCount) {
    el.stationCount.textContent = `${stations.length} ${t('map.list.total')}`;
  }

  qsa('[data-station-id]', el.stationList).forEach((node) => {
    node.classList.toggle('ring-2', node.dataset.stationId === state.activeStationId);
    node.classList.toggle('ring-brand-blue', node.dataset.stationId === state.activeStationId);
  });
}

function updateDirectionsLink(station) {
  if (!el.stationDirections) return;
  const destination = encodeURIComponent(`${station.coords[0]},${station.coords[1]}`);
  el.stationDirections.href = station.mapsUrl || `${CONFIG.DIRECTIONS_BASE_URL}${destination}`;
}

function renderStationCard(station) {
  if (!el.stationCard) return;

  show(el.stationCard);

  if (el.stationCardName) el.stationCardName.textContent = station.name;
  if (el.stationCardAddress) el.stationCardAddress.textContent = station.address;
  if (el.stationCardCity) el.stationCardCity.textContent = station.city;
  if (el.stationCardPayment) el.stationCardPayment.textContent = station.payment;
  if (el.stationCardAvailable) el.stationCardAvailable.textContent = String(station.available);

  if (el.stationCardDistance) {
    el.stationCardDistance.textContent =
      station.distance != null ? formatDistance(station.distance) : '';
    el.stationCardDistance.parentElement?.classList.toggle('hidden', station.distance == null);
  }

  updateDirectionsLink(station);
}

function refreshActiveStationCard() {
  const station = getSortedStations().find((s) => s.id === state.activeStationId)
    || STATIONS.find((s) => s.id === state.activeStationId);

  if (!station) return;
  renderStationCard(station);
}

function setActiveStation(stationId, centerMap = false) {
  const station = STATIONS.find((s) => s.id === stationId);
  if (!station) return;

  state.activeStationId = stationId;
  renderStationList();

  const enrichedStation = stationWithDistance(station);
  renderStationCard(enrichedStation);
  refreshMarkers();

  if (centerMap && state.mapReady) {
    state.map.setView(station.coords, 15, { animate: true });
  }
}

function selectFirstStation() {
  const first = getSortedStations()[0] || STATIONS[0];
  if (first) setActiveStation(first.id, false);
}

/** =========================
 *  EVENTS
 *  ========================= */
function bindEvents() {
  el.burger?.addEventListener('click', toggleMobileMenu);

  document.addEventListener('click', (event) => {
    const target = event.target;
    const clickedLangToggle = el.langToggle?.contains(target);
    const clickedLangMenu = el.langMenu?.contains(target);

    if (!clickedLangToggle && !clickedLangMenu) {
      closeLangMenu();
    }
  });

  el.langToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleLangMenu();
  });

  el.langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      closeLangMenu();
    });
  });

  el.navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('data-scroll-to');
      if (!id) return;
      event.preventDefault();
      scrollToId(id);
      closeMobileMenu();
    });
  });

  el.cookieAccept?.addEventListener('click', acceptCookies);
  el.cookieReject?.addEventListener('click', rejectCookies);

  el.cookiePolicyLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openCookiePolicy();
    });
  });

  el.reviewCookieLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      reviewCookiePreferences();
    });
  });

  el.mapOverlayCta?.addEventListener('click', () => {
    acceptCookies();
  });

  el.showAllBtn?.addEventListener('click', () => {
    state.activeStationId = null;
    renderStationList();
    hide(el.stationCard);
    if (state.mapReady) fitMapToStations();
  });

  el.heroFindBtn?.addEventListener('click', () => {
    scrollToId('map-section');
  });

  el.heroPartnerBtn?.addEventListener('click', () => {
    scrollToId('venues-section');
  });

  el.stationDirections?.addEventListener('click', () => {
    // lascia comportamento nativo
  });

  window.addEventListener('resize', () => {
    if (state.mapReady) {
      state.map.invalidateSize();
    }
  });
}

/** =========================
 *  SAFE HTML API
 *  ========================= */
function exposeSafeAPI() {
  window.PLUGHUB = Object.freeze({
    setLanguage,
    reviewCookiePreferences,
    openCookiePolicy
  });
}

/** =========================
 *  SECTION DECORATORS / FALLBACKS
 *  ========================= */
function ensureButtonsHaveTargets() {
  qsa('a[href="#"]').forEach((link) => {
    const label = link.textContent?.trim().toLowerCase();
    if (!label) return;

    if (label.includes('partner') || label.includes('local')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToId('venues-section');
      });
    }

    if (label.includes('stazione') || label.includes('station') || label.includes('map')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToId('map-section');
      });
    }
  });
}

function enhanceExternalLinks() {
  qsa('a[href^="http"]').forEach((link) => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

/** =========================
 *  INIT FROM URL / CONSENT
 *  ========================= */
function applyInitialCookieState() {
  const urlParams = new URLSearchParams(window.location.search);
  const shouldForceOpen =
    urlParams.get('openCookieBanner') === '1' ||
    sessionStorage.getItem('forceOpenCookieBanner') === '1';

  if (shouldForceOpen) {
    removeConsent();
    sessionStorage.removeItem('forceOpenCookieBanner');
    window.history.replaceState({}, '', window.location.pathname);
    showCookieBanner();
    show(el.mapOverlay);
    return;
  }

  const consent = getConsent();

  if (consent === 'accepted') {
    closeCookieBanner();
    enableMap();
    return;
  }

  if (consent === 'rejected') {
    closeCookieBanner();
    disableMap();
    show(el.mapOverlay);
    return;
  }

  showCookieBanner();
  show(el.mapOverlay);
}

/** =========================
 *  OPTIONAL DYNAMIC HOOKS
 *  ========================= */
function attachDynamicPolicyLinks() {
  qsa('a[href*="cookie-policy"]').forEach((link) => {
    if (link.dataset.boundPolicyLink === 'true') return;
    link.dataset.boundPolicyLink = 'true';

    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_self');
    }
  });

  qsa('a[href*="openCookieBanner=1"]').forEach((link) => {
    if (link.dataset.boundReviewCookie === 'true') return;
    link.dataset.boundReviewCookie = 'true';

    link.addEventListener('click', () => {
      try {
        sessionStorage.setItem('forceOpenCookieBanner', '1');
      } catch {}
    });
  });
}

/** =========================
 *  ACCESSIBILITY HELPERS
 *  ========================= */
function initAccessibility() {
  el.langToggle?.setAttribute('aria-expanded', 'false');
  el.langToggle?.setAttribute('aria-haspopup', 'menu');
  el.burger?.setAttribute('aria-expanded', 'false');

  el.cookieBanner?.setAttribute('role', 'dialog');
  el.cookieBanner?.setAttribute('aria-live', 'polite');
}

/** =========================
 *  FALLBACK RENDER IF SOME HTML NODES MISSING
 *  ========================= */
function ensureStationCardVisibilityState() {
  if (!el.stationCard) return;
  if (!state.activeStationId) {
    hide(el.stationCard);
  }
}

function syncReviewLinksVisibility() {
  el.reviewCookieLinks.forEach((link) => {
    link.classList.remove('hidden');
  });
}

/** =========================
 *  DOM READY
 *  ========================= */
document.addEventListener('DOMContentLoaded', () => {
  state.lang = loadLanguage();
  applyTranslations();
  initAccessibility();
  bindEvents();
  exposeSafeAPI();
  ensureButtonsHaveTargets();
  enhanceExternalLinks();
  renderStationList();
  selectFirstStation();
  ensureStationCardVisibilityState();
  syncReviewLinksVisibility();
  requestUserLocation();
  attachDynamicPolicyLinks();
  applyInitialCookieState();
});

/** =========================
 *  MUTATION OBSERVER
 *  ========================= */
const observer = new MutationObserver(() => {
  attachDynamicPolicyLinks();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

/** =========================
 *  EXTRA UTILITIES FOR HTML INLINE HOOKS
 *  ========================= */
window.setLanguage = setLanguage;
window.reviewCookiePreferences = reviewCookiePreferences;

// banner inline safety (non serve più, ma utile se vuoi richiamare da HTML)
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;
window.closeCookieBanner = closeCookieBanner;
