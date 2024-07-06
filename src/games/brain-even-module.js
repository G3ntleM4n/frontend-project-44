import {
  getQuestionAndAnswer, isEvenNumber, isRightAnswer,
} from '../index.js';

const brainEvenLogic = (isAnswerCorrect, userName) => {
  let isCorrect = isAnswerCorrect;
  const { questionNumber, userAnswer } = getQuestionAndAnswer();

  if (isEvenNumber(questionNumber)) {
    const rightAnswer = 'yes';
    isCorrect = isRightAnswer(userAnswer, userName, rightAnswer);
  } else if (!isEvenNumber(questionNumber)) {
    const rightAnswer = 'no';
    isCorrect = isRightAnswer(userAnswer, userName, rightAnswer);
  }
  return isCorrect;
};
export default brainEvenLogic;
