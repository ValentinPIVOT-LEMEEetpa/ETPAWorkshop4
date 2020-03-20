
//game.scene.start("Sonic");

class Sonic extends Phaser.Scene{

	constructor(){
	    super('Sonic');
	}

	preload(){
		this.load.image('background','assets/sonic/background.png');
		this.load.image('plateforme','assets/sonic/sonicplateform.png');
		this.load.image('arrivee','assets/sonic/arrivée.png');
		this.load.spritesheet('sonic','assets/sonic/sonicspritsheet.png');
		this.load.spritesheet('boule','assets/sonic/sonicspritsheetboule.png');

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
scene: [ Sonic ]
};

var game = new Phaser.Game(config);