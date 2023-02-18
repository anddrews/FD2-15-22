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
                    if(arr.length === count) {
                        res(results);
                    }
                    return data;
                })
                .catch(e => rej(e));
        }        
    });
}

// Promise.resolve(1);
// Promise.reject(1);
const prom1 = new Promise((res, rej) => { 
    for(let i = 0; i === Infinity; i++){}
    res(1)
    // setTimeout(() => res(1), 1500);
    })
const prom2 = new Promise((res, rej) => {
     setTimeout(() => res(2), 1000);
    })

all([prom1, prom2, prom2]).then(res => console.log(res))
    