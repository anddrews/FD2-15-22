import { cardsMock } from "./modules/cardsMock.js";
import { Renderer } from "./modules/renderer.js";

const root = document.querySelector('#root');

const renderer = new Renderer(root);

// renderer.render();
// renderer.renderCards([cardsMock[0]]);
// renderer.renderCards(cardsMock);

const canvas = document.querySelector('.canvas');

const ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(200,0,0)";

ctx.fillRect (10, 10, 55, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.strokeRect (30, 30, 55, 50);
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillText("Hello world", 10, 50);
