function all(arr) {
    // return arr
    //     .reduce(
    //         (acc, item) => acc
    //         .then(data => item.then(v => [...data, v])),
    //         Promise.resolve([])
    //     )


    return new Promise((res, rej) => {
        const results = [];
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            arr[i]
                .then(data => {
                    results[i] = data;
                    count++;
                    if (arr.length === count) {
                        res(results);
                    }
                    return data;
                })
                .catch(e => rej(e));
        }
    });
}


async function allAwait(arr) {
    const results = [];
    for await(let prom of arr) {
        results.push(prom)
    }
    
    return results;
}

// Promise.resolve(1);
// Promise.reject(1);
const prom1 = new Promise((res, rej) => {
    for (let i = 0; i === Infinity; i++) { }
    res(1)
    // setTimeout(() => res(1), 1500);
})
const prom2 = new Promise((res, rej) => {
    setTimeout(() => res(2), 1000);
})

async function t() {
    const res = await allAwait([prom1, prom2])
    console.log('sss', res);
}

t();

// all([prom1, prom2, prom2]).then(res => console.log(res))

function sum(prom1, prom2) {
    return new Promise((res, rej) => {
        res()
    })
}

prom2
    .then(res => {
        console.log(res)
    })
    .catch(e => console.log(e));

async function fn() {
    try {
        const res = await prom2;
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

fn();


const onResolve = param => console.log(param);
const onReject = param => console.log(param);

const newProm = new Promise((res, rej) => {
    res('resolved'); //onResolve('resolved')
})

newProm.then(onResolve);