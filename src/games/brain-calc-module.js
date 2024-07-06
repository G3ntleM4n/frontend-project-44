import { answer, isRightAnswer, randomNumber } from '../index.js';

const brainCalcLogic = (isAnswerCorrect, userName) => {
  let isCorrect = isAnswerCorrect;
  const questionNum1 = randomNumber(1, 100);
  const questionNum2 = randomNumber(1, 10);
  const questionOperation = randomNumber(1, 3);
  let questionOperator = '';

  switch (questionOperation) {
    case 1:
      questionOperator = '+';
      break;
    case 2:
      questionOperator = '-';
      break;
    case 3:
      questionOperator = '*';
      break;
    default:
      console.log('Something went wrong!');
      break;
  }

  console.log(`Question: ${questionNum1} ${questionOperator} ${questionNum2}`);

  const userAnswer = +answer();

  if (questionOperation === 1) {
    const summationResult = questionNum1 + questionNum2;
    isCorrect = isRightAnswer(userAnswer, userName, summationResult);
  }
  if (questionOperation === 2) {
    const subtractionResult = questionNum1 - questionNum2;
    isCorrect = isRightAnswer(userAnswer, userName, subtractionResult);
  }
  if (questionOperation === 3) {
    const multiplicationResult = questionNum1 * questionNum2;
    isCorrect = isRightAnswer(userAnswer, userName, multiplicationResult);
  }
  return isCorrect;
};
export default brainCalcLogic;
