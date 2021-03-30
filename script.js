'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
 */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //for no input value
  if (!guess) {
    displayMessage('Enter a Value');
    document.querySelector('.guess').value = '';
  } else if (guess > 20) {
    displayMessage('Range Exceeded');
    document.querySelector('.guess').value = '';

    //for perfect match
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Perfect match');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.guess').value = '';
    }
  }
});
/* 
  //for guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.guess').value = '';
    }
  }
  //for guess is too low
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.guess').value = '';
    }
  } */

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
