import React, {Component} from 'react'

import homeService from '../services/homeService.js'

import '../css/cinema.css'
let cinemaScroll;
export default class Cinema extends Component{

	constructor(){
		super();
		
		this.state = {
			cinemaData:[]

		}
	}

	
	render(){			
		
		let cinemaAc = this.state.cinemaData?this.state.cinemaData.map((item,index)=>{
			let show = {
				display:item.show
			}
			if(item.title){
				return(
					<div key={index} class="area">
						<h3 class='areaTitle' onClick={this.show.bind(this,index)}>{item.title}</h3>
						<ul class='areaWrap' style={show}>
							{item.info.map((item1,index1)=>{
								return(
									<li key={index1} class="cinemaBox">
										<div class='monicker'>
											<span>{item1.name}</span>
											<em>座</em>
											<i>通</i>
											<em class='arrowRight'></em>
										</div>	
										<div class="lab">
											<span>可乐爆米花</span>
											<span>优惠活动</span>
										</div>
										<p class='addr'>{item1.address}</p>
										<span>距离未知</span>
									</li>
									)
								})
											
							}
						</ul>
					</div>
				)
			}
		}):'';
			
		return (
			<div id="home" class='page' ref='cinemaSc'>
				<div>
					{cinemaAc}
				</div>
			</div>
		)
	}
	

	show(index){
		var arr= this.state.cinemaData;
		arr.map((item,key)=>{
			if(index== key){
				if(item.show=="none"){
					item.show = "block"
				}else{
					item.show = "none"
				}
				
			}
		})
		this.setState({cinemaData:arr})
	}
	
	componentWillMount(){

		homeService.getCinema()
		.then((res)=>{
			console.log(res);
			this.setState({cinemaData:res});
		})
		
	}
	
	componentDidMount(){
		
		cinemaScroll = new IScroll(this.refs.cinemaSc, {
			
		})
		cinemaScroll.on('scrollStart',()=>{
			cinemaScroll.refresh()
		})
		
	}
	
}
