// Fetch the JSON file and render product details
fetch('data/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(products => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id'); // Get the product ID from the URL

    if (!productId) {
      document.getElementById('product-detail-container').textContent = "Product ID is missing in the URL.";
      return;
    }

    console.log("Product ID from URL:", productId); // Log the product ID for debugging

    // Find the product by ID
    const product = products.find(p => String(p.id) === String(productId));

    if (product) {
      const container = document.getElementById('product-detail-container');
      container.innerHTML = ''; // Clear container to avoid duplicates

      // Create product left (image) section
      const productLeft = document.createElement('div');
      productLeft.className = 'product-left';
      
      const img = document.createElement('img');
      img.src = product.image;
      img.className = 'product-image'; // Assuming you want this class for styling
      productLeft.appendChild(img);

      // Create product right (details) section
      const productRight = document.createElement('div');
      productRight.className = 'product-right';

      // Product Name
      const name = document.createElement('h2');
      name.className = 'product-name';
      name.textContent = product.name;
      productRight.appendChild(name);

      // Product Price
      const price = document.createElement('div');
      price.className = 'product-price';
      price.textContent = `$${(product.price / 100).toFixed(2)}`; // Assuming price is stored in cents
      productRight.appendChild(price);

      // Product Description
      const description = document.createElement('p');
      description.className = 'product-description';
      description.textContent = product.description;
      productRight.appendChild(description);

      // Quantity Section (optional)
      const quantitySection = document.createElement('div');
      quantitySection.className = 'quantity-button';

      // Decrement Button
      const decrementButton = document.createElement('button');
      decrementButton.className = 'decrement-button';
      decrementButton.textContent = '-';
      decrementButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
          quantityInput.value = currentQuantity - 1;
        }
      });

      // Quantity Input
      const quantityInput = document.createElement('input');
      quantityInput.className = 'input-button';
      quantityInput.value = '1';
      quantityInput.type = 'number'; // Make it a number input

      // Increment Button
      const incrementButton = document.createElement('button');
      incrementButton.className = 'increment-button';
      incrementButton.textContent = '+';
      incrementButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
      });

      quantitySection.appendChild(decrementButton);
      quantitySection.appendChild(quantityInput);
      quantitySection.appendChild(incrementButton);
      productRight.appendChild(quantitySection);

      // Add to Cart Button
      const addToCartButton = document.createElement('button');
      addToCartButton.className = 'add-to-cart-button';
      addToCartButton.textContent = 'Add to Cart';
      productRight.appendChild(addToCartButton);

      // Append product sections to container
      container.appendChild(productLeft);
      container.appendChild(productRight);

    } else {
      document.getElementById('product-detail-container').textContent = "Product not found.";
    }
  })
  .catch(error => {
    console.error('Error fetching product details:', error);
    document.getElementById('product-detail-container').textContent = "There was an error loading the product details.";
  });
