console.log("Hello Austin!");
// sudo code

// Grab each of the elements
// from the document
// and store them in variables
// -left input
// -right input
// -add button
// -substract button
// -multiply button
// -divide button
// -result
const leftInputElement = document.getElementById("leftInput");
const rightInputElement = document.getElementById("rightInput");
const addButtonElement = document.getElementById("addButton");
const subtractButtonElement = document.getElementById("subtractButton");
const multiplyButtonElement = document.getElementById("multiplyButton");
const divideButtonElement = document.getElementById("divideButton");
const resultElement = document.getElementById("result");
// add event listeners to each
// math operator buttons
[];
addButtonElement.addEventListener("click", function () {
  // grab left input value
  const leftValue = Number(leftInputElement.value);
  // grab right input value
  const rightValue = Number(rightInputElement.value);

  // add the two -> call our add() function with the two values
  const result = add(leftValue, rightValue);

  // set the result into the result <span>
  resultElement.innerText = result;
});

subtractButtonElement.addEventListener("click", function () {
  // grab left input value
  const leftValue = Number(leftInputElement.value);
  // grab right input value
  const rightValue = Number(rightInputElement.value);

  // add the two -> call our add() function with the two values
  const result = subtract(leftValue, rightValue);

  // set the result into the result <span>
  resultElement.innerText = result;
});

multiplyButtonElement.addEventListener("click", function () {
  const leftValue = Number(leftInputElement.value);
  const rightValue = Number(rightInputElement.value);
  const result = multiply(leftValue, rightValue);
  resultElement.innerText = result;
});

divideButtonElement.addEventListener("click", function () {
  const leftValue = Number(leftInputElement.value);
  const rightValue = Number(rightInputElement.value);
  const result = divide(leftValue, rightValue);
  resultElement.innerText = result;
});

// Create 4 functions one for each
// math operator
function add(leftValue, rightValue) {
  const result = leftValue + rightValue;

  return result;
}

function subtract(leftValue, rightValue) {
  const result = leftValue - rightValue;

  return result;
}

function multiply(leftValue, rightValue) {
  const result = leftValue * rightValue;

  return result;
}

function divide(leftValue, rightValue) {
  const result = leftValue / rightValue;

  return result;
}

// TEST FUNCTIONS

const leftValue = 15;
const rightValue = 3;

console.log(add(leftValue, rightValue));
console.log(subtract(leftValue, rightValue));
console.log(multiply(leftValue, rightValue));
console.log(divide(leftValue, rightValue));
