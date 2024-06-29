#!/usr/bin/env node

import {
  answer, getUserNameAndGreet, isRightAnswer,
  makeFinalArray, makeRandomArray,
} from '../src/index.js';

const array = [];

let counterOfCorrectAnswers = 0;
let isCorrect = true;

const userName = getUserNameAndGreet();
console.log('What number is missing in the progression?');

while (counterOfCorrectAnswers < 3) {
  const randomArray = makeRandomArray(array);
  const [skippedElement, finalArray] = makeFinalArray(randomArray);

  console.log(`Question: ${finalArray.join(' ')}`);
  finalArray.splice(0, finalArray.length); // cleans array

  const userAnswer = +answer();
  isCorrect = isRightAnswer(userAnswer, userName, skippedElement);

  if (isCorrect) {
    counterOfCorrectAnswers += 1;
  } else {
    break;
  }
}
if (isCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
