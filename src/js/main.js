function doSmth(v, stage) {
    const tmp = 10;
    const res = 10 + v;
    console.log(stage);
    return;
}

// doSmth(5, 'Start');
// intervalId = setTimeout(() => {console.log('from timout')}, 5000);
// doSmth(15, 'Finish');

// for (var i = 0; i < 5; i++) {
//     setTimeout(function(a) {console.log(a)}, 100, i);
// }

let counter = 0;
const el = document.querySelector('.banner');
const close = document.querySelector('.close');
let id;

function showBanner() {
    el.classList.add('active');
    id = setTimeout(() => {
        el.classList.remove('active');
        // show next adv
    }, 3000);
}

// const banner = setInterval(() => {
//     showBanner();
// }, 7000);

// close.addEventListener('click', () => {
//     clearInterval(banner);
//     clearTimeout(id);
// })

const prom = new Promise((resolve, reject) => {
    // setTimeout(() => reject(), 300)
});

function res(a) {
    console.log(a || 'Resolve');
}

function rej() {
    console.log('Reject');
    return 'from catch';
}
// prom.then(res).then(res).catch(rej).then(res);

const makeRequest = () => {
    try {
        fetch('https://api.restful-api.dev/objects')
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(() => 'No internet connection')
            .finally(() => {
                console.log('finally')
            })
    } catch(e) {
        
    } finally {

    }

}

const customFetch = (url) => new Promise((res, rej) => {
    //... make api call
    // res(//data)
    // rej(//error)
})

// console.log('before fetch');
// makeRequest();
// console.log('after fetch');

// close.addEventListener('click', makeRequest);

let resolver;
let rejecter;

const resEl = document.querySelector('.resolve');
const rejEl = document.querySelector('.reject');

const promise = new Promise((resolve, reject) => {
    resolver = () => {
        setTimeout(() => resolve('Resolve'), 100);
    }
    rejecter = () => reject('Error');
})

resEl.addEventListener('click', resolver);
rejEl.addEventListener('click', rejecter);

// promise
// .then((t) => {
//     console.log('then callback');
//     console.log(t);

//     return 1;
// })
// .then((t) => {
//     console.log('then callback');
//     console.log(t);
//     return 2;
// })
// .then((t) => {
//     console.log('then callback');
//     console.log(t)
//     return 3;
// })
// .catch(t => {
//     console.log('catch callback');
//     console.log(t);

//     return 'catch'
// })
// .then((t) => {
//     console.log('then callback');
//     console.log(t)
//     return 5;
// })

console.log(promise);

Promise.resolve('resolve').then(console.log);
Promise.reject('err').catch(console.log);
Promise.all([promise, Promise.resolve('second promise')])
.then((arr) => {

    console.log(arr)
})
.catch(console.log)
Promise.race([promise, Promise.resolve('second promise')])
.then((arr) => {

    console.log(arr)
})
.catch(console.log)
Promise.allSettled([promise, Promise.reject('second promise')])
.then((arr) => {
    console.log('all settled')
    console.log(arr)
})
.catch(console.log)

const prom1 = Promise.resolve(1);
const prom2 = Promise.resolve(2);

const prom3 = new Promise((res) => {
    setTimeout(() => {
        res(3);
    }, 1000);
})

function all(arr) {
    return Promise.all(arr);
}


all([prom1, prom2]).then(([res1, res2]) => {
    console.log(res1, res2); // 1 2
})






