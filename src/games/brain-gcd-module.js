import {
  answer, gcd, isRightAnswer, randomNumber,
} from '../index.js';

const brainGcdLogic = (isAnswerCorrect, userName) => {
  let isCorrect = isAnswerCorrect;
  const questionNum1 = randomNumber(1, 100);
  const questionNum2 = randomNumber(1, 100);

  console.log(`Question: ${questionNum1} ${questionNum2}`);

  const userAnswer = +answer();

  const gcdResult = gcd(questionNum1, questionNum2);
  isCorrect = isRightAnswer(userAnswer, userName, gcdResult);

  return isCorrect;
};
export default brainGcdLogic;
