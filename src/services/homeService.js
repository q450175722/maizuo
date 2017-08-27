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

//正在热播主页
function getnowPlaying2(i){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.nowPlayingApi}?page=${i}&count=7`)
		
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
//即将上映主页
function getcomingSoon2(i){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.comingSoonApi}?page=${i}&count=7`)
		
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
			let arr = [];
			for(var i=0;i<26;i++){
				let obj = {};
				let char = String.fromCharCode(i+65);
				let arr1 = [];
				obj.title = char ; 
				let citys = response.data.data.cities.map((item,index)=>{
					if(char==item.pinyin[0]){
						arr1.push(item);
						obj.citys = arr1
					}
				})
				arr.push(obj);
			}
			 resolve(arr)
		})
		.catch((error)=>{
			console.log(error)
		})
	})	
}

//电影院位置
function getCinema(){
	
	return new Promise((resolve,reject)=>{
		axios.get(`${API.cinemaApi}?__t=${new Date().getTime()}`)
		
		.then((response)=>{
			if(response.data.data.cinemas){
				let list = response.data.data.cinemas;
				let list1 = [];
				let newList=[];
				
				list.map((item)=>{
					if(list1.indexOf(item.district.name)==-1){
						list1.push(item.district.name)
					}
				})
				
				
				list1.map((item)=>{
					let obj = {};
					obj.info=[];
					list.map((item1)=>{					
						if(item == item1.district.name){
							obj.title = item
	                        obj.info.push(item1)
	                        obj.show = 'none';
						}
					})
					newList.push(obj)
				})
				window.sessionStorage.setItem('getCinema',JSON.stringify(newList))
            	resolve(newList)			
			}else{
				getCinema()
			}
		})
		.catch((error)=>{
			console.log(error)
		})
	})
	
}

//电影详情页
function getmoviesDetails(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.moviesDetailsApi}/${id}?__t=${new Date().getTime()}`).then((res)=>{
			console.log(res.data.data.film);
            if(res.data.data.film){
                res.data.data.film.pic = res.data.data.film.cover.origin;
                resolve(res.data.data.film)
            }else{
                console.log("请求失败")
            }
        })
    })
}


export default {
	getHomeBanner,
	getnowPlaying,
	getnowPlaying2,
	getcomingSoon,
	getcomingSoon2,
	getCinema,
	getCity	
	
}

