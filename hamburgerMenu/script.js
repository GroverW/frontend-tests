const mainContainer = document.querySelector('.main-container');
const hamburgerLink = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.side-nav');
const mobileOverlay = document.querySelector('.mobile-overlay');

const handleOpenMenu = function() {
  mobileOverlay.classList.add('show');
  setTimeout(() => {
    mobileMenu.classList.add('show');
    mainContainer.classList.add('push-right');
  }, 0);
};

const handleCloseMenu = function(evt) {
  if (evt.target !== this) return;

  setTimeout(() => {
    mobileOverlay.classList.remove('show');
  }, 500);
  mobileMenu.classList.remove('show');
  mainContainer.classList.remove('push-right');
}

hamburgerLink.addEventListener('click', handleOpenMenu);
mobileOverlay.addEventListener('click', handleCloseMenu);