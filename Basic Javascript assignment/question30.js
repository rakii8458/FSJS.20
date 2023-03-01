// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let num1= prompt("Kindly Enter first number");
let num2= prompt("Kindly Enter second number");
let program= prompt("Kindly Enter a Symbol ( +, -, * . /) which operation you want");

switch(program){
    case program= '+':
        
        console.log(`Addition of two number are ${parseInt(num1)+parseInt(num2)}`);
        break;
    case program= '-':
        
        console.log("Subtraction of two number are", num1-num2);
        break;
    case program= '*':
        
        console.log("Multiplication of two number are", num1*num2);
        break;
    case program= '/':
        
        console.log("Division of two number are", num1/num2);
        break;
}

