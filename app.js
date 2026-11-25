import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const WHATSAPP_NUMBER = "989120000000";

const I18N = {
  fa: {
    light_on: "روشن کردن چراغ",
    light_off: "خاموش کردن چراغ",
    nav_stage: "فضای ۳بعدی و چراغ",
    nav_menu: "منوی نوشیدنی و آماده",
    nav_shop: "فروشگاه دست‌ساز",
    nav_reserve: "رزرو مهمانی و نشانی",
    stage_eyebrow: "ورود به کافه و گالری گوراک",
    stage_title: "چراغ را روشن کنید و وارد فضا شوید",
    mood_rose: "گل محمدی و شکلات",
    mood_saffron: "زعفران و هل",
    mood_neroli: "بهارنارنج آرامش",
    stage_hint: "روی چراغ آویز کلیک کنید یا صحنه را با ماوس/لمس بچرخانید",
    menu_eyebrow: "منوی QR روی میز",
    menu_title: "نوشیدنی‌ها، دمنوش‌ها و آیتم‌های آماده",
    all: "همه",
    f_infusion: "دمنوش و خواص",
    f_cocoa: "هات‌چاکلت و قهوه",
    f_ready: "کیک و آماده",
    shop_eyebrow: "گالری و بوتیک دست‌ساز",
    shop_title: "لباس، کیف و کفش دست‌ساز",
    s_clothes: "لباس",
    s_bags: "کیف",
    s_shoes: "کفش",
    res_eyebrow: "میزبان دورهمی‌های خاص",
    res_title: "رزرو مهمانی و نشانی گوراک",
    lbl_name: "نام شما",
    lbl_date: "تاریخ و ساعت",
    lbl_guests: "تعداد مهمان",
    lbl_notes: "نوع مهمانی یا سفارش",
    btn_wa: "ارسال درخواست رزرو در واتساپ",
    loc_desc: "کنگان • کافه، گالری هنری و بوتیک دست‌ساز گوراک",
    open_maps: "باز کردن در گوگل مپ ↗"
  },
  en: {
    light_on: "Turn Light On",
    light_off: "Turn Light Off",
    nav_stage: "3D Space & Lamp",
    nav_menu: "Drinks & Ready Menu",
    nav_shop: "Handmade Boutique",
    nav_reserve: "Party Booking & Map",
    stage_eyebrow: "ENTER GOORAK CAFE & GALLERY",
    stage_title: "Switch on the Lamp & Step Inside",
    mood_rose: "Rose & Dark Cocoa",
    mood_saffron: "Saffron & Cardamom",
    mood_neroli: "Neroli Calm",
    stage_hint: "Click the pendant lamp or drag to orbit",
    menu_eyebrow: "TABLE QR MENU",
    menu_title: "Infusions, Warm Drinks & Ready Bites",
    all: "All",
    f_infusion: "Herbal & Benefits",
    f_cocoa: "Cocoa & Coffee",
    f_ready: "Ready Pastries",
    shop_eyebrow: "GALLERY BOUTIQUE",
    shop_title: "Handmade Apparel, Bags & Shoes",
    s_clothes: "Apparel",
    s_bags: "Bags",
    s_shoes: "Shoes",
    res_eyebrow: "PRIVATE GATHERINGS",
    res_title: "Party Booking & Goorak Location",
    lbl_name: "Your Name",
    lbl_date: "Date & Time",
    lbl_guests: "Guests",
    lbl_notes: "Event Type or Notes",
    btn_wa: "Send Booking via WhatsApp",
    loc_desc: "Kangan • Goorak Cafe, Art Gallery & Handmade Boutique",
    open_maps: "Open in Google Maps ↗"
  }
};

const MOODS = {
  rose: { liquid: 0x3a1c11 },
  saffron: { liquid: 0xb57624 },
  neroli: { liquid: 0x7b6336 }
};

const SHOWCASE_CARDS = [
  { tagFa: "نوشیدنی حال‌خوب", tagEn: "Mood Drink", titleFa: "هات‌چاکلت گل محمدی", titleEn: "Rose Hot Cocoa", descFa: "دلگرم‌کننده برای روزهای گرفته و خسته.", descEn: "Warming cocoa for low-energy days." },
  { tagFa: "دم‌نوش گیاهی", tagEn: "Botanical Tea", titleFa: "بهارنارنج و گل سرخ", titleEn: "Neroli & Rose", descFa: "آرام‌بخش اعصاب و خواب سبک.", descEn: "Soothing floral infusion." },
  { tagFa: "بوتیک دست‌ساز", tagEn: "Handmade Apparel", titleFa: "مانتو و شال کتان دست‌دوز", titleEn: "Hand-Stitched Linen Coat", descFa: "دوخت محدود در رنگ‌های زیتونی و کرم.", descEn: "Small-batch olive & cream linen." },
  { tagFa: "کیف و کفش", tagEn: "Bags & Footwear", titleFa: "کیف دوشی و کفش چرم/کنف", titleEn: "Craft Bag & Shoes", descFa: "ساخت دست؛ قابل سفارش و خرید در گالری.", descEn: "Handcrafted pieces in the gallery." }
];

const MENU_ITEMS = [
  {
    cat: "cocoa",
    priceFa: "۱۶۵ هزار",
    priceEn: "$5.50",
    titleFa: "هات‌چاکلت گل محمدی و هل",
    titleEn: "Rose & Cardamom Hot Cocoa",
    descFa: "اگر امروز کمی دلگیر یا خسته‌اید، ترکیب شکلات تلخ گرم با گل محمدی روحیه را لطیف و گرم می‌کند.",
    descEn: "Lifts low moods with warm dark cocoa, Damask rose, and cardamom.",
    metaFa: "خواص: نشاط‌آور • آرام‌بخش روحی",
    metaEn: "Benefits: Mood-lifting • Comforting"
  },
  {
    cat: "infusion",
    priceFa: "۱۴۰ هزار",
    priceEn: "$4.50",
    titleFa: "دم‌نوش بهارنارنج و بادرنجبویه",
    titleEn: "Orange Blossom & Lemon Balm",
    descFa: "تهیه شده از گیاهان خشک آماده؛ کمک به کاهش اضطراب و آرامش ذهنی بدون آشپزخانه.",
    descEn: "Prepared from dried botanicals to ease tension calmly.",
    metaFa: "خواص: ضد استرس • بدون کافئین",
    metaEn: "Benefits: Stress relief • Caffeine-free"
  },
  {
    cat: "infusion",
    priceFa: "۱۵۵ هزار",
    priceEn: "$5.00",
    titleFa: "دم‌نوش زعفران و سیب خشک",
    titleEn: "Saffron & Dried Apple Tea",
    descFa: "گرم‌کننده ملایم و خوش‌عطر برای تقویت خلق‌وخو و همراهی با فضای گالری.",
    descEn: "Warming botanical infusion with saffron and dried apple.",
    metaFa: "خواص: انرژی‌بخش ملایم • آنتی‌اکسیدان",
    metaEn: "Benefits: Gentle vitality • Antioxidant"
  },
  {
    cat: "ready",
    priceFa: "۱۴۵ هزار",
    priceEn: "$4.80",
    titleFa: "کیک دست‌ساز آماده سرو",
    titleEn: "Ready-to-Serve Artisan Cake",
    descFa: "پخت روزِ کارگاه همکار؛ سرو آماده و تمیز در کنار نوشیدنی.",
    descEn: "Fresh daily pastry prepared off-site, ready to serve.",
    metaFa: "سرو آماده • بدون پخت در محل",
    metaEn: "Ready to serve • No kitchen cooking"
  }
];

const SHOP_ITEMS = [
  {
    cat: "clothes",
    priceFa: "۱,۸۵۰ هزار",
    priceEn: "$32",
    titleFa: "پیراهن و مانتو کتان دست‌دوز",
    titleEn: "Handcrafted Linen Overshirt",
    descFa: "دوخت دست با پارچه تنفس‌پذیر در رنگ زیتونی و بژ.",
    descEn: "Hand-finished breathable linen in olive & cream.",
    metaFa: "دست‌دوز • موجود در گالری",
    metaEn: "Handmade • In Gallery"
  },
  {
    cat: "bags",
    priceFa: "۱,۲۵۰ هزار",
    priceEn: "$22",
    titleFa: "کیف دوشی دست‌ساز گالری",
    titleEn: "Artisan Gallery Shoulder Bag",
    descFa: "ترکیب بافت کنفی و یراق تمیز مناسب استفاده روزمره.",
    descEn: "Woven craft texture suited for daily carry.",
    metaFa: "دست‌ساز • تک‌نسخه / محدود",
    metaEn: "Handmade • Limited Run"
  },
  {
    cat: "shoes",
    priceFa: "۱,۶۵۰ هزار",
    priceEn: "$29",
    titleFa: "کفش راحت دست‌دوز",
    titleEn: "Hand-Stitched Comfort Shoes",
    descFa: "زیره نرم و قالب راحت برای قدم زدن در کافه و گالری.",
    descEn: "Soft sole and comfortable fit for gallery strolls.",
    metaFa: "دست‌ساز • سایزبندی محدود",
    metaEn: "Handmade • Limited Sizes"
  }
];

let lang = "fa";
let lampOn = false;
let activeMood = "rose";
let menuFilter = "all";
let shopFilter = "all";

function applyI18n() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.getElementById("lang-btn").textContent = lang === "fa" ? "EN" : "فا";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  document.getElementById("light-label").textContent = lampOn ? I18N[lang].light_off : I18N[lang].light_on;
  renderShowcase();
  renderMenu();
  renderShop();
}

function renderShowcase() {
  const track = document.getElementById("carousel-track");
  track.innerHTML = "";
  SHOWCASE_CARDS.forEach(c => {
    const card = document.createElement("div");
    card.className = "showcase-card";
    card.innerHTML = `
      <span class="tag">${lang === "fa" ? c.tagFa : c.tagEn}</span>
      <h3>${lang === "fa" ? c.titleFa : c.titleEn}</h3>
      <p>${lang === "fa" ? c.descFa : c.descEn}</p>
    `;
    card.addEventListener("click", () => {
      openDetailModal(`
        <h3 style="color:#D4AF37;margin-bottom:8px;">${lang === "fa" ? c.titleFa : c.titleEn}</h3>
        <p style="font-size:0.9rem;line-height:1.7;">${lang === "fa" ? c.descFa : c.descEn}</p>
      `);
    });
    track.appendChild(card);
  });
}

function renderMenu() {
  const wrap = document.getElementById("menu-grid");
  wrap.innerHTML = "";
  const list = menuFilter === "all" ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === menuFilter);
  list.forEach(item => {
    const el = document.createElement("article");
    el.className = "item-card";
    el.innerHTML = `
      <div>
        <div class="item-top">
          <h3 class="item-title">${lang === "fa" ? item.titleFa : item.titleEn}</h3>
          <span class="item-price">${lang === "fa" ? item.priceFa : item.priceEn}</span>
        </div>
        <p class="item-desc">${lang === "fa" ? item.descFa : item.descEn}</p>
      </div>
      <div class="item-meta">${lang === "fa" ? item.metaFa : item.metaEn}</div>
    `;
    wrap.appendChild(el);
  });
}

function renderShop() {
  const wrap = document.getElementById("shop-grid");
  wrap.innerHTML = "";
  const list = shopFilter === "all" ? SHOP_ITEMS : SHOP_ITEMS.filter(i => i.cat === shopFilter);
  list.forEach(item => {
    const el = document.createElement("article");
    el.className = "item-card";
    el.innerHTML = `
      <div>
        <div class="item-top">
          <h3 class="item-title">${lang === "fa" ? item.titleFa : item.titleEn}</h3>
          <span class="item-price">${lang === "fa" ? item.priceFa : item.priceEn}</span>
        </div>
        <p class="item-desc">${lang === "fa" ? item.descFa : item.descEn}</p>
      </div>
      <div class="item-meta">${lang === "fa" ? item.metaFa : item.metaEn}</div>
    `;
    el.addEventListener("click", () => {
      const title = lang === "fa" ? item.titleFa : item.titleEn;
      const msg = encodeURIComponent(`سلام، درباره سفارش آیتم دست‌ساز «${title}» در گالری گوراک سوال دارم.`);
      openDetailModal(`
        <h3 style="color:#D4AF37;margin-bottom:8px;">${title}</h3>
        <p style="font-size:0.88rem;margin-bottom:14px;">${lang === "fa" ? item.descFa : item.descEn}</p>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${msg}" target="_blank" rel="noopener" style="display:inline-block;padding:10px 16px;border-radius:12px;background:#D4AF37;color:#14180f;font-weight:700;text-decoration:none;font-size:0.85rem;">سفارش / استعلام در واتساپ</a>
      `);
    });
    wrap.appendChild(el);
  });
}

window.openDetailModal = function(html) {
  document.getElementById("modal-body").innerHTML = html;
  document.getElementById("detail-modal").classList.remove("hidden");
};

window.closeDetailModal = function() {
  document.getElementById("detail-modal").classList.add("hidden");
};

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const view = btn.dataset.view;
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
    document.getElementById(`view-${view}`).classList.add("active");
  });
});

document.querySelectorAll("#menu-chips .chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#menu-chips .chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    menuFilter = btn.dataset.filter;
    renderMenu();
  });
});

document.querySelectorAll("#shop-chips .chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#shop-chips .chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    shopFilter = btn.dataset.shop;
    renderShop();
  });
});

document.getElementById("lang-btn").addEventListener("click", () => {
  lang = lang === "fa" ? "en" : "fa";
  applyI18n();
});

const audioEl = document.getElementById("ambient-audio");
document.getElementById("sound-btn").addEventListener("click", () => {
  if (audioEl.paused) {
    audioEl.play().catch(() => {});
    document.getElementById("sound-btn").style.borderColor = "#D4AF37";
  } else {
    audioEl.pause();
    document.getElementById("sound-btn").style.borderColor = "";
  }
});

document.getElementById("party-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("p-name").value;
  const date = document.getElementById("p-date").value;
  const guests = document.getElementById("p-guests").value;
  const notes = document.getElementById("p-notes").value;
  const text = encodeURIComponent(`رزرو مهمانی گوراک:\nنام: ${name}\nتاریخ: ${date}\nتعداد: ${guests}\nتوضیحات: ${notes || "-"}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});

const canvas = document.getElementById("goorak-canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, canvas.clientWidth / canvas.clientHeight, 0.1, 60);
camera.position.set(0, 1.9, 5.2);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.65;

const ambient = new THREE.AmbientLight(0xd8e0cc, 0.25);
scene.add(ambient);

const pendantLight = new THREE.PointLight(0xffb85c, 0, 14, 1.5);
pendantLight.position.set(0, 1.45, 0);
pendantLight.castShadow = true;
scene.add(pendantLight);

const cord = new THREE.Mesh(
  new THREE.CylinderGeometry(0.015, 0.015, 1.4, 16),
  new THREE.MeshStandardMaterial({ color: 0x262626, roughness: 0.7 })
);
cord.position.set(0, 2.25, 0);
scene.add(cord);

const shadeMat = new THREE.MeshStandardMaterial({ color: 0x8c5b34, roughness: 0.65, side: THREE.DoubleSide });
const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.52, 0.42, 32, 1, true), shadeMat);
shade.position.set(0, 1.52, 0);
scene.add(shade);

const bulbMat = new THREE.MeshStandardMaterial({
  color: 0xfff0cc,
  emissive: 0xffaa33,
  emissiveIntensity: 0.05,
  roughness: 0.2
});
const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 20), bulbMat);
bulb.position.set(0, 1.42, 0);
scene.add(bulb);

const table = new THREE.Mesh(
  new THREE.CylinderGeometry(2.1, 1.95, 0.14, 64),
  new THREE.MeshStandardMaterial({ color: 0x5c3a21, roughness: 0.55 })
);
table.position.y = -0.85;
table.receiveShadow = true;
scene.add(table);

const cupGroup = new THREE.Group();
cupGroup.position.set(-0.45, -0.78, 0.15);
scene.add(cupGroup);

const mugPts = [
  new THREE.Vector2(0, 0),
  new THREE.Vector2(0.55, 0),
  new THREE.Vector2(0.68, 0.95),
  new THREE.Vector2(0.62, 0.95),
  new THREE.Vector2(0.49, 0.12),
  new THREE.Vector2(0, 0.12)
];
const mugMat = new THREE.MeshPhysicalMaterial({ color: 0xe8dec8, roughness: 0.35, clearcoat: 0.3 });
const mug = new THREE.Mesh(new THREE.LatheGeometry(mugPts, 48), mugMat);
mug.castShadow = true;
cupGroup.add(mug);

const liquidMat = new THREE.MeshPhysicalMaterial({ color: MOODS.rose.liquid, roughness: 0.15, clearcoat: 0.85 });
const liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.56, 0.06, 48), liquidMat);
liquid.position.y = 0.72;
cupGroup.add(liquid);

const galleryPiece = new THREE.Mesh(
  new THREE.BoxGeometry(0.68, 0.68, 0.68),
  new THREE.MeshStandardMaterial({ color: 0x3d4a31, roughness: 0.5, metalness: 0.08 })
);
galleryPiece.position.set(0.68, -0.44, -0.1);
galleryPiece.rotation.y = 0.4;
galleryPiece.castShadow = true;
scene.add(galleryPiece);

function setLampState(state) {
  lampOn = state;
  document.body.classList.toggle("lights-on", lampOn);
  document.getElementById("light-label").textContent = lampOn ? I18N[lang].light_off : I18N[lang].light_on;
}

document.getElementById("light-switch-btn").addEventListener("click", () => setLampState(!lampOn));

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects([shade, bulb]);
  if (hits.length > 0) setLampState(!lampOn);
});

let targetLiquid = new THREE.Color(MOODS.rose.liquid);
document.querySelectorAll(".mood-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mood-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeMood = btn.dataset.mood;
    targetLiquid.setHex(MOODS[activeMood].liquid);
  });
});

function resize() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (canvas.width !== w || canvas.height !== h) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
}

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  resize();
  const t = clock.getElapsedTime();

  const targetIntensity = lampOn ? 9.5 : 0;
  const targetAmbient = lampOn ? 0.95 : 0.25;
  const targetEmissive = lampOn ? 2.2 : 0.05;

  pendantLight.intensity += (targetIntensity - pendantLight.intensity) * 0.08;
  ambient.intensity += (targetAmbient - ambient.intensity) * 0.08;
  bulbMat.emissiveIntensity += (targetEmissive - bulbMat.emissiveIntensity) * 0.08;

  liquidMat.color.lerp(targetLiquid, 0.07);
  cupGroup.position.y = -0.78 + Math.sin(t * 1.4) * 0.015;

  controls.update();
  renderer.render(scene, camera);
}

applyI18n();
animate();
