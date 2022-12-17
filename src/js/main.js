// variable

// var
// let
// const

// public string boo = '';

var foo = 'string';
let boo = 5;
const tmp = true;

console.log(boo);
boo = 'hello world';
console.log(boo);
// tmp = 'hello world';
const smth = 'good';
foo = "I'm a good boy";
foo = 'I"m a good boy';
foo = `I'm 
a
 ${5 + 10} boy`;
foo = 1_921_458_745_842;

console.log(Math.MAX);

//null
// undefined;

console.log('Undefined: ', undef);

var undef;

console.log('Undefined: ', undef);

const obj = {
    prop: 10,
    prop2: 'hello world',
    prop3: {
        rr: {
            ff: {}
        }
    }
};

console.log(obj.prop);

// obj.prop = 'Hello world';
const field = 'Field name'

console.log(obj[field]);

const CONST_VALUE = 3.14;
const camelCase = {t: 3};

const arr = [1, '2', 3, {field: 'field'}, [10]];

console.log(arr.length);
arr.length = 20;
console.log(arr);

const user1 = {
    firstName: 'Petia',
    gender: 'male',
    age: 26
}

const user2 = {
    firstName: 'Alex',
    gender: 'male',
    age: 60
}

user2.age = 20;
user2.lastName = 'Gates';

delete user2.firstName;

const users = [user1, user2];

const user3 = user2;

user3.firstName = 'User3';

Object.freeze(user2);

user2.age = 30;
user2.newField = 'newField';
delete user2.gender;

Object.defineProperty(user1, 'newProp', {value: 'newProp', readOnly: true})

user1.newProp = 20;
Object.freeze(user1.age);
user1.age = 40;
console.log(user1);



