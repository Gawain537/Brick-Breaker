import Game from '../src/game.js';

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

context.rect(0, 0, GAME_WIDTH, GAME_HEIGHT);
context.fillStyle = '#000';
context.fill();

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime; //calculates time past
    lastTime = timestamp;

    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear canvas

    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);