class Clock {
  constructor(hands) {
    this.hands = hands;
    this.currentMinutes = 0;
    this.currentSeconds = 0;
    this.currentHours = 0;
    this.setCurrentTime();
    this.setTransitions();
  }

  setCurrentTime() {
    const date = new Date();
    const [
      seconds,
      minutes,
      hours,
    ] = [date.getSeconds(), date.getMinutes(), date.getHours()];

    if (seconds !== this.currentSeconds) {
      const secondsPosition = Math.floor(seconds / 60 * 360);
      this.currentSeconds = seconds;
      this.hands.seconds.style.transform = `rotate(${secondsPosition}deg)`;
    }

    if (minutes !== this.currentMinutes) {
      const minutesPosition = Math.floor(minutes / 60 * 360);
      this.currentMinutes = minutes;
      this.hands.minutes.style.transform = `rotate(${minutesPosition}deg)`;
    }

    if (hours !== this.currentHours) {
      const hoursPosition = Math.floor(hours / 12 * 360);
      this.currentHours = hours;
      this.hands.hours.style.transform = `rotate(${hoursPosition}deg)`;
    }
  }

  setTransitions() {
    this.hands.minutes.style.transition = '60s linear';
    this.hands.hours.style.transition = '3600s linear';
  }
}

const clock = new Clock({
  seconds: document.getElementById('seconds-hand'),
  minutes: document.getElementById('minutes-hand'),
  hours: document.getElementById('hours-hand'),
});

let animationId;
let timeElapsed;
const tick = (currentTime = 0) => {
  if(timeElapsed === undefined) timeElapsed = currentTime;
  if (currentTime - timeElapsed > 1000) {
    timeElapsed = currentTime;
    clock.setCurrentTime();
  }
  animationId = requestAnimationFrame(tick);
};

tick();