// click on the button to show/hide the sidebar
const sidebar = document.querySelector('.side-bar-js');
const toggleButton = document.querySelector('.bars-button-js');

// Add click event to toggle the sidebar
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Show/hide sidebar
});


// Add click event to toggle the search form

document.querySelector('.search-toggle').addEventListener('click', function() {
    document.querySelector('.search-form').classList.toggle('active');
    document.querySelector('.search-input').focus();
});

// this code closes the search form

document.querySelectorAll('.search-close-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('.search-form').classList.remove('active');
  });
});

// afte clicking on the view product button, it will redirect to the product page and save the product id in local storage 
document.querySelectorAll('.view-product-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
        //"this" refers to the button that was clicked, we use this in regular functions, not in arrow functions. and functions that are used as event handlers . so "this" is automatically set to the element that triggered the event (which is the button in this case).
        const productId = this.getAttribute('data-product');
        localStorage.setItem('selectedProduct', productId);
        //we don't use import and export here, because they're used between js files in the same page , but here we are redirecting to another page,and localstorage is used to pass data between pages.
        window.open('../products-page/product-page.html'); // Adjust path if needed
          // Using window.open instead of window.location.href to open the product page in a new tab
        
    });


});

document.querySelectorAll('.view-product-btn-shoe').forEach((btn) => {
    btn.addEventListener('click', function() {
        //"this" refers to the button that was clicked, we use this in regular functions, not in arrow functions. and functions that are used as event handlers . so "this" is automatically set to the element that triggered the event (which is the button in this case).
        const productId = this.getAttribute('data-product');
        localStorage.setItem('selectedProduct', productId);
        //we don't use import and export here, because they're used between js files in the same page , but here we are redirecting to another page,and localstorage is used to pass data between pages.
        window.open('../categories-page/shoes-page.html'); // Adjust path if needed
          // Using window.open instead of window.location.href to open the product page in a new tab
        
    });


});










// this code take you from your search bar to the search results html page 

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

if (searchForm && searchInput) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      // Go to the results page with the query in the URL
      window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
    }
  });
}



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



