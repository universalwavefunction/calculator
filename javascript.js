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
    console.log(sum);
  }
  return sum;
}

function divide(num1, num2, ...nums) {
  let sum = num1 / num2;
  for (let i = 0; i < nums.length; i++) {
    sum /= nums[i];
  }
  return sum;
}

function operate(operator, ...nums) {
  if (operator == '+') {return add(...nums)}
  if (operator == '-') {return subtract(...nums)}
  if (operator == '×') {return multiply(...nums)}
  if (operator == '÷') {return divide(...nums)}
}

let display_value = [];
var display = document.getElementById("display");

let numbers = document.querySelectorAll('.number-button');
numbers.forEach((button) => {
  button.addEventListener('click', () => {
    display_value.push(button.innerHTML);
    display.innerHTML = display_value.join('');
    console.log(display_value.join(''))
  })
})

let firstNumber;
let operator;
let allNumbers = []
let operators = document.querySelectorAll('.operator-button');
operators.forEach((button) => {
  button.addEventListener('click', () => {
    firstNumber = display_value.join('');
    allNumbers.push(firstNumber);
    console.log(firstNumber, allNumbers)
    display_value = [];
    operator = button.innerHTML;
    display.innerHTML = operator;
  })
})

let secondNumber;
let equals = document.querySelector('.equal-button')
equals.addEventListener('click', () => {
  secondNumber = display_value.join('');
  allNumbers.push(secondNumber);
  let finalValue = operate(operator, ...allNumbers);
  display.innerHTML = finalValue;
  allNumbers = []
  display_value = [finalValue];
  console.log(secondNumber, allNumbers, finalValue)
})
