import { themes } from "./themes";
import { css } from "./styles/style.css";

let currentTotal = 0; 
let buffer = "0"; 

let previousOperator = null;

const calcScreen = document.querySelector(".calc-numbers");

// ! Make a click event for calculator buttons:
// ? Basic operators:
document.querySelector('.calculator-buttons')
            .addEventListener("click", function(event) {
                buttonClick(event.target.innerHTML);
});
// ? Other operators: 
document.querySelector('.other-operators')
            .addEventListener('click', function(event) {
                buttonClick(event.target.innerHTML)
            })



function buttonClick(value) {
    // ? If the clicked button is not a number, use the operator logic
    if(isNaN(parseInt(value))) {
        handleOperator(value);
    }
    else {
        handleNumber(value);
    }

    rerenderScreen();

}

function handleOperator(value){
    switch (value){
        case "AC":
            buffer = "0";
            currentTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if(previousOperator === null) return;
            
            flushOperation(parseInt(buffer));
            buffer = "" + currentTotal;
            previousOperator = null;
            currentTotal = 0;
            break;
        case "←":
            if(buffer.length === 1) { 
                buffer = "0";
            }
            else {
                buffer = buffer.substring(0,buffer.length-1); 
            }
            break;
            
        default:
            handleMath(value);
            break;
    }
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleMath(value){
    let internalBuffer = parseInt(buffer);
    
    if (currentTotal === 0){
        currentTotal = internalBuffer;
    }
    else {
        flushOperation(internalBuffer);
    }

    previousOperator = value;

    buffer = "0";
}   

function flushOperation(internalBuffer){
    if(previousOperator === "+"){
        currentTotal += internalBuffer;
    }
    else if(previousOperator === "-"){
        currentTotal -= internalBuffer;
    }
    else if(previousOperator === "x"){
        currentTotal *= internalBuffer;  
    }
    else if(previousOperator === "x2") {
        internalBuffer = Math.pow(internalBuffer, 2)
        console.log(internalBuffer);
    }
    else {
        currentTotal /= internalBuffer;
    }
}


function rerenderScreen() {
    calcScreen.value = buffer;
}
