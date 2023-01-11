const boo = {
    a: 1,
    b: 2,
    c: 3, 
    d: 4,
    e: {
        d: {
            f: 'foo'
        }
    }
}

const good = {
    discount: true,
    price: 1212,
    name: 'sdsfs',
}

const goods = [good];

const discounted = goods.filter(function(item) {
    return item.discount;
})

const doubleDiscount = goods.map(item => ({...item, cristmasDiscount: '15%'}))
console.log(doubleDiscount);




// const f = boo.e.d.f;
const {e: {d: { f }}} = boo;
const { a , ...rest } = boo;

console.log(a);
console.log(rest);

function foo(first, ...rest) {
    console.log(arguments);
    console.log('first', first);
    console.log('rest', rest);
}

foo(1, 2, 3, 4, 5);

const tmp = {w: 'w', ...boo, d: 'd'};
console.log(tmp);
const arrPrev = [1, 2, 3];
const arr = [5, 6, 7, ...arrPrev];

console.log(arr);
console.log(tmp === boo);
console.log(tmp.e === boo.e);

console.log(arr.reduce((acc, item) => acc + item))

const arrFun = () => {}
function arrFun2() {}


function pureFun(a, b) {
    return a + b;
}

let smth = 0;

function dirtyFn(a, b) {
    smth = a + b;

    return a + b;
}

 