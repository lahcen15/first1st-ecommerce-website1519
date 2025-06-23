// this code is for removing focus style after clicking the categories buttons

document.querySelectorAll('.categories').forEach(link => {
  link.addEventListener('click', function() {
    this.blur(); // removes focus style after click
  });
});



const params = new URLSearchParams(window.location.search);
const query = params.get('q') ? params.get('q').toLowerCase() : '';

const resultsContainer = document.getElementById('search-results');
let found = false;

for (const key in productsInformations) {
  const product = productsInformations[key];
  const tags = (product.tags || []).map(tag => tag.toLowerCase());
  const name = product.name.toLowerCase();
  if (
    tags.some(tag => tag.includes(query)) ||
    name.includes(query)
  ) {
    found = true;
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.price}</p>
      <button class="view-btn" data-product="${key}">View</button>
    `;
    resultsContainer.appendChild(div);
  }
}

if (!found) {
  resultsContainer.innerHTML = `
    <div class="no-results">
      <span>😕</span>
      <p class="no-results-text">No products found for "<b>${query}</b>".</p>
      <p class="no-results-text">Try searching with different keywords or tags.</p>
    </div>
  `;
}

// Handle View button clicks
resultsContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('view-btn')) {
    const productId = e.target.getAttribute('data-product');
    localStorage.setItem('selectedProduct', productId);

    // Check if the product is a shoe (by category or any unique property)
    const product = productsInformations[productId];
    if (product && product.category === "shoes") {
      window.location.href = '../categories-page/shoes-page.html';
    } else {
      window.location.href = '../products-page/product-page.html';
    }
  }
});







// Add click event to toggle the search form

document.querySelector('.search-toggle').addEventListener('click', function() {
    document.querySelector('.search-form').classList.toggle('active');
    document.querySelector('.search-input').focus();
});




// code for cart

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = totalQty;
}

// Call once on page load
updateCartBadge();

// Sync badge if cart changes in another tab
window.addEventListener('storage', function(event) {
  if (event.key === 'cart') {
    updateCartBadge();
  }
});