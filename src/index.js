import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greeting = (userName) => {
  console.log(`Hello, ${userName}!`);
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

export {
  randomNumber, answer, getUserName, greeting, isEvenNumber, isRightAnswer,
};
