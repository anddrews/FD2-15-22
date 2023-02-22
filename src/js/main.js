import { request } from './modules/request.js';
import { getCard } from './modules/card.js';

let items = [];
const container = document.querySelector('.container__items');

container.addEventListener('click', ({target}) => {
    const {id: action, dataset: { id }} = target;

    if (action === 'delete') {
        target.parentElement.parentElement.remove();
        const index = items.findIndex(({id}) => id === target.id);
        items.splice(index - 1, 1);
        // items = items.filter(item => item.id !== id);
    }



    console.log(action, id)
})

const renderItems = (items) => {
    const elements = items.map(({ name, data, id }) => {
        let price;

        if (data && (data.Price || data.price)) {
            price = data.Price || data.price;
        }
        return getCard(name, price, id);
    });
    container.replaceChildren(...elements);
}

request('objects')
    .then(data => {
        items = data;
        renderItems(items);
    })

const form = document.querySelector('#addItem');

function onSubmit(e) {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const price = e.target.elements.price.value;

    request(
        'objects',
        'POST',
        {
            name,
            data: {
                price
            }
        }).then(item => {
            e.target.elements.name.value = '';
            e.target.elements.price.value = '';
            items.push(item);
            renderItems(items);
        })

}

form.addEventListener('submit', onSubmit);


const editBtns = container.querySelectorAll('#edit');

console.log('buttons', editBtns);

editBtns.forEach(btn => {
    btn.addEventListener('click', () => console.log('edit', btn.dataset.id))
})


