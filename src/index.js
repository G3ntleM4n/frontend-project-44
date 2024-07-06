import readlineSync from 'readline-sync';

const getUserNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const randomNumber = (min, max) => {
  const randNumber = Math.random() * (max - min + 1) + min;
  const finalNumber = Math.floor(randNumber);
  return finalNumber;
};

const answer = () => {
  const answerString = readlineSync.question('Your answer: ');
  return answerString;
};

const isEvenNumber = (questionNumber) => {
  if (questionNumber % 2 === 0) {
    return true;
  }
  return false;
};

const isRightAnswer = (userAnswer, userName, operationResult) => {
  if (userAnswer !== operationResult) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${operationResult}'.\nLet's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const makeRandomArray = (array) => {
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

const makeFinalArray = (array) => {
  const randomArray = array;
  const skippedArrayStep = randomNumber(0, randomArray.length - 1);
  const skippedElement = randomArray[skippedArrayStep];

  randomArray[skippedArrayStep] = '..';
  return [skippedElement, randomArray];
};

const changeNumbersForGcd = (number1, number2) => {
  let firstNumber = number1;
  let secondNumber = number2;

  if (firstNumber >= secondNumber) {
    firstNumber %= secondNumber;
  } else {
    secondNumber %= firstNumber;
  }
  return [firstNumber, secondNumber];
};

//  Euclidean algorithm
const gcd = (number1, number2) => {
  let firstNumber = 0;
  let secondNumber = 0;
  while (number1 > 0 && number2 > 0) {
    [firstNumber, secondNumber] = changeNumbersForGcd(number1, number2);
  }
  return Math.max(firstNumber, secondNumber);
};

const isPrimeNumber = (questionNumber) => {
  if (questionNumber === 2) {
    return true;
  }

  const halfNumber = questionNumber / 2;

  for (let i = 2; i <= halfNumber; i += 1) {
    if (questionNumber % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  randomNumber, answer, getUserNameAndGreet,
  isEvenNumber, isRightAnswer, makeRandomArray,
  makeFinalArray, isPrimeNumber, gcd,
};
