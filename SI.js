
//game.scene.start("SI");

class SI extends Phaser.Scene{

	constructor(){
	    super('SI');
	}

	preload(){
		this.load.image('background','assets/si/background.png');
		this.load.image('arrive','assets/si/arrivée.png');
		this.load.image('spaceinvaders','assets/si/spaceinvaders.png');
		this.load.image('plateforme','assets/si/barre.png');

	};
	create(){

	};;
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
scene: [ SI ]
};

var game = new Phaser.Game(config);