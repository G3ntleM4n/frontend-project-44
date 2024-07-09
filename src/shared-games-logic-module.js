import brainCalcLogic from './games/brain-calc-module.js';
import brainEvenOrPrimeLogic from './games/brain-even-or-prime-module.js';
import brainGcdLogic from './games/brain-gcd-module.js';
import brainProgressionLogic from './games/brain-progression-module.js';
import { getUserNameAndGreet } from './index.js';

export const chooseGame = (gameNumber, isCorrect, userName) => {
  let isAnswerCorrect = isCorrect;
  switch (gameNumber) {
    case 1:
      isAnswerCorrect = brainEvenOrPrimeLogic(isCorrect, userName, gameNumber);
      break;
    case 2:
      isAnswerCorrect = brainCalcLogic(isCorrect, userName);
      break;
    case 3:
      isAnswerCorrect = brainGcdLogic(isCorrect, userName);
      break;
    case 4:
      isAnswerCorrect = brainProgressionLogic(isCorrect, userName);
      break;
    case 5:
      isAnswerCorrect = brainEvenOrPrimeLogic(isCorrect, userName, gameNumber);
      break;
    default:
      console.log('Game does not exist!');
      break;
  }
  return isAnswerCorrect;
};

export const chooseGamePhrase = (gameNumber) => {
  switch (gameNumber) {
    case 1:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 2:
      console.log('What is the result of the expression?');
      break;
    case 3:
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 4:
      console.log('What number is missing in the progression?');
      break;
    case 5:
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      console.log('Game does not exist!');
      break;
  }
};

export const playGame = (gameNumber) => {
  let counterOfCorrectAnswers = 0;
  let isCorrect = true;

  const userName = getUserNameAndGreet();
  chooseGamePhrase(gameNumber);

  while (counterOfCorrectAnswers < 3) {
    isCorrect = chooseGame(gameNumber, isCorrect, userName);

    if (isCorrect) {
      counterOfCorrectAnswers += 1;
    } else {
      break;
    }
  }

  if (isCorrect) {
    console.log(`Congratulations, ${userName}!`);
  }
};
