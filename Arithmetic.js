// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = prompt('Enter first number: ');
const number2 = prompt('Enter second number: ');

let answer;

// using if...else if... else
if (operator == '+') {
    answer = number1 + number2;
}
else if (operator == '-') {
    answer = number1 - number2;
}
else if (operator == '*') {
    answer = number1 * number2;
}
else {
    answer = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${answer}`)
