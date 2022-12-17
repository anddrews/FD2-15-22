
function foo(a, b) {
    console.log(this, a, b);
}

// foo();

const boo = {
    a: 3,
    b: foo
}

// boo.b();

const r = boo.b;

r();

r.call({boo: 'boo'}, 'b', 'd')

const fnBind = r.bind({boo: 'boo'})

fnBind('s', 'f');

const btn = document.querySelector('#button');

const obj = {
    name: 'Name',
    handler: function() {
        console.log(this.name)
    }
}

btn.addEventListener('click', obj.handler.bind(obj));







// class User {
//     static boo = function () {
//         console.log('static method');
//     } 

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         // this.greeting = function() {console.log('method from object')}
//     }

//     greeting() {
//         console.log(`Hello ${this.name}`);
//     }

//     getAge() {
//         return this.age;
//     }

// }

// const user = new User('Bill', 37);
// const user2 = new User('Jane', 23);

// console.log(User.boo());
// user.greeting();
// user2.greeting();


// class Good {
//     constructor(name, amount) {
//         this.name = name;
//         this.amount = amount;
//     }

//     getName() {
//         return this.name;
//     }

//     getAmount() {
//         return this.amount;
//     }

//     icrease(num) {
//         this.amount += num;
//     }

//     sale(num) {
//         if( this.amount > num) {
//             this.amount -= num;
//         } else {
//             throw Error(`There is not enough ${this.name}`)
//         }
//     }
// }

// const good = {
//     name: 'book',
//     amount: 10
// }


// class Animal {
//     constructor(name, temperature) {
//         this.name = name;
//         this.temerature = temperature;
//     }

//     sayHello() {
//         console.log(`Hello I'm ${this.name}`);
//     }

//     getTemperature() {
//         console.log(this.temerature);
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, temerature) {
//         super(name, temerature);
//     }

//     jump() {
//         console.log('Jump!');
//     }
// }

// class Dog extends Animal {
//     constructor(name, temerature) {
//         super(name, temerature);
//     }

//     run() {
//         console.log('Run!');
//     }

//     sayHello() {
//         console.log("Hi! I'm a dog");
//         super.sayHello();
//     }
// }

// const dog = new Dog('Diggy', 42);
// const rabbit = new Rabbit('Bunny', 25);

// console.log(dog)
// console.log(rabbit)

// dog.sayHello();
// rabbit.sayHello();

// dog.run();
// rabbit.jump();

// dog.getTemperature();

// function AnimalProto(name, temperature) {
//     this.name = name;
//     this.temerature = temperature;

//     return this;
// }

// AnimalProto.prototype.sayHello = function() {
//     console.log(`Hi my name's ${this.name}`);
// }

// const tmp = new AnimalProto('Bob', 42);

// console.log(tmp)
// tmp.sayHello();

// Array.prototype.toString = function() {
//     console.log(`This is an array `)
// }


