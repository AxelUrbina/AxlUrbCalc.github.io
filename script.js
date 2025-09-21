const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const resultInput = document.getElementById('result');
const currentOperationSpan = document.getElementById('currentOperation');
const buttons = document.querySelectorAll('.buttons-sidebar button');


const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) return 'Error: Div por 0';
        return a / b;
    },
    modulus: (a, b) => a % b,
    power: (a, b) => Math.pow(a, b),
};


const operationSymbols = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
    modulus: '%',
    power: 'xⁿ',
};


buttons.forEach(button => {
    button.addEventListener('click', () => {

        const num1 = parseFloat(firstNumberInput.value);
        const num2 = parseFloat(secondNumberInput.value);
        

        const operationType = button.getAttribute('data-operation');


        currentOperationSpan.textContent = operationSymbols[operationType];


        if (isNaN(num1) || isNaN(num2)) {
            resultInput.value = 'Números inválidos';
            return;
        }


        const result = operations[operationType](num1, num2);
        

        resultInput.value = result;
    });
});