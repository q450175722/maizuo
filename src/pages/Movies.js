import React, {Component} from 'react'
import {BrowserRouter as Router , NavLink, Route} from 'react-router-dom'


import NowPlaying from './NowPlaying.js'
import ComingSoon from './ComingSoon.js'


export default class Movies extends Component{
	
	constructor(){
		super();
		this.state = {
			now:[],
			soon:[]			 
		}
	}
	
	render(){
		
		return (
			
			<Router>
				<div class="page" id='movie'>
					
					<Route path="/" exact component={NowPlaying}/>
					<Route path="/nowPlaying" component={NowPlaying}/>
					<Route path="/comingSoon" component={ComingSoon}/>
			
					<nav class="playTabs">
						<NavLink to="/nowPlaying">现在热播</NavLink>
						<NavLink to="/comingSoon">即将上映</NavLink>
					</nav>
					
				</div>
			</Router>
		)
	}
	
	
}

