
//game.scene.start("Mario");

class Mario extends Phaser.Scene{

	constructor(){
	    super('Mario');
	}


	preload(){
		this.load.image('background','assets/mario/background.png');
		this.load.image('arrive','assets/mario/arrivée.png');
		this.load.image('grandnuage','assets/mario/nuagegrand.png');
		this.load.image('moyennuage','assets/mario/nuagemoyen.png');
		this.load.image('petitnuage','assets/mario/nuagepetit.png');
		this.load.image('tuyau','assets/mario/tuyaumario.png');
		this.load.image('bloc','assets/mario/blocmario.png');
		this.load.spritesheet('maro','assets/mario/mariospritesheet.png');
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
scene: [ Mario ]
};

var game = new Phaser.Game(config);