/* =========================================================
   GLOBAL I18N — LA MIA ROSA
========================================================= */

const translations = {
  en: {
    /* HEADER */
    tagline: "Modern Luxury Womenswear",
    nav_wardrobe: "Wardrobe",
    nav_philosophy: "Philosophy",
    nav_reach: "Reach Us",

    /* CART */
    cart_title: "Your Cart",
    order_summary: "Order Summary",
    total: "Total",
    place_order: "Place order",
    checkout_details: "Checkout details",
    submit_order: "Submit order",
    empty_cart: "Your cart is empty.",
    continue_shopping: "Continue shopping",

    /* SUCCESS */
    success_title: "Thank you",
    success_text:
      "Your order has been received.<br>We will contact you shortly to complete payment.",
    success_continue: "Continue shopping"
  },

  tr: {
    /* HEADER */
    tagline: "Modern Lüks Kadın Giyimi",
    nav_wardrobe: "Gardırop",
    nav_philosophy: "Felsefe",
    nav_reach: "İletişim",

    /* CART */
    cart_title: "Sepetiniz",
    order_summary: "Sipariş Özeti",
    total: "Toplam",
    place_order: "Siparişi gönder",
    checkout_details: "Teslimat bilgileri",
    submit_order: "Siparişi gönder",
    empty_cart: "Sepetiniz boş.",
    continue_shopping: "Alışverişe devam et",

    /* SUCCESS */
    success_title: "Teşekkür ederiz",
    success_text:
      "Siparişiniz alındı.<br>Ödeme için sizinle en kısa sürede iletişime geçeceğiz.",
    success_continue: "Alışverişe devam et"
  },

  /* 🔥 PRODUCTS — ОСЬ ЧОГО БРАКУВАЛО */
  products: {
    "wool-vest-001": {
      en: "Tailored Wool Vest",
      tr: "Özel Dikim Yün Yelek"
    }
  }
};

/* ================= STATE ================= */

const defaultLang = localStorage.getItem("lang") || "en";

/* ================= APPLY ================= */

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(defaultLang);

  document.querySelectorAll(".lang").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTranslations(btn.dataset.lang);
    });
  });
});
