#!/usr/bin/env node

import brainPrimeLogic from '../src/games/brain-prime-module.js';
import {
  getUserNameAndGreet,
} from '../src/index.js';

let counterOfCorrectAnswers = 0;
let isCorrect = true;

const userName = getUserNameAndGreet();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

while (counterOfCorrectAnswers < 3) {
  isCorrect = brainPrimeLogic(isCorrect, userName);

  if (isCorrect) {
    counterOfCorrectAnswers += 1;
  } else {
    break;
  }
}

if (isCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
