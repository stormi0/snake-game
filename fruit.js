function Fruit() {
	var that = this;
	var $containerCell;
	
	this.cellIndex;
	
	this.create = function() {
		
		that.row = Math.floor( 1 + Math.random() * (20 + 1 - 1) );
		that.col = Math.floor( 1 + Math.random() * (20 + 1 - 1) );
		
		that.cellIndex = (that.row - 1) * game.matrix.rows + that.col - 1 ;
		var $containerCell = $("#"+game.matrix.containerId).children().eq(that.cellIndex);
		$containerCell.append( $("<div></div>").addClass("fruit") );
	}
	
	this.kill = function() {
		$containerCell.remove(".fruit");
		
		var event = new Event("fruitEaten");
	}
}