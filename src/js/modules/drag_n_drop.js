let currentElement;

function onDragStart(e) {
    currentElement = this;
}

function onDrop(e) {
    if(this !== currentElement) {
        this.appendChild(currentElement);
    }

    return false;
}

const items = document.querySelectorAll('.dragndrop .item');

items.forEach(item => {
    item.addEventListener('dragstart', onDragStart);
    item.addEventListener('drop', onDrop);
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
})
