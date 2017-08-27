import React, {Component} from 'react'

import homeService from '../services/homeService.js'


let movieScroll;
let i=1;
export default class NowPlaying extends Component{
	constructor(){
		super();
		this.state = {
			now:[],
			more:''	
		}
	}
	
	render(){		

		let nowPlaying = this.state.now?this.state.now.map((item,index)=>{
			return (
				<div class="movieBox"  key={index} >
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
				
	}
	
	componentDidMount(){
		
		movieScroll = new IScroll(this.refs.movieSc, {
			
		})
		movieScroll.on('scrollStart',()=>{
			movieScroll.refresh()
			
			if(movieScroll.y>movieScroll.maxScrollY){
				i++;
				if(movieScroll.y>movieScroll.maxScrollY){
					i++
					if(i<=3){
						this.setState({more:'加载更多数据'})
						setTimeout(()=> {
							// 加载更多热映数据
							homeService.getnowPlaying2(i).then((res)=>{
								this.setState({now:this.state.now.concat(res)})
							})
						}, 500);
						
					}else{
						this.setState({more:'没有更多数据了'})
					}
				}
	
			}
		})



	}

	
	
}
