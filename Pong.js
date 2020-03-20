
//game.scene.start("pong");

class Pong extends Phaser.Scene{

	constructor(){
	    super('Pong');
	}

	preload(){
		this.load.image('background','assets/pong/background.png');
		this.load.image('raquettes', 'assets/pong/barre_pong.png');
		this.load.image('balle', 'assets/pong/balle_pong.png');
		this.load.image('arrivee', 'assets/pong/arrivée');
	};
	create(){

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
scene: [ Pong ]
};

var game = new Phaser.Game(config);
var text;