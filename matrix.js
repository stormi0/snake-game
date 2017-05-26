function Matrix(containerId, rows, cols) {
	var that = this;
	this.containerId = containerId;
	this.rows = rows;
	this.cols = cols;
	
	var cells = [];
	
	
	this.create = function () {
		var matrix = document.getElementById("matrix1");
		matrix.innerHTML = "";
	
		//generate matrix
		for (var i = 1; i <= that.rows; i++){
			for (var j = 1; j <= that.cols; j++) {
				var index = (i - 1) * that.rows + (j - 1);
				var cell = new Cell(i, j);
				cells[index] = cell;
				cell.create();
			}
		}
	}
	
	this.getCell = function(index) {
		return cells[index];
	}
	
	this.setCell = function(row, col, val) {
		var index = (row - 1) * this.cols + (col - 1);
		var cell = $("#matrix1").children().eq(index);
		
		(val ? cell.addClass("on") : cell.removeClass("on") );
	}
	
	this.isOutOfBorder = function(newCell, oldCell) {
		if( newCell.col === 1 && oldCell.col === that.cols ) {	
			return true;
		} else {
			return false;
		}
	}
}
