#!/usr/bin/env node

import brainGcdLogic from '../src/games/brain-gcd-module.js';
import {
  getUserNameAndGreet,
} from '../src/index.js';

let counterOfCorrectAnswers = 0;
let isCorrect = true;

const userName = getUserNameAndGreet();
console.log('Find the greatest common divisor of given numbers.');

while (counterOfCorrectAnswers < 3) {
  isCorrect = brainGcdLogic(isCorrect, userName);

  if (isCorrect) {
    counterOfCorrectAnswers += 1;
  } else {
    break;
  }
}

if (isCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
