// Ham Menu Effect 

// Select the hamburger menu button and off-screen menu
const hamMenu = document.querySelector('.ham-menu');  // Hamburger menu button
const offScreenMenu = document.querySelector('.off-screen-menu');  // Off-screen menu (hidden by default)

// Menu on Load
// Ensure the menu is closed by removing the 'active' class when the page loads
hamMenu.classList.remove('active');  // Remove the 'active' class from the hamburger menu
offScreenMenu.classList.remove('active');  // Remove the 'active' class from the off-screen menu

// Menu on Click
// When the hamburger menu is clicked, toggle the 'active' class to open/close the menu
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');  // Toggle the 'active' class for the hamburger button
  offScreenMenu.classList.toggle('active');  // Toggle the 'active' class for the off-screen menu
});

// Menu on Scroll
// When the user scrolls, add or remove the 'scrolled' class based on the scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    hamMenu.classList.add('scrolled');  // Add the 'scrolled' class if the user has scrolled down 50px
  }
  else {
    hamMenu.classList.remove('scrolled');  // Remove the 'scrolled' class if the user is near the top
  }
});
