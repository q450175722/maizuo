import React, {Component} from 'react'

import homeService from '../services/homeService.js'


let movieScroll;

export default class NowPlaying extends Component{
	constructor(){
		super();
		this.state = {
			now:[]			 
		}
	}
	
	render(){
		
		let nowPlaying = this.state.now?this.state.now.map((item,index)=>{
			return (
				<div class="movieBox">
					<div class="mImg">
						<img src={item.poster.thumbnail} />
					</div>
					<div class="mInfo">
						<h3>{item.name}
							<strong class='starM'>
								{item.grade}
								<em class="arrowRight"></em>
							</strong>
						</h3>
						<p>{item.intro}</p>
						<span>{item.scheduleCount}家影院上映</span>
						<span>{item.watchCount}人购票</span>
						
					</div>
					
				</div>
			)
		}):'';
		
		
		return (
			<div class='pageM' ref='movieSc'>
				<div>
					
					{nowPlaying}
				</div>
			</div>
		)
	}
	
	componentWillMount(){

		homeService.getnowPlaying2()
		.then((res)=>{
			console.log(res);
			this.setState({now:res});
			
		})
				
		homeService.getcomingSoon2()
		.then((res)=>{
			console.log(res);
			this.setState({soon:res});
		})
		
	}
	
	componentDidMount(){
		
		movieScroll = new IScroll(this.refs.movieSc, {
			
		})
		movieScroll.on('scrollStart',()=>{
			movieScroll.refresh()
		})
	}

	
	
}
