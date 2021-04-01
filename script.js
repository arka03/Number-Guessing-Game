'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
 */
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

let initialValues = {
  secretNumber: (Math.trunc(Math.random() * 20) + 1),
  score: 20,
  highscore: 0,
}
/**
 * 
 * @param {string} className 
 * @returns {Element}
 */
const selectClassName = (className) => {
  return document.querySelector(className);
};

const classSelectors = {
  check: selectClassName('.check'),
  message: selectClassName('.message'),
  guess: selectClassName('.guess'),
  number: selectClassName('.number'),
  body: selectClassName('body'),
  score: selectClassName('.score'),
  highscore: selectClassName('.highscore'),
  again: selectClassName('.again')

}

/**
 * @param {void}
 */

const checkCurrentSubmissionScore = () => {
  classSelectors.check.addEventListener('click', () => {
    const guess = Number(classSelectors.guess.value);
    if (!guess) {
      classSelectors.message.textContent = 'Enter a Value';
      classSelectors.guess.value = '';
    } else if (guess > 20) {
      classSelectors.message.textContent = 'Range Exceeded';
      classSelectors.guess.value = '';

      //for perfect match
    } else if (guess === initialValues.secretNumber) {
      classSelectors.number.textContent = initialValues.secretNumber;
      classSelectors.message.textContent = 'Perfect match';
      classSelectors.body.style.backgroundColor = 'green';
      classSelectors.number.style.width = '30rem';
      if (initialValues.highscore < initialValues.score) {
        initialValues = { ...initialValues, highscore: initialValues.score };
        classSelectors.highscore.textContent = initialValues.highscore;
      }
    }
    //for guess is too high
    else if (guess > initialValues.secretNumber) {
      if (initialValues.score > 0) {
        classSelectors.message.textContent = 'Too High';
        const decrementedScore = initialValues.score - 1;
        initialValues = { ...initialValues, score: decrementedScore }
        classSelectors.score.textContent = initialValues.score;
        classSelectors.guess.value = '';
      } else {
        classSelectors.message.textContent = 'You Lost';
        classSelectors.guess.value = '';
      }
    }
    //for guess is too low
    else if (guess < initialValues.secretNumber) {
      if (initialValues.score > 0) {
        classSelectors.message.textContent = 'Too Low';
        const decrementedScore = initialValues.score - 1;
        initialValues = { ...initialValues, score: decrementedScore }
        classSelectors.score.textContent = initialValues.score;
        classSelectors.score.value = '';
      } else {
        classSelectors.message.textContent = 'You Lost';
        classSelectors.guess.value = '';
      }
    }
  });
};


const restartGame = () => {
  classSelectors.again.addEventListener('click', () => {
    initialValues = { ...initialValues, secretNumber: Math.trunc(Math.random() * 20) + 1, score: 20 };
    classSelectors.number.textContent = '?';
    classSelectors.score.textContent = '20';
    classSelectors.message.textContent = 'Start guessing...';
    classSelectors.body.setAttribute('style', 'background-color: #FFFFF;');
    classSelectors.number.style.width = '15rem';
    classSelectors.guess.value = '';
  });
};



(() => {
  checkCurrentSubmissionScore();
  restartGame();
})();