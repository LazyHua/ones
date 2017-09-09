<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="coupon.coupon_name" placeholder="活动标题：" style="width:70%;"></el-input></div></el-col>
        <el-col :span="5" ><div class="grid-content">活动类型：
          <el-select v-model="coupon.device_name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div></el-col>
        <el-col :span="5" ><div class="grid-content">活动启用状态：
          <el-select v-model="coupon.device_name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div></el-col>
        <el-col :span="2" class="f-right">
        <el-button type="primary" @click="handleAdd()">新增</el-button>
        <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="coupon"
      style="width: 100%;height:80%;" >
      <el-table-column style="text-align:left;"
        type="index"
        label=""
        width="50">
      </el-table-column>
      <el-table-column style=""
          prop="coupon_type"
          label="活动类型"
          >
      </el-table-column>
      <el-table-column style=""
          prop="coupon_title"
          label="活动标题"
          >
        </el-table-column>
        <el-table-column style=""
          prop="coupon_desc"
          label="活动描述"
          >
        </el-table-column>
        <el-table-column style=""
          prop="coupon_class"
          label="档位选择"
          >
        </el-table-column>
        <el-table-column style=""
          prop="coupon_area"
          label="使用区域ID"
          >
        </el-table-column>
        <el-table-column style=""
          prop="start_time"
          label="活动开始日期"
          >
        </el-table-column>
        <el-table-column style=""
          prop="end_time"
          label="活动结束日期"
          >
        </el-table-column>
        <el-table-column style=""
          prop="coupon_sum"
          label="发放总数"
          >
        </el-table-column>
        <el-table-column style=""
          prop="coupon_used"
          label="创建时间"
          >
        </el-table-column>
        <el-table-column style=""
          prop="is_enabled"
          label="是否启用"
          >
        </el-table-column>
        <el-table-column style=""
          prop="create_time"
          label="是否启用"
          >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="80">
          <template scope="scope">
            <el-button @click="handleClick" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
    </el-table>
    <div class="el-col row-bg" style="padding:10px 0;margin-top:10px;">
        <el-row>
          <el-col :span="24" ><pagination></pagination></el-col>
        </el-row>
    </div>
    <el-dialog title="创建代金券" :visible.sync="couponDialog" size="tiny">
        
      <el-form :model="couponAdd" :rules="rulecoupon" ref="couponAdd">

        <el-form-item label="名称" prop="desc":label-width="formLabelWidth">
          <el-input v-model="couponAdd.desc" style="width:90%;"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="href"  :label-width="formLabelWidth">
          <el-input v-model="couponAdd.coupon_count" style="width:90%;"></el-input>
        </el-form-item>
        <el-form-item label="档位" prop="href"  :label-width="formLabelWidth">
          <el-input v-model="couponAdd.coupon_class" style="width:90%;"></el-input>
        </el-form-item>
        <el-form-item label="时间选择" prop="duringtime"  :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="couponAdd.duringtime"
              type="daterange"
              placeholder="选择日期范围" range-separator='到' >
            </el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="使用说明" prop="href"  :label-width="formLabelWidth">
          <el-input
            type="textarea" maxlength="120"
            autosize
            placeholder="请输入内容(120个字以内)"
            v-model="couponAdd.coupon_remark" style="width:90%;">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-right:83px;">
        <el-button @click="hideDialog">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import pagination from '@/components/ccomponent/pagination'
  export default {
    data() {
      var validateDate = (rule, value, callback) => {
        if(value.length>1){
          var start_time = '',end_time = '';
          start_time = Date.parse(value[0]);
          end_time = Date.parse(value[1]);
          if(start_time==end_time){
            callback(new Error('开始时间与结束时间不能为同一天！'));
          }
        }else{
          callback(new Error('请选择合理的时间范围'));
        }
      };
      var validateCount = (rule, value, callback) => {
        var type = /^[0-9]*[1-9][0-9]*$/;
        var re = new RegExp(type);
        if(value!=""){
          value.match(re);
        }
      };
      var validateRemark = (rule, value, callback) => {
        if(value!=""){
          alert(value);
        }
      };
      return {
        formLabelWidth:'80px',
        couponDialog:false,
        coupon: [{
          coupon_name:'',
          coupon_count: '',
          coupon_class: '',
          coupon_type:'',
          coupon_area:'',
          start_time:'',
          end_time:'',
          remark:'',
          create_time:''
        }],
        couponAdd: {
          coupon_name:'',
          coupon_count: '',
          coupon_class: '',
          coupon_type:'',
          coupon_area:'',
          start_time:'',
          end_time:'',
          duringtime:'',
          remark:''
        },
        rulecoupon:{
          coupon_name:[
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          coupon_count: [
            { validator: validateCount, trigger: 'blur' }
          ],
          coupon_class: [
            { required: true, message: '请选择档位', trigger: 'blur' }
          ],
          coupon_type: [
            { required: true, message: '请选择类型', trigger: 'blur' }
          ],
          duringtime: [
            { validator: validateDate, trigger: 'blur' }
          ],
          remark:[
            { validator: validateRemark, trigger: 'blur' }
          ]
        }
      }
    },
    components: {
        pagination
    },
    methods: {
      handleAdd:function(){
        this.couponDialog = true;
      },
      handleClick:function(){

      },
      hideDialog:function(){
        this.couponDialog = false;
      },
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