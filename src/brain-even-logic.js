import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greeting = (userName) => {
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
};

const gameQuestion = (min, max) => {
  const randomNumber = Math.random() * (max - min + 1) + min;
  const finalNumber = Math.floor(randomNumber);

  console.log(`Question: ${finalNumber}`);
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
export {
  gameQuestion, answer, getUserName, greeting, isEvenNumber,
};
