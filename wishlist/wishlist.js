const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
const products = productsInformations; // productsInformations should be loaded globally

const container = document.getElementById('wishlist-products');
container.innerHTML = '';

if (wishlist.length === 0) {
  container.innerHTML = '<p>Your wishlist is empty.</p>';
} else {
  wishlist.forEach(productId => {
    const product = products[productId];
    if (product) {
      const div = document.createElement('div');
      div.className = 'wishlist-product-card';
      div.innerHTML = `
        <button class="wishlist-card-btn active wishlist-card-btn" data-product="${productId}" aria-label="Remove from wishlist">
          <span class="material-icons">favorite</span>
        </button>
        <img src="${product.images[0]}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button class="remove-wishlist-btn" data-product="${productId}">Remove</button>
        <button class="add-to-cart-btn" data-product="${productId}">Add to Cart</button>

      `;
      container.appendChild(div);
    }
  });
}

// Remove from wishlist

container.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-wishlist-btn') || e.target.closest('.wishlist-btn')) {
    const btn = e.target.closest('[data-product]');
    const productId = btn.getAttribute('data-product');
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    // Remove the card from DOM
    btn.closest('.wishlist-product-card').remove();
    // Optionally show a toast
    // showWishlistToast('Product removed from wish list');
  }
});


// this code is for cart

// Show toast message
function showCartToast(message) {
  const toast = document.getElementById('cart-toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

// Update cart badge number
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-badge').textContent = cart.length;
}

// Add to cart logic
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const productId = this.getAttribute('data-product');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(productId)) {
      cart.push(productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      showCartToast('Product added to cart!');
      updateCartBadge();
    } else {
      showCartToast('Product is already in the cart!');
    }
  });
});

// Call this once on page load to set the badge
updateCartBadge();