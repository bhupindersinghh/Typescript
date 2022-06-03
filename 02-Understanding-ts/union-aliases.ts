// We are using type aliases below (basically #define of cpp)
type Combinable = number | string;
type CoversionDescriptor = "as-number" | "as-text";

// the parameter resultConversion here is using literal types where it value can only be 'as-number' or 'as-text'
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: CoversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(1, 6, "as-number");
console.log(combineAges);

console.log(combine("10", "30", "as-number"));

const combineStrings = combine("Bhup", "inder", "as-text");
console.log(combineStrings);

let rand = 10;
rand = 1;
