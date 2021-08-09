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
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
});
function preload ()
{
}
var t
var r1
function create ()
{
    this.cameras.main.backgroundColor.setTo(51, 51, 51); 
    r1 = this.add.rectangle(0, 0, 148, 148, 0x6666ff);

    t = 0;
}

function update ()
{
    r1.y = 300 + Math.cos(t) * 100;
    r1.x = 300 + Math.cos(t) * 100;
    t+=0.02;
}