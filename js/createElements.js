var createElements = function(row, col, option) {
	var elementArr = [];
	for (var i = 0; i < row; i++) {
		for ( j = 0; j < col; j++) {
			//1、初始化二维数组
			elementArr[i] || (elementArr[i] = []);
			var element = new Element(option);
			element.setX(i);
			element.setY(j);
			elementArr[i][j] = element;
		}
	}
	for (var i = 0; i < row; i++) {
		for ( j = 0; j < col; j++) {
			var me = elementArr[i][j];
			var left;
			if (j > 0) {
				left = elementArr[i][j - 1];
			} else {
				left = null;
			}
			var right;
			if (j + 1 < col) {
				right = elementArr[i][j + 1];
			} else {
				right = null;
			}

			var top;
			if (i > 0) {
				top = elementArr[i-1][j];
			} else {
				top = null;
			}
			var bottom;
			if (i + 1 < row) {
				bottom = elementArr[i+1][j];
			} else {
				bottom = null;
			}
			me.setLeft(left);
			me.setRight(right);
			me.setBottom(bottom);
			me.setTop(top);
		}
	}
	return elementArr;
};
