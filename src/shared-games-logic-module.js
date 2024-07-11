import brainEvenOrPrimeLogic from './games/brain-even-module.js';
import brainGcdLogic from './games/brain-gcd-module.js';
import brainProgressionLogic from './games/brain-progression-module.js';
import { getAnswer, getUserNameAndGreet, isRightAnswer } from './index.js';

export const chooseGame = (gameNumber, isCorrect, userName) => {
  let isAnswerCorrect = isCorrect;
  switch (gameNumber) {
    case 1:
      isAnswerCorrect = brainEvenOrPrimeLogic(isCorrect, userName, gameNumber);
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

export const playGame = (description, gameData) => {
  let counterOfCorrectAnswers = 0;
  let isCorrect = true;
  const userName = getUserNameAndGreet();
  console.log(description);

  while (counterOfCorrectAnswers < 3) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();
    isCorrect = isRightAnswer(userAnswer, userName, correctAnswer);

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

/*
export const chooseGamePhrase = (gameNumber) => {
  switch (gameNumber) {
    case 1:
      console.log('');
      break;
    case 2:
      console.log();
      break;
    case 3:
      console.log('');
      break;
    case 4:
      console.log('');
      break;
    case 5:
      console.log('');
      break;
    default:
      console.log('Game does not exist!');
      break;
  }
}; */
