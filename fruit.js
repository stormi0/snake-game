function Fruit() {
	that = this;
	
	this.create = function() {
		
		that.row = Math.floor( 1 + Math.random() * (20 + 1 - 1) );
		that.col = Math.floor( 1 + Math.random() * (20 + 1 - 1) );
		
		console.log(that.row + " " + that.col);
		
		var index = (that.row - 1) * game.matrix.rows + that.col - 1 ;
		that.container = document.getElementById("matrix1").children[index];
		
		var div = document.createElement("div");
		div.className = "fruit";
		that.container.appendChild(div);	
		game.matrix.setCell(that.row, that.col, true);
	}
	
	this.kill = function() {
		$(".fruit").removeClass("on");
	}
}