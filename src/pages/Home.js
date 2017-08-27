import React, {Component} from 'react'

import homeService from '../services/homeService.js'

import '../css/home.css'

let bannerSwiper ;

let homeScroll ;
export default class Home extends Component{
	constructor(){
		super();
		
		this.state = {
			bannerData:[],
			homeMain1:[],
			homeMain2:[]
			
		}
	}

	
	render(){	
		let bannerImg = this.state.bannerData.length>0?this.state.bannerData.map((item,index)=>{
		
		return (
				<div key={index} class='swiper-slide slider'>
					<img src={item.imageUrl} />
				</div>
		)
	}):'';
	
		let nowPlaying = this.state.homeMain1?this.state.homeMain1.map((item,index)=>{
			return (
				<div key={index} class='main1'>
					<img src={item.cover.origin}/>
					<div class='mvTitle'>
						<p>{item.name}</p>
						<p>{item.intro}</p>
						<span>{item.grade}</span>
					</div>
				</div>
			)
		}):'';
		
		let comingSoon = this.state.homeMain2?this.state.homeMain2.map((item,index)=>{
			return (
				<div key={index} class='main2'>
					<img src={item.cover.origin}/>
					<div class='mvTitle'>
						<p>{item.name}</p>
						<p>{item.intro}</p>
						<span>{item.grade}</span>
					</div>
				</div>
			)
		}):'';
			
		return (
			<div id="home" class='page' ref='homeScroll'>
			<div>
				<div ref='banner' class="swiper-container home-banner">
					<div class="swiper-wrapper">
					
						{bannerImg}
					
					</div>								
				</div>
				
				<div class='main'>
					{nowPlaying}
					{comingSoon}
				</div>
			</div>
			</div>
		)
	}
	
	componentWillMount(){
		//将要创建完成，请求轮播图
		homeService.getHomeBanner()
		.then((data)=>{

			this.setState({bannerData: data},()=>{
				bannerSwiper.update();
			});
				
			
		})
		
		homeService.getnowPlaying()
		.then((res)=>{
			console.log(res);
			this.setState({homeMain1:res});
			
		})
				
		homeService.getcomingSoon()
		.then((res)=>{
			console.log(res);
			this.setState({homeMain2:res});
		})
		
	}
	
	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner,{
			
		})
		
		homeScroll = new IScroll(this.refs.homeScroll, {
			
		})
		homeScroll.on('scrollStart',()=>{
			homeScroll.refresh()
		})
	}
	
}
