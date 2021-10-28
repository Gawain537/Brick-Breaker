export default class Paddle {

    constructor(game) {

        this.gameWidth = game.gameWidth;

        this.width = 150;
        this.height = 30;

        this.maxSpeed = 10;
        this.speed = 0;

        this.positon = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10
        };

    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(context) {
        context.fillStyle = '#0ff';
        context.fillRect(this.positon.x, this.positon.y, this.width, this.height);
    }

    update(deltaTime) {

        this.positon.x += this.speed; //movement

        //boundaries
        if (this.positon.x < 0) this.positon.x = 0; //left

        if (this.positon.x + this.width > this.gameWidth) { //right
            this.positon.x = this.gameWidth - this.width;
        }

    }

}