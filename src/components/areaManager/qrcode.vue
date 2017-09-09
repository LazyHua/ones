<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-button type="primary" @click="handleEdit()" class="f-left" style="margin-left:10px;"><i class="el-icon-plus" style="margin-right:5px;"></i>新增二维码</el-button>
        <el-button type="primary">查询</el-button>
      </el-row>
    </div>
    <el-table
      :data="qrcode"
      style="width: 100%;height:80%;" >
      <el-table-column style="text-align:left;"
        type="index"
        label=""
        width="50">
      </el-table-column>
      <el-table-column 
        prop="deviceId"
        label="设备ID"
        width="150"
        style=""
        >
      </el-table-column>
      <el-table-column style=""
          prop="actived"
          label="是否激活"
          >
      </el-table-column>
      <el-table-column style=""
          prop="factory_outtime"
          label="设备出厂时间"
          >
        </el-table-column>
        <el-table-column style=""
          prop="code"
          label="二维码"
          ><img src="" alt="">
        </el-table-column>
    </el-table>
    <div class="el-col row-bg" style="padding:10px 0;margin-top:10px;">
        <el-row>
          <el-col :span="24" ><pagination></pagination></el-col>
        </el-row>
    </div>
    <el-dialog title="二维码信息" :visible.sync="qrcodeDialog" size="tiny" @close="hideDialog">
      <el-form :model="qrcodeAdd" :rules="ruleqrcode" ref="qrcodeAdd">
        <el-form-item label="设备ID" :label-width="formLabelWidth" prop="deviceId">
          <el-input v-model="qrcodeAdd.deviceId" style="width:50%;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-right:30px;">
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
      var validateDeviceMsg = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入设备ID'));
          } else{
            if(!isInt(value)){
              callback(new Error('请输入正确的格式：(例:160000001)'));
            }
          }
      };
      var isInt = function (val) {
        var re = /^[0-9]+.?[0-9]*$/;   //判断字符串是否为数字     //判断正整数 /^[1-9]+[0-9]*]*$/   
        if (re.test(val)) {
            if (val % 1 === 0) {
                var xx = "";xx=val;
                if (xx.length == 9 && parseInt(xx) && (parseInt(xx).toString()).length==9) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
      return {
        formLabelWidth:'70px',
        qrcodeDialog:false,
        qrcode: [{
          deviceId: '1',
          actived:'好美',
          factory_outtime: '王小虎',
          code: '上海'
        }],
        qrcodeAdd:{
            deviceId: ''
          },
        ruleqrcode:{
          deviceId: [
            { validator: validateDeviceMsg, trigger: 'blur' }
          ]
        }
      }
    },
    components: {
        pagination
    },
    methods: {
      handleEdit:function(){
        this.qrcodeDialog = true;
      },
      hideDialog:function(){
        this.qrcodeDialog = false;
        this.$refs.qrcodeAdd.resetFields();
      },
      handleDelete:function(){
        this.$confirm('确认删除数据吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
        }).catch(() => {
          this.$message.error('删除失败！');
        });
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
.row-bg{
  background-color: #f9fafc;
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
  .el-dialog {
    box-shadow: 1px 1px 30px rgba(0,0,0,.3)!important;
}
.el-form-item__error{
  left:70px!important;
}
</style>