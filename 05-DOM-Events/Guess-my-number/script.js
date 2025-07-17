'use strict';

const body = document.querySelector('body');
const message = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const checkBtn = document.querySelector('.btn.check');
const restartBtn = document.querySelector('.btn.again');
const highScoreEl = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const restartGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreEl.textContent = score;
  guessEl.value = '';
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
};

const checkNumber = () => {
  let guess = +guessEl.value;

  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    body.style.backgroundColor = '#60b347';
    numberEl.textContent = secretNumber;
    numberEl.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  }
};

checkBtn.addEventListener('click', checkNumber);
restartBtn.addEventListener('click', restartGame);
