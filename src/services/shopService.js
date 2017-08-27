import axios from 'axios'
import API from '../api'

//商城数据请求
function getShop(){
	return new Promise((resolve,reject)=>{
		
		axios.get(`${API.shopApi}`)
		.then((response)=>{
			
			resolve(response.data.data);
		})
		.catch((error)=>{
			console.log(error)
		})
	
	})
}



export default {
	getShop	
	
}

