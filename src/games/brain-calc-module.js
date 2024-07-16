import { randomNumber } from '../index.js';
import playGame from '../shared-games-logic-module.js';

const getOperator = () => {
  const operatorArray = ['+', '-', '*'];
  const indexOfOperatorArray = randomNumber(0, 2);

  return operatorArray[indexOfOperatorArray];
};

const calculateOperation = (operator, questionNum1, questionNum2) => {
  let answer = 0;

  if (operator === '+') {
    answer = questionNum1 + questionNum2;
  } else if (operator === '-') {
    answer = questionNum1 - questionNum2;
  } else if (operator === '*') {
    answer = questionNum1 * questionNum2;
  } else { console.log('Error: operator not found!'); }

  return answer;
};

export const brainCalcLogic = () => {
  const questionNum1 = randomNumber(1, 100);
  const questionNum2 = randomNumber(1, 10);
  const operator = getOperator();

  const question = `${questionNum1} ${operator} ${questionNum2}`;
  const correctAnswer = calculateOperation(operator, questionNum1, questionNum2);

  return [question, correctAnswer];
};

export default () => {
  playGame('What is the result of the expression?', brainCalcLogic);
};
