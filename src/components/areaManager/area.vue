<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="3" ><div>网点ID：<el-input v-model="area.deviceId" placeholder="网点ID" style="width:70%;"></el-input></div></el-col>
        <el-col :span="4" ><div>网点名称：<el-input v-model="area.area_name" placeholder="网点名称" style="width:70%;"></el-input></div></el-col>
        <el-col :span="5" ><div class="grid-content">合伙人名称：<el-input v-model="area.area_name" placeholder="合伙人名称" style="width:70%;"></el-input></div></el-col>
        <el-col :span="5" ><div class="grid-content">周边网点状态：
          <el-select v-model="area.device_name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!-- <el-input v-model="area.device_name" placeholder="周边网点状态" style="width:70%;"></el-input> -->
          </div></el-col>
        <el-col :span="5" ><div class="grid-content">网点启用状态：
          <el-select v-model="area.area_name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <!-- <el-input v-model="area.area_name" placeholder="网点启用状态" style="width:70%;"></el-input> -->
        </div></el-col>
        <el-col :span="2" class="f-right">
          <el-button type="primary">新增</el-button>
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div  class="flex-box">
    <aside style="border: 1px solid #dfe6ec;border-right:0;">
      <div class="tree-header">省份城市</div>
      <el-tree
        :data="regions"
        :props="props"
        :load="loadNode"
        lazy
        show-checkbox
        @check-change="handleCheckChange" style="border:0;">
      </el-tree>
    </aside>
    <el-table
      :data="area"
      style="width: 100%;height:80%;" >
      <el-table-column style="text-align:left;"
        type="index"
        label=""
        width="50">
      </el-table-column>
      <el-table-column 
        prop="areaId"
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
          prop="area_tel"
          label="网点联系电话"
          >
        </el-table-column>
        <el-table-column style=""
          prop="partner"
          label="合伙人"
          >
        </el-table-column>
        <el-table-column style=""
          prop="partner_tel"
          label="合伙人联系电话"
          >
        </el-table-column>
        <el-table-column style=""
          prop="device_sum"
          label="设备总数"
          >
        </el-table-column>
        <el-table-column style=""
          prop="device_type"
          label="设备类型"
          >
        </el-table-column>
        <el-table-column style=""
          prop="use_status"
          label="使用状态"
          >
        </el-table-column>
        <el-table-column style=""
          prop="create_time"
          label="创建时间"
          >
        </el-table-column>
        <el-table-column style=""
          prop="is_enable"
          label="是否启用"
          >
        </el-table-column>
        <el-table-column style=""
          prop="is_around"
          label="是否启用周边网点"
          >
        </el-table-column>
    </el-table>
    </div>

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
        area: [{
          areaId: '1',
          area_addr:'好美',
          area_name: '王小虎',
          area_tel: '上海',
          pay_ad_id:'',
          last_ad_id:'',
          pay_type_id:'',
          price_id:'',
          is_enable:'',
          area_name:'',
          install_time:'',
          business_begin:'',
          business_end:'',
          area_type:'',
          is_around:'',
          area_financial_id:'',
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