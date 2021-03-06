import { detectCollision } from '../src/collisionDetection.js';

export default class Ball {

    constructor(game) {
        this.image = document.getElementById('img_ball');

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.size = 16;
        this.reset();

        //console.log(this.game.paddle.position.y);
    }

    reset() {
        this.position = { x: 10, y: 400 };
        this.speed = { x: 4, y: -2 };
    }

    draw(context) {
        /*context.drawImage(this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size); */

            context.fillStyle = '#fff';
            context.beginPath();
            context.arc(this.position.x-8, this.position.y+8, 8, 0, 2 * Math.PI);
            context.fill();
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //wall on left or right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }
        //top
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
        //bottom
        if (this.position.y + this.size > this.gameHeight) {
            this.game.lives--;
            this.reset();
        }
        //paddle collision
        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = - this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }

}