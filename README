###A-STAR 寻找一种静态路网（本算法中为二维数组）中求解最短路径的解决办法



 *	我们可以通过:
 
 	<pre>
 		var element = new Element();
 	</pre>
 	来创建二维数组的一个节点。
 	
 	
 	element自身包含了一些方法：
 	<pre>
 		element.setStatus(2);//设置节点的状态，当status>0,则该区域不可通过。
 		element.getX();//获取节点在二维数组的横座标。
 		element.getY();//获取节点在二维数组的纵座标。
 		element.atLeft(target);//判断element是否在target的左边。
 		其他方法见: element.js
 	</pre>
 
 
 *	下面我们初始化一个静态路网(二维数组)。
 
 <pre>
 	var row = col =20;
 	var elements = createElements(row, col, {
			afterCreate : function() {
				if (Math.random() * 10 > 9) {
					this.setStatus(3);  //设置一些节点的状态为3，即死节点
				}
			}
	});
	这样elements就是我们的静态路网。 createElements详见：createElements.js
 </pre>
 
 
 *	获取两个节点之间的最短距离，startEl->endEl.
 
 	<pre>
 		var startEl = elements[1][1],endEl = elements[17][19];//假设这两个都是空节点
 		var pathArray = getPath(startEl,endEl)[endEl];
 	</pre>
 	
 	pathArray则为startEl到endEl之间的有效节点数组。
 	
 	demo: <http://demo.qianshu.me/A-STAR/>