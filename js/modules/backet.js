import { eventBus } from "./envent_bus.js";
import { ACTIONS } from "./constants.js";

const backet = document.querySelector('.backet');

const setCount = () => {
    const backetItems = JSON.parse(localStorage.getItem('backet'));
    backet.setAttribute('data-count', backetItems.length)
}

const clear = () => {
    backet.removeAttribute('data-count');

}

eventBus.subscribe(ACTIONS.login, setCount);
eventBus.subscribe(ACTIONS.logout, clear);

export {
    setCount,
    clear
}
