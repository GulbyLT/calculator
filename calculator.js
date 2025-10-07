function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

let num1, num2;
let operator;

function operate(a, b, op){
    num1 = parseFloat(a);
    num2 = parseFloat(b);
    
    switch(op){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}