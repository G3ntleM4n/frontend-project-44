import {
  answer, isRightAnswer, makeFinalArray, makeRandomArray,
} from '../index.js';

const brainProgressionLogic = (isAnswerCorrect, userName, array) => {
  let isCorrect = isAnswerCorrect;
  const randomArray = makeRandomArray(array);
  const [skippedElement, finalArray] = makeFinalArray(randomArray);

  console.log(`Question: ${finalArray.join(' ')}`);
  finalArray.splice(0, finalArray.length); // cleans array

  const userAnswer = +answer();
  isCorrect = isRightAnswer(userAnswer, userName, skippedElement);

  return isCorrect;
};
export default brainProgressionLogic;
