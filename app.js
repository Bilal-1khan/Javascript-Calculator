// variable references
const calculatorForm = document.getElementById("calForm")
const inputScreen = document.getElementById("cal_screen")
const deleteOneNumber = document.querySelector(".delete")
const clearAllNumbers = document.querySelector(".clearAll")
const calculatorNumbers = document.querySelectorAll(".numbers")
const calculatorOperators = document.querySelectorAll(".operators")
const totalFinalAnswer = document.getElementById("final_answer")


calculatorForm.addEventListener("submit",function(event){
    event.preventDefault()
})



// calculator functions
function calculator() {
    calculatorNumbers.forEach((btns)=>{
        btns.addEventListener("click",function (event) {
            const btnsValues = Number(event.currentTarget.textContent)
            inputScreen.value += btnsValues;
        })
    })
    
    calculatorOperators.forEach((opBtns)=>{
        opBtns.addEventListener("click",function (event) {
        const targetOpBtns = event.currentTarget.textContent
        inputScreen.value += targetOpBtns;
    })
})
    deleteOneNumber.addEventListener("click",function () {
        let inputValueLength = Number(inputScreen.value.length - 1)
        let deleteOneValue = inputScreen.value.slice(0,inputValueLength)
        inputScreen.value = deleteOneValue
    })
    clearAllNumbers.addEventListener("click",function (event) {
        const target = event.currentTarget;
        target ? inputScreen.value="":null;
    })
}

// function call
calculator()

// total function
totalFinalAnswer.addEventListener("click",function(){
    console.log('working');
    
})


function finalAnswer() {
   
}

// operator functions
function operatorFunction(params) {
    
}