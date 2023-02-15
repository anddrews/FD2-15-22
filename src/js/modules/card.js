function getCard(name, price) {
    const card = document.createElement('div');
    card.classList.add('container__row');
    card.innerHTML = `<div class="container__column">
            ${name}
        </div>
        <div class="container__column">
            ${price || 'Empty'}
        </div>
        <div class="container__column">
            Actions
        </div>`;

  return card;

}

export {
    getCard
}