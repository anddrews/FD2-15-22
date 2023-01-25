function logger(e, param) {
  e.preventDefault();
  console.log(param);
  console.log('logger', e.currentTarget.className, e.target.className);
}

function stopPropagation(e) {
  e.stopImmediatePropagation();
  console.log('stop immediate propagation');
}

function handler (param) {
 return function (e) {
    console.log('logger', param,  e.currentTarget.className, e.target.className);
  }
}

const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');

item1.addEventListener('click', logger);
item2.addEventListener('click', logger);
item3.addEventListener('click', logger);
item4.addEventListener('click', handler('smth'));
item4.addEventListener('click', stopPropagation);
item4.addEventListener('click', () => {console.log('second')});

const link = document.querySelector('a');

link.addEventListener('click', logger);

function doSmth() {
  console.log('done');
}

const doElseT = () => {
  console.log('do else');
}


const resizeHandler = (fn) => {
  const mobileSize = 500;
  let isMobile = window.innerWidth < mobileSize;
  
  return () => {
    if ((window.innerWidth > mobileSize && isMobile)
      || (window.innerWidth <= mobileSize && !isMobile)) {
      fn();
      isMobile = window.innerWidth <= mobileSize;
    }
  }
}

window.addEventListener('resize', resizeHandler(doSmth));
window.addEventListener('resize', resizeHandler(doElseT));

const header = document.querySelector('.item4 .header');

header.style.color = '#fff';

function getElement(tag, innerText, attributes) {
  const el = document.createElement(tag);
  Object.keys(attributes).forEach(attribute => {
    el[attribute] = attributes[attribute]
  })
  el.innerText = innerText || '';
  
  return el
}
function getCard({name, imgPath, price, count}) {
  const card = getElement('div','' , {className: 'card'} );
  const img = getElement('img', '', {src: imgPath, className: 'card__img'} );
  card.appendChild(img);
  const footer = document.createElement('div');
  footer.classList.add('card__footer');
  const priceEl = document.createElement('div');
  priceEl.classList.add('card__price');
  priceEl.innerText = price;
  const countEl = document.createElement('div');
  countEl.classList.add('card__count');
  countEl.innerText = count;
  const nameEl = document.createElement('div');
  nameEl.classList.add('card__name');
  nameEl.innerText = name;
  const inputEl = document.createElement('input');
  inputEl.type = 'number';
  inputEl.value = 2;
  inputEl.name = 'input-bbbb';
  inputEl.addEventListener('change', ({target: {value}}) => console.log(value))
  footer.append(priceEl, countEl, inputEl);
  card.appendChild(nameEl);
  card.appendChild(footer);
  return card;
}

const card = getCard({
  name: "Anddrews",
  imgPath: "/img/yoda.jpg",
  price: "100$",
  count: "20"
});
const card1 = getCard({
  name: "Andzdfsdfdrews",
  imgPath: "/img/yoda.jpg",
  price: "100$",
  count: "20"
});

document.body.append(card, card1);