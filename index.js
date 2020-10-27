const interface = require('readline-sync');

var calculator = requiere('./app/calculator');

const firstNumber = interface.question("Deme el primer número");
const secondNumber = interface.question("Deme el segundo número");

var a = parseFloat(firstNumber);
var b = parseFloat(secondNumber);

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.Minus(a,b)}`);
console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} / ${b} = ${calculator.divide(a,b)}`);