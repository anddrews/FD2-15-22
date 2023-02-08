import View from "./modules/view.js";
import {Calculator} from "./modules/calculator.js";
import Controller from "./modules/controller.js";

const buttons = ['-', '+','*', '/'];

const root = document.querySelector('.root');
const view = new View(buttons, root);
const calculator = new Calculator();
const controller = new Controller(calculator, view);

controller.initialize();


const obj = {
    name: 'Alex',
}

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
}

const user = new User('John');
const user2 = new UserClass('Alex');
user.name = 'Bob';
user2.setName('Bob');
console.log(user);
console.log(user2);
user.getName();









