//Object

const obj1 = {
    a: 3
}

const obj2 = {
    a: 5,
    b: 10
}

const obj3 = Object.assign({}, obj2)
console.log(obj2 === obj3);

console.log(Object.keys(obj2));

Object.defineProperty(obj2, 'hello', {
    value: 'world',
    writable: false,
    configurable: false,
})

console.log(obj2);

obj2.hello = 'Night';
delete obj2.hello;

console.log(obj2);
