//functions to add, subtract, divide, and multiply
function add(num1, num2, ...nums) {
  let sum = parseFloat(num1) + parseFloat(num2);
  for (let i = 0; i < nums.length; i++) {
    sum += parseFloat(nums[i]);
  }
  return sum;
}

function subtract(num1, num2, ...nums) {
  let sum = num1 - num2;
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }
  return sum;
}

function multiply(num1, num2, ...nums) {
  let sum = num1 * num2;
  for (let i = 0; i < nums.length; i++) {
    sum *= nums[i];
  }
  return sum;
}

function divide(num1, num2, ...nums) {
  if (num2 == 0) {
    alert("naughty, naughty, you can't divide by zero");
    display_value = [];
    allNumbers = [];
    display.innerHTML = 0;
  }
  else {
    let sum = num1 / num2;
    for (let i = 0; i < nums.length; i++) {
      sum /= nums[i];
    }
    return sum;
  }
}

function operate(operator, ...nums) {
  if (operator == '+') {return add(...nums)}
  if (operator == '-') {return subtract(...nums)}
  if (operator == '×') {return multiply(...nums)}
  if (operator == '÷') {return divide(...nums)}
}

let display_value = [];
var display = document.getElementById("display");
let finalValue;
var decimal = document.querySelector(".decimal-button");

let numbers = document.querySelectorAll('.number-button');
  numbers.forEach((button) => {
    button.addEventListener('click', () => {
      if (parseFloat(display_value[0]) !== parseFloat(finalValue)) {
        display_value.push(button.innerHTML);
        display.innerHTML = display_value.join('');

      decimal.addEventListener('click', () => {
        if (!display_value.includes('.')) {
            display_value.push(decimal.innerHTML);
            display.innerHTML = display_value.join('');
        }
      })
      }
    })
  })

let firstNumber;
let operator;
let allNumbers = []
let operators = document.querySelectorAll('.operator-button');
operators.forEach((button) => {
  button.addEventListener('click', () => {
    if (display_value.length > 0) {
      firstNumber = display_value.join('');
      allNumbers.push(firstNumber); }
      console.log(firstNumber, allNumbers, allNumbers.length)
    if (allNumbers.length == 2) {
      let sum = operate(operator, ...allNumbers);
      console.log(sum, firstNumber, allNumbers, allNumbers.length)
      allNumbers = [sum]
      display.innerHTML = sum;
    }
    display_value = [];
    operator = button.innerHTML;
    //display.innerHTML = operator;
  })
})

let secondNumber;
let equals = document.querySelector('.equal-button')
equals.addEventListener('click', () => {
  if (allNumbers.length == 1) {
    secondNumber = display_value.join('');
    allNumbers.push(secondNumber);
    finalValue = operate(operator, ...allNumbers);
    display.innerHTML = finalValue;
    allNumbers = []
    display_value = [finalValue];
  }
})

let clear = document.querySelector('.clear-button')
clear.addEventListener('click', () => {
  display_value = []
  allNumbers = []
  display.innerHTML = 0
})
