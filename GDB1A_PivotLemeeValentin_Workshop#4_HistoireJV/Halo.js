
//game.scene.start("Halo");

class Halo extends Phaser.Scene{

	constructor(){
	    super('Halo');
	}

	preload(){
		this.load.image('background','assets/halo/background.png');
		this.load.image('montagne','assets/halo/montagne.png');
		this.load.image('arrivee','assets/halo/arrivée.png');
		this.load.image('balle','assets/halo/balle.png');
		this.load.spritesheet('masterchief','assets/halo/masterchiefspritesheet.png');
	};
	create(){
		this.add.image(400,300,'background');
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
scene: [ Halo ]
};

var game = new Phaser.Game(config);