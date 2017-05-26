function SnakeElement(cellIndex) {
	var that = this;
	
	$containerCell = $("#"+game.matrix.containerId).children().eq(cellIndex);
	
	this.create = function() {
		$containerCell.append( $("<div></div>").addClass("snake") );
	}
	
	this.kill = function() {
		$containerCell.remove(".snake");
	}
}