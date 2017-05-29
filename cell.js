function Cell(row, col){
	var that = this;
	
	this.row = row;
	this.col = col;
	this.index = (this.row - 1) * game.matrix.rows + (this.col - 1);
	
	var $cell = $("<div></div>").addClass("cell");;
	
	this.contentObject;
	
	this.create = function() {
		$("#"+game.matrix.containerId).append($cell);
	}
	
	this.hasSnakeElem = function() {
		return $cell.children().hasClass("snake");
	}
	
	this.hasFruit = function() {
		return $cell.children().hasClass("fruit");
	}
	
	this.addSnakeElem = function() {
		contentObject = new SnakeElement(that.index);
		contentObject.create();
		
	}
	
	this.addFruit = function(row, col) {
		that.contentObject = new Fruit();
		that.contentObject.create(row,col);
	}
	
	
	this.removeFruit = function() {
		
		if (that.contentObject instanceof Fruit) {
			that.contentObject.kill();
		}
	}
	
	this.removeSnakeElem = function() {
		$cell.children(".snake").remove();
	}
}