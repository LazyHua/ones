<template>
<el-form  :model="form" :rules="rulesform" ref="form" label-width="80px">
  <h2>用户登录</h2>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="form.password" placeholer="用户名"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="password">
    <el-input type="password" v-model="form.password" placeholer="密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(form)" :loading="logining" style="width:100%;">登录</el-button>
  </el-form-item>
</el-form>
</template>
<style scoped>
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
          password: ''
        },
        rulesform: {
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        var _this = this;
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.logining = true;
            //NProgress.start();
            var loginParams = { password: this.form.password };
            this.$http.get("https://cnodejs.org/api/v1/topics").then(response => {
                // success callback
                if(response.status == 200){
                  this.$router.push('/logintwo');
                }
                console.log(response);
                alert('success');
            }, response => {
                // error callback
            })
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
