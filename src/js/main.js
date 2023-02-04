import Calculator from "./modules/view.js";

const buttons = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0 , ',', '=', '/'];
const root = document.querySelector('.root');
const calculator = new Calculator(buttons, root);

calculator.render();
calculator.setDisplay('1000');