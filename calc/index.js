const numbers = document.querySelectorAll(".button-nr")
const display = document.querySelector(".display")
const operations = document.querySelectorAll(".operator")
const equal = document.querySelector("#equal")


let displayValue1 = ""
let displayValue2 = ""
let operator = ""

numbers.forEach((number) => {
  number.addEventListener("click", event => {
    if (!operator) {
      displayValue1 += event.target.innerText
      display.innerText = displayValue1
      console.log(displayValue1)
    } else {
      displayValue2 += event.target.innerText
      display.innerText = displayValue2
      console.log(displayValue2)
    }
  })
});

operations.forEach((operation) => {
  operation.addEventListener("click", event => {
    if (!operator) {
      operator = event.target.innerText
    }
    console.log(operator)
  })
});

equal.addEventListener("click", event => {
  if (displayValue1 !== "" && displayValue2 !== "" && operator) {
    let firstNum = parseFloat(displayValue1)
    let secondNum = parseFloat(displayValue2)

    const result = operate(firstNum, secondNum, operator)
    display.innerText = result
    console.log(result)
  }
})



function addition(a, b) {
  return a + b
}

function subtraction(a, b) {
  return a - b
}

function multiplication(a, b) {
  return a * b
}

function division(a, b) {
  return a / b
}


function operate(a, b, operator) {
  if (operator == "+")
    return addition(a, b)
  if (operator == "-")
    return subtraction(a, b)
  if (operator == "*")
    return multiplication(a, b)
  if (operator == "/")
    return division(a, b)
}
