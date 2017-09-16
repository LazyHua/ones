<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="3" class="logo" >
				<h2 style="font-size:28px;">乐摩吧</h2>
			</el-col>
			<!-- <el-col :span="3" class="logo" >
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col> -->
			<!-- <el-col :span="8">
				<div class="tools" @click="collapse()" v-model="collapsed">
					<i class="el-icon-menu"></i>
				</div>
			</el-col> -->
			<el-col :span="8" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><span class="icons icon-ui icon-user"></span><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="modify">修改密码</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapsed" :router="true" :unique-opened="menuOnlyOne=true" >
				  <el-submenu :index="indexs+''" v-for="(item,indexs) in menus">
				    <template slot="title">
				      <i :class="item.icon" style="font-size:18px;"></i>
				      <span slot="title">{{item.name}}</span>
				    </template>
				    <el-menu-item :index="obj.url+''" v-for="(obj,index) in item.smenu">{{obj.name}}</el-menu-item>
				  </el-submenu>
				</el-menu>
				<div class="tools" @click="collapse()" v-model="collapsed" >
					<i class="el-icon-menu"></i>
				</div>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container" >
						<strong class="title" style="width:30px;"><span class="icons icon-ui icon-home" style="color:#aaa;"></span></strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner"style="float:left;line-height:2.2;">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<router-view></router-view>
					</el-col>
				</div>
			</section>
			<el-dialog title="修改密码" :visible.sync="dialogModifyVisible" size="tiny">
				<el-form :model="form" :rules="ruleForm" ref="form" label-width="100px">
				    <el-form-item label="密码" prop="password">
					    <el-input type="password" v-model="form.password" ></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkpassword">
					    <el-input type="password" v-model="form.checkpassword" ></el-input>
					</el-form-item>
			    </el-form>
			    <div slot="footer" class="dialog-footer">
					<el-button @click.native="closeDialog">取消</el-button>
					<el-button type="primary" @click.native="submitDialog" :loading="loading">提交</el-button>
				</div>
		    </el-dialog>
		</el-col>
	</el-row>
	

</template>

<script>
	import price from '@/components/areaManager/price'
	import advert from '@/components/areaManager/advert'
	import datas from '@/common/data.json'
	var netdata = datas;
	
	export default {
		components: { price,advert},
		data() {
			var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if (this.form.checkpassword !== '') {
		            this.$refs.form.validateField('checkpassword');
		          }
		          callback();
		        }
		    };
		    var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.form.password) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		    };
			return {
				sysName:'VUEADMIN',
				sysUserName: '',
				sysUserAvatar: '',
				dialogTableVisible: false,
        		dialogFormVisible: false,
        		dialogModifyVisible:false,
        		loading:false,
        		collapsed:false,
				form: {
					password: '',
					checkpassword: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				menus:[],
				ruleForm:{
					password: [
			            { validator: validatePass, trigger: 'blur' }
			        ],
			        checkpassword: [
			            { validator: validatePass2, trigger: 'blur' }
			        ],
				}
			}
		},
		created () {
			this.menus = netdata.menu;
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
		      handleClose(key, keyPath) {
		        console.log(key, keyPath);
		      },
			handleselect: function (a, b) {
			},
			modify: function(){
				var _this = this;
				this.dialogModifyVisible = true;
					//_this.$router.push('/modify');
				
			},
			closeDialog: function(){
				this.dialogModifyVisible = false;
				this.$refs.form.resetFields();
			},
			submitDialog:function(){
				this.loading = true;
				this.$message({
		          message: '恭喜你，这是一条成功消息',
		          type: 'success'
		        });
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {
				});
			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
		}
	}
</script>

<style scoped >
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    min-height: 400px;
    height: 100%;
  }
	/*@import '~scss_vars';*/
.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
	.el-dialog--small {
	    width: 30%!important;
	}
	.el-dialog{
		width: 30%!important;
	}
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		
	}
	.header {
		height: 60px;
		line-height: 60px;
		background: rgb(32, 160, 255);
		color:#fff;
	}
	.userinfo {
		text-align: right;
		padding-right: 35px;
		float: right;
	}
	.userinfo-inner {
		cursor: pointer;
		color:#fff;
		
	}
	.userinfo-inner>img {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		margin: 10px 0px 10px 10px;
		float: right;
	}
	.main {
		display: flex;
		// background: #324057;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;
		
	}
	aside {
		flex:0 0 230px;
		width: 230px;
		background-color: #eef1f6;
	}
	.el-menu{
		height: 100%;
	}
	.collapsed{
		width:60px;
		
	}
	.item{
		position: relative;
	}
	.submenu{
		position:absolute;
		top:0px;
		left:60px;
		z-index:99999;
		height:auto;
		display:none;
	}
	.menu-collapsed{
		flex:0 0 60px;
		width: 60px;
	}
	.menu-expanded{
		flex:0 0 230px;
		width: 230px;
	}
	.content-container {
		flex:1;
		overflow-y: scroll;
		padding: 20px;
		
	}
	.breadcrumb-container {
			//margin-bottom: 15px;
			
		}
		.title {
				width: 200px;
				float: left;
				color: #475669;
			}
			.breadcrumb-inner {
				float: right;
			}
		.content-wrapper {
			background-color: #fff;
			box-sizing: border-box;
		}
</style>