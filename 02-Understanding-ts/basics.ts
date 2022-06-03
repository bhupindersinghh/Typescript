function add(num1: number, num2: number, showAnswer: boolean) {
  //   console.log(typeof number1);/
  if (showAnswer) console.log(true);
  else console.log(false);

  return num1 + num2;
}

const number1 = 5;
const number2 = 2.5;
const printAnswer = true;

const result = add(number1, number2, printAnswer);
console.log(result);
