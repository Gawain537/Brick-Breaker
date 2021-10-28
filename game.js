import Paddle from './paddle.js';
import InputHandler from './input.js'
import Ball from './ball.js'

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        //array of objects; more scalable for updating and drawing
        this.gameObjects = [this.ball, this.paddle];

        new InputHandler(this.paddle);
    }

    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

    draw(context) {
        this.gameObjects.forEach(object => object.draw(context));
    }

}