<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="3" style="margin-left:10px;">
          <div class="block"><!-- 
            <span class="demonstration">默认</span> -->
            <el-date-picker
              v-model="waitItem.duringtime"
              type="daterange"
              placeholder="选择日期范围"style="width:80%;">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="waitItem.apply_user" placeholder="申请人" style="width:80%;"></el-input></div></el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="waitItem.flowtask_name" placeholder="流程" style="width:80%;"></el-input></div></el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="waitItem.area_name" placeholder="网点名称" style="width:80%;"></el-input></div></el-col>
        <el-col :span="3" ><div class="grid-content"><el-input v-model="waitItem.stepName" placeholder="步骤" style="width:80%;"></el-input></div></el-col>
        <el-col :span="1" class="f-right">
        <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="waitItem"
      style="width: 100%;" >
      <el-table-column style=""
        type="index"
        label=""

        width="50">
      </el-table-column>
      <el-table-column style=""
        prop="FlowTaskID"
        label="任务ID"
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
        prop="flowtask_name"
        label="流程"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="stepName"
        label="步骤"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="apply_user"
        label="申请人"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="apply_time"
        label="申请时间"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="isReject"
        label="状态"
        width="150"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="80">
        <template scope="scope">
          <el-button @click="handleCheck" type="text" size="small">查看</el-button>
        </template>
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
        waitItem: [{
          FlowTaskID: '1',
          area_name: '王小虎',
          flowtask_name: '上海',
          apply_time: '普陀区',
          apply_user: '上海',
          stepName: '',
          area_name: '上海',
          isReject:'',
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
        
      },
      handleCheck:function(){

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