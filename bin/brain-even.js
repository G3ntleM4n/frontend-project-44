#!/usr/bin/env node

import {
  gameQuestion, answer, getUserName, greeting, isEvenNumber,
} from '../src/brain-even-logic.js';

let counterOfCorrectAnswers = 0;
let isCorrect = true;

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greeting(userName);

while (counterOfCorrectAnswers < 3) {
  const questionNumber = gameQuestion(1, 100);
  const userAnswer = answer();

  if (isEvenNumber(questionNumber) && userAnswer.toLowerCase() !== 'yes') {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    isCorrect = false;
    break;
  } else if (!isEvenNumber(questionNumber) && userAnswer.toLowerCase() !== 'no') {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    isCorrect = false;
    break;
  }
  console.log('Correct!');
  counterOfCorrectAnswers += 1;
}

if (isCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
