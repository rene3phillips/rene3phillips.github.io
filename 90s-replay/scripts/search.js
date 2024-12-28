// Get the search input and results container
const searchInput = document.querySelector('#search-input');
const resultsContainer = document.querySelector('.results-container');

// Function to perform the search
function searchProducts(query) {

  // Fetch product data from the JSON file
  fetch('./data/products.json')
    .then(response => response.json())
    .then(products => {

      // Filter products based on the search query (case insensitive)
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase())) // Search by keywords
      );

      // Display the filtered results
      displaySearchResults(filteredProducts);
    })
    .catch(error => console.error('Error fetching products:', error));
}

// Function to display the search results
function displaySearchResults(results) {
  // Clear previous results
  resultsContainer.innerHTML = '';

  // Check if there are any results
  if (results.length > 0) {
    results.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      // Create the link for the product title
      const productLink = document.createElement('a');
      productLink.href = `product-details.html?productId=${product.id}`; // Link to the product details page
      productLink.innerHTML = `<h2>${product.name}</h2>`; // Product name as a clickable link

      // Add description and price below the title
      productElement.appendChild(productLink);  // Add the link to the product element
      
      // Append the product element to the results container
      resultsContainer.appendChild(productElement);
    });
  } else 
  {
    // Display a message if no products match the search query
    resultsContainer.innerHTML = '<p>No products found.</p>';
  }
}

// Event listener for the search input
searchInput.addEventListener('input', (e) => {
  const query = e.target.value;  // Get the search query
  if (query.length >= 3) {  // Start searching after 3 characters
    searchProducts(query);
  } else 
  {
    resultsContainer.innerHTML = ''; // Clear results if the input is less than 3 characters
  }
});
