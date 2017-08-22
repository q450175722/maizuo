import axios from 'axios'
import API from '../api'

//轮播图
function getHomeBanner(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
		.then((response)=>{

			resolve(response.data.data.billboards);
		})
		.catch((error)=>{
			console.log(error)
		})
	
	})
}

//正在热播
function getnowPlaying(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.nowPlayingApi}?__t=${new Date().getTime()}&page=1&count=5`)
		
		.then((response)=>{
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})	
}


//即将上映
function getcomingSoon(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.comingSoonApi}?__t=${new Date().getTime()}&page=1&count=3`)
		
		.then((response)=>{
			resolve(response.data.data.films)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
	
}

//地址请求
function getCity(){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.cityApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
			resolve(response.data.data.cities)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
	
}

export default {
	getHomeBanner,
	getnowPlaying,
	getcomingSoon,
	getCity	
}

