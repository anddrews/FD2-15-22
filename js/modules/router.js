import { eventBus } from "./envent_bus.js";
import { ACTIONS } from "./constants.js";
import  { backet } from "../pages/backet.js";
import { userProfile } from "../pages/userProfile.js";

const root = document.querySelector('#root');
const routes = {
    '/backet': backet,
    '/user': userProfile
}

const changeRouteHandler = (path) => {
    const page = routes[path] || '';
    root.innerHTML = page;
}

const windowPopState = (e) => {
    const {target: {location: {pathname}}} = e;

    eventBus.dispatch(ACTIONS.changeRoute, pathname);
}

window.onpopstate = windowPopState;

eventBus.subscribe(ACTIONS.changeRoute, changeRouteHandler);