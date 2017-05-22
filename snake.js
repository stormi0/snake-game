function Snake(body, course) {
	
	var that = this;
	
	this.course = course;
	this.body = body;
	this.eated = false;
	this.alive = true;
	
	this.create = function() {
		// drow a snake
		
		for (i = 0; i < body.length; i++) {
			elem = body[i];
			var index = (elem[0] - 1) * game.matrix.cols + (elem[1] - 1);
			var $cell = $("#matrix1").children().eq(index).append("<div class='snake'></div>");
			
			game.matrix.setCell(elem[0],elem[1],that,true);
		}
		
	}
	
	this.move = function() {
		that.eated = false;
		
		// move//
		var oldNailCell = that.body[body.length - 1].slice(); 
		var newHeadCell = that.body[0].slice();
		var newBody = [[]];
		
		switch(that.course) {
			case "right":	
				newHeadCell[1]++; 
				break;
			case "left":
				newHeadCell[1]--;
				break;
			case "down":
				newHeadCell[0]++;
				break;
			case "up":
				newHeadCell[0]--;
				break;
			default:
				return;
		}
		
		var index = (newHeadCell[0] - 1) * game.matrix.rows + (newHeadCell[1] - 1);
		var cell = game.matrix.getCell(index);
		console.log(cell.hasFruit());
		
		if(  ( 	  newHeadCell[0] < 0 || newHeadCell[0] > game.matrix.rows
			   || newHeadCell[1] < 0 || newHeadCell[1] > game.matrix.cols )   
			 ) {
			   
			   console.log("Game Over");   
		}
		
		
		newBody[0] = newHeadCell;
		for(var i = 1; i < that.body.length; i++) {
			newBody[i] = that.body[i - 1];				
		}
			
		that.body = newBody;
		
		// drow Head
		var headIndex = (that.body[0][0] - 1) * game.matrix.rows + (that.body[0][1] - 1);
		var $newHeadCell = $("#matrix1").children().eq(headIndex);
		var $snakeElemDiv = $("<div></div>").addClass("snake");
		$newHeadCell.append($snakeElemDiv);
		
		game.matrix.setCell(that.body[0][0], that.body[0][1], true);
		
		// empty Nail	
		var oldNailIndex = (oldNailCell[0] - 1) * game.matrix.rows + (oldNailCell[1] - 1);
		$("#matrix1").children().eq(oldNailIndex).children().eq(0).remove();
		
		game.matrix.setCell(oldNailCell[0], oldNailCell[1], false);
		
		
		// check new cell
		// change coords of body
		// if fruit - eat
		// if wall or nail - kill
		// render
	}
	
	this.eat = function() {
		that.eated = true;
	}
	
	this.kill = function() {
		that.alive = false;
	}
	
}