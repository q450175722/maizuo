import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import homeService from '../services/homeService.js'


let cityScroll ; 

export default class City extends Component{
	constructor({history}){
		super();
		
		this.state = {
			cityData:[],
			className: '',
			history
			
		}
	}

	
	render(){
		console.log(this.state.cityData);
		let cityList = this.state.cityData?this.state.cityData.map((item,index)=>{
			return (
				<a key={index} class="citys" >
					
						<span onClick={this.selectAction.bind(this,index)}>{item.name}</span>
					
				</a>
			)
		}):'';
		
		return (
			
			<div id="city" ref='citySc'>
				<div>
					{cityList}
				</div>
			</div>
			
		)
   

	}
	 /*class={'page '+this.state.className}*/
	selectAction(cityname){
		
		//返回动画
		this.setState({className: 'leave'});
		setTimeout(()=>{
			//返回操作
			this.state.history.goBack();
		}, 400);
	}
	
	componentWillMount(){
		
		homeService.getCity()
		.then((res)=>{			
			this.setState({cityData:res});
			
		})
		

	}
	componentDidMount(){
		
		
		cityScroll = new IScroll(this.refs.citySc, {
			
		})
		cityScroll.on('scrollStart',()=>{
			cityScroll.refresh()
		})

	}
	
	
}


