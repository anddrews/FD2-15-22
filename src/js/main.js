const btnId = document.getElementById('button');
const btnTag = document.getElementsByTagName('button');
const btnClass = document.getElementsByClassName('button test');

// console.log(btnId);
// console.log(btnTag);
// console.log(btnClass);

const btnQuerySelector = document.querySelector('.button.test');
const span = btnQuerySelector.querySelector('span');
const btnQuerySelectorAll = document.querySelectorAll('.button');

// console.log(btnQuerySelector);
// console.log(btnQuerySelectorAll);


// btnQuerySelector.style.backgroundColor = '#ad2345';
btnQuerySelector.classList.toggle('smth');

const newChildren = document.createElement('span');
const newEl = document.createElement('span');

newEl.textContent = 'alert("hello world")';
newEl.appendChild(newChildren);
newEl.classList.add('boo');
newEl.id = 'fghfkhfk';

const body = document.querySelector('body');
btnQuerySelector.insertBefore(newEl, span);

const textarea = document.querySelector('.textarea');

const nodeArr = [];

const fragment = document.createDocumentFragment();

for(let i = 0; i < 5; i++) {
  let el = document.createElement('span');
  el.innerText = 'test';
  const r = fragment.appendChild(el);
}

textarea.append('fragment');






