<template>
  <div id="app">
  <transition name="fade">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin:0;
  border:0;
  padding: 0;
}
#app {
  font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.f-right{
  float: right;
}
.f-left{
  float: left;
}
.el-upload{
  border: 1px dashed #d9d9d9;
}
textarea{
  height:150px!important;
}
[v-cloak] {
    display: none;
}
</style>
