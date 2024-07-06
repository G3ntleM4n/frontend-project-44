import {
  getQuestionAndAnswer, isPrimeNumber, isRightAnswer,
} from '../index.js';

const brainPrimeLogic = (isAnswerCorrect, userName) => {
  let isCorrect = isAnswerCorrect;
  const { questionNumber, userAnswer } = getQuestionAndAnswer();

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
