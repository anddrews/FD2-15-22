
console.log(tmp)
let tmp = 30;

(function() {
    // var c;
    console.log('c:', c);
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    var c = 0;
    console.log('c:', c);
    console.log(result);

    function foo() {
        var c = 20;
        console.log('c:', tmp);
    }
    foo();
    return result;
})(5, 5);

// console.log('c:', c);
