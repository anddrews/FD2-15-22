var observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio >= 0) {
        document.querySelector('.header')
        .classList.toggle('active')
    }
})

observer.observe(document.querySelector('.item'));

var item = {
    id: 1,
    name: 'Iphone 14'
}

var item2 = {
    id: 2,
    name: 'Iphone 15'
}

localStorage.setItem('backet', JSON.stringify([item]));

const backet = JSON.parse(localStorage.getItem('backet'));

backet.push(item2);
localStorage.setItem('backet', JSON.stringify(backet));

