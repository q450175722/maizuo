import React, {Component} from 'react'

import homeService from '../services/homeService.js'


let movieScroll;
let i=1;
export default class ComimgSoon extends Component{
	constructor(){
		super();
		this.state = {
			soon:[],
			more:''
		}
	}
	
	render(){

		let comimgSoon = this.state.soon?this.state.soon.map((item,index)=>{
	 		let time = item.premiereAt;
			var date = new Date(time);
			let day = date.getMonth()+1 +"月" +date.getDate()+"日";
			let week = date.getDay();
			return (
				<div class="movieBox" key={index} >
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
			if(movieScroll.y>movieScroll.maxScrollY){
				i++
				if(i<=3){
					this.setState({more:'加载更多数据'})
					setTimeout(()=> {
						// 加载更多热映数据
						homeService.getcomingSoon2(i).then((res)=>{
							this.setState({soon:this.state.soon.concat(res)})
						})
					}, 500);
					
				}else{
					this.setState({more:'没有更多数据了'})
				}
			}
		})
	}
	

}
