var observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio >= 0) {
        document.querySelector('.header')
        .classList.toggle('active')
    }
})

observer.observe(document.querySelector('.item'));