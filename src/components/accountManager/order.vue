<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="3" style="margin-left:10px;">
          <div class="block"><!-- 
            <span class="demonstration">默认</span> -->
            <el-date-picker
              v-model="order.duringtime"
              type="daterange"
              placeholder="选择日期范围"style="width:80%;">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="4" ><div>订单状态：
          <el-select v-model="order.order_status" placeholder="请选择" @change="setSelect(this)"style="width:60%;">
            <el-option
              v-for="item in order.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select></div>
        </el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="order.order_num" placeholder="订单号" style="width:80%;"></el-input></div></el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="order.deviceid" placeholder="设备ID" style="width:80%;"></el-input></div></el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="order.area_name" placeholder="网点名称" style="width:80%;"></el-input></div></el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="order.pay_type" placeholder="支付方式" style="width:80%;"></el-input></div></el-col>
        <el-col :span="1" class="f-right">
        <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="order"
      style="width: 100%;" >
      <el-table-column style=""
        type="index"
        label=""

        width="50">
      </el-table-column>
      <el-table-column style=""
        prop="order_num"
        label="订单号"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="areaid"
        label="网点ID"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="device_id"
        label="设备ID"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="pay_account"
        label="支付账号"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="province"
        label="省份"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="city"
        label="城市"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="area_name"
        label="设备所在网点"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="money"
        label="金额"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="create_time"
        label="下单时间"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="order_status"
        label="订单状态"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="pay_time"
        label="付款时间"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="pay_type"
        label="付款方式"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="trace_num"
        label="交易单号"
        width="150"
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
        orderDialog:false,
        order: [{
          order_num: '1',
          areaid: '王小虎',
          deviceid: '上海',
          pay_account: '普陀区',
          province: '上海',
          city: '普陀区',
          area_name: '上海',
          money:'',
          create_time: '普陀区',
          order_status:'',
          pay_time:'',
          pay_type:'',
          trace_num:'',
          duringtime:''
        },{
          order_num: '1',
          areaid: '王小虎',
          deviceid: '上海',
          pay_account: '普陀区',
          province: '上海',
          city: '普陀区',
          area_name: '上海',
          money:'',
          create_time: '普陀区',
          order_status:'',
          pay_time:'',
          pay_type:'',
          trace_num:'',
          duringtime:''
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
    border-radius: 4px;
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
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>