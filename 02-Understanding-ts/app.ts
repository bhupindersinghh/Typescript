let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "Bhupinder";

if (typeof userInput === "string") {
  // If I will not put this line under if else then it will give and  error as the type of userInput is unknow we are still assigning it to something, hence error but this error will not come if we would have used  any as the type
  userName = userInput;
}

// Never keyword - is used to define function that will never return anything (not even undefined that happens in the case of void) example of this can  be a function that is used to generate error

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const res = generateError("An error occured!", 5010);
console.log(res); // This will not log anything as nothing is returned from the funciton no even undefined
