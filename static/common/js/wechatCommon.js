
var conmon = {
	pb1:'',//初始化
    itemImg : [],//图片数组
	imgSrc : '',//图片地址
	init: function() {

	},
	imgshow:function(id,srctype)  {
//		图片查看	
		conmon.itemImg=[];
	var imgnum = $(id).find(srctype);
		imgnum.each(function() {
		console.log($(this).attr('name'));
		conmon.itemImg.push($(this).attr('name'));
		conmon.imgSrc += $(this).attr('name');
		})
		conmon.pb1 = $.photoBrowser({
			items : conmon.itemImg,
			onSlideChange : function(index) {
				console.log(this, index);
			},
			onOpen : function() {},
			onClose : function() {}
		});	
		//页面上  初始化获取图片地址 
		//conmon.imgshow('#imgbox','img');
		//第一个是包图片的最外层id  第二个是放图片或背景的地址     把地址赋给name值  	给要点的图加上类  lookimg
//			$("body").on('click', '.lookimg',function(){ 		
//			conmon.pb1.open();
//		 $('.photo-container').addClass('item-center');
//	})
	},   
}