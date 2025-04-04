// variable references
const calculatorForm = document.getElementById("calForm");
const inputScreen = document.getElementById("cal_screen");
const deleteOneNumber = document.querySelector(".delete");
const clearAllNumbers = document.querySelector(".clearAll");
const calculatorNumbers = document.querySelectorAll(".numbers");
const calculatorOperators = document.querySelectorAll(".operators");

let numbersValue;
let operators;

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

  calculatorNumbers.forEach((btns) => {
    btns.addEventListener("click", function (event) {
      const btnsValues = Number(event.currentTarget.textContent);
      numbersValue = btnsValues
      inputScreen.value += numbersValue;
    //   finalAnswer(btnsValues);
    });
  });

  calculatorOperators.forEach((opBtns) => {
    opBtns.addEventListener("click", function (event) {
      const targetOpBtns = event.currentTarget.textContent;
      operators = targetOpBtns
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


// total function
function finalAnswer() {
  // with using the eval function
  inputScreen.value = eval(inputScreen.value)
}
