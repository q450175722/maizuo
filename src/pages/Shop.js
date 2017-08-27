import React, {Component} from 'react'

import shopService from '../services/shopService.js'

import '../css/shop.css'

var bannerSwiper;
let shopScroll;
export default class Shop extends Component{
	constructor(){
		super();
		this.state={
			shopData:[]
			
		}
	}
	

	render(){
		//广告轮播
		let bannerImg = this.state.shopData.length>0?this.state.shopData.map((item,index)=>{
			if(item.type==2){
				return (
					<div key={index} class='swiper-slide slider' >
						<img src={item.imageSrc} />
					</div>
				)
			}			
		}):'';
		//导航图标
		let navList = this.state.shopData.length>0?this.state.shopData.map((item,index)=>{
			if(item.type==1){
				return (
					<div key={index} class='icon' >
						<img src={item.imageSrc} />
						<span>{item.name}</span>
					</div>
				)
			}			
		}):'';

		//广告
		let advers = this.state.shopData.length>0?this.state.shopData.map((item,index)=>{
			if(item.type==3){
				return (
					
					<img src={item.imageSrc} key={index} />
					
				)
			}			
		}):'';

		//优品专区
		let superior1 = this.state.shopData.length>0?this.state.shopData.map((item,index)=>{
			if(item.type==4&&item.isRecommend==0){
				return (
					
					<img src={item.imageSrc} key={index} />
					
				)
			}			
		}):'';
		let superior2 = this.state.shopData.length>0?this.state.shopData.map((item,index)=>{
			if(item.type==4&&item.isRecommend==1){
				return (
					
					<img src={item.imageSrc} key={index} />
					
				)
			}			
		}):'';

		//精品
		let product = this.state.shopData.length>0?this.state.shopData.map((item,index)=>{
			if(item.type==5){
				
				return (				
				<div  key={index} class="product">
					<div class="line"></div>						
					<div class="p_banner">
						<img src={item.imageSrc} />
					</div>
					<div class="p_listWrap">
						<div class="p_list">
							{item.products.map((item1,index1)=>{
								let price = item1.price/100 +'.00'
								return(
										<div key={index1} class="p_Info">
											<div class="p_pic">
												<img src={item1.image} />
											</div>
											<p>{item1.name}</p>
											<span>￥{price}</span>
										</div>
									)
								})
								
							}
							<div class="p_Info round">				
								<div class='rou'>全部</div>
							</div>
						</div>
					</div>
				</div>
				)
			}			
		}):'';

		return (
			
			<div id="shop" class='page' ref='shopScroll'>
				<div>
					<div class="swiper-container" ref='banner'>
						<div class="swiper-wrapper">
							{bannerImg}				
						</div>
					</div>
					
					<div class='nav'>
						{navList}						
					</div>
					<div class="line"></div>
					<div class='adver'>
						{advers}						
					</div>
					<div class="line"></div>

					<div class="superWrap">
						<h1>有品专区</h1>
						<div class="super">
							<div class="s_left">{superior2}</div>
							<div class="s_right">{superior1}</div>
						</div>
					</div>

					<div class="productWrap">
						{product}
					</div>



				商城


				</div>
			</div>
		)
	}
	componentWillMount(){
		//将要创建完成，请求轮播图
		shopService.getShop()
		.then((res)=>{			
			console.log(res);
			this.setState({shopData:res});
			 bannerSwiper.update();
			});					
			
	}

		
	
	componentDidMount(){
		
		bannerSwiper = new Swiper(this.refs.banner,{
			
		})
		

		shopScroll = new IScroll(this.refs.shopScroll, {
			
		})
		shopScroll.on('scrollStart',()=>{
			shopScroll.refresh()
		})
	}
	
}

