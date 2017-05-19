window.onload = function () {
	
	game = new Core();
	game.load();
	
	game.start();
	
	window.onkeydown = function(e) {

		switch(e.code) {
			case "ArrowRight":
				game.cmdRight();
				break;
			case "ArrowLeft":
				game.cmdLeft();
				break;
			case "ArrowDown":
				game.cmdDown();
				break;
			case "ArrowUp":
				game.cmdUp();
				break;
		}	
	}; 
}

