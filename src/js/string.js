const str = 'Pas sword123';

console.log(str.slice(-4));
console.log(str.substring(2, 7));
console.log(str.replace('s', 'LLL'));
console.log(str.replace(/s/g, 'LLL'));
console.log(str.replace(/s/g, function(substr, index) {
    return substr.repeat(index);
}));

console.log(str.replaceAll('l', 'LLL'));
console.log(str.includes('123'));
console.log(str.startsWith('Hel'));
console.log(str.endsWith('ld'));
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.split(' '));
console.log(str.split(''));
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log('*'.repeat(10));

console.log(str.match(/[a-zA-Z0-9]*/))


// /\d\d:\d\d/ /\S*@[a-z]*\.[a-z]{1,3}/



