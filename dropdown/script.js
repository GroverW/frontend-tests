const dropDown = document.querySelector('.dropdown');

const handleClick = function(evt) {
  evt.preventDefault();
  this.classList.toggle('dropdown-show');
}

dropDown.addEventListener('click', handleClick);