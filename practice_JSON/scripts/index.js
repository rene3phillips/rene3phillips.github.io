// Fetch the JSON file and render products
fetch('data/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(products => {
    const container = document.getElementById('product-container');

    // Function to render products (index page)
    function renderProducts() {
      container.innerHTML = ''; // Clear container to avoid duplicates

      // Iterate through products and create HTML elements
      products.forEach(product => {
        const productLink = document.createElement('a');
        productLink.href = `product-detail.html?id=${product.id}`; // Link to product detail page

        // Create product element
        const productElement = document.createElement('div');
        productElement.className = 'product'; // Add a class for styling (e.g. product card)

        // Product image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-image';
        productElement.appendChild(img);

        // Product name
        const name = document.createElement('div');
        name.className = 'product-name';
        name.textContent = product.name;
        productElement.appendChild(name);

        // Product price
        const price = document.createElement('div');
        price.className = 'product-price';
        price.textContent = `$${(product.price / 100).toFixed(2)}`; // Format the price
        productElement.appendChild(price);

        // Append the product element to the link
        productLink.appendChild(productElement);

        // Append the link to the main container
        container.appendChild(productLink);
      });
    }

    // Call the render function to display products
    renderProducts();
  })
  .catch(error => {
    console.error('Error fetching the product data:', error);
    const container = document.getElementById('product-container');
    container.textContent = "There was an error loading the product data.";
  });
