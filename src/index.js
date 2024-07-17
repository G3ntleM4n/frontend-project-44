import readlineSync from 'readline-sync';

export const getUserNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const randomNumber = (min, max) => {
  const randNumber = Math.random() * (max - min + 1) + min;
  const finalNumber = Math.floor(randNumber);
  return finalNumber;
};

export const getAnswer = () => {
  const answerString = readlineSync.question('Your answer: ');
  return answerString;
};

export const isEvenNumber = (questionNumber) => {
  if (questionNumber % 2 === 0) {
    return true;
  }
  return false;
};

export const isRightAnswer = (userAnswer, userName, operationResult) => {
  const answer = userAnswer.toString();
  const rightAnswer = operationResult.toString();

  if (answer !== rightAnswer) {
    return false;
  }
  return true;
};

export const makeRandomArray = (array) => {
  const randomArray = array;
  const lengthOfArray = randomNumber(5, 10);
  const arrayStep = randomNumber(1, 10);
  let buffer = 0;

  for (let i = 0; i < lengthOfArray; i += 1) {
    buffer += arrayStep;
    array.push(buffer);
  }
  return randomArray;
};

export const makeFinalArray = (array) => {
  const randomArray = array;
  const skippedArrayStep = randomNumber(0, randomArray.length - 1);
  const skippedElement = randomArray[skippedArrayStep];

  randomArray[skippedArrayStep] = '..';
  return [skippedElement, randomArray];
};

export const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

export const isPrimeNumber = (questionNumber) => {
  if (questionNumber === 2) {
    return true;
  }
  if (questionNumber === 1) {
    return false;
  }

  const halfNumber = questionNumber / 2;
  for (let i = 2; i <= halfNumber; i += 1) {
    if (questionNumber % i === 0) {
      return false;
    }
  }
  return true;
};
