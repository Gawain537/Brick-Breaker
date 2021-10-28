export default class Paddle {

    constructor(gameWidth, gameHeight) {

        this.width = 150;
        this.height = 30;

        this.positon = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };

    }

    draw(context) {
        context.fillStyle = '#0ff';
        context.fillRect(this.positon.x, this.positon.y, this.width, this.height);
    }

    update(deltaTime) {
        
        if (!deltaTime) {
            return;
        }

        this.positon.x += 5 / deltaTime;
    }

}