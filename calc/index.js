const numbers = document.querySelectorAll(".key-number")
const display = document.querySelector(".calculator-display")
const operations = document.querySelectorAll(".key-operator")
const equal = document.querySelector("#equal")
const allClearButton = document.getElementById("all-clear")
const dotButton = document.getElementById("dot")


let displayValue1 = ""
let displayValue2 = ""
let operator = ""
let result = null // not 0, null is blank state, indicator that no calculation has been done

function calculate() {
  if (displayValue1 !== "" && displayValue2 !== "" && operator) {
    let firstNum = parseFloat(displayValue1)
    let secondNum = parseFloat(displayValue2)

    result = operate(firstNum, secondNum, operator)
    display.innerText = result

    // sets up for next operation
    displayValue1 = result.toString()
    displayValue2 = ""
    operator = "" // clear current operator

  }
}

numbers.forEach((number) => {
  number.addEventListener("click", event => {
    const numText = event.target.innerText

    if (!operator) {
      if (numText === "." && displayValue1.includes(".")) return
      displayValue1 += numText
      display.innerText = displayValue1
      console.log(displayValue1)
    } else {
      if (numText === "." && displayValue2.includes(".")) return
      displayValue2 += event.target.innerText
      display.innerText = displayValue2
      console.log(displayValue2)
    }
  })
});

operations.forEach((operation) => {
  operation.addEventListener("click", event => {
    if (displayValue1 !== "") { // checks if it's not an empty string
      if (displayValue2 !== "") {
        calculate() // if not empty then calculates both values
      }
      operator = event.target.innerText
    }
    console.log(operator)
  })
});


equal.addEventListener("click", event => {
  calculate()
  console.log(result)
})

allClearButton.addEventListener("click", event => {
  // reset calculator state
  displayValue1 = ""
  displayValue2 = ""
  operator = ""
  result = null
  display.innerText = ""
})

dotButton.addEventListener("click", event => { // checks if values already have a decimal point, if not, it adds one
  if (!operator && !displayValue1.includes(".")) {
    displayValue1 += "."
    display.innerText = displayValue1
  } else if (operator && !displayValue2.includes(".")) {
    displayValue2 += "."
    display.innerText = displayValue2
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
  if (b === 0) {
    return "lol"
  } else {
    return a / b
  }
}


function operate(a, b, operator) {
  let result

  if (operator == "+")
    return addition(a, b)
  if (operator == "-")
    return subtraction(a, b)
  if (operator == "*")
    return multiplication(a, b)
  if (operator == "/")
    return division(a, b)

  return parseFloat(result.toFixed(2)) // rounds the result to 2 decimal places
}
