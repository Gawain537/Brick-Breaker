export default class Paddle {

    constructor(game) {

        this.gameWidth = game.gameWidth;

        this.width = 150;
        this.height = 30;

        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
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
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {

        this.position.x += this.speed; //movement

        //boundaries
        if (this.position.x < 0) this.position.x = 0; //left

        if (this.position.x + this.width > this.gameWidth) { //right
            this.position.x = this.gameWidth - this.width;
        }

    }

}