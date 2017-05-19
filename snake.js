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
			//var $elemSnake = $("<div class='snake'></div>");
			//$cell.append($elemSnake);
			
			game.matrix.setCell(elem[0],elem[1],that,true);
		}
		
	}
	
	this.move = function() {
		that.eated = false;
		
		// move//
		var oldNailCell = that.body[body.length - 1].slice(); 
		//var newHeadCell = that.body[0].slice(); 
		var newBody = [[]];
		
		switch(that.course) {
			case "right":
				newBody[0] = [that.body[0][0],that.body[0][1] + 1] ;		
				break;
			case "left":
				newBody[0] = [that.body[0][0],that.body[0][1] - 1] ;
				break;
			case "down":
				newBody[0] = [that.body[0][0] + 1,that.body[0][1]] ;
				break;
			case "up":
				newBody[0] = [that.body[0][0] - 1,that.body[0][1]] ;
				break;
		}
		
		if(  ( 	  newBody[0][0] < 0 || newBody[0][0] > game.matrix.rows
			   || newBody[0][1] < 0 || newBody[0][1] > game.matrix.cols )   
			 ) {
			   
			   console.log("Game Over");   
		}
		
		
		
		for(var i = 1; i < that.body.length; i++) {
			newBody[i] = that.body[i - 1];				
		}
			
		that.body = newBody;
		game.matrix.setCell(that.body[0][0], that.body[0][1], that, true);
		game.matrix.setCell(oldNailCell[0], oldNailCell[1], that, false);
		
		
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