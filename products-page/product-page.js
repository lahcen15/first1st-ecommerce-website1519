// this code is for removing focus style after clicking the categories buttons

document.querySelectorAll('.categories').forEach(link => {
  link.addEventListener('click', function() {
    this.blur(); // removes focus style after click
  });
});



// Add click event to toggle the search form

document.querySelector('.search-toggle').addEventListener('click', function() {
    document.querySelector('.search-form').classList.toggle('active');
    document.querySelector('.search-input').focus();
});



// productsInformations variable here is the container of the product data , it contains product informations like name, image, price, and description.

const productsInformations = {
    "tshirt-oversize": {
    name: "T-shirt Oversize",
    images: [
      "../home-page/images/t-shirt-oversize.png",
      "../home-page/images/white-tshirt.jpg",
            "../home-page/images/black-tshirt-weared.jpg",
      "../home-page/images/white-tshirt-weared.jpg"
    ],
    price: "$18",
    description: "A comfortable oversized t-shirt, perfect for casual wear.",
    colors: [
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
    ], 
    tags: ["shirt", "tshirt", "t-shirt", "T-shirt", "Unisex", "summer", "tshirt", "unisex"],
    category: "tshirt",
    printStyle: "plain",
    age: "Adults"
  },
    "black-cap": {
        name: "Black Cap",
        images: [
             "../home-page/images/black-cap.png",
             "../home-page/images/black-cap-weared.jpg",
            ] ,
        price: "$20",
        description: "Classic black cap, adjustable and stylish.",
        colors: [
        { name: "Black", code: "#222" },
    ], 
    category: "cap",
    printStyle: "plain",
    age: "Adults"
    },

    "sweatshirt": {
        name: "Sweatshirt for Men",
        images: [
             "../home-page/images/black-sweatshirt.png",             
             "../home-page/images/white-sweatshirt.jpg",
             "../home-page/images/black-sweatshirt-weared.jpg",
             "../home-page/images/white-sweatshirt-weared.jpg"
            ] ,
        price: "$28",
        description: "Warm and cozy sweatshirt, ideal for chilly days.",
        colors: [
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
    ], 
    category: "sweatshirt",
    printStyle: "plain",
    age: "Adults"
    },

    "unisex-sweatshirt": {
        name: "Unisex Sweatshirt",
        images: [
             "../home-page/images/white-sweatshirt-unisex.jpg",             
             "../home-page/images/blue-sweatshirt-unisex.jpg",
             "../home-page/images/yellow-sweatshirt-unisex.jpg",
            ] ,
        price: "$30",
        description: "Warm and cozy sweatshirt, suitable for both genders.",
        colors: [
        { name: "White", code: "#BAB8BB" },
        { name: "Blue", code: "#1573C3" },
        { name: "Yellow", code: "#ECA427" },

    ], 
    category: "sweatshirt",
    printStyle: "plain",
    age: "Adults"
    },


    "black-hoodie": {
        name: "Hoodie for Men",
        images: [
             "../home-page/images/black-hoodie.png",
             "../home-page/images/white-hoodie.jpg",
             "../home-page/images/black-hoodie-weared.jpg",
             "../home-page/images/white-hoodie-weared.jpg"
            ] ,
        price: "$35",
        description: "Stylish hoodie for Men with a comfortable fit, perfect for layering.",
        colors: [
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
    ],  
    category: "hoodie",
    printStyle: "plain",
    age: "Adults"
    },

    "tshirt-unisex": {
        name: "T-shirt Unisex",
        images: [
             "../home-page/images/blue-tshirt-unisex.png",
             "../home-page/images/black-tshirt-unisex.png",
             "../home-page/images/white-tshirt-unisex.png",
             "../home-page/images/mocha-tshirt-unisex.png",
            ] ,
        price: "$20",
        description: "A versatile unisex t-shirt, suitable for all occasions.",
        colors: [
        { name: "Blue", code: "#0F2378" },
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
        { name: "Mocha", code: "#bca18d" }
    ],  
    category: "tshirt",
    printStyle: "plain",
    age: "Adults"
    },

    "gaming-tshirt-1": {
        name: "Gaming T-shirt",
        images: [
             "../home-page/images/gaming-tshirt-1.jpg",
            ] ,
        price: "$25",
        description: "A stylish t-shirt for gamers, featuring a unique design.",
        colors: [
        { name: "Black", code: "#222" },
    ],  
    category: "tshirt",
    printStyle: "printed",
    age: "Adults"
    },

    "assassin-tshirt": {
        name: "Assassin's T-shirt",
        images: [
             "../home-page/images/assassin-tshirt.jpg",
            ] ,
        price: "$25",
        description: "A sleek t-shirt inspired by the Assassin's Creed series.",
        colors: [
        { name: "Black", code: "#222" },
    ],  
    category: "tshirt",
    printStyle: "printed",
    age: "Adults"
    },

    "bleach-tshirt": {
        name: "Bleach T-shirt",
        images: [
             "../home-page/images/bleach-tshirt.jpg",
             "../home-page/images/bleach-tshirt-white.jpg",
            ] ,
        price: "$25",
        description: "A stylish t-shirt inspired by the Bleach anime series.",
        colors: [
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
    ],  
    category: "tshirt",
    printStyle: "printed",
    age: "Adults"
    },

    "spiderman-tshirt": {
        name: "Spiderman T-shirt",
        images: [
             "../home-page/images/spiderman-tshirt.png",
             "../home-page/images/spiderman-tshirt-white.png",
             "../home-page/images/spiderman-tshirt-red.jpg",
            ] ,
        price: "$25",
        description: "A vibrant t-shirt featuring the iconic Spiderman design.",
        colors: [
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
        { name: "Red", code: "#f00" },
    ],  
    category: "tshirt",
    printStyle: "printed",
    age: "Adults"
    },

    "pubg-tshirt": {
        name: "Pubg T-shirt",
        images: [
             "../home-page/images/pubg-tshirt.png",
             "../home-page/images/pubg-tshirt-white.png",
            ] ,
        price: "$25",
        description: "A cool t-shirt for PUBG fans, featuring a bold design.",
        colors: [
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
    ],  
    category: "tshirt",
    printStyle: "printed",
    age: "Adults"
    },

    "call-of-duty-tshirt": {
        name: "Call of duty T-shirt",
        images: [
             "../home-page/images/call-of-duty-tshirt.jpg",
             "../home-page/images/call-of-duty-tshirt-white.jpg",
             "../home-page/images/call-of-duty-tshirt-blue.jpg",
            ] ,
        price: "$25",
        description: "Call of duty T-shirt for Men.",
        colors: [
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
        { name: "Blue", code: "#1E3545" },
    ],  
    category: "tshirt",
    printStyle: "printed",
    age: "Adults"
    },

    "minions-tshirt-kids": {
        name: "Minions T-shirt for Kids",
        images: [
             "../home-page/images/minions-tshirt-kids.jpg"
            ] ,
        price: "$13.5",
        description: "A fun t-shirt for kids featuring the lovable Minions.",
        colors: [
        { name: "Yellow", code: "#ffeb3b" },
    ],  
    category: "tshirt",
    printStyle: "printed",
    age: "Children"
    },

    "tshirts-for-kids": {
        name: "T-shirts for Kids",
        images: [
             "../home-page/images/white-tshirt-kids.jpg",
             "../home-page/images/green-tshirt-kids.png",
             "../home-page/images/purple-tshirt-kids.jpg",
             "../home-page/images/pink-tshirt-kids.jpg",
            ] ,
        price: "$10",
        description: "comforting T-shirts for Kids",
        colors: [
        { name: "White", code: "#fff" },
        { name: "Green", code: "#90ee90"},
        { name: "Navy", code: "#1d2951"},
        { name: "pink", code: "#de6fa1"},
    ],  
    category: "tshirt",
    printStyle: "plain",
    age: "Children",
    },

    "spiderman-tshirt-for-kids": {
        name: "Spidey T-shirt for Kids",
        images: [
             "../home-page/images/spiderman-tshirt-for-kids.jpg",
            ] ,
        price: "$13.5",
        description: "A stylish t-shirt for kids featuring the spiderman design",
        colors: [
        { name: "Blue", code: "#0EBEE8" },
    ],  
    category: "tshirt",
    printStyle: "printed",
    age: "Children"
    },

    "sweatshirt-for-kids": {
        name: "Sweatshirt for Kids",
        images: [
             "../home-page/images/sweatshirt-for-kids.jpg",
             "../home-page/images/white-sweatshirt-for-kids.png",
            ] ,
        price: "$18.5",
        description: "A comforting sweatshirt for Kids",
        colors: [
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },

    ],  
    category: "sweatshirt",
    printStyle: "plain",
    age: "Children"
    },

    "unisex-hoodie": {
        name: "Unisex Hoodie",
        images: [
             "../home-page/images/green-hoodie-unisex.jpg",
             "../home-page/images/black-hoodie-unisex.png",
             "../home-page/images/white-hoodie-unisex.png",
             "../home-page/images/blue-hoodie-unisex.png",
            ] ,
        price: "$37.5",
        description: "A comforting hoodies with multiple colors to choose from , suitable for both genders",
        colors: [
        { name: "Green", code: "#41C3BB" },
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
        { name: "Blue", code: "#8EC5D9" },
    ],  
    category: "hoodie",
    printStyle: "plain",
    age: "Adults"
    },

    "hoodie-for-kids": {
        name: "Hoodie for Kids",
        images: [
             "../home-page/images/Blue-hoodie-for-kids.png",
             "../home-page/images/black-hoodie-for-kids.png",
             "../home-page/images/white-hoodie-for-kids.png",
             "../home-page/images/Green-hoodie-for-kids.png",
            ] ,
        price: "$22.5",
        description: "A comforting hoodies for Kids" ,
        colors: [
        { name: "blue", code: "#8EC5D9" },
        { name: "Black", code: "#222" },
        { name: "White", code: "#fff" },
        { name: "Green", code: "#4D6E41" },
    ],  
    category: "hoodie",
    printStyle: "plain",
    age: "Children"
    },

    "white-cap": {
        name: "White Cap",
        images: [
             "../home-page/images/white-cap.jpg",
             "../home-page/images/White-cap-weared.jpg",
            ] ,
        price: "$20",
        description: "Classic white cap, adjustable and stylish.",
        colors: [
        { name: "White", code: "#fff" },
    ],  
    category: "cap",
    printStyle: "plain",
    age: "Adults"
    },

    "nike-cap": {
        name: "Nike Cap Unisex",
        images: [
             "../home-page/images/white-nike-cap.png",
             "../home-page/images/nike-cap.png",
            ] ,
        price: "$25",
        description: "Nike Cap , suitable for both genders ",
        colors: [
        { name: "White", code: "#fff" },
        { name: "Black", code: "#222" },          
    ],  
    category: "cap",
    printStyle: "plain",
    age: "Adults"
    },

    "new-balance-cap": {
        name: "New Balance Cap Unisex",
        images: [
             "../home-page/images/black-new-balance-cap.png",
             "../home-page/images/white-new-balance-cap.png",
            ] ,
        price: "$25",
        description: "New Balance Cap , suitable for both genders ",
        colors: [
        { name: "Black", code: "#222" },  
        { name: "White", code: "#fff" },        
    ],  
    category: "cap",
    printStyle: "plain",
    age: "Adults"
    },

    "nice-cap-for-kids": {
        name: "Nice Cap for Kids",
        images: [
             "../home-page/images/nice-cap-for-kids.png",
            ] ,
        price: "$10",
        description: "Nice and comforting cap for Kids , with a smile on it :) ",
        colors: [
        { name: "Mixed colors", code: "#8EC5D9" },    
    ],  
    category: "cap",
    printStyle: "printed",
    age: "Children"
    },

    "nike-air-force-one": {
        name: "Nike air force 1",
        images: [
             "../home-page/images/Nike-air-force-one-1.png",
             "../home-page/images/Nike-air-force-one-2.png",
             "../home-page/images/Nike-air-force-one-3.png",
             "../home-page/images/Nike-air-force-one-4.png",
            ] ,
        price: "$60",
        description: "Nike air force 1, with a good price .",
        colors: [
        { name: "White", code: "#fff" },    
    ],  
    category: "shoes" ,
    age: "Adults"
    },

    "new-balance-550-unisex": {
        name: "New Balance 550 Unisex",
        images: [
             "../home-page/images/new-balance-550-unisex-1.png",
             "../home-page/images/new-balance-550-unisex-2.png",
             "../home-page/images/new-balance-550-unisex-3.png",
             "../home-page/images/new-balance-550-unisex-4.png",
            ] ,
        price: "$110",
        description: "New Balance 550 , a comforting sneakers suitable for both genders .",
        colors: [
        { name: "White", code: "#fff" },    
    ],  
    category: "shoes" ,
    age: "Adults"
    },

    "nike-dunk-for-kids": {
        name: "Nike dunk for Kids",
        images: [
             "../home-page/images/nike-dunk-for-kids-1.jpg",
             "../home-page/images/nike-dunk-for-kids-2.jpg",
            ] ,
        price: "$35",
        description: "Nike dunk for Kids , with a modern design .",
        colors: [
        { name: "Mixed colors", code: "#fff" },    
    ],  
    category: "shoes",
    age: "Children"
    },

    "nike-dunk-pink-for-women": {
    name: "Nike dunk pink for Women",
    images: [
            "../home-page/images/nike-dunk-pink-for-women-1.jpg",
            "../home-page/images/nike-dunk-pink-for-women-2.jpg",
            "../home-page/images/nike-dunk-pink-for-women-3.jpg",
            "../home-page/images/nike-dunk-pink-for-women-4.jpg",
        ] ,
    price: "$80",
    description: "Nike dunk pink for Women .",
    colors: [
    { name: "pink", code: "#FFC0CB" },    
    ],  
    category: "shoes" ,
    age: "Adults",
    },

        "nike-dunk-black&white": {
    name: "Nike dunk Black & White",
    images: [
            "../home-page/images/nike-dunk-black&white-1.png",
            "../home-page/images/nike-dunk-black&white-2.png",
            "../home-page/images/nike-dunk-black&white-3.png",
            "../home-page/images/nike-dunk-black&white-4.png",
        ] ,
    price: "$90",
    description: "Nike dunk black&white .",
    colors: [
    { name: "black", code: "#222" },    
    ],  
    category: "shoes",
    age: "Adults"
    },
    
    
    // Add more products as needed
};

const productId = localStorage.getItem('selectedProduct'); // Get the ID saved in the home-page.js file when we clicked on the view product button
const productSelected = productsInformations[productId]; // Get the product info 
// شغل برودكت ايدي راهو يساوي الاسم تاع المنتج لي ضغطناه بحيث رانا دايرين اسم
// لفوق في الاوبجكت هذاك , يعني شغل كتبنا في بلاصته اسم المنتج لي هو اصلا اوبجيكت وحداخر فيه بروبيرتيز
// which means that the productId is the key and also will have the value of data-product attribute from the button we clicked on in the home-page.js file. and that itself is the name of the product we clicked on, which is used as the key (not name because there is a name property and it's different) in the productsInformations object.
// so now , product variable will contain all of the information of te selected product.

//if (product) checks if the product exists in the productsInformations object, if it does, we will display its information in the product details section. if not , it will display "Product not found." message.

if (productSelected) {
  // Main image
  document.getElementById('product-main-img').src = productSelected.images[0];
  document.getElementById('product-main-img').alt = productSelected.name;

  // Dynamically render thumbnails
  const thumbnailsContainer = document.querySelector('.thumbnails');
  thumbnailsContainer.innerHTML = ''; // Clear previous thumbnails
  productSelected.images.forEach((imgSrc, i) => {
    const thumb = document.createElement('img');
    thumb.className = 'thumbnail';
    thumb.src = imgSrc;
    thumb.alt = productSelected.name + ' thumbnail ' + (i + 1);
    if (i === 0) thumb.classList.add('active');
    thumb.onclick = () => {
      document.getElementById('product-main-img').src = imgSrc;
      thumbnailsContainer.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      // Optionally, also activate the corresponding color swatch
      if (productSelected.colors && productSelected.colors[i]) {
        colorSelector.querySelectorAll('.color-swatch').forEach((b, j) => {
          b.classList.toggle('active', j === i);
        });
      }
    };
    thumbnailsContainer.appendChild(thumb);
  });

  // Dynamically render color swatches
  const colorSelector = document.querySelector('.color-selector');
  if (colorSelector && productSelected.colors) {
    colorSelector.innerHTML = '<span>Color :</span>';
    productSelected.colors.forEach((color, i) => {
      const btn = document.createElement('button');
      btn.className = 'color-swatch';
      btn.title = color.name;
      btn.style.background = color.code;
      btn.setAttribute('data-color', color.name);
      if (i === 0) btn.classList.add('active');
      btn.onclick = function() {
        colorSelector.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Change main image and activate corresponding thumbnail
        document.getElementById('product-main-img').src = productSelected.images[i];
        thumbnailsContainer.querySelectorAll('.thumbnail').forEach((t, j) => {
          t.classList.toggle('active', j === i);
        });
      };
      colorSelector.appendChild(btn);
    });
  }

  // Other info
  document.getElementById('product-name').textContent = productSelected.name;
  document.getElementById('product-price').textContent = productSelected.price;
  document.getElementById('product-description').textContent = productSelected.description;
}

// Size selector functionality
// Add click event to size buttons

document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// Quantity selector functionality

// Get the quantity input element and the increase/decrease buttons
const qtyInput = document.getElementById('quantity-selector');
document.getElementById('increase-qty').onclick = () => {
  qtyInput.value = parseInt(qtyInput.value) + 1;
};
document.getElementById('decrease-qty').onclick = () => {
  if (parseInt(qtyInput.value) > 1) {
    qtyInput.value = parseInt(qtyInput.value) - 1;
  }
};

// Blur effect on quantity buttons after click, make the design go after click
document.querySelectorAll('.qty-btn').forEach(btn => {
  btn.addEventListener('mouseup', function() {
    this.blur();
  });
  btn.addEventListener('mouseleave', function() {
    this.blur();
  });
});









// making the related products section

// this code checks the category of the product page to see which products we should put in the related products section , and it's structured depending on the type of product , which mean that this code is repeated many times

if(productSelected.category === 'tshirt' && productSelected.printStyle === 'plain') {
console.log('yes')
document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/t-shirt-oversize.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">T-shirt Oversize</p>
            <p class="related-product-price">1500 DA</p>
            <button class="related-view-product-btn" data-product="tshirt-oversize">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/blue-tshirt-unisex.png" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">T-shirt Unisex</p>
            <p class="related-product-price">1800 DA</p>
            <button class="related-view-product-btn" data-product="tshirt-unisex">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/call-of-duty-tshirt.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-3">Call of duty T-shirt</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="call-of-duty-tshirt">View</button>
        </div>
        <div class="related-product-card related-product-card-4">
            <img src="../home-page/images/bleach-tshirt.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-4">Bleach T-shirt</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="bleach-tshirt">View</button>
        </div>
`

// this code deletes the related product that is same as the page product

  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-4').textContent ) {
    document.querySelector('.related-product-card-4').remove() }
}



if(productSelected.category === 'tshirt' && productSelected.printStyle === 'printed') {
console.log('yes')
document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/assassin-tshirt.jpg" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">Assassin's T-shirt</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="assassin-tshirt">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/spiderman-tshirt.png" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">Spiderman T-shirt</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="spiderman-tshirt">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/call-of-duty-tshirt.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-3">Call of duty T-shirt</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="call-of-duty-tshirt">View</button>
        </div>
        <div class="related-product-card related-product-card-4">
            <img src="../home-page/images/bleach-tshirt.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-4">Bleach T-shirt</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="bleach-tshirt">View</button>
        </div>
`
  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }
  if(productSelected.name === document.querySelector('.related-product-name-4').textContent ) {
  document.querySelector('.related-product-card-4').remove() }
}

if(productSelected.category === 'tshirt' && productSelected.age === 'Children') {
  console.log('yes')
document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/minions-tshirt-kids.jpg" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">Minions T-shirt for Kids</p>
            <p class="related-product-price">1200 DA</p>
            <button class="related-view-product-btn" data-product="minions-tshirt-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/white-tshirt-kids.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">T-shirts for Kids</p>
            <p class="related-product-price">1000 DA</p>
            <button class="related-view-product-btn" data-product="tshirts-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/spiderman-tshirt-for-kids.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-3">Spidey T-shirt for Kids</p>
            <p class="related-product-price">1200 DA</p>
            <button class="related-view-product-btn" data-product="spiderman-tshirt-for-kids">View</button>
        </div>
`


// this code deletes the related product that is same as the page product

  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }

}



if(productSelected.category === 'sweatshirt' && productSelected.printStyle === 'plain') {
console.log('yes')
document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/black-sweatshirt.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">Sweatshirt for Men</p>
            <p class="related-product-price">1500 DA</p>
            <button class="related-view-product-btn" data-product="sweatshirt">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/white-sweatshirt-unisex.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">Unisex Sweatshirt</p>
            <p class="related-product-price">1800 DA</p>
            <button class="related-view-product-btn" data-product="unisex-sweatshirt">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/black-hoodie.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-3">Hoodie for Men</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="black-hoodie">View</button>
        </div>
        <div class="related-product-card related-product-card-4">
            <img src="../home-page/images/green-hoodie-unisex.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-4">Unisex Hoodie</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="unisex-hoodie">View</button>
        </div>
` 

  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-4').textContent ) {
    document.querySelector('.related-product-card-4').remove() }

}

if(productSelected.age === 'Children' && productSelected.category === 'sweatshirt') {
    console.log('yes , its kids product')
    document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/Blue-hoodie-for-kids.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">Hoodie for Kids</p>
            <p class="related-product-price">1500 DA</p>
            <button class="related-view-product-btn" data-product="hoodie-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/nice-cap-for-kids.png" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">Nice Cap for Kids</p>
            <p class="related-product-price">1000 DA</p>
            <button class="related-view-product-btn" data-product="nice-cap-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/sweatshirt-for-kids.jpg" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-3">Sweatshirt for Kids</p>
            <p class="related-product-price">1200 DA</p>
            <button class="related-view-product-btn" data-product="sweatshirt-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-4">
            <img src="../home-page/images/nike-dunk-for-kids-1.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-4">Nike dunk for Kids</p>
            <p class="related-product-price">3000 DA</p>
            <button class="related-view-product-btn" data-product="nike-dunk-for-kids">View</button>
        </div>
`

// this code deletes the related product that is same as the page product

  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-4').textContent ) {
    document.querySelector('.related-product-card-4').remove() }
}



if(productSelected.category === 'hoodie' && productSelected.printStyle === 'plain') {
console.log('yes')
document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/black-sweatshirt.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">Sweatshirt for Men</p>
            <p class="related-product-price">1500 DA</p>
            <button class="related-view-product-btn" data-product="sweatshirt">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/white-sweatshirt-unisex.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">Unisex Sweatshirt</p>
            <p class="related-product-price">1800 DA</p>
            <button class="related-view-product-btn" data-product="unisex-sweatshirt">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/black-hoodie.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-3">Hoodie for Men</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="black-hoodie">View</button>
        </div>
        <div class="related-product-card related-product-card-4">
            <img src="../home-page/images/green-hoodie-unisex.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-4">Unisex Hoodie</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="unisex-hoodie">View</button>
        </div>
` 

  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-4').textContent ) {
    document.querySelector('.related-product-card-4').remove() }

}

if(productSelected.age === 'Children' && productSelected.category === 'hoodie') {
    console.log('yes , its kids product')
    document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/Blue-hoodie-for-kids.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">Hoodie for Kids</p>
            <p class="related-product-price">1500 DA</p>
            <button class="related-view-product-btn" data-product="hoodie-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/nice-cap-for-kids.png" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">Nice Cap for Kids</p>
            <p class="related-product-price">1000 DA</p>
            <button class="related-view-product-btn" data-product="nice-cap-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/sweatshirt-for-kids.jpg" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-3">Sweatshirt for Kids</p>
            <p class="related-product-price">1200 DA</p>
            <button class="related-view-product-btn" data-product="sweatshirt-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-4">
            <img src="../home-page/images/nike-dunk-for-kids-1.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-4">Nike dunk for Kids</p>
            <p class="related-product-price">3000 DA</p>
            <button class="related-view-product-btn" data-product="nike-dunk-for-kids">View</button>
        </div>
`

// this code deletes the related product that is same as the page product

  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-4').textContent ) {
    document.querySelector('.related-product-card-4').remove() }
}


if(productSelected.age === 'Adults' && productSelected.category === 'cap') {
    console.log('yes , its adults product')
    document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/white-cap.jpg" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">White Cap</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="white-cap">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/black-cap.png" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">Black Cap</p>
            <p class="related-product-price">2000 DA</p>
            <button class="related-view-product-btn" data-product="black-cap">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/white-nike-cap.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-3">Nike Cap Unisex</p>
            <p class="related-product-price">2500 DA</p>
            <button class="related-view-product-btn" data-product="nike-cap">View</button>
        </div>
        <div class="related-product-card related-product-card-4">
            <img src="../home-page/images/black-new-balance-cap.png" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-4">New Balance Cap Unisex</p>
            <p class="related-product-price">2500 DA</p>
            <button class="related-view-product-btn" data-product="new-balance-cap">View</button>
        </div>
`

// this code deletes the related product that is same as the page product

  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-4').textContent ) {
    document.querySelector('.related-product-card-4').remove() }
}


if(productSelected.age === 'Children' && productSelected.category === 'cap') {
    console.log('yes , its kids product')
    document.querySelector('.related-product-list-js').innerHTML = `
        <div class="related-product-card related-product-card-1">
            <img src="../home-page/images/Blue-hoodie-for-kids.png" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-1">Hoodie for Kids</p>
            <p class="related-product-price">1500 DA</p>
            <button class="related-view-product-btn" data-product="hoodie-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-2">
            <img src="../home-page/images/nike-dunk-for-kids-1.jpg" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-2">Nike dunk for Kids</p>
            <p class="related-product-price">3000 DA</p>
            <button class="related-view-product-btn" data-product="nike-dunk-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-3">
            <img src="../home-page/images/nice-cap-for-kids.png" alt="New Product 2" class="related-product-img">
            <p class="related-product-name related-product-name-3">Nice Cap for Kids</p>
            <p class="related-product-price">1000 DA</p>
            <button class="related-view-product-btn" data-product="nice-cap-for-kids">View</button>
        </div>
        <div class="related-product-card related-product-card-4">
            <img src="../home-page/images/minions-tshirt-kids.jpg" alt="New Product 1" class="related-product-img">
            <p class="related-product-name related-product-name-4">Minions T-shirt for Kids</p>
            <p class="related-product-price">1200 DA</p>
            <button class="related-view-product-btn" data-product="minions-tshirt-kids">View</button>
        </div>
`

// this code deletes the related product that is same as the page product

  if(productSelected.name === document.querySelector('.related-product-name-1').textContent ) {
    document.querySelector('.related-product-card-1').remove() }


  if(productSelected.name === document.querySelector('.related-product-name-2').textContent) {
    document.querySelector('.related-product-card-2').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-3').textContent ) {
    document.querySelector('.related-product-card-3').remove() }

  if(productSelected.name === document.querySelector('.related-product-name-4').textContent ) {
    document.querySelector('.related-product-card-4').remove() }
}



// this code deletes the size selector from the caps category

if(productSelected.category === 'cap') {
    console.log('yes') ;
    document.querySelector('.size-selector-js').remove()

}


// afte clicking on the view product button, it will redirect to the product page and save the product id in local storage 
document.querySelectorAll('.related-view-product-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
        //"this" refers to the button that was clicked, we use this in regular functions, not in arrow functions. and functions that are used as event handlers . so "this" is automatically set to the element that triggered the event (which is the button in this case).
        const productId = this.getAttribute('data-product');
        localStorage.setItem('selectedProduct', productId);
        //we don't use import and export here, because they're used between js files in the same page , but here we are redirecting to another page,and localstorage is used to pass data between pages.
        window.open('../products-page/product-page.html'); // Adjust path if needed
        // Using window.open instead of window.location.href to open the product page in a new tab
    });
});




// --- Wishlist Button Logic for Product Page ---

// 1. Set your product's unique ID here:

// 2. Get DOM elements
const wishlistBtn = document.getElementById('product-wishlist-btn');
const wishlistIcon = document.getElementById('wishlist-icon');

// 3. Toast function (reuse if you already have one)
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

// 4. Initialize button state
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
function updateWishlistBtn() {
  if (wishlist.includes(productId)) {
    wishlistBtn.classList.add('active');
    wishlistIcon.textContent = 'favorite';
  } else {
    wishlistBtn.classList.remove('active');
    wishlistIcon.textContent = 'favorite_border';
  }
}
updateWishlistBtn();

// 5. Button click handler
wishlistBtn.addEventListener('click', function() {
  wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    showWishlistToast('Product removed from wish list');
  } else {
    wishlist.push(productId);
    showWishlistToast('Product added to wish list');
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistBtn();
});

// Sync the wishlist button if wishlist changes in another tab/page
window.addEventListener('storage', function(event) {
  if (event.key === 'wishlist') {
    // Always re-read the wishlist from localStorage
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    updateWishlistBtn();
  }
});




// generating the add to cart code with js because for the productId

document.querySelector('.add-to-cart').innerHTML = `
    <button class="add-to-cart-btn" id="add-to-cart-btn" data-product="${productId}">Add to Cart</button>
`

// code for cart

// --- Cart Badge Sync ---
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = totalQty;
}
updateCartBadge();
updateCartPriceText(); // Update price text when the page loads


window.addEventListener('storage', function(event) {
  if (event.key === 'cart') {
    updateCartBadge();
    updateCartPriceText(); // Update price text when cart changes in another tab/page
  }
});

// --- Add to Cart Logic ---
const addToCartBtn = document.getElementById('add-to-cart-btn');
if (addToCartBtn) {
  const productId = addToCartBtn.getAttribute('data-product');
  addToCartBtn.addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const qtyInput = document.getElementById('quantity-selector');
    let selectedQty = 1;
    if (qtyInput && !isNaN(parseInt(qtyInput.value))) {
      selectedQty = Math.max(1, parseInt(qtyInput.value));
    }

    // Get selected color
    let selectedColor = '';
    const activeColorBtn = document.querySelector('.color-swatch.active');
    if (activeColorBtn) {
      selectedColor = activeColorBtn.getAttribute('data-color');
    }

    // Get selected size
    let selectedSize = '';
    const activeSizeBtn = document.querySelector('.size-btn.active');
    if (activeSizeBtn) {
      selectedSize = activeSizeBtn.textContent.trim();
    } else {
  const firstSizeBtn = document.querySelector('.size-btn');
  if (firstSizeBtn) {
    selectedSize = firstSizeBtn.textContent.trim();
  }}

    const found = cart.find(item => item.id === productId);
    if (found) {
      showCartToast('Product is already in the cart!');
    } else {
      cart.push({
        id: productId,
        qty: selectedQty,
        color: selectedColor,
        size: selectedSize,
        category: productSelected.category,
        price: (typeof productSelected.price === "string")
          ? parseFloat(productSelected.price.replace(/[^0-9.]/g, ""))
          : productSelected.price
      });
      showCartToast('Product added to cart!');
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    updateCartPriceText(); // <-- Add this line to update the price instantly
  });
}
// Sync cart badge if cart changes in another tab/page
window.addEventListener('storage', function(event) {
  if (event.key === 'cart') {
    updateCartBadge();
    updateCartPriceText();
  }
});

// --- Toast Message ---
function showCartToast(message) {
  let toast = document.getElementById('cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.className = 'cart-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}







function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
    const badge = document.getElementById('cart-badge');
    if (badge) badge.textContent = totalQty;

    // Calculate total price directly from cart
    let totalPrice = 0;
    cart.forEach(item => {
        let price = item.price;
        if (typeof price === "string") {
            price = parseFloat(price.replace(/[^0-9.]/g, ""));
        }
        totalPrice += (price || 0) * (item.qty || 0);
    });
    const priceSpan = document.getElementById('cart-total-price');
    if (priceSpan) priceSpan.textContent = `$${totalPrice.toFixed(2)}`;
}
// Call once on page load
updateCartBadge();
// Update cart badge and price text when the page loads
updateCartPriceText();



function updateCartPriceText() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;
    cart.forEach(item => {
        let price = item.price;
        // If price is missing, try to get it from productsInformations
        if ((price === undefined || price === null) && typeof productsInformations === "object") {
            const product = productsInformations[item.id];
            if (product && product.price) {
                price = product.price;
            }
        }
        if (typeof price === "string") {
            price = parseFloat(price.replace(/[^0-9.]/g, ""));
        }
        totalPrice += (price || 0) * (item.qty || 0);
    });
    const priceSpan = document.getElementById('cart-total-price');
    if (priceSpan) priceSpan.textContent = `$${totalPrice.toFixed(2)}`;
}

// Sync badge if cart changes in another tab
window.addEventListener('storage', function(event) {
  if (event.key === 'cart') {
updateCartBadge();
updateCartPriceText();  }
});

updateCartBadge();
updateCartPriceText();