import { cardsMock } from "./modules/cardsMock.js";
import { Renderer } from "./modules/renderer.js";

const root = document.querySelector('#root');

const renderer = new Renderer(root);

renderer.render();


renderer.renderCards([cardsMock[0]]);
renderer.renderCards(cardsMock);

