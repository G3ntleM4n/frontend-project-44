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
  const gcd = (num1, num2) => {
    let a = num1;
    let b = num2;
    while (a > 0 && b > 0) {
      if (a >= b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return Math.max(a, b);
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
