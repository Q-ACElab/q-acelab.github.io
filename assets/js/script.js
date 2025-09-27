// Adjust body padding dynamically to match navbar height
function adjustBodyPadding() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const navHeight = navbar.offsetHeight;
    document.body.style.paddingTop = navHeight + 'px';
  }
}

// Run on page load
window.addEventListener('load', adjustBodyPadding);

// Run when window resizes (mobile ↔ desktop)
window.addEventListener('resize', adjustBodyPadding);
