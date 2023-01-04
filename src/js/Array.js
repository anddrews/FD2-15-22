//Array
const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.length);

function log(item, index, arr) {
    console.log(item, index, arr);
}

arr.forEach(log);

const newArr = arr.map(function(item, index, arr) {
    return {
        item,
        index,
        arr
    }
})

console.log(newArr);

const filteredArray = arr.filter(function(item) {
    return item % 2;
})

console.log(filteredArray);

const findArray = arr.find(function(item) {
    return false;
})

console.log(findArray);

const reduceArray = arr.reduce(function(acc, item) {
    console.log('inside', item);
    return acc += item;
})

console.log(reduceArray);

console.log(arr.at(-2)); // arr[arr.length - 2]

console.log(arr.slice(-2));

arr.sort(function(a, b) {
    return b - a;
})

console.log(arr);

arr.splice(2, 3, 'hello')

console.log(arr);

Array.prototype.log = function() {
    console.log('We are working with: ', this.toString());
}

arr.log();

