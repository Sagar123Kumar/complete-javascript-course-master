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

/*
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secreteNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    
    // When guess is wrong
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secreteNumber ? '📈 Too high!' : '📉 Too low!';
      
      displayMessage(guess > secreteNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🥲 You lost the game!';
      displayMessage('🥲 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  // } else if (guess > secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥲 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥲 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
});

// Restoreing the intial properties.
document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.score').textContent = 20;
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;

  // Restoreing message
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // Restoreing number
  document.querySelector('.number').textContent = '?';
  // Restoreing score
  document.querySelector('.score').textContent = score;
  // Restoreing guess input fields
  document.querySelector('.guess').value = '';

  // restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/