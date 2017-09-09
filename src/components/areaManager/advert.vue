<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <!-- <el-button type="primary">查询</el-button> -->
        <el-button type="primary" @click="handleEdit()" class="f-left" style="margin-left:10px;"><i class="el-icon-plus" style="margin-right:5px;"></i>添加广告</el-button>
      </el-row>
    </div>
    <el-table
      :data="advert"
      style="width: 100%;height:80%;" >
      <el-table-column style="text-align:left;"
        type="index"
        label=""
        width="50">
      </el-table-column>
      <el-table-column 
        prop="advertid"
        label="广告ID"
        width="150"
        style=""
        >
      </el-table-column>
      <el-table-column style=""
          prop="desc"
          label="广告描述"
          >
      </el-table-column>
      <el-table-column style=""
          prop="url"
          label="广告图片"
          >
        </el-table-column>
        <el-table-column style=""
          prop="href"
          label="广告跳转地址"
          >
        </el-table-column>
        <el-table-column style=""
          prop="start_time"
          label="开始时间"
          >
        </el-table-column>
        <el-table-column style=""
          prop="end_time"
          label="结束时间"
          >
        </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="el-col row-bg" style="padding:10px 0;margin-top:10px;">
        <el-row>
          <el-col :span="24" ><pagination></pagination></el-col>
        </el-row>
    </div>
    <el-dialog title="广告信息" :visible.sync="advertDialog" size="small">
        
      <el-form :model="advertAdd" :rules="ruleadvert" ref="advertAdd">

        <el-form-item label="描述" prop="desc":label-width="formLabelWidth">
          <el-input v-model="advertAdd.desc" style="width:90%;"></el-input>
        </el-form-item>
        <el-form-item label="跳转地址" prop="href"  :label-width="formLabelWidth">
          <el-input v-model="advertAdd.href" style="width:90%;"></el-input>
        </el-form-item>
        <el-form-item label="时间选择" prop="duringtime"  :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="advertAdd.duringtime"
              type="daterange"
              placeholder="选择日期范围" range-separator='到' >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="是否启用" :label-width="formLabelWidth">
          <el-switch
            v-model="advertAdd.enabled"
            on-color="#13ce66"
            off-color="#ff4949">
          </el-switch>
          </el-form-item>
        <el-form-item label="图片" prop="time1"  style="margin-left:40px;">  
          <el-upload 
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
      return {
        formLabelWidth:'80px',
        advertDialog:false,
        imageUrl: '',
        advert: [{
          advertid: '1',
          desc:'好美',
          url: '王小虎',
          href: '上海',
          start_time: '普陀区',
          end_time: '上海',
          start_end_time:'',
          enabled: true
        }],
        advertAdd: {
          desc:'',
          url: '王小虎',
          href: '上海',
          start_time: '普陀区',
          end_time: '上海',
          enabled: false,
          duringtime:''
        },
        ruleadvert:{
          desc:[
            { required: true, message: '请输入广告描述', trigger: 'blur' }
          ],
          href: [
            { required: true, message: '请输入广告跳转地址', trigger: 'blur' }
          ],
          start_time: [
            { required: true, message: '请选择开始时间', trigger: 'blur' }
          ],
          end_time: [
            { required: true, message: '请选择结束时间', trigger: 'blur' }
          ],
          duringtime: [
            { validator: validateDate, trigger: 'blur' }
          ]
        }
      }
    },
    components: {
        pagination
    },
    methods: {
      handleEdit:function(){
        this.advertDialog = true;
      },
      hideDialog:function(){
        this.advertDialog = false;
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
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style scoped>
.el-upload{
  border: 1px dashed #d9d9d9;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
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
</style>