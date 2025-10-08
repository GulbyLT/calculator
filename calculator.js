let currentInput = ""; //actively input number
let storedNumber = ""; //first number stored when operator is pressed
result = null; //result of operation


function operate(a, b, op){ //performs operation based on operator
    num1 = parseFloat(a);
    num2 = parseFloat(b);
    
    switch(op){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if(num2 === 0){
                screen.textContent = "Error: Div0";
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Error: Unknown operator";
    }
}

let numberButton = document.getElementById("numberButtons"); //creates number buttons 0-9

for(let i = 9; i >= 0 ; i--){
    let button = document.createElement("button");
    button.textContent = i;
    button.value = i;
    button.classList.add("numberButton");
    numberButton.appendChild(button);
    button.addEventListener("click", () => {
        screen.textContent += button.value;
        currentInput += button.value;
    });
}

let screen = document.getElementById("screen");
screen.textContent = "";

let cButton = document.querySelector(".operationButton[value='C']"); //clears screen, resets all variables
cButton.addEventListener("click", () => {
    screen.textContent = "";
    currentInput = "";
    storedNumber = "";
    operator = "";
});

let operationButtons = document.querySelectorAll(".operationButton");
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(!storedNumber){ // if no first number is stored, allow using operators
        if(button.value === "+"){
            operator = "+";
            storedNumber = currentInput;
            currentInput = "";
            screen.textContent+= " + ";
        } else if(button.value === "-"){
            operator = "-";
            storedNumber = currentInput;
            currentInput = "";
            screen.textContent+= " - ";
        } else if(button.value === "*"){
            operator = "*";
            storedNumber = currentInput;
            currentInput = "";
            screen.textContent+= " * ";
        } else if(button.value === "/"){
            operator = "/";
            storedNumber = currentInput;
            currentInput = "";
            screen.textContent+= " / ";
        }
    } else {
        let result = operate(storedNumber, currentInput, operator); //if first number is stored, calculate result and allow chaining operations
        screen.textContent = result + " " + button.value + " "; // mimics equals button press followed by operator press
        currentInput = "";
        storedNumber = result;
        operator = button.value;
        screen.textContent = result + " " + button.value + " "; 
    }

    });
});
            
let equalsButton = document.querySelector(".equalsButton");  //calculates result when equals button is pressed
equalsButton.addEventListener("click", () => {
    if(!storedNumber || !currentInput || !operator) return; //if any of the required variables are missing, do nothing
    parseFloat(currentInput);
    parseFloat(storedNumber);
    console.log("operator is " + operator);
    let result = operate(storedNumber, currentInput, operator);
    if(currentInput === "0" && operator === "/"){
        screen.textContent = "Error: Div0"; //division by zero error handling
        currentInput = "";
        storedNumber = "";
        operator = "";
        return;
    } else {
    console.log("result is " + result);
    result = Math.round(result * 100) / 100; //rounds to 2 decimal places
    console.log("rounded result is " + result);
    screen.textContent = result;
    currentInput = result;
    storedNumber = "";
    operator = "";
    };

}
);

