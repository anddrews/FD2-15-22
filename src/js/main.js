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
const close = el.querySelector('.close');
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

close.addEventListener('click', () => {
    clearInterval(banner);
    clearTimeout(id);
})

const prom = new Promise((resolve, reject) => {
    setTimeout(() => reject(), 300)
});

function res(a) {
    console.log(a || 'Resolve');
}

function rej() {
    console.log('Reject');
    return 'from catch';
}
prom.then(res).then(res).catch(rej).then(res)




