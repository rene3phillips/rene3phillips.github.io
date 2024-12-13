// Parallax Effect //
let leftCloud = document.getElementById('left-cloud');
let rightCloud = document.getElementById('right-cloud');
let avatar = document.getElementById('avatar');
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  leftCloud.style.left = value * -1.5 + 'px';
  rightCloud.style.left = value * 1.5 + 'px';
  avatar.style.left = value * 1.5 + 'px';
  avatar.style.top = value * -1.5 + 'px';
  text.style.marginTop = value * 2.5 + 'px';
});