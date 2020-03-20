
//game.scene.start("Pacman");

class Pacman extends Phaser.Scene{

	constructor(){
	    super('Pacman');
	}

	preload(){
		this.load.image('background','assets/pacman/background.png');
		this.load.image('collectible','assets/pacman/collectible2.png');
		this.load.image('pacman','assets/pacman/pacman.png');
		this.load.image('fantomeB','assets/pacman/pacmanfantomeB.png');
		this.load.image('fantomeR','assets/pacman/pacmanfantomeR.png');
		this.load.image('fantomeRo','assets/pacman/pacmanfantomeRo.png');
		this.load.image('fantomeO','assets/pacman/pacmanfantomeO.png');
		this.load.image('sol','assets/pacman/solpacman.png');
		this.load.image('arrive','assets/pacman/arrivée.png');
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
scene: [ Pacman ]
};

var game = new Phaser.Game(config);