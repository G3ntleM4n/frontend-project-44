import {
  randomNumber,
} from '../index.js';
import playGame from '../shared-games-logic-module.js';

export const isPrimeNumber = (questionNumber) => {
  if (questionNumber === 2) {
    return true;
  }
  if (questionNumber === 1) {
    return false;
  }

  const halfNumber = questionNumber / 2;
  for (let i = 2; i <= halfNumber; i += 1) {
    if (questionNumber % i === 0) {
      return false;
    }
  }
  return true;
};

export const brainPrimeLogic = () => {
  const question = randomNumber(1, 100);
  const isPrime = isPrimeNumber(question);
  let correctAnswer = '';

  if (isPrime) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

export default () => {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', brainPrimeLogic);
};
