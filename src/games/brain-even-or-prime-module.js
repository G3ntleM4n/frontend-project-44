import {
  getQuestionAndAnswer, isEvenNumber, isPrimeNumber, isRightAnswer,
} from '../index.js';

const isEvenOrPrimeNumber = (gameNumber, questionNumber) => {
  let isTrue = false;
  switch (gameNumber) {
    case 1:
      isTrue = isEvenNumber(questionNumber);
      break;
    case 5:
      isTrue = isPrimeNumber(questionNumber);
      break;
    default:
      console.log('something went wrong!');
      break;
  }
  return isTrue;
};

const brainEvenOrPrimeLogic = (isAnswerCorrect, userName, gameNumber) => {
  let isCorrect = isAnswerCorrect;
  const { questionNumber, userAnswer } = getQuestionAndAnswer();

  isCorrect = isEvenOrPrimeNumber(gameNumber, questionNumber);

  if (isCorrect) {
    const rightAnswer = 'yes';
    isCorrect = isRightAnswer(userAnswer, userName, rightAnswer);
  } else if (!isCorrect) {
    const rightAnswer = 'no';
    isCorrect = isRightAnswer(userAnswer, userName, rightAnswer);
  }
  return isCorrect;
};
export default brainEvenOrPrimeLogic;
