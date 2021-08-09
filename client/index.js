// start the websocket, automatically connects to the current URL + the port
var socket = io();

var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    parent: "gameDiv",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
});