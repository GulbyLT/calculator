let currentInput = "";
let storedNumber = "";


function operate(a, b, op){
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
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Error: Unknown operator";
    }
}

let numberButton = document.getElementById("numberButtons");
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
screen.textContent = "8445";

let cButton = document.querySelector(".operationButton[value='C']");
cButton.addEventListener("click", () => {
    screen.textContent = "";
    currentInput = "";
    storedNumber = "";
    operator = "";
});

let operationButtons = document.querySelectorAll(".operationButton");
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.value === "+"){
            operator = "+";
            storedNumber = currentInput;
            currentInput = "";
            screen.textContent+= " + ";



        }
    });
});
            
let equalsButton = document.querySelector(".operationButton[value='=']");
equalsButton.addEventListener("click", () => {
    parseFloat(currentInput);
    parseFloat(storedNumber);
    console.log("current input is " + currentInput);
    console.log("stored number is " + storedNumber);
    let result = operate(storedNumber, currentInput, operator);
    screen.textContent = result;
    currentInput = result;
    storedNumber = "";
    operator = "";

}
);

