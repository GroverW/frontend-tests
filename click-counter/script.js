const clicksContainer = document.getElementById('click-count');
const incrementButton = document.getElementById('increment-clicks');

let currentClicks = 0;

const handleClick = () => {
  currentClicks += 1;
  clicksContainer.textContent = currentClicks;
};

incrementButton.addEventListener('click', handleClick);