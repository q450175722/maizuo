import React, {Component} from 'react'

import homeService from '../services/homeService.js'

import '../css/movies.css'


export default class Home extends Component{
	constructor(){
		super();
		
		this.state = {
			movieDetails:[]

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
		
			
		return (
			<div id="home" class='page' ref='homeScroll'>
                <div>
                    电影详情


                </div>
			</div>
		)
	}
	
	componentWillMount(){
		//将要创建完成，请求轮播图
		homeService.getmoviesDetails()
		.then((data)=>{

			this.setState({movieDetails: data},()=>{
				
			});

		})
		
	}
	
	componentDidMount(){


	}
	
}
