#!/usr/bin/env node

import {
  randomNumber, answer, getUserName, greeting,
  isRightAnswer,
} from '../src/index.js';

let counterOfCorrectAnswers = 0;
let isCorrect = true;

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greeting(userName);
console.log('What is the result of the expression?');

while (counterOfCorrectAnswers < 3) {
  const questionNum1 = randomNumber(1, 100);
  const questionNum2 = randomNumber(1, 10);
  const questionOperation = randomNumber(1, 3);
  let questionOperator = '';

  switch (questionOperation) {
    case 1:
      questionOperator = '+';
      break;
    case 2:
      questionOperator = '-';
      break;
    case 3:
      questionOperator = '*';
      break;
    default:
      break;
  }

  console.log(`Question: ${questionNum1} ${questionOperator} ${questionNum2}`);

  const userAnswer = +answer();

  if (questionOperation === 1) {
    const summationResult = questionNum1 + questionNum2;
    isCorrect = isRightAnswer(userAnswer, userName, summationResult);
  }
  if (questionOperation === 2) {
    const subtractionResult = questionNum1 - questionNum2;
    isCorrect = isRightAnswer(userAnswer, userName, subtractionResult);
  }
  if (questionOperation === 3) {
    const multiplicationResult = questionNum1 * questionNum2;
    isCorrect = isRightAnswer(userAnswer, userName, multiplicationResult);
  }

  if (isCorrect) {
    counterOfCorrectAnswers += 1;
  } else {
    break;
  }
}

if (isCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
