import Game from "/src/game.js";

export default class InputHandler {

    constructor(paddle, game) {
        //player movement
        document.addEventListener("keydown", event => {

            switch (event.keyCode) {
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;
                case 27:
                    game.togglePause();
                    break;
                case 32:
                    game.start();
                    break;
            }

        });
        //stop player movement
        document.addEventListener("keyup", event => {

            switch (event.keyCode) {
                case 37:
                    if (paddle.speed < 0) //prevents stutter when switching keys
                        paddle.stop();
                    break;
                case 39:
                    if (paddle.speed > 0) //likewise
                        paddle.stop();
                    break;
            }

        });

    }

}