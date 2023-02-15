import {request} from './modules/request.js';
import {getCard} from './modules/card.js';

let items = [];
const container = document.querySelector('.container');

request('objects')
.then(data => {
    items = data;
    items.forEach(({name, data}) => {
        let price;

        if (data && (data.Price || data.price)) {
            price = data.Price || data.price;
        }
        const card = getCard(name, price);
        container.appendChild(card);
    });
})
