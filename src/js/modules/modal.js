const modal = document.querySelector('.modal');
const closer = modal.querySelector('.modal__close');

closer.addEventListener('click', () => {
    modal.classList.remove('active');
})

const showModal = () => {
    modal.classList.add('active');
}

const closeModal = () => {
    modal.classList.remove('active');
}

export {
    showModal,
    closeModal
}
