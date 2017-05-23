function Cell(row, col){
	var that = this;
	
	this.row = row;
	this.col = col;
	this.index = (this.row - 1) * game.matrix.rows + (this.col - 1);
	
	var $cell;
	
	this.create = function() {
		$cell = $("<div></div>").addClass("cell");
		$("#"+game.matrix.containerId).append($cell);
	}
	
	this.hasSnakeElem = function() {
		return $cell.children().hasClass("snake");
	}
	
	this.hasFruit = function() {
		return $cell.children().hasClass("fruit");
	}
	
	this.addSnakeElem = function() {
		$cell.append("<div class='snake'></div>");
	}
	
	this.removeFruit = function() {
		$cell.children(".fruit").remove();
	}
	
	this.isEmpty = function() {
		return ( $cell.hasClass("on") ? true : false);
	}
}