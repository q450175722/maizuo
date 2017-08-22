import React, {Component} from 'react'
import {BrowserRouter as Browser , Route} from 'react-router-dom'


import AppHeader from './views/common/AppHeader.js'
import Sidebar from './views/common/Sidebar.js'

import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Cinema from './pages/Cinema.js'
import Shop from './pages/Shop.js'
import My from './pages/My.js'
import Card from './pages/Card.js'
import City from './pages/City.js'

import './css/app.css'

export default class App extends Component{
	constructor(){
		super();
		this.state={
			showBar:false,
			headerTitle:'卖座电影'			
		}
	}
	render(){
		
		return (
			<Browser>
				<div id="root">
					<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}></AppHeader>
					
					{/*render需要通过这个函数得到页面结构*/}
					<Route path="/" render={({history,location})=>{
						return <Sidebar history={history} 
									    show={this.state.showBar}
									    pathname={location.pathname}
									    hideHandle={this.menuHandle.bind(this)}/>
					}}/>
	
					<Route path="/" exact component={Home}/>
					<Route path="/movies" component={Movies}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/my" component={My}/>
					<Route path="/card" component={Card}/>	
					<Route path="/city-list" component={City}/>	
								
				</div>
			
			</Browser>
		)
	}
	
	menuHandle(headerTitle){
		//控制侧边栏显示
		/*console.log(headerTitle);*/
		this.setState({showBar:!this.state.showBar});
		if(headerTitle){
			this.setState({headerTitle});
		}
	}

}

