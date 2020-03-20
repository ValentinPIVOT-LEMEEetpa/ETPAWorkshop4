
game.scene.start("main");

class main extends Phaser.Scene{
	constructor(){
	    super('main');
	}



	preload(){
		this.load.image('background','assets/main/background.png');
		this.load.image('titre','assets/main/ecrantitre.png');
	};
	create(){
		this.add.image(400,300,'background');
		this.add.image(1024,768,'titre');
	};
	update(){
	};
}

var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
scene: [main]
};

var game = new Phaser.Game(config);
var cursors;
var text;