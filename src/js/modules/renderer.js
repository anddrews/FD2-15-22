import { getCard } from './cardRenderer.js'

export class Renderer {
  #root;
  #innerDOM;
  #cardsContainer;

  constructor(root) {
    this.#root = root;
    const rootEl = document.createElement('div');
    this.#innerDOM = rootEl;

  }

  render() {
    this.#root.replaceChildren(this.#innerDOM);
  }

  append(el, className) {
    const parent = this.#innerDOM.querySelector(className) || this.#innerDOM;

    parent.appendChild(el);

    this.render();

  }

  renderCards(cards) {
    if (!this.#cardsContainer) {
      this.#cardsContainer = document.createElement('div');
      this.#innerDOM.appendChild(this.#cardsContainer);
    }
    
    const cardsEl = cards.map(card => getCard(card));

    this.#cardsContainer.replaceChildren(...cardsEl);
    this.render();
  }
}