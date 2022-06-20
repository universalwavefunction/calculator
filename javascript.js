function add(...nums) {
  var sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
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

function operate(operator, num1, num2) {
  if (operator == '+') {return add(num1, num2)}
  if (operator == '-') {return subtract(num1, num2)}
  if (operator == '*') {return multiply(num1, num2)}
  if (operator == '/') {return divide(num1, num2)}
}

console.log(operate('/', 10, 23))
