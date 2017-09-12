<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="4">
          <div class="block">
            <span class="demonstration">选择年：</span>
            <el-date-picker
              v-model="monthcheck.year"
              align="right"
              type="year"
              placeholder="选择年">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="4" style="margin-left:10px;margin-right:30px;">
        <div class="block">
          <span class="demonstration">选择月份：</span>
          <el-date-picker
            v-model="monthcheck.month"
            type="month"
            placeholder="选择月">
          </el-date-picker>
        </div>
        </el-col>
        <el-col :span="3" ><div>网点ID：<el-input v-model="monthcheck.deviceId" placeholder="网点ID" style="width:70%;"></el-input></div></el-col>
        <el-col :span="4" ><div>网点名称：<el-input v-model="monthcheck.area_name" placeholder="网点名称" style="width:70%;"></el-input></div></el-col>
        <el-col :span="5" ><div class="grid-content">合伙人名称：<el-input v-model="monthcheck.partner_name" placeholder="合伙人名称" style="width:70%;"></el-input></div></el-col>
        <el-col :span="2" class="f-right">
          <el-button type="primary" @click="handleAdd()">新增</el-button>
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div  class="flex-box">
    
    <el-table
      :data="monthcheck"
      style="width: 100%;height:80%;" >
      <el-table-column style="text-align:left;"
        type="index"
        label=""
        width="50">
      </el-table-column>
      <el-table-column label="基本信息">
      <el-table-column 
        prop="monthcheckId"
        label="网点ID"
        width="150"
        style=""
        >
      </el-table-column>
      <el-table-column style=""
          prop="area_name"
          label="网点名称"
          >
      </el-table-column>
      <el-table-column style=""
          prop="install_time"
          label="开始时间"
          >
        </el-table-column>
        <el-table-column style=""
          prop="check_date"
          label="对账月份"
          >
        </el-table-column>
        <el-table-column style=""
          prop="minimum_amount"
          label="保底金额（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="device_cost"
          label="设备成本（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="device_old"
          label="设备折旧（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="total_device"
          label="设备数"
          >
        </el-table-column>
        <el-table-column style=""
          prop="device_type"
          label="设备型号"
          >
        </el-table-column>
        <el-table-column style=""
          prop="material_fee"
          label="物料费（元）"
          >
        </el-table-column>
        </el-table-column>
        <el-table-column label="交易数据">
        <el-table-column style=""
          prop="trade_amount"
          label="交易收入（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="average_amount"
          label="交易收入（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="trade_amount"
          label="单台均收（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="month_proportion"
          label="占月比例"
          >
        </el-table-column>
        </el-table-column>
        <el-table-column label="网点">
        <el-table-column style=""
          prop="rent_amount"
          label="租金（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="divide"
          label="网点分成比例"
          >
        </el-table-column>
        <el-table-column style=""
          prop="area_amount"
          label="网点实收（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="sCheckAreaType"
          label="网点结算方式"
          >
        </el-table-column>
        <el-table-column style=""
          prop="checkAreaDes"
          label="网点结算备注"
          >
        </el-table-column>
        <el-table-column style=""
          prop="area_check"
          label="网点人对账"
          >
        </el-table-column>
        <el-table-column style=""
          prop="directors"
          label="主管分成"
          >
        </el-table-column>
        <el-table-column style=""
          prop="directors_amount"
          label="主管所得（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="director_check"
          label="网点主管对账"
          >
        </el-table-column>
        <el-table-column style=""
          prop="businessMan"
          label="合伙人"
          >
        </el-table-column>
        <el-table-column style=""
          prop="businessPhone"
          label="合伙人联系方式"
          >
        </el-table-column>
        <el-table-column style=""
          prop="balance"
          label="余额（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="partner_average"
          label="单台月金额"
          >
        </el-table-column>
        <el-table-column style=""
          prop="buyout_fee"
          label="单台买断费用"
          >
        </el-table-column>
        <el-table-column style=""
          prop="partner_divide"
          label="合伙人分成"
          >
        </el-table-column>
        <el-table-column style=""
          prop="partner_amount"
          label="合伙人所得（元）"
          >
        </el-table-column>
        <el-table-column style=""
          prop="sCheckPartnerType"
          label="合伙人结算方式"
          >
        </el-table-column>
        <el-table-column style=""
          prop="checkPartnerDes"
          label="合伙人结算备注"
          >
        </el-table-column>
        <el-table-column style=""
          prop="partner_check"
          label="合伙人对账"
          >
        </el-table-column>
        <el-table-column style=""
          prop="check_status"
          label="交对账状态"
          >
        </el-table-column>
        </el-table-column>
    </el-table>
    </div>
<el-dialog title="网点信息" :visible.sync="monthcheckDialog">
  <div slot="footer" class="dialog-footer">
    <el-button @click="monthcheckDialog = false">取 消</el-button>
    <el-button type="primary" @click="monthcheckDialog = false">确 定</el-button>
  </div>
</el-dialog>

    <div class="el-col row-bg" style="padding:10px 0;margin-top:10px;">
        <el-row>
          <el-col :span="24" ><pagination></pagination></el-col>
        </el-row>
    </div>
  </section>
</template>
<script>
import pagination from '@/components/ccomponent/pagination'
  export default {
    data() {
      return {
        collapsed:false,
        monthcheckDialog:false,
        formLabelWidth:'80px',
        regions: [{
          'name': 'region1'
        }, {
          'name': 'region2'
        }],
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        monthcheck: [{
          monthcheckId: '1',
          monthcheck_addr:'好美',
          monthcheck_name: '王小虎',
          monthcheck_tel: '上海',
          pay_ad_id:'',
          last_ad_id:'',
          pay_type_id:'',
          price_id:'',
          is_enable:'',
          monthcheck_name:'',
          install_time:'',
          business_begin:'',
          business_end:'',
          monthcheck_type:'',
          is_around:'',
          monthcheck_financial_id:'',
          device_type:'',
          create_time:'',
          partner:'',
          partner_tel:''
        }]
      }
    },
    components: {
        pagination
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      collapse:function(event){
        console.log(event);
        //event.currentTarget.parentElement.
        //alert(this.collapsed);
        this.collapsed=!this.collapsed;
      },
      handleAdd:function(){
        this.monthcheckDialog = true;
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  }
</script>
<style scoped>
table{
    width: 100%!important;
  }
html{
  font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
}
.flex-box{
  display: flex;
}
aside {
    flex:0 0 230px;
    width: 230px;
    
  }
  .content-container {
    box-sizing: border-box;
    flex:1;
    overflow-y: scroll;
    padding: 20px;
    
  }
  .tree-header{
    text-indent: 12px;
    background-color: #e5e9f2;
    line-height: 40px;
    font-size: 14px;
  }
.row-bg{
  background-color: #f9fafc;
}
.label-tip{
  text-align:left;text-indent:10px;
}
.lable-item{
  float:left;width:50%;
}
.lable-item-w{
  width:63%;
}
.f-right{
  float: right;
}
.f-left{
  float: left;
}
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    
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