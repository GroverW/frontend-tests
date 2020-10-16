const slider = document.getElementById('slider');
const container = document.getElementById('color-selector')

let isMouseDown = false;
let startX;
let sliderX;
let sliderBounds;
let containerBounds;

const toggleMouseDown = () => {
  isMouseDown = true;
  startX = window.event.pageX;
  sliderBounds = slider.getBoundingClientRect();
  containerBounds = container.getBoundingClientRect();
  sliderX = sliderBounds.left - containerBounds.left;
  slider.style.left = `${sliderX}px`;
};

const toggleMouseUp = () => isMouseDown = false;

const handleMouseMove = () => {
  if (isMouseDown) {
    const movement = window.event.pageX - startX;
    const max = container.offsetWidth - slider.offsetWidth;
    const sliderPosition = Math.max(0, Math.min(sliderX + movement, max));
    slider.style.left = `${sliderPosition}px`;
    const [r, g, b] = getBackgroundColor(sliderPosition, max);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

const starts = [
  [255, 0, 0],
  [255, 255, 0],
  [0, 255, 0],
  [0, 255, 255],
  [0, 0, 255],
  [255, 0, 255],
];

const diffs = [
  [0,1,0],
  [-1,0,0],
  [0,0,1],
  [0,-1,0],
  [1,0,0],
  [0,0,-1],
]

const getBackgroundColor = (position, max) => {
  const step = Math.floor(1536 / max);
  const sectionSize = max / 6;
  const currentSection = Math.min(5, Math.floor(position / sectionSize));
  const [rStart, gStart, bStart] = starts[currentSection];
  const [rDiff, gDiff, bDiff] = diffs[currentSection];
  const numSteps = (position - (currentSection * sectionSize)) * step;
  return [
    Math.min(255, rStart + rDiff * numSteps),
    Math.min(255, gStart + gDiff * numSteps),
    Math.min(255, bStart + bDiff * numSteps),
  ];
}

slider.addEventListener('mousedown', toggleMouseDown);
window.addEventListener('mouseup', toggleMouseUp);
window.addEventListener('mousemove', handleMouseMove);

