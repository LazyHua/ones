<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="4">
          <div class="block">
            <span class="demonstration">选择年：</span>
            <el-date-picker
              v-model="yearorder.year"
              align="right"
              type="year"
              placeholder="选择年">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="yearorder.area_name" placeholder="网点名称" style="width:80%;"></el-input></div></el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="yearorder.partner" placeholder="合伙人查询" style="width:80%;"></el-input></div></el-col>
        <el-col :span="1" class="f-right">
        <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="yearorder"
      style="width: 100%;" >
      <el-table-column style=""
        type="index"
        label=""

        width="50">
      </el-table-column>
      <el-table-column style=""
        prop="province_name"
        label="省份"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="city_name"
        label="城市"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="area_name"
        label="网点名称"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="partner"
        label="合伙人"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="start_time"
        label="场地启动时间"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="_num"
        label="订单数"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="device_type"
        label="设备类型"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="device_num"
        label="设备数"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="aver_single"
        label="单台均收（元）"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="price_sum"
        label="总金额（元）"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
    </el-table>
    <div class="el-col row-bg" style="padding:10px 0;margin-top:10px;">
        <el-row>
          <el-col :span="24" ><pagination></pagination></el-col>
        </el-row>
    </div>
  </section>
</template>
<style scoped>
  table{
    width: 100%!important;
  }
</style>
<script>
import pagination from '@/components/ccomponent/pagination'
  export default {
    data() {
      return {
        formLabelWidth:'80px',
        yearorder: [{
          province_name: '上海',
          city_name: '普陀区',
          area_name: '上海',
          partner:'',
          start_time: '普陀区',
          order_num:'',
          device_type:'',
          device_num:'',
          aver_single:'',
          price_sum:'',
          year:''
        },{
          province_name: '上海',
          city_name: '普陀区',
          area_name: '上海',
          partner:'',
          start_time: '普陀区',
          order_num:'',
          device_type:'',
          device_num:'',
          aver_single:'',
          price_sum:'',
          year:''
        }],
      }
    },
    components: {
        pagination
    },
    created () {
      // var data = { page:2,tab:'job',limit:20,mdrender:false};
      // this.$http.get("https://cnodejs.org/api/v1/topics",data).then(response => {
      //       // success callback
            
      //       console.log(response);
      //       alert('success');
      //   }, response => {
      //       // error callback
      //   })
    },
    methods: {
      getData:function(){
        
      }
    }
  }
</script>
<style scoped>
html{
  font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
}
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-top: 10px;
      margin-bottom: 0;
    }
  .el-col {
    b-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    b-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>