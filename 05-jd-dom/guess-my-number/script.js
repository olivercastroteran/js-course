'use strict';

const message = document.querySelector('.message');
const hiddenNumberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const guessNumber = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const playAgainBtn = document.querySelector('.again');

let score = 20;
let highScore = 0;
let hiddenNumber = Math.floor(Math.random() * 20) + 1;

const updateScore = () => {
  if (score > 0) {
    score--;
    scoreEl.textContent = score;
  }
};

const updateHighScore = () => {
  if (score > highScore) {
    highScoreEl.textContent = score;
    highScore = score;
  }
};

const checkGuess = () => {
  const guess = +guessNumber.value;

  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === hiddenNumber) {
    message.textContent = 'Correct Number! 🎉';
    hiddenNumberEl.textContent = guess;
    document.body.classList.add('win');
    checkBtn.style.display = 'none';
    updateHighScore();
  } else if (guess !== hiddenNumber) {
    if (score > 1) {
      message.textContent = guess > hiddenNumber ? 'Too High 📈' : 'Too low 📉';
      updateScore();
    } else {
      message.textContent = 'You lost 💩';
      updateScore();
    }
  }
};

const playAgain = () => {
  score = 20;
  scoreEl.textContent = 20;
  guessNumber.value = '';
  hiddenNumber = Math.floor(Math.random() * 20) + 1;
  hiddenNumberEl.textContent = '?';
  message.textContent = 'Start guessing...';
  document.body.classList.remove('win');
  checkBtn.style.display = 'block';
};

checkBtn.addEventListener('click', checkGuess);
playAgainBtn.addEventListener('click', playAgain);
