import {products} from '../data/products.js';



        // Get the product ID from the URL
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id'); // Get the product ID from the URL
// Function to render product details
function renderProductDetail() {
    const product = products.find(p => p.id === productId); // Find product by ID

    if (product) {
        const container = document.getElementById('product-detail-container');
        container.innerHTML = ''; // Clear container to avoid duplicates

        // LEFT CONTAINER
        // Create left container for the image
        const containerLeft = document.createElement('div');
        containerLeft.className = 'product-left';
                // Create and add product image element
                const img = document.createElement('img');
                img.src = product.image;
                img.className = 'product-image';
                containerLeft.appendChild(img); // Append image to the left container

        // RIGHT CONTAINER
        // Create right container for the details
        const containerRight = document.createElement('div');
        containerRight.className = 'product-right';
                // Create and add PRODUCT NAME element in the right container
                const name = document.createElement('div');
                name.className = 'product-name';
                name.textContent = product.name;
                // PRODUCT PRICE
                const price = document.createElement('div');
                price.className = 'product-price';
                price.textContent = `$${(product.price / 100).toFixed(2)}`; // Format the price
                // TEXT - QUANTITY
                const quantityText = document.createElement('div');
                quantityText.className = 'quantity-text';
                quantityText.textContent = "Quantity";
                // ADD TO CART BUTTON
                const addToCartButton = document.createElement('button');
                addToCartButton.className = "add-to-cart-button";
                addToCartButton.textContent = "Add to cart";
                // QUANTITY BUTTON (DIV)
                const quantityButton = document.createElement('div');
                quantityButton.className = 'quantity-button';
                            // Create decrement button
                            const decrementButton = document.createElement('button');
                            decrementButton.textContent = '-';
                            decrementButton.className = 'decrement-button';
                            decrementButton.onclick = decrement;
                            // Create input field
                            const quantityInput = document.createElement('input');
                            quantityInput.type = 'number';
                            quantityInput.id = 'quantity';
                            quantityInput.value = 1;
                            quantityInput.min = 1;
                            quantityInput.readOnly = true; // Make it read-only
                            quantityInput.className = 'input-button';
                            // Create increment button
                            const incrementButton = document.createElement('button');
                            incrementButton.textContent = '+';
                            incrementButton.className = 'increment-button';
                            incrementButton.onclick = increment;

        // DESCRIPTION
        const description = document.createElement('div');
        description.className = 'product-description';
        description.textContent = product.description;

        // Append name, price, and description to the right container
        containerRight.appendChild(name);
        containerRight.appendChild(price);
        containerRight.appendChild(quantityText);
        containerRight.appendChild(quantityButton);
        containerRight.appendChild(addToCartButton);
        containerRight.appendChild(description);

        // Append decrement, input, and increment to quantity container
        quantityButton.appendChild(decrementButton);
        quantityButton.appendChild(quantityInput);
        quantityButton.appendChild(incrementButton);

        // Append left and right containers to main container
        container.appendChild(containerLeft);
        container.appendChild(containerRight);
    } else {
        // Handle case where product is not found
        const container = document.getElementById('product-detail-container');
        container.textContent = "Product not found.";
    }
}

// Increment and decrement functions for quantity
function increment() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrement() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}


        // Call the render function
        renderProductDetail();