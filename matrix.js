function Matrix(containerId, rows, cols) {
	
	this.containerId = containerId;
	this.rows = rows;
	this.cols = cols;
	
	this.create = function () {
		var matrix = document.getElementById("matrix1");
		var n = this.rows * this.cols;
	
		matrix.innerHTML = "";
	
		for (var i = 0; i < n; i++) {
			var div = document.createElement("div");
			div.className = "cell";
			matrix.appendChild(div);
		}
	}
	
	this.getCell = function(row, col) {
		var index = (row - 1) * this.cols + (col - 1);
		var div = document.getElementById("matrix").children[index];
		
		return ( div.className === "cell on" ? true : false )
	}
	
	this.setCell = function(row, col, val) {
		var index = (row - 1) * this.cols + (col - 1);
		var cell = $("#matrix1").children().eq(index);
		
		(val ? cell.addClass("on") : cell.removeClass("on") );
	}
}
