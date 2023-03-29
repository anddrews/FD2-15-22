
type TGood = {
    name: string;
    price: number;
    deliveryTime: number;
    flag: boolean;
    obj: Record<string, string>
    getName: () => string
}

type TExtendedGood = TGood | IFriend | number

type TNumbers = 'first' | 'second';

type TAddress = {
    city: string;
    street: string;
    building: number;
}

interface IPartner {
    name: string;
    address: TAddress | null;
    getName: () => string;
}

interface IFriend extends IPartner {
    getAddress: () => string;
}

class Partner implements IPartner {
    name = '';
    address = null;

    getName() {
        return this.name + this.address
    }
}

const sum = (a: number, b: number): number => {
    return a + b;
}

type TSumParams = Parameters<typeof sum>

const params: TSumParams = ['2', 3]

sum(...params);

const good: TGood = {
    name: 'name',
    price: 100,
    deliveryTime: 2,
    flag: true,
    obj: {
        test: 'dtdtdt',
        test2: 'dd'
    }
}

sum(1, 2);

sum('a');