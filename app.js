// variable references
const calculatorForm = document.getElementById("calForm");
const inputScreen = document.getElementById("cal_screen");
const deleteOneNumber = document.querySelector(".delete");
const clearAllNumbers = document.querySelector(".clearAll");
const calculatorNumbers = document.querySelectorAll(".numbers");
const calculatorOperators = document.querySelectorAll(".operators");
const totalFinalAnswer = document.getElementById("final_answer");

let numbersValue;
let operators;

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

// calculator functions
function calculator() {
  calculatorNumbers.forEach((btns) => {
    btns.addEventListener("click", function (event) {
      const btnsValues = Number(event.currentTarget.textContent);
      numbersValue = btnsValues;
      inputScreen.value += numbersValue;
    });
  });

  calculatorOperators.forEach((opBtns) => {
    opBtns.addEventListener("click", function (event) {
      const targetOpBtns = event.currentTarget.textContent;
      operators = targetOpBtns;
      inputScreen.value += operators;
    });
  });
  deleteOneNumber.addEventListener("click", function () {
    let inputValueLength = Number(inputScreen.value.length - 1);
    let deleteOneValue = inputScreen.value.slice(0, inputValueLength);
    inputScreen.value = deleteOneValue;
  });
  clearAllNumbers.addEventListener("click", function (event) {
    const target = event.currentTarget;
    target ? (inputScreen.value = "") : null;
  });
}

// function call
calculator();

// total function
function finalAnswer() {
  const input = inputScreen.value;
  const number = input.split(/[/\-+*%]/).map((nums) => parseFloat(nums));
  const oper = input.search(/[*/\-+%]/);
  const operChar = inputScreen.value.charAt(oper);
  let num1 = number[0];
  let num2 = number[1];
  let result;

  if (number.length < 2 || !operChar) {
    inputScreen.value = "invalid expression";
    return;
  }

  switch (operChar) {
    case "*":
      result = num1 * num2;
      break;
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;

    default:
      inputScreen.value = "invalid operator";
      return;
  }
  inputScreen.value = result;
}
