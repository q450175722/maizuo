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
		
		let cityTitle = this.state.cityData.map((item0,index0)=>{
			
			return (
				<a key={index0} class="citys" >
					<span onClick={this.scroll.bind(this,index0)}>{item0.title}</span>
				</a>
			)		
		
		})

		
		let cityList = this.state.cityData?this.state.cityData.map((item,index)=>{
			if(item.citys){
			return (
				<div key={index} class="cityGroup"  ref={'city'+index}>
					<h1>{item.title}</h1>
					<div class="cityss" >
						{
							item.citys.map((item1,index1)=>{
								
									return (
										<a key={index1} class="citys" >
											<span onClick={this.selectAction.bind(this,item1.name)}>{item1.name}</span>
										</a>
									)
								
							})
						}
						
					</div>
					
				</div>
			)
			}
		}):'';
		
		
		return (
			
				<div id="city" class='page'>
					<div>
						<div class="cityGroup" >
							<h1>GPS定位你所在的城市</h1>
							<div class="cityss" >
								<a class="citys" >
									<span>深圳</span> 
								</a>
							</div>					
						</div>
						
						<div class="cityGroup" >
							<h1>热门城市</h1>
							<div class="cityss" >
								<a class="citys" >
									<span>北京</span> 
								</a>
								<a class="citys" >
									<span>上海</span> 
								</a>
								<a class="citys" >
									<span>广州</span> 
								</a>
								<a class="citys" >
									<span>深圳</span> 
								</a>
							</div>					
						</div>
						
						<div class="cityGroup" >
							<h1>按字母排序</h1>
							<div class="cityss" >
								{cityTitle}
							</div>
							
						</div>						
	
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
			this.state.history.goBack();4
		}, 400);
	}
	
	componentWillMount(){
		
		homeService.getCity()
		.then((res)=>{	
			this.setState({cityData:res});		
			cityScroll.refresh();
		})
	}
	
	componentDidMount(){
		 
		cityScroll = new IScroll('#city', {
			
		})
		cityScroll.on('scrollStart',()=>{
			cityScroll.refresh()
		})
	}
	
	
	getCityname(val){
		store.dispatch({
			type:'changecity',
			val:val
		})
		this.props.history.push('/')
	}
	scroll(index){
		cityScroll.refresh();
		cityScroll.scrollTo(0,-this.refs['city'+index].offsetTop,600)

	}

}


