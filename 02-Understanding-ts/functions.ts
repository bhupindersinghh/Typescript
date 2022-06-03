function add(n1: number, n2: number) {
  return n1 + n2;
}

// The void the type of the below function
// It can also be undefined but if the function type is undefined then it should have a return; statement
function printResult(num: number): void {
  console.log(`Result is ${num}`);
}

printResult(add(10, 20));

// We created a variable that will only store functions
let CombineValues: Function;

CombineValues = add;
CombineValues = printResult;

console.log(CombineValues(5, 5));

// To avoid above overiding we can be more specific of the type in the following way

let Combine: (a: number, b: number) => number;
Combine = add;

console.log(add(10, 100));

// Callback function and its type
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 40, (num) => {
  console.log(num);
});
