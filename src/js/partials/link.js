import { eventBus } from "../modules/envent_bus.js";
import { ACTIONS } from "../modules/constants.js";
import { showModal } from "../modules/modal.js";

const linkClickHandler = (e) => {
    const {target: {href, dataset: {link}}} = e;
    
    if (link === 'internal') {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        history.pushState({}, document.title, path);
        eventBus.dispatch(ACTIONS.changeRoute, path);
    }
}


const withCheckChanges = fn => e => {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    if (path === '/user') {
        showModal();
        fn(e);
    } else {
        fn(e);
    }
}

window.addEventListener('click', linkClickHandler);
