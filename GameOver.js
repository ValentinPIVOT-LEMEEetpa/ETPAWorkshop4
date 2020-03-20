
//game.scene.start("GameOver");

class GameOver extends Phaser.Scene{

	constructor(){
	    super('GameOver');
	}

	preload(){
		this.load.image('background','assets/gameover/background.png');
		this.load.image('gameover','assets/gameover/gameover.png');
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
scene: [ GameOver ]
};

var game = new Phaser.Game(config);