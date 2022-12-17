
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    
    if (i === 3) {
        continue;
    }
    console.log(i);
}

while(false) {
    console.log('while');
}

do {
    console.log(' do while');
} while(false)


try {
    console.log(foo);
} catch (e) {
    console.log(e);
}
        
console.log('after error');







(function() {
    console.log(c);
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    var c = 0;
    console.log(result);
    return result;
})(5, 5)







const tmp = function foo() {
    // foo();
    console.log('function expression');
}

// foo();
tmp();

const arrFunc = () => 3;

// console.log(func(2, 3, 3, 4, 4, 5));