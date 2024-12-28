// Initialize cart variable and retrieve it from local storage
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to local storage
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ADD A PRODUCT TO THE CART function (need productId)
export function addToCart(productId) {

  // Convert productId into a number (base 10), instead of a string
  productId = parseInt(productId, 10); 

  // Finds item in the cart with the same productId
  const matchingItem = cart.find(item => item.productId === productId);

  // If it is found, then add 1 to the quantity
  if (matchingItem) {
    matchingItem.quantity += 1;

  // If it is not found, add the new item into the cart, with a quantity of 1
  } else 
  {
    cart.push({ productId, quantity: 1 });
  }
  // Save this information to local storage
  saveToStorage();
}

// UPDATE CART QUANTITY DISPLAY function 
export function updateCartQuantity() {

  // Iterates through the cart array and sums up all the quantities of the items (starts with initial value of 0)
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Select the HTML with the class 'cart-quantity' and stores in variable cartQuantityElement
  const cartQuantityElement = document.querySelector('.cart-quantity');

  // If the cartQuantityElement exists, it updates the content with the total cartQuantity
  if (cartQuantityElement) {
    cartQuantityElement.textContent = cartQuantity;
  }
}

// Remove a product from the cart (needs productId)
export function removeFromCart(productId) {

  // Convert productId into a number (base 10), instead of a string
  productId = parseInt(productId, 10);

  // Filters the cart array to only contain the items that do not include the productId (the one to be deleted)
  cart = cart.filter(item => item.productId !== productId);

  // Save results to local storage 
  saveToStorage();
}


// RENDER THE CART (need products)
export function renderCart(products) {

  // Select the checkout-container in HTML and store in checkoutContainer
  const checkoutContainer = document.querySelector('.checkout-container');
  const orderSummaryContainer = document.querySelector('.order-summary');
  
  // If the checkoutContainer does not exist...
  if (!checkoutContainer) {
    // then display error 
    console.error('Checkout container not found!');
    return;
  }

  // It exists, so clear the checkout container (so it is rendered fresh)
  checkoutContainer.innerHTML = ''; 

  // If the cart is empty, display a message instead of rendering products
  if (cart.length === 0) {
    checkoutContainer.innerHTML = '<p>Your cart is empty. Start adding products!</p>';
    if (orderSummaryContainer) {
      orderSummaryContainer.innerHTML = ''; // Hide the order summary if the cart is empty
    }
    return; // Exit the function early, no need to render products or totals
  }

  // Initialize variables for calculating totals
  let subtotal = 0;
  let shipping = 5.99; // Set a flat shipping rate (you can change this or calculate dynamically)
  let taxRate = 0.08; // Tax rate of 8% (you can change this based on location)
  
  // Iterate through the cart (initialize each item as cartItem)
  cart.forEach(cartItem => {

    // Finds the corresponding product in the products array using the productId from the cart
    const product = products.find(p => p.id === cartItem.productId);

    // If a matching product is found, it appends the product details to the checkoutContainer
    if (product) {

      // Calculate subtotal for each item (price * quantity)
      const itemTotal = (product.price / 100) * cartItem.quantity;
      subtotal += itemTotal;

      // Render the product details to the checkout container
      checkoutContainer.innerHTML += `
        <div class="checkout-item">
          <div class="checkout-left">
            <h3>${product.name}</h3>
            <div class="card-details">
              <div class="card-left">
                <img src="${product.image}" alt="${product.name}" class="product-detail-image">
              </div>
              <div class="card-right">
                <p>Quantity: ${cartItem.quantity}</p>
                <p>Total: $${itemTotal.toFixed(2)}</p>
                <button class="delete-link" data-product-id="${product.id}">Delete</button>
              </div>
            </div>
          </div>
        </div>
      `;
    } else 
    {
      // If no matching product is found, log a warning
      console.warn(`Product with ID ${cartItem.productId} not found in products.json.`);
    }
  });

  // Calculate tax and total
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shipping;

  // Render the order summary details
  if (orderSummaryContainer) {
    orderSummaryContainer.innerHTML = `
      <div class="checkout-right">
        <h3>Order Summary</h3>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Shipping: $${shipping.toFixed(2)}</p>
        <p>Tax: $${tax.toFixed(2)}</p>
        <p><strong>Total: $${total.toFixed(2)}</strong></p>
      </div>
    `;
  } else 
  {
    // If the order-summary section is not found, log an error
    console.error('Order summary container not found!');
  }
}