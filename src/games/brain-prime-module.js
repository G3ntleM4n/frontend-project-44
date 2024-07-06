import {
  answer, isPrimeNumber, isRightAnswer, randomNumber,
} from '../index.js';

const brainPrimeLogic = (isAnswerCorrect, userName) => {
  let isCorrect = isAnswerCorrect;
  const questionNumber = randomNumber(1, 100);
  console.log(`Question: ${questionNumber}`);
  const userAnswer = answer().toLowerCase();

  if (isPrimeNumber(questionNumber)) {
    const rightAnswer = 'yes';
    isCorrect = isRightAnswer(userAnswer, userName, rightAnswer);
  } else if (!isPrimeNumber(questionNumber)) {
    const rightAnswer = 'no';
    isCorrect = isRightAnswer(userAnswer, userName, rightAnswer);
  }

  return isCorrect;
};
export default brainPrimeLogic;
