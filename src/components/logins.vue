<template>
<el-form  :model="form" :rules="rulesform" ref="form" label-width="80px">
<h2>用户登录</h2>
  <el-form-item label="用户名" prop="username">
    <el-input type="text" v-model="form.username" placeholer="用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="form.password" placeholer="密码"></el-input>
  </el-form-item>
  <el-form-item label="城市" prop="city_name">
    <el-input type="city_name" v-model="form.city_name" placeholer="密码"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="vcode">
    <el-input type="text" v-model="form.vcode" placeholer="验证码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(form)" :loading="logining" style="width:100%;">登录</el-button>
  </el-form-item>
</el-form>
</template>
<style>
  h2{
    padding-bottom: 20px;
  }
  form{
    width: 350px;
    padding: 35px;
    margin:180px auto;
    border:1px solid #eaeaea;
    box-shadow:0 0 25px #cac6c6;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
    -o-border-radius:5px;
    border-radius:5px;
  }
  .btnsub{
    width: 100%;
  }
</style>
<script>
  export default {
    data() {
      return {
        logining:false,
        form: {
          username: '',
          password: '',
          vcode: '',
          city_name: ''
        },
        rulesform: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          city_name: [
            { required: true, message: '请输入城市', trigger: 'blur' }
          ],
          vcode: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        var _this = this;
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
            this.logining = true;
            //NProgress.start();
            var loginParams = { username: this.form.username, password: this.form.password ,city_name:this.form.city_name,vcode:this.form.vcode};
              
              this.$http.post("/web/v1/lmb/login",loginParams,{
                headers:{
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }).then(response => {
                  // success callback
                  if(response.status == 200){
                    this.$router.push('/Home');
                  }
                  console.log(response);
                  alert('success');
              }, response => {
                  // error callback
              })

              // this.$http.post("/web/v1/lmb/login",this.$refs.form,{
              //   headers:{
              //     'Content-Type': 'application/x-www-form-urlencoded'
              //   }
              // }).then(response => {
              //     // success callback
              //     if(response.status == 200){
              //       this.$router.push('/Home');
              //     }
              //     console.log(response);
              //     alert('success');
              // }, response => {
              //     // error callback
              // })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
