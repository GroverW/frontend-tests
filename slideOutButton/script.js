const buttons = document.querySelectorAll('.slide-out');

const slideOutTime = 0.3;
const slideOut = (evt) => {
  const button = evt.target;
  const parent = button.parentNode;
  const [axis, direction, distance] = getClosestEdge(button, parent);
  animateSlideOut(button, axis, direction, distance);
};

const animateSlideOut = (node, axis, direction, distance) => {
  let animationId;
  let currentDistance = 0;
  const step = Math.max(1, Math.floor(distance / (slideOutTime * 60)));
  const animate = () => {
    if(currentDistance >= distance) {
      cancelAnimationFrame(animationId);
      return;
    }
    currentDistance += step;
    node.style.transform = `translate${axis}(${direction * currentDistance}px)`;
    animationId = requestAnimationFrame(animate);
  }

  animate();
}

const getClosestEdge = (node, parent) => {
  const parentBounds = parent.getBoundingClientRect()
  const nodeBounds = node.getBoundingClientRect()
  const [topDist, rightDist, botDist, leftDist] = [
    Math.abs(parentBounds.top - nodeBounds.bottom),
    Math.abs(parentBounds.right - nodeBounds.left),
    Math.abs(parentBounds.bottom - nodeBounds.top),
    Math.abs(parentBounds.left - nodeBounds.right),
  ];
  let axis = 'Y';
  let closestDist = topDist;
  let direction = -1;
  if(rightDist < closestDist) {
    axis = 'X';
    closestDist = rightDist;
    direction = 1;
  }
  if(botDist < closestDist) {
    axis = 'Y';
    closestDist = botDist;
    direction = 1;
  }
  if(leftDist < closestDist) {
    axis = 'X';
    closestDist = leftDist;
    direction = -1;
  }

  return [axis, direction, closestDist];
}

buttons.forEach((button) => button.addEventListener('click', slideOut));