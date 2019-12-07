var config = require('../config');

const baseUrl = 'http://' + config.ip + ':' + config.port;


const swiper = [{
	url: baseUrl + '/static/images/banner/home1.jpeg',
	goodsId: '001'
},{
	url: baseUrl + '/static/images/banner/home2.jpeg',
	goodsId: '002'
},{
	url: baseUrl + '/static/images/banner/home3.jpeg',
	goodsId: '003'
},{
	url: baseUrl + '/static/images/banner/home4.jpeg',
	goodsId: '004'
}];

const categories = [{
	label: '',
	icon: baseUrl + '/static/images/category/cate1.jpeg',
},{
	label: '',
	icon: baseUrl + '/static/images/category/cate2.jpeg',
},{
	label: '',
	icon: baseUrl + '/static/images/category/cate3.jpeg',
},{
	label: '',
	icon: baseUrl + '/static/images/category/cate4.jpeg',
},{
	label: '',
	icon: baseUrl + '/static/images/category/cate5.jpeg',
},{
	label: '',
	icon: baseUrl + '/static/images/category/cate6.jpeg',
},{
	label: '',
	icon: baseUrl + '/static/images/category/cate7.jpeg',
},{
	label: '',
	icon: baseUrl + '/static/images/category/cate8.jpeg',
}];

const recommend = [{
	name: '【自营】波司登GORE® WINDSTOPPER®防水中长款羽绒服女B80142224',
	image: baseUrl + '/static/images/goods/goods1/convert.jpg',
	presentPrice: 229.39,
	goodsId: '001',
	oriPrice: 320.99
},{
	name: '【自营】波司登GORE® WINDSTOPPER®防水中长款羽绒服女B80142224',
	image: baseUrl + '/static/images/goods/goods2/convert.jpg',
	presentPrice: 2249.90,
	goodsId: '002',
	oriPrice: 2889.99
},{
	name: '【自营】波司登GORE® WINDSTOPPER®防水中长款羽绒服女B80142224',
	image: baseUrl + '/static/images/goods/goods3/convert.jpg',
	presentPrice: 469.45,
	goodsId: '003',
	oriPrice: 520.29
},{
	name: '【自营】波司登GORE® WINDSTOPPER®防水中长款羽绒服女B80142224',
	image: baseUrl + '/static/images/goods/goods4/convert.jpg',
	presentPrice: 259.90,
	goodsId: '004',
	oriPrice: 286.99
},{
	name: '【自营】波司登GORE® WINDSTOPPER®防水中长款羽绒服女B80142224',
	image: baseUrl + '/static/images/goods/goods5/convert.jpg',
	presentPrice: 294.49,
	goodsId: '005',
	oriPrice: 350.49
},{
	name: '【自营】波司登GORE® WINDSTOPPER®防水中长款羽绒服女B80142224',
	image: baseUrl + '/static/images/goods/goods6/convert.jpg',
	presentPrice: 1769.90,
	goodsId: '006',
	oriPrice: 2220.59
},{
	name: '【自营】波司登GORE® WINDSTOPPER®防水中长款羽绒服女B80142224',
	image: baseUrl + '/static/images/goods/goods7/convert.jpg',
	presentPrice: 649.09,
	goodsId: '007',
	oriPrice: 820.99
},{
	name: '【自营】波司登GORE® WINDSTOPPER®防水中长款羽绒服女B80142224',
	image: baseUrl + '/static/images/goods/goods8/convert.jpg',
	presentPrice: 574.32,
	goodsId: '008',
	oriPrice: 620.59
}];

// 商品中间广告
const floor1Pic = {
	PICTURE_ADDRESS: baseUrl + '/static/images/advert/001.jpg',
	TO_PLACE: 4
};

// 商品推荐底部
const floor1 = [{
	image: baseUrl + '/static/images/floor/goods1.jpg',
	goodsId: '001'
},{
	image: baseUrl + '/static/images/floor/goods2.jpg',
	goodsId: '002'
},{
	image: baseUrl + '/static/images/floor/goods3.jpg',
	goodsId: '003'
},]


function getHomeData(req, res) {
	var data = {
		code: '0',
		message: 'success',
		data: {
			swiper,
			categories,
			recommend,
			floor1Pic,
			floor1
		},
	};
	res.send(data);
}


module.exports = {
	getHomeData
}