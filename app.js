import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ==========================================
// 1. BILINGUAL CONTENT & BOTANICAL DATA
// ==========================================
const CAFE_WHATSAPP = "989120000000"; // Replace with cousin's real WhatsApp number (without +)

const i18n = {
  fa: {
    nav_alchemy: "ترکیب حال‌وهوا",
    nav_menu: "منوی دمنوش و کافه",
    nav_reserve: "رزرو گالری",
    nav_visit: "نشانی",
    quick_menu: "منو",
    step_1_note: "سفال دست‌ساز گرم؛ آماده برای ترکیب اختصاصی شما",
    step_2_note: "ریزش مخملی شکلات داغ و عصاره خالص گیاهان",
    step_3_note: "افزودنی‌های دلخواه شما در حال نشستن روی فنجان",
    step_4_note: "آماده سرو در فضای آرام گالری گوراک",
    hero_eyebrow: "فضای هنری و کافه گیاهی • بدون آشپزخانه صنعتی",
    hero_title: "جرعه‌ای آرامش در قلب گالری گوراک",
    hero_desc: "اینجا خبری از شلوغی و بوی سرخ‌کردنی نیست. هر فنجان بر پایه عصاره‌های خالص گیاهی، شکلات تلخ اصیل و کیک‌های دست‌ساز روز، دقیقاً متناسب با حال‌وهوای لحظه شما آماده می‌شود.",
    hero_cta_1: "ساخت نوشیدنی بر اساس حس‌وحال",
    hero_cta_2: "مشاهده منوی کامل",
    sec2_eyebrow: "پایه مخملی • شکلات تلخ و عصاره گرم",
    sec2_title: "گرمای عمیق کاکائوی خالص در بافت سفال",
    sec2_desc: "با اسکرول، لایه شکلات داغ غلیظ یا دمنوش دم‌کشیده درون ماگ می‌نشیند. تمام ترکیبات ما از مواد اولیه خشک و عصاره‌های آماده درجه‌یک تهیه می‌شوند تا عطر واقعی گیاهان حفظ شود.",
    atelier_eyebrow: "آتلیه تعاملی روی میز • انتخاب کنید و در ماگ ببینید",
    atelier_title: "امروز دلتان چه حسی می‌خواهد؟",
    atelier_desc: "روی حال‌وهوای خودتان بزنید یا افزودنی‌های گیاهی را انتخاب کنید تا مستقیماً داخل فنجان سه‌بعدی ریخته شوند و دستور اختصاصی میز شما ساخته شود.",
    mood_sad: "دلگیر و نیازمند دلگرمی",
    mood_anxious: "مضطرب و پرمشغله",
    mood_tired: "خسته و بی‌انرژی",
    mood_focus: "نیازمند تمرکز و الهام",
    ing_rose: "+ گلبرگ گل محمدی",
    ing_saffron: "+ پر زعفران خراسان",
    ing_cardamom: "+ هل سبز کوبیده",
    ing_cinnamon: "+ دارچین و پودر کاکائو",
    ing_neroli: "+ شکوفه بهارنارنج",
    rx_tag: "پیشنهاد اختصاصی باریستای گوراک",
    rx_order_btn: "کپی ترکیب برای نشان دادن به باریستا",
    menu_eyebrow: "منوی سلامت‌محور و گالری",
    menu_title: "دمنوش‌های تخصصی، نوشیدنی‌های گرم و شیرینی‌های آماده",
    filter_all: "همه موارد",
    filter_herbal: "دمنوش‌های درمانی",
    filter_cocoa: "هات‌چاکلت و قهوه",
    filter_pastry: "کیک و میان‌وعده آماده",
    res_eyebrow: "میزبان لحظه‌های خاص شما",
    res_title: "رزرو فضای گالری و دورهمی‌های صمیمی",
    res_desc: "فضای گرم و هنری گوراک برای برگزاری تولدهای کوچک، نشست‌های کتاب‌خوانی، ورکشاپ‌های هنری و دورهمی‌های عصرانه با پذیرایی کامل نوشیدنی‌های گیاهی و کیک‌های دست‌ساز آماده رزرو است.",
    res_perk1: "ظرفیت صمیمی تا ۲۵ نفر با چیدمان منعطف",
    res_perk2: "منوی ویژه دمنوش‌ها، هات‌چاکلت بار و فینگرفودهای سرد",
    res_perk3: "امکان نمایش آثار هنری و موسیقی ملایم اختصاصی",
    form_name: "نام و نام خانوادگی",
    form_date: "تاریخ و ساعت پیشنهادی",
    form_guests: "تعداد مهمان‌ها",
    form_type: "نوع برنامه",
    opt_bday: "تولد و دورهمی دوستانه",
    opt_art: "ایونت هنری و نمایشگاه",
    opt_meet: "جلسه کاری یا کتاب‌خوانی",
    form_notes: "توضیحات یا نوشیدنی‌های مدنظر",
    form_submit: "ارسال درخواست رزرو در واتساپ",
    footer_desc: "پناهگاهی آرام برای طعم‌های گیاهی، هنر و گفت‌وگوهای عمیق.",
    open_gmaps: "مسیریابی در Google Maps ↗",
    hours_title: "ساعات میزبانی",
    hours_weekdays: "شنبه تا چهارشنبه: ۹:۰۰ تا ۲۲:۳۰",
    hours_weekend: "پنج‌شنبه و جمعه: ۱۰:۰۰ تا ۲۳:۳۰",
    toast_copied: "دستور اختصاصی شما کپی شد! می‌توانید به باریستا نشان دهید."
  },
  en: {
    nav_alchemy: "Mood Atelier",
    nav_menu: "Botanical Menu",
    nav_reserve: "Reserve Gallery",
    nav_visit: "Location",
    quick_menu: "Menu",
    step_1_note: "Handcrafted stoneware mug; ready for your custom infusion",
    step_2_note: "Velvety dark cocoa & pure botanical extract pouring in",
    step_3_note: "Your chosen aromatic toppings settling over the foam",
    step_4_note: "Crafted to linger inside Goorak Cafe • Gallery",
    hero_eyebrow: "Artisan Gallery & Botanical Bar • Zero-Kitchen Concept",
    hero_title: "A Quiet Cup in the Heart of Goorak Gallery",
    hero_desc: "Free from kitchen noise or heavy cooking—every cup is blended from pure dried botanicals, single-origin dark cocoa, and daily artisan pastries tailored to your exact mood.",
    hero_cta_1: "Blend by Your Mood",
    hero_cta_2: "Explore Full Menu",
    sec2_eyebrow: "Velvet Base • Dark Cocoa & Warm Infusion",
    sec2_title: "Deep Cocoa Warmth Held in Terracotta",
    sec2_desc: "Scroll to watch rich hot chocolate and steamed foam settle into the mug. Prepared strictly with premium dry botanicals and extracts so every aroma stays pure.",
    atelier_eyebrow: "Interactive Table Game • Tap & Watch Inside the 3D Cup",
    atelier_title: "How Does Your Spirit Feel Today?",
    atelier_desc: "Select your current mood or toggle dried botanicals to drop them directly into the 3D cup and generate your bespoke table prescription.",
    mood_sad: "Heavy-Hearted & Seeking Comfort",
    mood_anxious: "Restless & Overwhelmed",
    mood_tired: "Drained & Low Energy",
    mood_focus: "Seeking Clarity & Inspiration",
    ing_rose: "+ Damask Rose Petals",
    ing_saffron: "+ Persian Saffron Threads",
    ing_cardamom: "+ Crushed Green Cardamom",
    ing_cinnamon: "+ Ceylon Cinnamon & Cocoa",
    ing_neroli: "+ Orange Blossom",
    rx_tag: "Goorak Barista Prescription",
    rx_order_btn: "Copy Blend to Show Barista",
    menu_eyebrow: "Wellness & Gallery Menu",
    menu_title: "Therapeutic Infusions, Hot Cocoa & Ready Pastries",
    filter_all: "All Offerings",
    filter_herbal: "Healing Infusions",
    filter_cocoa: "Hot Cocoa & Coffee",
    filter_pastry: "Artisan Pastries",
    res_eyebrow: "Host Your Intimate Moments",
    res_title: "Private Gallery & Gathering Reservations",
    res_desc: "Goorak’s warm wood-and-terracotta sanctuary is available for intimate birthdays, book clubs, art previews, and evening gatherings with full botanical bar service.",
    res_perk1: "Intimate capacity up to 25 guests with flexible seating",
    res_perk2: "Curated herbal infusion bar, hot chocolate & cold artisan bites",
    res_perk3: "Wall space for art showcases and curated ambient acoustics",
    form_name: "Full Name",
    form_date: "Preferred Date & Time",
    form_guests: "Number of Guests",
    form_type: "Occasion Type",
    opt_bday: "Birthday & Intimate Gathering",
    opt_art: "Art Exhibition / Creative Pop-up",
    opt_meet: "Book Club / Creative Session",
    form_notes: "Notes or Preferred Drinks",
    form_submit: "Send Booking Request via WhatsApp",
    footer_desc: "A serene sanctuary for botanical warmth, art, and unhurried conversation.",
    open_gmaps: "Open in Google Maps ↗",
    hours_title: "Gallery Hours",
    hours_weekdays: "Sat – Wed: 09:00 – 22:30",
    hours_weekend: "Thu – Fri: 10:00 – 23:30",
    toast_copied: "Your custom drink recipe is copied! Show it to your barista."
  }
};

const moodPrescriptions = {
  melancholy: {
    liquidColor: 0x3b1d11,
    ingredients: ["rose", "cardamom"],
    fa: {
      name: "هات‌چاکلت گل محمدی و هل سبز",
      benefit: "اگر امروز کمی دلگیر یا خسته‌اید، ترکیب شکلات تلخ اصیل با عطر گل محمدی و هل، ترشح اندورفین را تحریک کرده و حس امنیت، گرما و نشاط ملایمی به ذهن برمی‌گرداند."
    },
    en: {
      name: "Damask Rose & Green Cardamom Hot Chocolate",
      benefit: "When you feel heavy-hearted, pure dark cocoa paired with aromatic Damask rose and cardamom stimulates endorphins, lifting emotional fatigue with gentle warmth."
    }
  },
  anxious: {
    liquidColor: 0x9e6229,
    ingredients: ["orangeBlossom", "rose"],
    fa: {
      name: "دمنوش آرامش بهارنارنج و گل سرخ",
      benefit: "برای لحظه‌های شلوغ و پرالتهاب؛ شکوفه بهارنارنج ضربان قلب را متعادل می‌کند و تنش عصبی روز را بدون ایجاد خواب‌آلودگی سنگین فرو می‌نشاند."
    },
    en: {
      name: "Neroli Blossom & Rose Calm Infusion",
      benefit: "Crafted for restless minds; orange blossom gently eases nervous tension and steadies your pace without heavy drowsiness."
    }
  },
  fatigued: {
    liquidColor: 0x4a2413,
    ingredients: ["cinnamon", "cardamom"],
    fa: {
      name: "موکا دارچین سیلان و هل گرم",
      benefit: "ترکیب اسپرسو، شکلات تلخ و دارچین طبیعی گردش خون را بهبود می‌بخشد و انرژی پایدار و بدون افت ناگهانی برای ادامه روز می‌سازد."
    },
    en: {
      name: "Ceylon Cinnamon & Cardamom Spiced Mocha",
      benefit: "Single-origin espresso and dark cocoa infused with true cinnamon awaken circulation and deliver steady, grounded vitality."
    }
  },
  focus: {
    liquidColor: 0xb87628,
    ingredients: ["saffron", "cardamom"],
    fa: {
      name: "اکسیر طلایی زعفران و هل سبز",
      benefit: "زعفران خالص خراسان به همراه هل معطر، شفافیت ذهنی را بالا می‌برد و بهترین همراه برای مطالعه، طراحی یا گفت‌وگوهای خلاقانه در گالری است."
    },
    en: {
      name: "Golden Persian Saffron & Cardamom Elixir",
      benefit: "Pure saffron threads steeped with crushed cardamom sharpen mental clarity—an ideal companion for reading, sketching, or deep gallery talks."
    }
  }
};

const menuCatalog = [
  {
    category: "cocoa",
    priceFa: "۱۶۵ هزار تومان",
    priceEn: "$5.50",
    titleFa: "هات‌چاکلت دلگرمی (گل محمدی و هل)",
    titleEn: "Heartwarming Rose & Cardamom Hot Cocoa",
    benefitFa: "مناسب رفع دلتنگی و خستگی روحی؛ تهیه شده با شکلات تلخ ۷۰٪، غنچه گل محمدی و هل سبز.",
    benefitEn: "Mood-lifting blend of 70% dark cocoa, Damask rosebuds, and freshly crushed cardamom.",
    tagsFa: ["نشاط‌آور", "بدون شکر افزوده"],
    tagsEn: ["Mood Lifting", "Pure Cocoa"]
  },
  {
    category: "herbal",
    priceFa: "۱۳۵ هزار تومان",
    priceEn: "$4.50",
    titleFa: "دمنوش سکوت گالری (بهارنارنج و بادرنجبویه)",
    titleEn: "Gallery Silence (Orange Blossom & Lemon Balm)",
    benefitFa: "کاهش استرس و اضطراب عصرگاهی، آرام‌بخش سیستم عصبی و بهبود کیفیت تمرکز.",
    benefitEn: "Calms evening restlessness, soothes the nervous system, and restores quiet focus.",
    tagsFa: ["ضد استرس", "بدون کافئین"],
    tagsEn: ["Stress Relief", "Caffeine-Free"]
  },
  {
    category: "herbal",
    priceFa: "۱۵۵ هزار تومان",
    priceEn: "$5.20",
    titleFa: "دمنوش طلای سرخ (زعفران، سیب خشک و دارچین)",
    titleEn: "Red Gold Infusion (Saffron, Dried Apple & Cinnamon)",
    benefitFa: "تقویت خلق‌وخو، گرم‌کننده ملایم بدن و سرشار از آنتی‌اکسیدان‌های طبیعی.",
    benefitEn: "Elevates mood, gently warms the body, and brims with natural botanical antioxidants.",
    tagsFa: ["انرژی‌بخش ملایم", "آنتی‌اکسیدان"],
    tagsEn: ["Gentle Energy", "Antioxidant"]
  },
  {
    category: "cocoa",
    priceFa: "۱۴۵ هزار تومان",
    priceEn: "$4.80",
    titleFa: "لاته زعفران و پسته",
    titleEn: "Saffron & Pistachio Velvet Latte",
    benefitFa: "اسپرسوی دبل با شیر مخملی، عصاره زعفران و پودر پسته تازه؛ طعمی اصیل و ماندگار.",
    benefitEn: "Double espresso folded into steamed milk with saffron extract and crushed pistachio.",
    tagsFa: ["امضای گوراک", "کافئین متعادل"],
    tagsEn: ["Goorak Signature", "Balanced Caffeine"]
  },
  {
    category: "pastry",
    priceFa: "۱۴۰ هزار تومان",
    priceEn: "$4.60",
    titleFa: "کیک هویج و گردوی دست‌ساز (سرو سرد/گرم)",
    titleEn: "Artisan Carrot & Walnut Loaf Cake",
    benefitFa: "پخت روز در کارگاه همکار؛ بافت مرطوب با ادویه دارچین و کرم پنیر سبک.",
    benefitEn: "Baked fresh daily by our partner patisserie; spiced with cinnamon and light cream frosting.",
    tagsFa: ["سرو آماده", "پخت روز"],
    tagsEn: ["Ready to Serve", "Daily Bake"]
  },
  {
    category: "pastry",
    priceFa: "۱۳۰ هزار تومان",
    priceEn: "$4.30",
    titleFa: "تارت شکلات تلخ و انجیر خشک",
    titleEn: "Dark Chocolate & Dried Fig Tart",
    benefitFa: "ترکیبی هماهنگ با دمنوش‌های گیاهی؛ شیرینی طبیعی انجیر در کنار تلخی ملایم کاکائو.",
    benefitEn: "Pairs effortlessly with herbal infusions; natural fig sweetness balanced by dark ganache.",
    tagsFa: ["وگان‌فرندلی", "مناسب دمنوش"],
    tagsEn: ["Plant-Forward", "Tea Pairing"]
  }
];

// ==========================================
// 2. THREE.JS PHOTOREALISTIC-INSPIRED 3D CUP
// ==========================================
const canvas = document.getElementById('goorak-3d');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
camera.position.set(0, 2.35, 5.4);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.minPolarAngle = Math.PI / 4;
controls.maxPolarAngle = Math.PI / 2.05;

// Warm Gallery Studio Lighting (Matches the Amber Counter & Rattan Pendant)
const ambientLight = new THREE.AmbientLight(0xfff1e0, 0.85);
scene.add(ambientLight);

const keyLight = new THREE.SpotLight(0xffb86b, 18);
keyLight.position.set(4, 6, 4);
keyLight.angle = Math.PI / 4;
keyLight.penumbra = 0.6;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xffe6cc, 1.4);
rimLight.position.set(-4, 3, -3);
scene.add(rimLight);

const fillLight = new THREE.PointLight(0xd9822b, 3.5);
fillLight.position.set(0, 1.5, 3);
scene.add(fillLight);

// Procedural Stoneware Texture (Matches Terracotta & Warm Clay in Cafe Photo)
function createStonewareTexture() {
  const texCanvas = document.createElement('canvas');
  texCanvas.width = 512;
  texCanvas.height = 512;
  const ctx = texCanvas.getContext('2d');
  ctx.fillStyle = '#C98A5B';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle horizontal wheel-thrown ceramic rings & mineral speckles
  for (let y = 0; y < 512; y += 3) {
    ctx.fillStyle = y % 6 === 0 ? 'rgba(130, 72, 38, 0.12)' : 'rgba(255, 232, 210, 0.08)';
    ctx.fillRect(0, y, 512, 1.5);
  }
  for (let i = 0; i < 1800; i++) {
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(58, 32, 18, 0.16)' : 'rgba(255, 245, 235, 0.14)';
    ctx.fillRect(Math.random() * 512, Math.random() * 512, 1.5, 1.5);
  }
  const texture = new THREE.CanvasTexture(texCanvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

const cupGroup = new THREE.Group();
scene.add(cupGroup);

// Wooden Coaster / Saucer (Matches the Wooden Counter)
const saucerGeo = new THREE.CylinderGeometry(1.55, 1.42, 0.12, 64);
const woodMat = new THREE.MeshStandardMaterial({
  color: 0x5c361c,
  roughness: 0.45,
  metalness: 0.05
});
const saucer = new THREE.Mesh(saucerGeo, woodMat);
saucer.position.y = -0.82;
cupGroup.add(saucer);

// Lathe Profile for Artisan Ceramic Mug
const mugPoints = [
  new THREE.Vector2(0.0, -0.75),
  new THREE.Vector2(0.88, -0.75),
  new THREE.Vector2(1.06, -0.35),
  new THREE.Vector2(1.12, 0.45),
  new THREE.Vector2(1.08, 0.78),
  new THREE.Vector2(0.99, 0.78),
  new THREE.Vector2(0.96, -0.62),
  new THREE.Vector2(0.0, -0.62)
];
const mugGeo = new THREE.LatheGeometry(mugPoints, 64);
const mugMat = new THREE.MeshPhysicalMaterial({
  map: createStonewareTexture(),
  roughness: 0.36,
  metalness: 0.02,
  clearcoat: 0.38,
  clearcoatRoughness: 0.28
});
const mugMesh = new THREE.Mesh(mugGeo, mugMat);
cupGroup.add(mugMesh);

// Ergonomic Ceramic Handle
const handleCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(1.04, 0.48, 0),
  new THREE.Vector3(1.52, 0.44, 0),
  new THREE.Vector3(1.54, -0.22, 0),
  new THREE.Vector3(1.02, -0.34, 0)
]);
const handleGeo = new THREE.TubeGeometry(handleCurve, 32, 0.085, 16, false);
const handleMesh = new THREE.Mesh(handleGeo, mugMat);
cupGroup.add(handleMesh);

// Glossy Hot Chocolate / Herbal Infusion Surface
const liquidGeo = new THREE.CylinderGeometry(0.98, 0.94, 0.1, 64);
const liquidMat = new THREE.MeshPhysicalMaterial({
  color: 0x3b1d11,
  roughness: 0.12,
  metalness: 0.05,
  clearcoat: 0.9,
  clearcoatRoughness: 0.08
});
const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
liquidMesh.position.y = -0.45; // Rises on scroll!
cupGroup.add(liquidMesh);

// Velvet Micro-Foam Layer
const foamGeo = new THREE.CylinderGeometry(0.975, 0.975, 0.05, 64);
const foamMat = new THREE.MeshStandardMaterial({
  color: 0xebd7c3,
  roughness: 0.78,
  transparent: true,
  opacity: 0.92
});
const foamMesh = new THREE.Mesh(foamGeo, foamMat);
foamMesh.position.y = -0.42;
cupGroup.add(foamMesh);

// Interactive 3D Botanical Toppings Group
const toppingsGroup = new THREE.Group();
cupGroup.add(toppingsGroup);

const ingredientMeshes = {
  rose: new THREE.Group(),
  saffron: new THREE.Group(),
  cardamom: new THREE.Group(),
  cinnamon: new THREE.Group(),
  orangeBlossom: new THREE.Group()
};

function populateToppings() {
  // Damask Rose Petals
  const petalGeo = new THREE.CircleGeometry(0.11, 7);
  const petalMat = new THREE.MeshStandardMaterial({ color: 0xb8334a, roughness: 0.65, side: THREE.DoubleSide });
  for (let i = 0; i < 14; i++) {
    const p = new THREE.Mesh(petalGeo, petalMat);
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.72;
    p.position.set(Math.cos(angle) * r, 0.03 + Math.random() * 0.02, Math.sin(angle) * r);
    p.rotation.set(-Math.PI / 2 + (Math.random() - 0.5) * 0.4, Math.random() * 3, 0);
    ingredientMeshes.rose.add(p);
  }

  // Saffron Threads
  const threadGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.18, 6);
  const threadMat = new THREE.MeshStandardMaterial({ color: 0xd9381e, roughness: 0.4 });
  for (let i = 0; i < 18; i++) {
    const t = new THREE.Mesh(threadGeo, threadMat);
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.65;
    t.position.set(Math.cos(angle) * r, 0.035, Math.sin(angle) * r);
    t.rotation.set(Math.PI / 2, 0, Math.random() * Math.PI);
    ingredientMeshes.saffron.add(t);
  }

  // Green Cardamom Pods
  const podGeo = new THREE.CapsuleGeometry(0.035, 0.07, 4, 8);
  const podMat = new THREE.MeshStandardMaterial({ color: 0x6b8e4e, roughness: 0.55 });
  for (let i = 0; i < 7; i++) {
    const pod = new THREE.Mesh(podGeo, podMat);
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.6;
    pod.position.set(Math.cos(angle) * r, 0.04, Math.sin(angle) * r);
    pod.rotation.set(Math.PI / 2, 0, Math.random() * Math.PI);
    ingredientMeshes.cardamom.add(pod);
  }

  // Cinnamon Stick & Cocoa Dust
  const stickGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.85, 12);
  const stickMat = new THREE.MeshStandardMaterial({ color: 0x6e3518, roughness: 0.7 });
  const stick = new THREE.Mesh(stickGeo, stickMat);
  stick.position.set(0.15, 0.09, 0.05);
  stick.rotation.set(Math.PI / 2.2, 0.2, 0.65);
  ingredientMeshes.cinnamon.add(stick);

  // Orange Blossom Petals
  const blossomGeo = new THREE.SphereGeometry(0.055, 8, 8);
  blossomGeo.scale(1.3, 0.35, 0.9);
  const blossomMat = new THREE.MeshStandardMaterial({ color: 0xf7e7ce, roughness: 0.5 });
  for (let i = 0; i < 10; i++) {
    const b = new THREE.Mesh(blossomGeo, blossomMat);
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.68;
    b.position.set(Math.cos(angle) * r, 0.035, Math.sin(angle) * r);
    b.rotation.y = Math.random() * Math.PI;
    ingredientMeshes.orangeBlossom.add(b);
  }

  Object.values(ingredientMeshes).forEach(group => toppingsGroup.add(group));
}
populateToppings();

// Gentle Rising Steam Particles
const steamCount = 28;
const steamParticles = [];
const steamGeo = new THREE.SphereGeometry(0.06, 8, 8);
const steamMat = new THREE.MeshBasicMaterial({ color: 0xfff7ed, transparent: true, opacity: 0.14 });

for (let i = 0; i < steamCount; i++) {
  const s = new THREE.Mesh(steamGeo, steamMat.clone());
  s.position.set((Math.random() - 0.5) * 0.9, 0.7 + Math.random() * 1.4, (Math.random() - 0.5) * 0.9);
  s.userData = { speed: 0.004 + Math.random() * 0.005, offset: Math.random() * 10 };
  scene.add(s);
  steamParticles.push(s);
}

// ==========================================
// 3. STATE MANAGEMENT (LANGUAGE, MOOD, SCROLL)
// ==========================================
let currentLang = 'fa';
let currentMood = 'melancholy';
let activeIngredients = new Set(['rose', 'cardamom']);
let targetLiquidY = -0.35;
let targetLiquidColor = new THREE.Color(0x3b1d11);

function syncToppingsVisibility() {
  Object.entries(ingredientMeshes).forEach(([key, meshGroup]) => {
    meshGroup.visible = activeIngredients.has(key);
  });
}

function updatePrescriptionUI() {
  const preset = moodPrescriptions[currentMood];
  const copy = preset[currentLang];
  document.getElementById('rx-drink-name').textContent = copy.name;
  document.getElementById('rx-benefit-text').textContent = copy.benefit;

  const ingLabels = Array.from(activeIngredients).map(k => i18n[currentLang][`ing_${k}`].replace('+ ', ''));
  const prefix = currentLang === 'fa' ? 'ترکیبات انتخابی شما: ' : 'Your Selected Blend: ';
  document.getElementById('rx-ingredients-summary').textContent = prefix + (ingLabels.join(' • ') || (currentLang === 'fa' ? 'پایه ساده' : 'Pure Base'));
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.getElementById('lang-toggle').textContent = lang === 'fa' ? 'EN' : 'فا';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  renderMenu(document.querySelector('.tab-btn.active')?.dataset.filter || 'all');
  updatePrescriptionUI();
}

function renderMenu(filter = 'all') {
  const container = document.getElementById('menu-items-container');
  container.innerHTML = '';

  const filtered = filter === 'all' ? menuCatalog : menuCatalog.filter(item => item.category === filter);

  filtered.forEach(item => {
    const row = document.createElement('article');
    row.className = 'menu-item-row';
    const title = currentLang === 'fa' ? item.titleFa : item.titleEn;
    const price = currentLang === 'fa' ? item.priceFa : item.priceEn;
    const benefit = currentLang === 'fa' ? item.benefitFa : item.benefitEn;
    const tags = currentLang === 'fa' ? item.tagsFa : item.tagsEn;

    row.innerHTML = `
      <div>
        <div class="item-top">
          <h3 class="item-title">${title}</h3>
          <span class="item-price">${price}</span>
        </div>
        <p class="item-benefit">${benefit}</p>
      </div>
      <div class="item-tags">
        ${tags.map(t => `<span class="herb-tag">${t}</span>`).join('')}
      </div>
    `;
    container.appendChild(row);
  });
}

// Event Listeners
document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'fa' ? 'en' : 'fa');
});

document.querySelectorAll('.mood-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMood = btn.dataset.mood;

    const preset = moodPrescriptions[currentMood];
    targetLiquidColor.setHex(preset.liquidColor);
    activeIngredients = new Set(preset.ingredients);

    document.querySelectorAll('.ing-chip').forEach(chip => {
      chip.classList.toggle('active', activeIngredients.has(chip.dataset.ing));
    });

    syncToppingsVisibility();
    updatePrescriptionUI();
  });
});

document.querySelectorAll('.ing-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const ing = chip.dataset.ing;
    if (activeIngredients.has(ing)) {
      activeIngredients.delete(ing);
      chip.classList.remove('active');
    } else {
      activeIngredients.add(ing);
      chip.classList.add('active');
    }
    syncToppingsVisibility();
    updatePrescriptionUI();
  });
});

document.getElementById('copy-order-btn').addEventListener('click', () => {
  const drinkName = document.getElementById('rx-drink-name').textContent;
  const summary = document.getElementById('rx-ingredients-summary').textContent;
  navigator.clipboard?.writeText(`GOORAK Order: ${drinkName} (${summary})`);
  showToast(i18n[currentLang].toast_copied);
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.filter);
  });
});

document.getElementById('reservation-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('res-name').value;
  const date = document.getElementById('res-date').value;
  const guests = document.getElementById('res-guests').value;
  const type = document.getElementById('res-type').value;
  const notes = document.getElementById('res-notes').value;

  const text = encodeURIComponent(
    `سلام، درخواست رزرو فضای گالری گوراک را دارم:
` +
    `نام: ${name}
` +
    `تاریخ و ساعت: ${date}
` +
    `تعداد مهمان: ${guests} نفر
` +
    `نوع برنامه: ${type}
` +
    `توضیحات: ${notes || '-'}`
  );
  window.open(`https://wa.me/${CAFE_WHATSAPP}?text=${text}`, '_blank');
});

function showToast(msg) {
  const toast = document.getElementById('toast-msg');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

// ==========================================
// 4. SCROLLYTELLING OBSERVER & ANIMATION LOOP
// ==========================================
const sections = document.querySelectorAll('section, footer');
const stepIndicator = document.getElementById('step-indicator');
const stepNote = document.getElementById('step-note');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bg = entry.target.dataset.bg;
      const ink = entry.target.dataset.ink;
      if (bg) document.documentElement.style.setProperty('--bg-current', bg);
      if (ink) document.documentElement.style.setProperty('--ink-current', ink);

      const step = entry.target.dataset.step;
      if (step !== undefined) {
        const sNum = Number(step);
        stepIndicator.textContent = `0${sNum + 1} / 04`;
        stepNote.setAttribute('data-i18n', `step_${sNum + 1}_note`);
        stepNote.textContent = i18n[currentLang][`step_${sNum + 1}_note`];

        // Fill the cup progressively as user scrolls down
        targetLiquidY = sNum === 0 ? -0.25 : 0.48;
      }
    }
  });
}, { threshold: 0.42 });

sections.forEach(sec => observer.observe(sec));

function resizeRenderer() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  resizeRenderer();

  const elapsed = clock.getElapsedTime();
  const scrollY = window.scrollY;

  // Smooth rotation tied to scroll + gentle breathing idle motion
  cupGroup.rotation.y = scrollY * 0.0028 + Math.sin(elapsed * 0.4) * 0.15;
  cupGroup.position.y = Math.sin(elapsed * 0.9) * 0.04;

  // Smooth liquid level & mood color transition
  liquidMesh.position.y += (targetLiquidY - liquidMesh.position.y) * 0.06;
  foamMesh.position.y = liquidMesh.position.y + 0.055;
  toppingsGroup.position.y = foamMesh.position.y + 0.015;
  liquidMat.color.lerp(targetLiquidColor, 0.06);

  // Steam animation
  steamParticles.forEach(p => {
    p.position.y += p.userData.speed;
    p.position.x += Math.sin(elapsed + p.userData.offset) * 0.0015;
    if (p.position.y > 2.3) {
      p.position.y = 0.75;
    }
  });

  controls.update();
  renderer.render(scene, camera);
}

// Initialize
syncToppingsVisibility();
applyLanguage('fa');
animate();
