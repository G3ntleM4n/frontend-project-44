#!/usr/bin/env node

import {
  randomNumber, answer, isRightAnswer, getUserNameAndGreet,
} from '../src/index.js';

let counterOfCorrectAnswers = 0;
let isCorrect = true;

const userName = getUserNameAndGreet();
console.log('What is the result of the expression?');

while (counterOfCorrectAnswers < 3) {
  const questionNum1 = randomNumber(1, 100);
  const questionNum2 = randomNumber(1, 100);

  console.log(`Question: ${questionNum1} ${questionNum2}`);

  const userAnswer = +answer();

  //  Euclidean algorithm
  const gcd = (number1, number2) => {
    let firstNumber = number1;
    let secondNumber = number2;
    while (firstNumber > 0 && secondNumber > 0) {
      if (firstNumber >= secondNumber) {
        firstNumber %= secondNumber;
      } else {
        secondNumber %= firstNumber;
      }
    }
    return Math.max(firstNumber, secondNumber);
  };

  const gcdResult = gcd(questionNum1, questionNum2);
  isCorrect = isRightAnswer(userAnswer, userName, gcdResult);

  if (isCorrect) {
    counterOfCorrectAnswers += 1;
  } else {
    break;
  }
}

if (isCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
