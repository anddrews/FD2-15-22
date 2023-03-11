import { showModal } from "./modules/modal.js"
import { setCount } from "./modules/backet.js";
import { getUser } from "./modules/auth_firebase.js";

getUser().then((currentUser) => {
    if (!currentUser) {
        showModal();
    }
})