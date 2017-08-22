import React, {Component} from 'react'

import menu from '../../services/sidebarInfo.js'

export default class Sidebar extends Component{
	render(){
		let sidebarStyle={
			transform: this.props.show?"none" : "translateX(-100%)"
		}
		let coverStyle = {
			background: this.props.show?"rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
			display:this.props.show?"block" : "none"
		}
		let data = this.props.pathname == '/shop'?menu.shopSidebarData :menu.homeSidebarData
		return (
			<div class="side">
			
				<div class="cover" style={coverStyle} onClick={this.hide.bind(this)}></div>
				
				<nav class="sidebar" style={sidebarStyle}>
					{
						data.map((item,index)=>{
							return <a key={index} onClick={this.goPage.bind(this,item)}>{item.title}</a>
						})
					}
				</nav>
				
			</div>
		)
	}
	
	goPage(item){
		//路由进入页面
		this.props.history.push(item.path);
		this.props.hideHandle(item.header)
	}
	hide(){
		this.props.hideHandle();
	}
}


