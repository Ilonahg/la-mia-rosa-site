const cart = JSON.parse(localStorage.getItem("cart")) || [];
const summaryItems = document.getElementById("summaryItems");
const summaryTotal = document.getElementById("summaryTotal");

let total = 0;

cart.forEach(item => {
  total += item.price * item.quantity;

  summaryItems.innerHTML += `
    <p>${item.name} × ${item.quantity}</p>
  `;
});

summaryTotal.innerText = "€" + total;

document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const order = {
    customer: Object.fromEntries(formData),
    cart,
    total,
    date: new Date().toISOString()
  };

  console.log("ORDER:", order);

  alert("Order submitted (test mode)");
});
