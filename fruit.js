function Fruit() {
	var that = this;
	this.cellIndex;
	
	this.create = function() {
		
		that.row = Math.floor( 1 + Math.random() * (20 + 1 - 1) );
		that.col = Math.floor( 1 + Math.random() * (20 + 1 - 1) );
		
		that.cellIndex = (that.row - 1) * game.matrix.rows + that.col - 1 ;
		var $cell = $("#"+game.matrix.containerId).children().eq(that.cellIndex);
		$cell.append("<div class = 'fruit'><div/>")
		
		game.matrix.setCell(that.row, that.col, true);
	}
	
	this.kill = function() {
		//$(".fruit").removeClass("on");
	}
}