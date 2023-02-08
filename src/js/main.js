import View from "./modules/view.js";
import {Calculator} from "./modules/calculator.js";
import Controller from "./modules/controller.js";

const buttons = ['-', '+','*', '/'];

const root = document.querySelector('.root');
const view = new View(buttons, root);
const calculator = new Calculator();
const controller = new Controller(calculator, view);

// controller.initialize();


const obj = {
    _name: 'Alex',
    get name() {
        return this._name;
    },
    set name(name) {
        this._name = name + ' smth';
    }
}

obj.name = "Jhon";

// console.log(obj);

// obj.getName();

function User(name) {
    this.name = name;
}

User.prototype.getName = function() {
    console.log(this.name);
}

class UserClass {
    #name;
    constructor(name) {
        this.#name = name;
    }

    setName(name) {
        this.#name = name;
    }

    // get name() {
    //     return this.#name.toUpperCase();
    // }

    set name(name) {
        if (typeof name !== 'string') {
            throw new Error('Name should be a string value');
        }

        this.#name = name;
    }

    greeting() {
        console.log(`Hi!, I'm ${this.#name}`);
    }
}

class Student extends UserClass {
    #course;
    constructor(name, course) {
        super(name);
        this.#course = course;
    }

    get name() {
        return `Student name ${super.name}`;
    }

    set name(name) {
        super.name = name;
    }

}

// class Teacher {
//     #user;
//     #topic;

//     constructor(name, topic) {
//         this.#user = new UserClass(name);
//         this.#topic = topic;
//     }

//     get name() {
//         return this.#user.name;
//     }

//     set name(name) {
//         this.#user.name = name;
//     }
    
// }

class Teacher extends UserClass {
    #topic;
    constructor(name, topic) {
        super(name);
        this.#topic = topic;
    }

    get name() {
        return super.name;
    }

    set name(name) {
        super.name = name;
    }
}


const student = new Student('Alex', 5);
const user = new UserClass("Alex");

console.log(student);
console.log(student.name);

student.name = '121231';
student.setName('ererer');
student.greeting();

console.log(student instanceof UserClass)






