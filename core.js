function Core() {
	
	var that = this;
	
	this.matrix;
	var snake;
	var timer;
	var count;
	var fruit
	var scoreBoard;
	
	this.load = function() {
		that.matrix = new Matrix("matrix1", 20, 20);
		that.matrix.create();
		
		var matrixDOM = document.getElementById(that.matrix.containerId);
		matrixDOM.addEventListener("fruitEaten", function(e) { alert("Fruuuuit!") }, false);
		
		
		snake = new Snake([[5,7],[5,6],[5,5],[5,4],[5,3]], "none");
		//snake = new Snake([[5,7],[5,6]], "none");
		snake.create();
		
		//fruit = new Fruit();
		//fruit.create();
		var fruitRow = Math.floor( 1 + Math.random() * (20 + 1 - 1) );
		var fruitCol = Math.floor( 1 + Math.random() * (20 + 1 - 1) );
		var index = (fruitRow - 1) * game.matrix.rows + (fruitCol - 1);
		var cell = that.matrix.getCell(index);
		cell.addFruit(fruitRow, fruitCol);
		
		//scoreBoard = new ScoreBoard();
		//scoreBoard.create();
		
	}
	
	this.start = function() {
		that.count = 0;
		that.timer = setInterval(snake.move , 500)
	}
	
	this.gameOver = function() {
	}
	
	this.cmdRight = function() {
		if(snake.course !== "left" ){
			snake.course = "right";
		};
	}
	
	this.cmdLeft = function() {
		if(snake.course !== "right" ){
			snake.course = "left";
		};
	}
	
	this.cmdDown = function() {
		if(snake.course !== "up" ){
			snake.course = "down";
		};
	}
	
	this.cmdUp = function() {
		if(snake.course !== "down" ){
			snake.course = "up";
		};
	}
	
	
}