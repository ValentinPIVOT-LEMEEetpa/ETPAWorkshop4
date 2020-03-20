
//game.scene.start("Pokemon");

class Pokemon extends Phaser.Scene{

	constructor(){
	    super('Pokemon');
	}

	preload(){
		this.load.image('background','assets/pokemon/background.png');
		this.load.image('arrivee','assets/pokemon/arrivée.png');
		this.load.image('maison','assets/pokemon/maisonpokemon.png');
		this.load.image('herbes','assets/pokemon/pokemonhautesherbes.png');
		this.load.image('lac','assets/pokemon/pokemonlac.png');
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
scene: [ Pokemon ]
};

var game = new Phaser.Game(config);