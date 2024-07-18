import { getAnswer, getUserNameAndGreet } from './index.js';

const playGame = (description, gameData) => {
  const maxRounds = 3;
  const userName = getUserNameAndGreet();
  console.log(description);

  for (let i = 0; i < maxRounds; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();

    if (userAnswer.toString() !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
