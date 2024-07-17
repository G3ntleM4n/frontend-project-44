import { getAnswer, getUserNameAndGreet, isRightAnswer } from './index.js';

const playGame = (description, gameData) => {
  const maxRounds = 3;
  let isCorrect = true;
  const userName = getUserNameAndGreet();
  console.log(description);

  for (let i = 0; i < maxRounds; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    console.log(`answer: ${correctAnswer}`);
    const userAnswer = getAnswer();
    isCorrect = isRightAnswer(userAnswer, userName, correctAnswer);

    if (!isCorrect) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
  }

  if (isCorrect) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default playGame;
