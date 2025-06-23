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
        { name: "Black", code: "#222" },    
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
        { name: "Black", code: "#222" },    
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





