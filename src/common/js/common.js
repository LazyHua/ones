// var url ="";
// var kk = 1958;
// export {kk};
export function get(url, success, error){
	this.$http.get(url).then(response => {
	    // success callback
	    console.log(response);
	    alert('success');
	}, response => {
	    // error callback
	})
}
export function post(url, success, error){
	this.$http.post(url).then(response => {
	    // success callback
	    console.log(response);
	    alert('success');
	}, response => {
	    // error callback
	})
}
// export {
// 	get,post
// }