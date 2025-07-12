'use strict';

/*
// Selecting and Manupulating Elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Handling Click Events

const secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secreteNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;

    // When guess is too high
  } else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(document.querySelector('.message').textContent = '🥲 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(document.querySelector('.message').textContent = '🥲 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
