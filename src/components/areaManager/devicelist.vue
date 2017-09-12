<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="4" ><div><el-input v-model="devicelist.deviceId" placeholder="设备ID" style="width:70%;"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="devicelist.device_name" placeholder="设备名称" style="width:70%;"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="devicelist.area_name" placeholder="网点ID" style="width:70%;"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="devicelist.area_name" placeholder="网点名称" style="width:70%;"></el-input></div></el-col>
        <el-col :span="1" class="f-right">
          <el-button type="primary"><i class="icon-search"></i>查询</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="devicelist"
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
          prop="device_name"
          label="设备名称"
          >
      </el-table-column>
      <el-table-column style=""
          prop="flag"
          label="标签"
          >
      </el-table-column>
      <el-table-column style=""
          prop="area_id"
          label="设备所在网点"
          >
        </el-table-column>
        <el-table-column style=""
          prop="login_time"
          label="登录时间"
          >
        </el-table-column>
        <el-table-column style=""
          prop="logout_time"
          label="最近离线时间"
          >
        </el-table-column>
        <el-table-column style=""
          prop="outduring"
          label="离线时长(分钟)"
          >
        </el-table-column>
        <el-table-column style=""
          prop="device_status"
          label="设备状态"
          >
        </el-table-column>
        <el-table-column style=""
          prop="use_status"
          label="使用状态"
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
<script>
import pagination from '@/components/ccomponent/pagination'
  export default {
    data() {
      return {
        devicelist: [{
          deviceId: '1',
          device_name:'好美',
          flag:'',
          area_id: '王小虎',
          login_time: '上海',
          logout_time:'',
          outduring:'',
          device_status:'',
          use_status:'',
          area_name:''
        }]
      }
    },
    components: {
        pagination
    },
    methods: {
      
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