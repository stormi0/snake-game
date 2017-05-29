function Fruit() {
	var that = this;
	var $containerCell;
	
	this.cellIndex;
	
	this.create = function(row,col) {
		
		that.row = row;
		that.col = col;
		
		that.cellIndex = (that.row - 1) * game.matrix.rows + that.col - 1 ;
		$containerCell = $("#"+game.matrix.containerId).children().eq(that.cellIndex);
		$containerCell.append( $("<div></div>").addClass("fruit") );
	}
	
	this.kill = function() {
		$containerCell.remove(".fruit");
		
		//var event = new Event("fruitEaten");
		$containerCell.trigger("fruitEaten");
	}
}