const MULTYPLY = 10;

function multiply(param) {
    return param * MULTYPLY;
}

function calculate(a, b) {
    return multiply(a + b);
}

export {
    calculate,
    MULTYPLY,
}