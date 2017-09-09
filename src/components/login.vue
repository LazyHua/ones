<template>
<div class="main">
	<div class="logintop">    
	    <span>欢迎后台管理界面平台</span>    
	    <ul>
	    <li><a href="#">返回首页</a></li>
	    <li><a href="#">帮助</a></li>
	    <li><a href="#">关于</a></li>
	    </ul>    
    </div>
	<div class="loginbody">
		<div class="login-container">
			<div id="login-box" class="login-box widget-box no-border visible" style="background-color:white;border:5px solid #1C77AC;">
				<div class="widget-body">
					<h4 class="header blue lighter bigger" style="text-align:left;">
						<i class="icon-coffee green"></i>
						管理员登陆
					</h4>
					<div class="login_icon"><img src="../common/images/login.png" /></div>
					<div class="login-boxs">
						<ul>
						   <li class="frame_style form_error"><label class="user_icon"></label><div class="fl" style="float:left;width:245px;"><el-input v-model="input" placeholder="用户名" style="margin-bottom:10px;border:0;"></el-input></div></li>
						   <li class="frame_style form_error"><label class="password_icon"></label><div class="fl" style="float:left;width:245px;"><el-input v-model="input" placeholder="密码" style="margin-bottom:10px;border:0;"></el-input></div></li>
						   <li class="frame_style form_error"><label class="Codes_icon"></label><div class="fl" style="float:left;width:245px;"><el-input v-model="input" placeholder="验证码" style="margin-bottom:10px;border:0;"></el-input></div></li>
					    </ul>
					  <div style="width:245px;margin:0 auto;display:block;">
						<el-button type="primary" @click="loginAjax()">登录</el-button></div>
						<!-- <el-input v-model="input" placeholder="请输入内容" style="margin-bottom:10px;"></el-input>
						<el-input v-model="input" placeholder="请输入内容" style="margin-bottom:10px;"></el-input>
						<el-input v-model="input" placeholder="请输入内容"></el-input> -->
					</div>
				</div>
				
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		data () {
		    return {
		      msg: 'Welcome to Your Vue.js App',
		      input:''
		    }
		  },
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      loginAjax(){
	      	this.$http.get("https://cnodejs.org/api/v1/topics").then(response => {
			    // success callback
			    if(response.status == 200){
			    	this.$router.push('/Index');
			    }
			    console.log(response);
			    alert('success');
			}, response => {
			    // error callback
			})
	      }
	    }
	}
</script>
<style scoped>
ul li{
	list-style: none;
}

.logintop {
    height: 47px;
    position: absolute;
    top: 0;
    /*background: url(../../images/loginbg1.png) repeat-x;*/
    z-index: 100;
    width: 100%;
    background-color: #1c77ac;
}
.logintop span {
    color: #fff;
    line-height: 47px;
    /*background: url(../../images/loginsj.png) no-repeat 21px 18px;*/
    text-indent: 44px;
    color: #afc5d2;
    float: left;
}
.logintop ul {
    float: right;
    padding-right: 30px;
}
.logintop span {
    color: #fff;
    line-height: 47px;
    /*background: url(../../images/loginsj.png) no-repeat 21px 18px;*/
    text-indent: 44px;
    color: #afc5d2;
    float: left;
}
.logintop ul li {
    float: left;
    margin-left: 20px;
    line-height: 47px;
}
 .logintop ul li a {
    color: #afc5d2;
}
:link, :visited, ins {
    text-decoration: none;
}
.logintop ul li {
    float: left;
    margin-left: 20px;
    line-height: 47px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
 .loginbody {
    background: url(../common/images/loginbg3.png) no-repeat center center;
    width: 100%;
    height: 585px;
    overflow: hidden;
    position: absolute;
    top: 47px;
    background-color: #1c77ac;
}
.login-container {
    width: 500px;
    margin: 0 auto;
}
#login-box{
	position: relative;
	margin-top: 150px;
}
 .widget-box.visible {
    visibility: visible;
    -moz-transform: scale(1,1) translate(0);
    -webkit-transform: scale(1,1) translate(0);
    -o-transform: scale(1,1) translate(0);
    -ms-transform: scale(1,1) translate(0);
    transform: scale(1,1) translate(0);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    -o-transition: none;
    -webkit-transition: none;
}
 .widget-box {
    visibility: hidden;
    border-right: 0px;
    overflow: hidden;
    width: 100%;
    border-bottom: 0;
    box-shadow: none;
    padding: 6px;
    /*background-color: #1C77AC;*/
    -moz-transform: scale(0,1) translate(-150px);
    -webkit-transform: scale(0,1) translate(-150px);
    -o-transform: scale(0,1) translate(-150px);
    -ms-transform: scale(0,1) translate(-150px);
    transform: scale(0,1) translate(-150px);
}
.widget-box.no-border {
    border-bottom: 0;
}
.widget-box {
    padding: 0;
    width: 220px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-right: 1px solid #CCC;
    height: 100%;
    overflow: auto;
}
.no-border {
    border: 0;
}
.widget-box.no-border>.widget-body {
    border: 0;
}
.widget-body {
    border: 1px solid #CCC;
    border-top: 0;
    background-color: #FFF;
}
.widget-box.visible {
    visibility: visible;
    -moz-transform: scale(1,1) translate(0);
    -webkit-transform: scale(1,1) translate(0);
    -o-transform: scale(1,1) translate(0);
    -ms-transform: scale(1,1) translate(0);
    transform: scale(1,1) translate(0);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    -o-transition: none;
    -webkit-transition: none;
}
.widget-box {
    visibility: hidden;
    border-right: 0px;
    overflow: hidden;
    width: 100%;
    border-bottom: 0;
    box-shadow: none;
    padding: 6px;
    /*background-color: #1C77AC;*/
    -moz-transform: scale(0,1) translate(-150px);
    -webkit-transform: scale(0,1) translate(-150px);
    -o-transform: scale(0,1) translate(-150px);
    -ms-transform: scale(0,1) translate(-150px);
    transform: scale(0,1) translate(-150px);
}
.header.blue {
    border-bottom-color: #d5e3ef;
}
h4.bigger {
    font-size: 19px;
}
.header {
    line-height: 28px;
    margin-bottom: 16px;
    margin-top: 18px;
    padding-bottom: 4px;
    border-bottom: 1px solid #CCC;
}
.blue {
    color: #478fca!important;
}
.lighter {
    font-weight: lighter;
}
.login_icon {
    float: left;
    width: 150px;
}
.login-boxs{
	float: left;
	width: 300px;
}
.frame_style {
    position: relative;
    height: 40px;
    padding: 0px 5px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    line-height: 40px;
    width: 286px;
}
.user_icon {
    background-position: -5px -30px;
}
.frame_style label {
    background: url(../common/images/icon_login.png) no-repeat;
    float: left;
    width: 40px;
    margin-top: 2px;
    height: 35px;
    border-right: 1px solid #ddd;
}
label {
    margin-bottom: 11px;
}
.frame_style input {
	float: left;
    height: 30px;
    padding: 5px 10px;
    border: 0px;
    width: 226px;
    font-size: 14px;
    z-index: 11;
    position: relative;
    background: 0 none;
}
.login-layout input {
    margin-left: 0px;
}
.password_icon{
	background-position: -5px 0px;
	    background: url(../common/images/icon_login.png) no-repeat;
    float: left;
    width: 40px;
    margin-top: 2px;
    height: 35px;
    border-right: 1px solid #ddd;
}
</style>
