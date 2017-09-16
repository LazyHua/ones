// var url ="";
// var kk = 1958;
// export {kk};
import Vue from 'vue'
import axios from 'axios'
export function get(url, data, callback){
	axios.get(url).then(response => {
	    // success callback
	    console.log(response);
	    return typeof success == "function" && success(response);
	}, response => {
	    // error callback
	    return typeof error == "function" && error(response);
	})
}
export function post(flag, url, success, error){
	axios.post(url).then(response => {
	    // success callback
	    console.log(response);
	    alert('success');
	}, response => {
	    // error callback
	})
}
export function success(data){
	
}
export function error(data){
	alert("error");
}
export function checkNull(val){
	var reg = /^\s*$/g;
	if(reg.test(val)){
		return true;
	}else{
		return false;
	//输入框不为空
	}
}
export function filterData(data){
	for(var key in data){    
      if(data[key]==""){
           delete data[key];  
      }     
    }
    return data;
}
