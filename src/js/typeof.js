function getType(param) {
    console.log(`Type of ${param} is ${typeof param}`);
}

getType(5);
getType('5');
getType(null);
getType(undefined);
getType({});
getType([]);
getType(true);
getType(function(){});


class Test {
    constructor() {

    }
}


const test = new Test();

console.log(typeof test);
console.log(test instanceof Test);