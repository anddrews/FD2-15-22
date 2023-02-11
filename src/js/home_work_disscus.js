class Example {
    #name = 'Name';
    #list = [];

    constructor(name, list) {
        this.#name = name;
        this.#list = list;
    }

    get name() {
        return this.#name;
    }

    get list() {
        return this.#list;
    }
}

const example = new Example('Test', [1, 2, 3]);
console.log(example.name);

class Bus {
    #vin;
    #color;
    #sitsCapacity;

    constructor(vin, color, sitsCapacity) {
        this.#vin = vin;
        this.#color = color;
        this.#sitsCapacity = sitsCapacity;
    }
}

class Dealer {
    #veichles = []; // Veichle -> Bus | Truck
    #title;

    constructor(title, veicles) {
        this.#title = title;
        if (veicles) {
            this.#veichles = veicles;
        }
    }

    addVeichle(veichle) {
        this.#veichles.push(veichle);
    }
}

const DATABASE = {
    dealer: {
        title: "Trucks & Buses",
    },
    trucks: [
        {
            vin: 1112,
            color: "Red",
            loadCapacity: 10,
        },
        {
            vin: 2332,
            color: "Yellow",
            loadCapacity: 20,
        },
        {
            vin: 5234,
            color: "Green",
            loadCapacity: 70,
        },
    ],
    buses: [
        {
            vin: 1112,
            color: "Green",
            sitsCapacity: 50,
        },
        {
            vin: 6543,
            color: "Yellow",
            sitsCapacity: 25,
        },
    ],
};


const bus = new Bus(
   'saefsfs',
    DATABASE.buses[0].color,
    DATABASE.buses[0].sitsCapacity
);
const bus1 = new Bus(
    DATABASE.buses[0].vin,
    DATABASE.buses[0].color,
    DATABASE.buses[0].sitsCapacity
);
const bus2 = new Bus(
    DATABASE.buses[0].vin,
    DATABASE.buses[0].color,
    DATABASE.buses[0].sitsCapacity
);
const bus3 = new Bus(
    DATABASE.buses[0].vin,
    DATABASE.buses[0].color,
    DATABASE.buses[0].sitsCapacity
);

const busses = [bus, bus1, bus3]
const dealer = new Dealer(DATABASE.dealer.title, [bus]);
const dealer1 = new Dealer(DATABASE.dealer.title, [bus]);

dealer.addVeichle({});
console.log(dealer);