var button = document.querySelector("button");
// Typescasting the variables down and adding '!' to state that bro ye kabhi bhi tujhe null nhi dega
// By using typescipt I am becoming more specific about things
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // By adding that + sign in the beginning we converted those into number
    console.log(add(+input1.value, +input2.value));
});
