Piggy.Game = function(game){
	// define needed variables for Piggy.Game
	this._player = null;
	// define Piggy variables to reuse them in Piggy.item functions
	Piggy._scoreText = null;
	Piggy._score = 0;
	Piggy._health = 0;
};
Piggy.Game.prototype = {
	create: function(){
		this.stage.backgroundColor = '#ACF4F5';
		// start the physics engine
		//this.physics.startSystem(Phaser.Physics.ARCADE);
		// set the global gravity
		//this.physics.arcade.gravity.y = 200;
		
		//this._player.animations.add('idle', [0,1,2,3,4,5,6,7,8,9,10,11,12], 10, true);
		
	},
	managePause: function(){
		// pause the game
//		this.game.paused = true;
//		// add proper informational text
//		var pausedText = this.add.text(100, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
//		// set event listener for the user's click/tap the screen
//		this.input.onDown.addOnce(function(){
//			// remove the pause text
//			pausedText.destroy();
//			// unpause the game
//			this.game.paused = false;
//		}, this);
	},
	update: function(){
		// update timer every frame
		//this._spawnPiggyTimer += this.time.elapsed;
		// if spawn timer reach one second (1000 miliseconds)
		
	}
};

Piggy.item = {
	spawnBlock: function(game){
		// calculate drop position (from 0 to game width) on the x axis
		
	}
};
