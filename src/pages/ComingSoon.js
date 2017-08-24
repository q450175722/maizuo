import React, {Component} from 'react'

import homeService from '../services/homeService.js'


let movieScroll;

export default class ComimgSoon extends Component{
	constructor(){
		super();
		this.state = {
			soon:[]
		}
	}
	
	render(){

		let comimgSoon = this.state.soon?this.state.soon.map((item,index)=>{
	 		let time = item.premiereAt;
			var date = new Date(time);
			let day = date.getMonth()+1 +"月" +date.getDate()+"日";
			let week = date.getDay();
			return (
				<div class="movieBox">
					<div class="mImg">
						<img src={item.poster.thumbnail} />
					</div>
					<div class="mInfo">
						<h3>{item.name}</h3>
						<p>{item.intro}</p>
						<span>{day}</span>
						<span>星期{week}</span>
											
					</div>
					
				</div>
			)
		}):'';
		
		
		return (
			<div class='pageM' ref='movieSc'>
				<div>				
					{comimgSoon}
				</div>
			</div>
		)
	}
	 
	
	componentWillMount(){
	
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
