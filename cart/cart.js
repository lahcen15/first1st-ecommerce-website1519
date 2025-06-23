// this code is for removing focus style after clicking the categories buttons

document.querySelectorAll('.categories').forEach(link => {
  link.addEventListener('click', function() {
    this.blur(); // removes focus style after click
  });
});


// --- Cart Page Logic ---

// 1. Get cart and products
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const products = productsInformations; // Make sure this is loaded globally

// Convert old cart format (array of IDs) to new format (array of objects)
if (cart.length && typeof cart[0] === "string") {
  cart = cart.map(id => ({id, qty: 1}));
  localStorage.setItem('cart', JSON.stringify(cart));
}


const container = document.getElementById('cart-products');
const summary = document.getElementById('cart-summary');

// 2. Toast function
function showCartToast(message) {
  const toast = document.getElementById('cart-toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

// 3. Render cart items
function renderCart() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  container.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    summary.innerHTML = '';
    return;
  }

  cart.forEach(item => {
    if (!item || !item.id) return; // Defensive check
    const product = products[item.id];
    if (product) {
      const price = parseFloat(product.price.replace(/[^0-9.]/g, '')) * item.qty;
      total += price;
      const div = document.createElement('div');
      div.className = 'cart-product-card';
      div.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="price">${product.price}</p>
        <div class="cart-qty-controls">
          <button class="qty-btn decrease-qty" data-product="${item.id}">-</button>
          <span class="cart-qty" id="qty-${item.id}">${item.qty}</span>
          <button class="qty-btn increase-qty" data-product="${item.id}">+</button>
        </div>
        <button class="remove-cart-btn" data-product="${item.id}">Remove</button>
      `;
      container.appendChild(div);
    }
  });

  summary.innerHTML = `
    <h3><span class="total-text">Total :</span> $${total.toFixed(2)} </h3>
    <div class="delivery-info">
    <span class="material-icons delivery-truck" style="vertical-align: middle; color: #2196f3;">local_shipping</span>
    <span style="margin-left: 8px;" class="delivery-text">Delivery fees and options will be reviewed on the checkout page</span>
    </div>
    <button class="checkout-btn">Checkout</button>
  `;


// taking productss to checkout 

// After rendering the summary, attach event to the checkout button
summary.addEventListener('click', function(e) {
  if (e.target.classList.contains('checkout-btn')) {
    // Build a new array with full product info for checkout
    const checkoutCart = cart.map(item => {
      const product = products[item.id];
      return {
        id: item.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        qty: item.qty,
        color: item.color,
        size: item.size,
        category: item.category 
      };
    });
    localStorage.setItem('checkoutCart', JSON.stringify(checkoutCart));
    window.location.href = '../checkout/checkout.html';
  }
});


}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = totalQty;
}

// 4. Handle cart actions (quantity, remove)
container.addEventListener('click', function(e) {
  const productId = e.target.getAttribute('data-product');
  if (!productId) return;

  if (e.target.classList.contains('increase-qty')) {
    cart = cart.map(item =>
      item.id === productId ? {...item, qty: item.qty + 1} : item
    );
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
  }
  if (e.target.classList.contains('decrease-qty')) {
    cart = cart.map(item =>
      item.id === productId && item.qty > 1 ? {...item, qty: item.qty - 1} : item
    );
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
  }
  if (e.target.classList.contains('remove-cart-btn')) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCartToast('Product removed from cart');
    renderCart();
    updateCartBadge();

  }
});

// 5. Initial render
renderCart();


// sync the cart page , to show products without refresh
window.addEventListener('storage', function(event) {
  if (event.key === 'cart') {
    renderCart();
    updateCartBadge();
  }
})

    updateCartBadge();





