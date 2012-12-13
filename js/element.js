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
Element.prototype = {
	/**
	 * 设置上边元素
	 * @param {Object} element
	 */
	setTop : function(element) {
		this.top = element;
	},
	/**
	 * 获取上边的元素
	 */
	getTop : function() {
		return this.top;
	},
	/**
	 *  设置下面的元素
	 * @param {Object} element
	 */
	setBottom : function(element) {
		this.bottom = element;
	},
	/**
	 *  获取下边的元素
	 * @param {Object} element
	 */
	getBottom : function() {
		return this.bottom;
	},
	/**
	 * 设置左边的元素
	 * @param {Object} element
	 */
	setLeft : function(element) {
		this.left = element;
	},
	/**
	 * 获取左边的元素
	 */
	getLeft : function() {
		return this.left;
	},
	/**
	 * 设置右边的元素
	 * @param {Object} element
	 */
	setRight : function(element) {
		this.right = element;
	},
	/**
	 * 获取右边的元素
	 */
	getRight : function() {
		return this.right;
	},
	/**
	 * 设置element的属性
	 * @param {Integer} status
	 */
	setStatus : function(status) {
		this.status = status;
	},
	/**
	 * 设置element的属性
	 * @param {Integer} status
	 */
	getStatus : function(status) {
		return this.status;
	},
	/**
	 * 设置对应的x座标
	 */
	setX : function(x) {
		this.x = x;
	},
	/**
	 * 获取对应的x座标
	 */
	getX : function() {
		return this.x;
	},
	/**
	 * 设置对应的y座标
	 */
	setY : function(y) {
		this.y = y;
	},
	/**
	 * 获取对应的Y座标
	 */
	getY : function() {
		return this.y;
	},
	atLeft : function(element) {
		return this.getX() < element.getX();
	},
	atTop : function(element) {
		return this.getY() < element.getY();
	},
	isRight : function(element) {
		return this.getX() > element.getX();
	},
	isBottom : function(element) {
		return this.getY() > element.getY();
	},
	isSelf : function(element) {
		return this == element;
	},
	toString : function() {
		return "J-item-" + this.x + "-" + this.y;
	}
};
