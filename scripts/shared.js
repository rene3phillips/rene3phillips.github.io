// Ham Menu Effect 
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

// Menu on Load
if (sessionStorage.getItem('menuOpen') === 'true') {
  hamMenu.classList.add('active');
  offScreenMenu.classList.add('active');
}

// Menu on Click
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');

  sessionStorage.setItem('menuOpen', hamMenu.classList.contains('active'));
});

// Menu on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    hamMenu.classList.add('scrolled');
  }
  else {
    hamMenu.classList.remove('scrolled');
  }
});

// Clear menu state when navigating to a new page
window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('menuOpen');  // Clear menu state
});