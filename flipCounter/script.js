const tens = {
  main: document.querySelector('.tens-card'),
  front: document.querySelector('.tens-front'),
  back: document.querySelector('.tens-back'),
}

const ones = {
  main: document.querySelector('.ones-card'),
  front: document.querySelector('.ones-front'),
  back: document.querySelector('.ones-back'),
}

let onesVal = 0;
let onesNextRotation = -180;
let tensVal = 0;
let tensNextRotation = -180;

setInterval(() => {
  onesVal = (onesVal + 1) % 10;
  ones.back.textContent = onesVal;
  ones.main.style.transform =`rotateX(${onesNextRotation}deg)`;
  onesNextRotation -= 180;
  [ones.front, ones.back] = [ones.back, ones.front];
  if (onesVal === 0) {
    tensVal = (tensVal + 1) % 10;
    tens.back.textContent = tensVal;
    tens.main.style.transform = `rotateX(${tensNextRotation}deg)`;
    tensNextRotation -= 180;
    [tens.front, tens.back] = [tens.back, tens.front];
  }
}, 1000)