const backet = document.querySelector('.backet');

const setCount = () => {
    const backetItems = JSON.parse(localStorage.getItem('backet'));
    backet.setAttribute('data-count', backetItems.length)
}

const clear = () => {
    backet.removeAttribute('data-count');

}

export {
    setCount,
    clear
}
