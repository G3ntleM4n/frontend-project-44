import { randomNumber } from '../index.js';
import { playGame } from '../shared-games-logic-module.js';

const getQuestion = (questionNum1, questionOperation, questionNum2) => {
  let question = '';
  let answer = 0;

  switch (questionOperation) {
    case 1:
      question = `${questionNum1} + ${questionNum2}`;
      answer = questionNum1 + questionNum2;
      break;
    case 2:
      question = `${questionNum1} - ${questionNum2}`;
      answer = questionNum1 - questionNum2;
      break;
    case 3:
      question = `${questionNum1} * ${questionNum2}`;
      answer = questionNum1 * questionNum2;
      break;
    default:
      console.log('Something went wrong!');
      break;
  }
  return [question, answer];
};

export const brainCalcLogic = () => {
  const questionNum1 = randomNumber(1, 100);
  const questionNum2 = randomNumber(1, 10);
  const questionOperation = randomNumber(1, 3);
  const [question, correctAnswer] = getQuestion(questionNum1, questionOperation, questionNum2);

  return [question, correctAnswer];
};

export default () => {
  playGame('What is the result of the expression?', brainCalcLogic);
};
