function Cell(row, col){
	var that = this;
	
	this.row = row;
	this.col = col;
	this.index = (this.row - 1) * game.matrix.rows + (this.col - 1);
	
	var $cell = $("#"+game.matrix.containerId).children().eq(this.index);
	
	this.create = function() {
		var $newDiv = $("<div></div>").addClass("cell");
		$("#"+game.matrix.containerId).append($newDiv);
	}
	
	this.hasSnakeElem = function() {
	}
	
	this.hasFruit = function() {
		return ( $cell.hasClass("fruit") ? true : false);
	}
	
	this.isEmpty = function() {
		return ( $cell.hasClass("on") ? true : false);
	}
}