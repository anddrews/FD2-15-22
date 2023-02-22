console.log('1');

setTimeout(() => {
    console.log('2');
}, 0);

Promise.resolve('3').then(foo => {
    console.log(foo);
    setTimeout(() => {
        console.log('from promise');
    })
});

console.log('4');

class Veichle {
    #vin;
    #color;

    constructor(vin, color) {
        this.#vin = vin;
        this.#color = color;
    }

    get vin() {
        return this.#vin;
    }

    set vin(vin) {
        this.#vin = vin;
    }

}

class Bus extends Veichle {

}
class Truck extends Veichle {

}

const bus = new Bus(123, 'green');

class Dealer {
    #veichles = [bus];

    getVeichleByVin(vin, type) {
        return new Promise((res, rej) => {
            const veichlesByType = this.#veichles.filter(item => type === 'bus'
                ? item instanceof Bus
                : item instanceof Truck);
            const veichle = veichlesByType.find(item => item.vin === vin);

            if(veichle) {
                res(veichle)
            } else {
                rej(new Error(`${type} with vin: ${vin} isn't in dealer`))
            }            
        });
    }
}

const dealer = new Dealer();

export {dealer}
