function Square(row, col, course) {
	this.body = [row, col];
	this.course = course;
	
	var that = this;
	
	this.create = function() {
		m1.setCell(that.body[0], that.body[1], true);
	}
	
	this.move = function() {
		var lastBody = that.body.slice();
		
		switch(that.course) {
			case "right":
				that.body[1]++;
				if(that.body[1] > m1.cols) {
					that.body[1] = 1;
				}
				break;
			case "left":
				that.body[1]--;
				if(that.body[1] <= 0) {
					that.body[1] = m1.cols;
				}
				break;
			case "down":
				that.body[0]++;
				if(that.body[0] > m1.rows) {
					that.body[0] = 1;
				}
				break;
			case "up":
				that.body[0]--;
				if(that.body[0] <= 0) {
					that.body[0] = m1.rows;
				}
				break;
		}
		
		m1.setCell(lastBody[0], lastBody[1], false);
		m1.setCell(that.body[0], that.body[1], true);
		//console.log(that.body);
	}
}