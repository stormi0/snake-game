function Snake(coords, course) {
	
	var that = this;
	
	this.course = course;
	this.eated = false;
	this.alive = true;
	this.body = [];
	
	this.create = function() {	
		for(var i = 0; i < coords.length; i++) {
			var index = (coords[i][0] - 1) * game.matrix.rows + (coords[i][1] - 1);
			var cell = game.matrix.getCell(index);
			cell.addSnakeElem();
			that.body.push(cell);
		}
	}
	
	this.move = function() {
		that.eated = false;
		
		// move//
		var newIndex = that.body[0].index;
		switch(that.course) {
			case "right":	
				newIndex++; 
				break;
			case "left":
				newIndex--;
				break;
			case "down":
				newIndex += game.matrix.rows;
				break;
			case "up":
				newIndex -= game.matrix.rows;
				break;
			default:
				return;
		}
		
		var newHeadCell = game.matrix.getCell(newIndex);
		if (newHeadCell == null
			|| game.matrix.isOutOfBorder(newHeadCell, game.matrix.getCell(that.body[0].index) )
			|| newHeadCell.hasSnakeElem() ){
				
			console.log("Game Over");
			return;
		} else if (newHeadCell.hasFruit() ){
			that.eat(newHeadCell);
		}
		
		newHeadCell.addSnakeElem();
		var newBody = [newHeadCell];
		for(var i = 1; i < that.body.length; i++) {
			newBody.push(that.body[i - 1]);				
		}
		
		var oldNailCell = that.body[that.body.length - 1];
		if (!that.eated) {
			oldNailCell.removeSnakeElem();
		} else {
			newBody.push(oldNailCell);
		}
		
		that.body = newBody;
		
		// check new cell
		// change coords of body
		// if fruit - eat
		// if wall or nail - kill
		// render
	}
	
	this.eat = function(cell) {
		that.eated = true;
		
		cell.removeFruit();
	}
	
	this.kill = function() {
		that.alive = false;
	}
	
}