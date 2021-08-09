import Phaser from "phaser";
export default class Menu extends Phaser.Scene {
    constructor() {
        super();
    }
    preload() {
        this.objects = {}
    }

    create() {
        this.cameras.main.backgroundColor.setTo(51, 51, 51);
        this.objects.rectangle = this.add.rectangle(0, 0, 148, 148, 0x6666ff);
        this.objects.titleText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "💣 BOMB THAT! 💣", {
            fontSize: 50,
            padding: { x: 100, y: 100 }
        }).setOrigin(0.5).setShadow(0, 0, "black", 30, true, true);
        this.objects.t = 0;
    }

    update() {
        this.objects.rectangle.y = 300 + Math.cos(this.objects.t) * 100;
        this.objects.rectangle.x = 300 + Math.tan(this.objects.t) * 100;
        this.objects.t += 0.02;
    }
}