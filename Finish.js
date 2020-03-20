
//game.scene.start("Finish");

class Finish extends Phaser.Scene{

	constructor(){
	    super('Finish');
	}

	preload(){
		this.load.image('background','assets/finish/background.png');
		this.load.image('win','assets/finish/youwin.png');
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
scene: [ Finish ]
};

var game = new Phaser.Game(config);