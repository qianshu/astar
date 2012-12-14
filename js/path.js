/**
 * 寻找me到target的最短路径
 * @param {Object} me
 * @param {Object} target
 * @param {Object} switchTag true则返回可到达的所有区域
 * @retrun {Object}
 */
var getPath = function(element, target) {
	var result = {
		//记录element可到达区域对应的路径
		arrivePath : {}
	};
	if (element == target) {
		return result;
	}
	//设置查找的方向
	var dirArr = ["Top", "Right", "Bottom", "Left"];
	//递归查找元素elements四周可到达的元素
	var addPath = function(elements, target) {
		if (!elements || !elements.length) {
			return;
		}
		//缓存elements中元素周围可到达的元素
		var nearElements = [];
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			for (var j = 0; j < dirArr.length; j++) {
				var dir = dirArr[j];
				var nearElement = element["get"+dir]();
				if (!nearElement || (nearElement != target && nearElement.getStatus() > 0) || result.arrivePath[nearElement]) {
					continue;
				}
				nearElements.push(nearElement);
				var lastPath = result.arrivePath[element];
				if (!lastPath) {
					lastPath = [];
				}
				result.arrivePath[nearElement] = [].concat(lastPath);
				result.arrivePath[nearElement].push(nearElement);
				if (target && target == nearElement) {
					break;
					return;
				}
			}
		}
		addPath(nearElements, target);
	};
	addPath([element], target);
	result.arriveTargetPath = result.arrivePath[target];
	if (target) {
		var newJson = {};
		newJson[target] = result.arrivePath[target] || [];
		return newJson;
	} else {
		return result.arrivePath;
	}
};

