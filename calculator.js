


let display = document.getElementById('display');
let equation = "";

function number(num) {
    equation += num;
    display.textContent = equation;   //nombre
}

function operator(op) {
    equation += op;
    display.textContent = equation;   //operateur
}

function equal() {
    let result = eval(equation);
    display.textContent = result;   //resultat
    equation ="";
}


// bonus

function reset() {
    equation = "";
    display.textContent = "0";  
}

function clear() {
    equation = equation.slice(0, -1);
    display.textContent = equation;
}

function clear() {
    let input = input.slice(0, -1);
    display.value = input;
}
