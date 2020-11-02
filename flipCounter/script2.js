function count(digitPrefix) {
  document.querySelector('.container').classList.remove('play');
  let activeDigit = document.querySelector(`ul.${digitPrefix} li.active`);

  // If no digit is active
  if (!activeDigit) {
    // Activate the first digit for this counter
    activeDigit = document.querySelector(`ul.${digitPrefix} li`);
    activeDigit.classList.add('before');
    activeDigit.classList.remove('active');
    const sibling = activeDigit.nextElementSibling;
    sibling.classList.add('active');
    const container = sibling.closest('.container');
    container.classList.add('play');

    // If the last digit is active
  } else if (!activeDigit.nextElementSibling) {
    document.querySelector(`ul.${digitPrefix} li.before`).classList.remove('before');
    activeDigit.classList.add('before');
    activeDigit.classList.remove('active');
    activeDigit = document.querySelector(`ul.${digitPrefix} li`);
    activeDigit.classList.add('active');
    const container = activeDigit.closest('.container');
    container.classList.add('play');

    // Otherwise, proceed to the next digit
  } else {
    document.querySelector(`ul.${digitPrefix} li.before`).classList.remove('before');
    activeDigit.classList.add('before');
    activeDigit.classList.remove('active');
    const sibling = activeDigit.nextElementSibling;
    sibling.classList.add('active');
    const container = sibling.closest('.container');
    container.classList.add('play');
  }
}

setInterval(function () {
  count('ones');
}, 1000);


setInterval(function () {
  count('tens');
}, 10000);
