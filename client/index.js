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
function preload() {
    this.objects = {}
    
}

function create() {
    this.cameras.main.backgroundColor.setTo(51, 51, 51);
    this.objects.rectangle = this.add.rectangle(0, 0, 148, 148, 0x6666ff);
    this.objects.t = 0;
}

function update() {
    this.objects.rectangle.y = 300 + Math.cos(this.objects.t) * 100;
    this.objects.rectangle.x = 300 + Math.sin(this.objects.t) * 100;
    this.objects.t += 0.02;
}