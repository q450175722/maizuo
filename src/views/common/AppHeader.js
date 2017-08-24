import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class AppHeader extends Component{
	
	render(){
		return (
			
			<header class="app-header">
			
				<span class="iconfont icon-menu" onClick={this.menuAction.bind(this)}></span>
				<h1 class="title">{this.props.title}</h1>
				<Link class="city iconfont" to="city-list" >深圳&nbsp;&nbsp;<em class='arrowDown'></em></Link>
				<Link class="iconfont icon-person" to="/my"></Link>
			
			</header >
		) 
	}
	
	menuAction(){
		this.props.menuHandle();
	}
}


