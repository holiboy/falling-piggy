Piggy.MainMenu = function(game){};
Piggy.MainMenu.prototype = {
	create: function(){
		// display images
		//this.add.sprite(0, 0, 'background');
		//this.add.sprite(-130, Piggy.GAME_HEIGHT-514, 'monster-cover');
		//this.add.sprite((Piggy.GAME_WIDTH-395)/2, 60, 'title');
		// add the button that will start the game
		//this.add.button(Piggy.GAME_WIDTH-401-10, Piggy.GAME_HEIGHT-143-10, 'button-start', this.startGame, this, 1, 0, 2);
	},
	startGame: function() {
		// start the Game state
		this.state.start('Game');
	}
};