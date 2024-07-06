#!/usr/bin/env node

import brainEvenLogic from '../src/games/brain-even-module.js';
import {
  getUserNameAndGreet,
} from '../src/index.js';

let counterOfCorrectAnswers = 0;
let isCorrect = true;

const userName = getUserNameAndGreet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (counterOfCorrectAnswers < 3) {
  isCorrect = brainEvenLogic(isCorrect, userName);

  if (isCorrect) {
    counterOfCorrectAnswers += 1;
  } else {
    break;
  }
}

if (isCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
