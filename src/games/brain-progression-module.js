import { randomNumber } from '../index.js';
import playGame from '../shared-games-logic-module.js';

export const makeRandomArray = (lengthOfArray, arrayStep) => {
  const array = [];
  let buffer = 0;

  for (let i = 0; i < lengthOfArray; i += 1) {
    buffer += arrayStep;
    array.push(buffer);
  }

  return array;
};

export const removeArrayElement = (randomArray) => {
  const array = randomArray;
  const removedArrayStep = randomNumber(0, array.length - 1);
  const removedElement = array[removedArrayStep];

  return [removedElement, removedArrayStep];
};

export const brainProgressionLogic = () => {
  const lengthOfArray = randomNumber(5, 10);
  const arrayStep = randomNumber(1, 10);
  const array = makeRandomArray(lengthOfArray, arrayStep);
  const [correctAnswer, removedArrayStep] = removeArrayElement(array);

  array[removedArrayStep] = '..';
  const question = array.join(' ');

  return [question, correctAnswer];
};

export default () => {
  playGame('What number is missing in the progression?', brainProgressionLogic);
};
