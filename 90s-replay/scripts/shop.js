import {products} from '../data/products.js';

// Create a function to change price in cents to dollars
function formatPrice(priceInCents) {
    return `$${(priceInCents / 100).toFixed(2)}`; // Convert to dollars and format to 2 decimal places
}

// Create a function to render products, Get the product-container in shop.html
function renderProducts() {
    const container = document.getElementById('product-container');

    // Loop through the products array in products.js
    products.forEach(product => { // Create an element called product

        // Create a link for the product
        const productLink = document.createElement('a');
        productLink.href = `product-detail.html?id=${product.id}`;

        const productDiv = document.createElement('div'); // Create a new div...
        productDiv.className = 'product'; // ... with the class "product" (to link with CSS)

        // Create image element
        const img = document.createElement('img'); // Create a new img...
        img.src = product.image;
        img.className = 'product-image'; // ... with the class "product-image" (to link with CSS)

        // Create name element
        const name = document.createElement('div'); // ditto
        name.className = 'product-name';
        name.textContent = product.name;

        // Create price element
        const price = document.createElement('div'); // ditto
        price.className = 'product-price';
        price.textContent = formatPrice(product.price);

        // Append elements to product div
        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);

        // Append product div to the link
        productLink.appendChild(productDiv);

        // Append link to the container
        container.appendChild(productLink);
    });
}

// Call the render function
renderProducts();