//参数 __t 当前时间戳
const homeBannerApi = "/v4/api/billboard/home"
const nowPlayingApi = "/v4/api/film/now-playing"
const comingSoonApi = "/v4/api/film/coming-soon"
const cityApi = "/v4/api/city"
const cinemaApi = "/v4/api/cinema"
//商城
const shopApi = "/api/ad/list"
//电影详情
const moviesDetailsApi ="v4/api/film"



/*
 * 首页
 * http://m.maizuo.com/v4/api/film/3826?__t=1503741320379    电影详情
 * http://aura.maizuo.com/api/ad/list    商城---导航图标
 * http://aura.maizuo.com/api/recommend/home?page=1&num=20   商城---好货精选
 * http://m.maizuo.com/v4/api/cinema?__t=1503492380020	影院
http://s11.cnzz.com/z_stat.php?id=1254948863 字母
http://m.maizuo.com/v4/api/city?__t=1503301224507  城市
   //m.maizuo.com/v4/api/billboard/home?__t=1503125694895   轮播图
   
http://m.maizuo.com/v4/api/film/coming-soon?page=2&count=7

//m.maizuo.com/v4/api/film/now-playing?page=2&count=7

http://m.maizuo.com/v4/api/film/now-playing?__t=1503125231234&page=1&count=5 现在热播
http://m.maizuo.com/v4/api/film/coming-soon?__t=1503125231239&page=1&count=3 即将上映
*/

export default {
	homeBannerApi,
	nowPlayingApi,
	comingSoonApi,
	cinemaApi,
	cityApi,
	shopApi
}
