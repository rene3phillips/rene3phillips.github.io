import { addToCart, updateCartQuantity } from '../data/cart.js';

// Fetch product information from products.json file (promise-based API)
fetch('./data/products.json')
  .then(response => response.json())
  .then(products => {
    // Initialize 'productsHTML' as an empty string
    let productsHTML = '';

    // Iterate over the products array to display each product
    products.forEach(product => {
      // Add HTML for each product, with a link to the product details page
      productsHTML += `
        <section class="products" id="product-container">
          <a href="product-details.html?productId=${product.id}" class="product-link">
            <div class="product-image-container">
              <img class="product-image" src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${(product.price / 100).toFixed(2)}</div>
          </a>
          <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
        </section>
      `;
    });

    // Insert HTML into the DOM by selecting the 'products' class (located in index.html)
    document.querySelector('.products').innerHTML = productsHTML;

    // Initial update for cart quantity display
    updateCartQuantity();

    // Event delegation for add-to-cart buttons
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart-button')) {
        addToCart(event.target.dataset.productId);
        updateCartQuantity();
      }
    });
  })
  .catch(error => console.error('Error fetching products.json:', error));

// Event listener for the search functionality on the home page
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

function handleSearch() {
  const query = searchInput.value.trim(); // Get the search query
  if (query) {
    // Redirect to the search results page with the query as a URL parameter
    window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
  }
}

// Event listener for the search button
searchButton.addEventListener('click', handleSearch);

// Event listener for the Enter key
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

// Event listener to clear the cart on window unload (optional)
window.addEventListener('beforeunload', function() {
  // Clear cart when the window is closed (optional)
  // localStorage.removeItem('cart'); // Uncomment this line if you want to reset the cart
});




