import {
  isPrimeNumber, randomNumber,
} from '../index.js';
import playGame from '../shared-games-logic-module.js';

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
