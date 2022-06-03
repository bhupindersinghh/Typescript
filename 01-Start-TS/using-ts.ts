const button = document.querySelector("button");
// Typescasting the variables down and adding '!' to state that bro ye kabhi bhi tujhe null nhi dega
// By using typescipt I am becoming more specific about things
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function adds(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  // By adding that + sign in the beginning we converted those into number
  console.log(adds(+input1.value, +input2.value));
});
