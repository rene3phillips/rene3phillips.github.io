import { addToCart, updateCartQuantity } from '../data/cart.js';

// Extract productId from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId'); // Get the 'productId' from the URL

// Fetch product data from the JSON file or a data source
fetch('./data/products.json')
  .then(response => response.json())
  .then(products => {
    // Find the product by id
    const product = products.find(p => p.id === parseInt(productId));

    if (product) {
      // Render the product details in the DOM
      document.querySelector('#product-details-container').innerHTML = `
        <div class="product-left">
          <h1>${product.name}</h1>
          <p>${product.description}</p>
          <p><strong>Price:</strong> $${(product.price / 100).toFixed(2)}</p>
          <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
        </div>
        <div class="product-right">
          <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        </div>
      `;

      // Add event listener for the 'Add to Cart' button
      const addButton = document.querySelector('.add-to-cart-button');
      addButton.addEventListener('click', () => {
        // Add the product to the cart
        addToCart(product.id);
        // Update the cart quantity (e.g., in the header or cart icon)
        updateCartQuantity();
      });
    } else {
      document.querySelector('#product-details-container').innerHTML = `
        <p>Product not found.</p>
      `;
    }

    // Update the cart quantity when the page loads
    updateCartQuantity();  // This will display the current cart quantity
  })
  .catch(error => console.error('Error fetching product data:', error));


