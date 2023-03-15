import { eventBus } from "../modules/envent_bus.js";
import { ACTIONS } from "../modules/constants.js";

const linkClickHandler = (e) => {
    const {target: {href, dataset: {link}}} = e;
    
    if (link === 'internal') {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        history.pushState({}, document.title, path);
        eventBus.dispatch(ACTIONS.changeRoute, path);
    }
}

window.addEventListener('click', linkClickHandler);