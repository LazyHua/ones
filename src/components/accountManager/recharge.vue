<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="3" style="margin-left:10px;">
          <div class="block"><!-- 
            <span class="demonstration">默认</span> -->
            <el-date-picker
              v-model="recharge.duringtime"
              type="daterange"
              placeholder="选择日期范围"style="width:80%;">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="4" ><div>订单状态：
          <el-select v-model="recharge.order_status" placeholder="请选择" @change="setSelect(this)"style="width:60%;">
            <el-option
              v-for="item in recharge.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select></div>
        </el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="recharge.recharge_num" placeholder="订单号" style="width:80%;"></el-input></div></el-col>
        
        <el-col :span="1" class="f-right">
        <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="recharge"
      style="width: 100%;" >
      <el-table-column style=""
        type="index"
        label=""

        width="50">
      </el-table-column>
      <el-table-column style=""
        prop="order_num"
        label="订单号"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="order_status"
        label="订单状态"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="payment_price"
        label="订单金额（元）"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="payment_time"
        label="付款时间"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="payment_account"
        label="付款账号"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="trace_num"
        label="交易单号"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="point"
        label="获得积分"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="create_at"
        label="创建时间"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="price"
        label="获得金额（元）"
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
        rechargeDialog:false,
        recharge: [{
          order_num: '1',
          order_status:'',
          payment_price: '王小虎',
          payment_time: '上海',
          pay_account: '普陀区',
          payment_account: '上海',
          trace_num: '普陀区',
          created_at: '上海',
          price:'',
          create_time: '普陀区',
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
    brecharge-radius: 4px;
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
    brecharge-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>