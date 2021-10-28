import Paddle from './paddle.js';

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");



const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

context.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(context);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime; //calculates time past
    lastTime = timestamp;

    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();