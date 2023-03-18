import { eventBus } from "./modules/envent_bus.js";
import { ACTIONS } from "./modules/constants.js";
import { showModal } from "./modules/modal.js";
import {
    logout,
    getUser,
} from './modules/auth_firebase.js';
import "./modules/login_form.js";
import "./modules/backet.js";
import "./partials/link.js";
import "./modules/router.js";

const setUserStatus = (user) => {
    const loginBtn = document.querySelector('#loginBtn');
    const logoutBtn = document.querySelector('#logoutBtn');

    const userName = document.querySelector('#userName');
    if(user) {
            loginBtn.classList.remove('active');
            logoutBtn.classList.add('active');
            userName.innerText = user.displayName;
    } else {
        loginBtn.classList.add('active');
        logoutBtn.classList.remove('active');
        userName.innerText = '';
    }
}

eventBus.subscribe(ACTIONS.login, setUserStatus);
eventBus.subscribe(ACTIONS.logout, setUserStatus);


const loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', showModal);


const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', () => {
    logout();
})


async function initialize() {
    const {location: {pathname}} = window;
    eventBus.dispatch(ACTIONS.changeRoute, pathname);
    
    const currentUser = await getUser();
    setUserStatus(currentUser);
}

initialize();


// const onBeforeUnload = (e) => {
//     e.preventDefault();
//     e.returnValue = "Are you sure?";
    
//     return "Are you sure?";

// }

// window.addEventListener('beforeunload', onBeforeUnload);