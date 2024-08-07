import {
  randomNumber,
} from '../index.js';
import playGame from '../shared-games-logic-module.js';

export const isEvenNumber = (questionNumber) => {
  if (questionNumber % 2 === 0) {
    return true;
  }
  return false;
};

export const brainEvenLogic = () => {
  const question = randomNumber(1, 100);
  const isEven = isEvenNumber(question);
  let correctAnswer = '';

  if (isEven) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

export default () => {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', brainEvenLogic);
};
