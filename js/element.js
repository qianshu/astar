/**
 * 定义A*算法里面的元素
 */
var Element = function() {
	if (!(this instanceof Element)) {
		return new Element();
	}
	//记录元素的状态 0 标识空白，可被放置
	this.status = 0;
	//定义元素四周的元素
	this.right = this.left = this.top = this.bottom = null;

	var option = arguments[0];
	if (option && option.afterCreate) {
		option.afterCreate.call(this);
	}
};
//设置Element的set，get方法
var methods = ["top", "bottom", "left", "right", "status", "x", "y"];
var defineSetGetMethod = function(fn, methods) {
	var fnPrototype = fn.prototype;
	for (var i = 0; i < methods.length; i++) {
		var methodName = methods[i].charAt(0).toLocaleUpperCase() + methods[i].substring(1);
		fn.prototype['set' + methodName] = new Function("value", "this." + methods[i] + "= value;");
		fn.prototype['get' + methodName] = new Function("return this." + methods[i]+";");
		fn.prototype['toString'] = new Function('return "J-item-" + this.x + "-" + this.y;');
	}
};
defineSetGetMethod(Element, methods);
//扩展函数的实例方法
var extend = function(fn, option) {
	var fnPrototype = fn.prototype;
	for (var i in option) {
		fnPrototype[i] = option[i];
	}
};
extend(Element, {
	atLeft : function(element) {
		return this.getX() < element.getX();
	},
	atTop : function(element) {
		return this.getY() < element.getY();
	},
	atRight : function(element) {
		return this.getX() > element.getX();
	},
	atBottom : function(element) {
		return this.getY() > element.getY();
	},
	isSelf : function(element) {
		return this == element;
	}
});
