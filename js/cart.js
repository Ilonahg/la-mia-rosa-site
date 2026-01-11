/* =========================================================
   CART LOGIC — LA MIA ROSA
   Clean, stable, i18n-safe
========================================================= */

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function getProductName(item) {
  const lang = localStorage.getItem("lang") || "en";

  if (
    typeof translations !== "undefined" &&
    translations.products &&
    translations.products[item.id] &&
    translations.products[item.id][lang]
  ) {
    return translations.products[item.id][lang];
  }

  return item.name;
}
 
const itemsContainer = document.getElementById("cart-items");
const summaryItems = document.getElementById("summaryItems");
const totalEl = document.getElementById("cart-total");
const checkoutForm = document.getElementById("checkout-form");

let total = 0;

/* ================= EMPTY CART ================= */

if (cart.length === 0) {
  itemsContainer.innerHTML = `
    <p class="cart-empty" data-i18n="empty_cart"></p>
    <a href="collections.html" data-i18n="continue_shopping"></a>
  `;
  summaryItems.innerHTML = "";
  totalEl.textContent = "€0";
} else {
  renderCart();
}

/* ================= RENDER ================= */

function renderCart() {
  itemsContainer.innerHTML = "";
  summaryItems.innerHTML = "";
  total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    /* LEFT — CART ITEM */
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";

    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <h3>${getProductName(item)}</h3>
        <p>€${item.price}</p>
        <p class="qty">Quantity · ${item.quantity}</p>
        <button class="remove" data-index="${index}">REMOVE</button>
      </div>
    `;

    itemsContainer.appendChild(itemEl);

    /* RIGHT — SUMMARY LINE */
    const summaryLine = document.createElement("p");
    summaryLine.textContent = `${getProductName(item)} × ${item.quantity}`;
    summaryItems.appendChild(summaryLine);
  });

  totalEl.textContent = `€${total}`;

  bindRemoveButtons();
}

/* ================= REMOVE ================= */

function bindRemoveButtons() {
  document.querySelectorAll(".remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });
}

/* ================= CHECKOUT ================= */

function openCheckout() {
  checkoutForm.style.display = "block";
  checkoutForm.scrollIntoView({ behavior: "smooth" });
}

/* ================= PLACE ORDER ================= */

function placeOrder() {
  if (!cart.length) return;

  const order = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    items: cart,
    total,
    date: new Date().toISOString()
  };

  console.log("ORDER:", order);

  localStorage.removeItem("cart");
  showSuccess();
}

/* ================= SUCCESS ================= */

function showSuccess() {
  document.getElementById("successPopup").style.display = "flex";
}

function closeSuccess() {
  window.location.href = "collections.html";
}
