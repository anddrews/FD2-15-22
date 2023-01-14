import { Calculator } from "./modules/calculator.js";


const calculator = new Calculator();

console.log('1', calculator.setSign('1'));
console.log('2', calculator.setSign('2'));
console.log('3', calculator.setSign('3'));
console.log('4', calculator.setSign('sdd'));
console.log('5', calculator.setSign('dd'));
console.log('5', calculator.setSign('+'));
console.log('6', calculator.setSign('-'));
console.log('7', calculator.setSign('*'));
console.log('8', calculator.setSign('/'));
console.log('9', calculator.setSign('1'));
console.log('10', calculator.setSign('0'));
console.log('11', calculator.setSign('0'));
console.log('12', calculator.calculate());
console.log('11', calculator.setSign('+'));
console.log('11', calculator.setSign('1'));
console.log('11', calculator.setSign('0'));
console.log('11', calculator.setSign('*'));
// console.log('12', calculator.calculate());