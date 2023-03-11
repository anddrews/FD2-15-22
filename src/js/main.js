import {showModal, closeModal} from "./modules/modal.js";
import {
    createAccount,
    login,
    logout,
    getUser,
} from './modules/auth_firebase.js';
import {setCount, clear} from './modules/backet.js';

const CURRENT_USER = 'currentUser';

const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', showModal);

const loginForm = document.querySelector('#login');

const emailField = loginForm.querySelector('input[name="email"]');
const passwordField = loginForm.querySelector('input[name="password"]');

const onFieldChangeHandler = ({target}) => {
    target.parentElement.classList.remove('invalid');
    target.parentElement.dataset.error = '';
}

emailField.addEventListener('input', onFieldChangeHandler);
passwordField.addEventListener('input', onFieldChangeHandler);

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
        .then((user) => {
            const loginBtn = document.querySelector('#loginBtn');
            loginBtn.style.display = 'none';
            const userName = document.querySelector('#userName');
            userName.innerText = user.userName;
            localStorage.setItem(CURRENT_USER, JSON.stringify(user));
            closeModal();
            setCount();
        })
        .catch((e) => {
            console.log(e)
        })
}

loginForm.addEventListener('submit', loginHandler);

const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', () => {
    logout();
})

// getUser().then(currentUser => {
//     if (currentUser) {
//         const loginBtn = document.querySelector('#loginBtn');
//         loginBtn.style.display = 'none';
//         const userName = document.querySelector('#userName');
//         const {displayName: name} = currentUser;
//         userName.innerText = name;
//         setCount();
//     }

// })

async function start() {
    const currentUser = await getUser();
    
    if (currentUser) {
        const loginBtn = document.querySelector('#loginBtn');
        loginBtn.style.display = 'none';
        const userName = document.querySelector('#userName');
        const {displayName: name} = currentUser;
        userName.innerText = name;
        setCount();
    }
}

start();

