import {
  makeFinalArray, makeRandomArray,
} from '../index.js';
import playGame from '../shared-games-logic-module.js';

export const brainProgressionLogic = () => {
  const array = [];
  const randomArray = makeRandomArray(array);
  const [skippedElement, finalArray] = makeFinalArray(randomArray);

  const question = finalArray.join(' ');
  finalArray.splice(0, finalArray.length); // cleans array

  return [question, skippedElement];
};

export default () => {
  playGame('What number is missing in the progression?', brainProgressionLogic);
};
