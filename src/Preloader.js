Piggy.Preloader = function(game){
	// define width and height of the game
	Piggy.GAME_WIDTH = 640;
	Piggy.GAME_HEIGHT = 960;
};
Piggy.Preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		//this.preloadBar = this.add.sprite((Piggy.GAME_WIDTH-311)/2, (Piggy.GAME_HEIGHT-27)/2, 'preloaderBar');
		//this.load.setPreloadSprite(this.preloadBar);
		// load images
		//this.load.image('background', 'img/background.png');
		// load spritesheets
		//this.load.spritesheet('Piggy', 'img/candy.png', 82, 98);
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};