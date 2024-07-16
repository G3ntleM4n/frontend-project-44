import {
  gcd, randomNumber,
} from '../index.js';
import playGame from '../shared-games-logic-module.js';

export const brainGcdLogic = () => {
  const questionNum1 = randomNumber(1, 100);
  const questionNum2 = randomNumber(1, 100);

  const question = `${questionNum1} ${questionNum2}`;
  const gcdResult = gcd(questionNum1, questionNum2);

  return [question, gcdResult];
};

export default () => {
  playGame('Find the greatest common divisor of given numbers.', brainGcdLogic);
};
