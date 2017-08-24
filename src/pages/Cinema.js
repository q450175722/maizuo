import React, {Component} from 'react'


export default class Cinema extends Component{

	constructor(){
		super();
		
		this.state = {
			cinemaData:[]

		}
	}

	
	
	render(){
		
		let cinemaAc = this.state.cinemaData?this.state.cinemaData.map((item,index)=>{
			return (
				
				<div key={index} class="cinemaBox">
			
					<div><span>{item.name}</span><em>座</em><i>通</i><div>
					<p>{item.address}</p>
					<div class="lab"><span>可乐爆米花</span><span>优惠活动</span></div>
					<span>距离</span>
			
				</div>
			)
		}):'';
			
		return (
			<div id="home" class='page' ref='cinemaSc'>
				<div>
					{cinemaAc}
				</div>
			</div>
		)
	}
	
	componentWillMount(){

		homeService.getCinema()
		.then((res)=>{
			console.log(res);
			this.setState({getCinema:res});
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
