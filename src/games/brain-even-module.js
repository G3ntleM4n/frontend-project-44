import {
  answer, isEvenNumber, isRightAnswer, randomNumber,
} from '../index.js';

const brainEvenLogic = (isAnswerCorrect, userName) => {
  let isCorrect = isAnswerCorrect;
  const questionNumber = randomNumber(1, 100);
  console.log(`Question: ${questionNumber}`);
  const userAnswer = answer().toLowerCase();

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
