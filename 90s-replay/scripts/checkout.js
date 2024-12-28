import { removeFromCart, renderCart, updateCartQuantity } from '../data/cart.js';

// Fetch product information from products.json file (promise-based API - either fetches or fails)
fetch('./data/products.json')

  // Converts the response from fetch into JSON format
  .then(response => response.json())

  // The 'products' array will hold the information retrieved from products.json
  .then(products => {

    // Render Cart (function) of products
    renderCart(products);

    // Event delegation for delete-link buttons
    document.addEventListener('click', (event) => {

      // If the clicked button has the class = 'delete-link' ... 
      if (event.target.classList.contains('delete-link')) {

        // then productId will equal the productId dataset of the button clicked
        const productId = event.target.dataset.productId;

        // then run remove from cart (function) with the productId
        removeFromCart(productId);

        // then run the render cart (function) with the products array 
        renderCart(products);
      }
    });

    // Update Cart Quantity
    updateCartQuantity();
  })

  // Logs an error if products.json cannot be fetched
  .catch(error => console.error('Error fetching products.json:', error));





