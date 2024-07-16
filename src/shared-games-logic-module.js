import { getAnswer, getUserNameAndGreet, isRightAnswer } from './index.js';

const playGame = (description, gameData) => {
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
export default playGame;
