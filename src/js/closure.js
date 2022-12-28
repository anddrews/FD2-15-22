function createCounter() {
    let count = 0;

    return function() {
        console.log(++count);
    }
}

const counter = createCounter();
const counter1 = createCounter();


counter(); // -> 1
counter(); // -> 2
counter(); // -> 3
count = 15;
counter(); // -> 4
counter(); // -> 5
counter1(); // -> 1
counter1(); // -> 2
counter1(); // -> 3


(function() {
    let boo = 10;
    
    function foo() {
        console.log('nameSpace1', boo);
    }

    window.nameSpace1 = { foo, boo };
})();


(function() {
    let boo = 20;

    function foo() {
        console.log('nameSpace2', boo);
    }

    window.nameSpace2 = { foo, boo };
})();

// nameSpace1();
// nameSpace2();

window.nameSpace1.foo();
window.nameSpace2.foo();
console.log(window.nameSpace1.boo);

function odd() {
    //...
}


(function($, s, d, f) {
    //....
    }
)('$', 5, 5, 5);
