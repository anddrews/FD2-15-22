import { eventBus } from "./envent_bus.js";
import { ACTIONS } from "./constants.js";
import { login } from "./auth_firebase.js";

const loginHandler = (e) => {
    e.preventDefault();
    const {target: {
        elements: {
            email,
            password}}
    } = e;

    if(!email.value) {
        email.parentElement.classList.add('invalid');
        email.parentElement.dataset.error = 'Not empty!';

        return;
    }

    if(!email.value.match(/[a-z0-9]+@[a-z]+\.\w{2,4}/)) {
        email.parentElement.classList.add('invalid');
        email.parentElement.dataset.error = 'Wrong email format!';
        return;
    }

    if(!password.value) {
        password.parentElement.classList.add('invalid');
        password.parentElement.dataset.error = 'Not empty!';

        return;
    }

    login(email.value, password.value)
        .then(({user}) => {
            eventBus.dispatch(ACTIONS.login, user);
        })
        .catch((e) => {
            eventBus.dispatch(ACTIONS.logout);
            console.log(e)
        })
}

const onFieldChangeHandler = ({target}) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}

const loginForm = document.querySelector('#login');
const emailField = loginForm.querySelector('input[name="email"]');
const passwordField = loginForm.querySelector('input[name="password"]');


emailField.addEventListener('input', onFieldChangeHandler);
passwordField.addEventListener('input', onFieldChangeHandler);
loginForm.addEventListener('submit', loginHandler);
