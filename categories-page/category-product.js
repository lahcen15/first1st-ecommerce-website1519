
// Add click event to toggle the search form

document.querySelector('.search-toggle').addEventListener('click', function() {
    document.querySelector('.search-form').classList.toggle('active');
    document.querySelector('.search-input').focus();
});

// afte clicking on the view product button, it will redirect to the product page and save the product id in local storage 
document.querySelectorAll('.view-product-btn-categories').forEach((btn) => {
    btn.addEventListener('click', function() {
        //"this" refers to the button that was clicked, we use this in regular functions, not in arrow functions. and functions that are used as event handlers . so "this" is automatically set to the element that triggered the event (which is the button in this case).
        const productId = this.getAttribute('data-product');
        localStorage.setItem('selectedProduct', productId);
        //we don't use import and export here, because they're used between js files in the same page , but here we are redirecting to another page,and localstorage is used to pass data between pages.
        window.open('../products-page/product-page.html'); // Adjust path if needed
          // Using window.open instead of window.location.href to open the product page in a new tab
    });
});

// afte clicking on the view product button, it will redirect to the product page and save the product id in local storage 
document.querySelectorAll('.view-product-btn-categories-shoes').forEach((btn) => {
    btn.addEventListener('click', function() {
        //"this" refers to the button that was clicked, we use this in regular functions, not in arrow functions. and functions that are used as event handlers . so "this" is automatically set to the element that triggered the event (which is the button in this case).
        const productId = this.getAttribute('data-product');
        localStorage.setItem('selectedProduct', productId);
        //we don't use import and export here, because they're used between js files in the same page , but here we are redirecting to another page,and localstorage is used to pass data between pages.
        window.open('../categories-page/shoes-page.html'); // Adjust path if needed
          // Using window.open instead of window.location.href to open the product page in a new tab
    });
});


// making the code that makes the select filters buttons interactive

document.addEventListener('DOMContentLoaded', function() {
  const filters = {
    age: document.getElementById('filter-age'),
    color: document.getElementById('filter-color'),
    sex: document.getElementById('filter-sex'),
    print: document.getElementById('filter-print'),
    sort: document.getElementById('filter-sort')
  };

  const productCards = Array.from(document.querySelectorAll('.product-card-categories'));

  function filterProducts() {
    productCards.forEach(card => {
      let show = true;

      // Age group
      if (filters.age.value && card.dataset.age !== filters.age.value) show = false;
      // Color
      if (filters.color.value && card.dataset.color !== filters.color.value) show = false;
      // Sex
      if (filters.sex.value && card.dataset.sex !== filters.sex.value) show = false;
      // Print style
      if (filters.print.value && card.dataset.print !== filters.print.value) show = false;

      card.style.display = show ? '' : 'none';
    });

    // Sorting
    if (filters.sort.value !== 'default') {
      let sorted = [...productCards].filter(card => card.style.display !== 'none');
      sorted.sort((a, b) => {
        let priceA = parseInt(a.dataset.price, 10);
        let priceB = parseInt(b.dataset.price, 10);
        return filters.sort.value === 'price-low' ? priceA - priceB : priceB - priceA;
      });
      const grid = document.querySelector('.products-grid-categories');
      sorted.forEach(card => grid.appendChild(card));
    }
  }

  Object.values(filters).forEach(select => {
    if (select) select.addEventListener('change', filterProducts);
  });
});


// the previous code works fine , but this one was suggested by Copilot on the last time you fixed the problem on the code which wasn't on js but in html in values of selectors which was discovered by copilot on the same time so tha what was meant , so .... use this code for any future uses






// this code is for wishlist

// Get wishlist from localStorage or start with empty array
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Toggle wishlist on button click
document.querySelectorAll('.wishlist-card-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const productId = this.getAttribute('data-product');

  });

  // Set active state if already in wishlist
  const productId = btn.getAttribute('data-product');
  if (wishlist.includes(productId)) {
    btn.classList.add('active');
  }
});


// showing a message when clicking the wishlist button

function showWishlistToast(message) {
  const toast = document.getElementById('wishlist-toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

document.querySelectorAll('.wishlist-card-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const productId = this.getAttribute('data-product');
    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
      this.classList.remove('active');
      showWishlistToast('Product removed from wish list');
    } else {
      wishlist.push(productId);
      this.classList.add('active');
      showWishlistToast('Product added to wish list');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  });

  // Set active state if already in wishlist
  const productId = btn.getAttribute('data-product');
  if (wishlist.includes(productId)) {
    btn.classList.add('active');
  }
});
