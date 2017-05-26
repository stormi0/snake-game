function Cell(row, col){
	var that = this;
	
	this.row = row;
	this.col = col;
	this.index = (this.row - 1) * game.matrix.rows + (this.col - 1);
	
	var $cell = $("<div></div>").addClass("cell");;
	
	var contentObject;
	
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
	
	this.removeFruit = function() {
		
		if (contentObject instanceof Fruit) {
			contentObject.kill();
		}
	}
	
	this.removeSnakeElem = function() {
		$cell.children(".snake").remove();
	}
	
	this.isEmpty = function() {
		return ( $cell.hasClass("on") ? true : false);
	}
}