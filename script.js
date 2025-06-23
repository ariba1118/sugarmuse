const flavorPrices = {
  "Chocolate": 0,
  "Strawberry": 25,
  "Blueberry": 35,
  "Espresso": 20,
  "Nutella": 25,
  "Caramel": 15
};

// Placeholder for future features (search, cart, etc.)
document.addEventListener('DOMContentLoaded', () => {
  console.log('SugarMuse: script loaded.');
});
 
// ⬇ Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

// ✅ Add to cart with quantity logic
function addToCart(item, price) {
  const index = cart.findIndex(product => product.item === item);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ item, price, quantity: 1 });
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
  updateCartIcon();
}

// 🧁 Add custom Tiramisu
function addCustomTiramisu() {
  const basePrice = 220;
  const flavor = document.getElementById("tiramisu-flavor").value;
  const extra = flavorPrices[flavor] || 0;
  const finalPrice = basePrice + extra;
  addToCart(`Tiramisu Jar (${flavor})`, finalPrice);
}

// 🔍 Dessert Search Filter
function filterDesserts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}


// 🛒 Update cart icon with total quantity
function updateCartIcon() {
  const cartCount = document.getElementById("cart-count");
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalQty;
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

// 🛍️ Click icon = go to cart
document.getElementById("cart-icon").addEventListener("click", () => {
  window.location.href = "cart.html";
});

// 🧠 Load on page
document.addEventListener("DOMContentLoaded", () => {
  updateCartIcon();
});

// 🗑️ Remove & update quantity on cart page
if (window.location.pathname.includes("cart.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total");
    const placeOrderButton = document.getElementById("place-order");

    function renderCart() {
      cartList.innerHTML = "";
      let total = 0;

      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${item.item} - ₹${item.price * item.quantity}
          <div style="margin-top: 8px;">
            <button onclick="decreaseQuantity(${index})">−</button>
            <span style="margin: 0 10px;">${item.quantity}</span>
            <button onclick="increaseQuantity(${index})">+</button>
          </div>
        `;
        cartList.appendChild(li);
        total += item.price * item.quantity;
      });

      totalSpan.textContent = total;
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }

    window.increaseQuantity = (index) => {
      cart[index].quantity += 1;
      renderCart();
    };

    window.decreaseQuantity = (index) => {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      renderCart();
    };

    placeOrderButton.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      alert("Thank you for your order!");
      localStorage.removeItem("cartItems");
      window.location.href = "index.html";
    });

    renderCart();
  });
}
