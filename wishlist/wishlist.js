// this code is for removing focus style after clicking the categories buttons

document.querySelectorAll('.categories').forEach(link => {
  link.addEventListener('click', function() {
    this.blur(); // removes focus style after click
  });
});


let cart = JSON.parse(localStorage.getItem('cart')) || [];
if (cart.length && typeof cart[0] === "string") {
  cart = cart.map(id => ({id, qty: 1}));
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderWishlist () {
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
 if (
    e.target.classList.contains('remove-wishlist-btn') ||
    e.target.closest('.wishlist-card-btn')
  ) {
    const btn = e.target.closest('[data-product]');
    const productId = btn.getAttribute('data-product');
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    showWishlistToast('Product removed from wish list');
    renderWishlist(); // <-- This updates the page and all buttons
    return;
    updateWishlistButtons()
    // Optionally show a toast
    // showWishlistToast('Product removed from wish list');
    
    function showWishlistToast(message) {
  let toast = document.getElementById('wishlist-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'wishlist-toast';
    toast.className = 'wishlist-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

      showWishlistToast('Product removed from wish list');

    
  
  }
});

}

renderWishlist()

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
  // Sum all quantities in the cart
  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  document.getElementById('cart-badge').textContent = totalQty;
}

// Add to cart logic


const container = document.getElementById('wishlist-products');

container.addEventListener('click', function(e) {
  // Add to cart
  if (e.target.classList.contains('add-to-cart-btn')) {
    const productId = e.target.getAttribute('data-product');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cart.find(item => item.id === productId);
    if (found) {
      showCartToast('Product is already in the cart!');
    } else {
      cart.push({id: productId, qty: 1});
      showCartToast('Product added to cart!');
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    return;
  }
});;

// Call this once on page load to set the badge
updateCartBadge();


// sync the cart page , to show products without refresh
window.addEventListener('storage', function(event) {
  if (event.key === 'cart') {
    updateCartBadge();
    // If this is the cart page, also re-render the cart products here
    // Example: renderCart();
  }
});



window.addEventListener('storage', function(event) {
  if (event.key === 'wishlist') {
    renderWishlist();
  }
});



renderWishlist()