const boo = 17;
// if (boo > 20) {
//     console.log(`${boo} is bigger 20`);
// } else if (boo > 5) {
//     console.log(`${boo} is bigger 5`);
// } else {
//     console.log(`${boo} is less 5`);
// }

switch(boo) {
    case 20: {
        console.log((`${boo} is 20`));
        break;
    }
    case 12: {
        console.log((`${boo} is 10`));
        break;
    }
    case 5: {
        console.log((`${boo} is 5`));
        break;
    }
    default: {
        console.log((`${boo} isn't  5 10 20`));
        break;
    }
}

const obj = {
    20: `${boo} is 20`,
    10: `${boo} is 10`,
    11: `${boo} is 11`,
    12: `${boo} is 12`,
    5: `${boo} is 5`,
}

obj['17'] = `${boo} is 17`;

console.log(obj[boo] || `${boo} isn't  5 10 20`);
function foo() {
    return 'foo';
}
const b = 5 > 3 ? foo() + ' fff' : 'false'
console.log(b);