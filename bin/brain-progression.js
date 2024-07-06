#!/usr/bin/env node

import brainProgressionLogic from '../src/games/brain-progression-module.js';
import {
  getUserNameAndGreet,
} from '../src/index.js';

const array = [];

let counterOfCorrectAnswers = 0;
let isCorrect = true;

const userName = getUserNameAndGreet();
console.log('What number is missing in the progression?');

while (counterOfCorrectAnswers < 3) {
  isCorrect = brainProgressionLogic(isCorrect, userName, array);

  if (isCorrect) {
    counterOfCorrectAnswers += 1;
  } else {
    break;
  }
}
if (isCorrect) {
  console.log(`Congratulations, ${userName}!`);
}
