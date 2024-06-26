#!/usr/bin/env node

import {
  randomNumber, answer, isEvenNumber, isRightAnswer, getUserNameAndGreet,
} from '../src/index.js';

let counterOfCorrectAnswers = 0;
let isCorrect = true;

const userName = getUserNameAndGreet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (counterOfCorrectAnswers < 3) {
  const questionNumber = randomNumber(1, 100);
  console.log(`Question: ${questionNumber}`);
  const userAnswer = answer().toLowerCase();

  if (isEvenNumber(questionNumber)) {
    const rightAnswer = 'yes';
    isCorrect = isRightAnswer(userAnswer, userName, rightAnswer);
  } else if (!isEvenNumber(questionNumber)) {
    const rightAnswer = 'no';
    isCorrect = isRightAnswer(userAnswer, userName, rightAnswer);
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
