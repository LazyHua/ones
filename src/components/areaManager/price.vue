<template>
  <section>
    <div class="el-col row-bg" style="padding:10px 0;margin-bottom:10px;">
      <el-row>
        <el-col :span="4" ><div><el-input v-model="searchForm.id" @change="watchVal" placeholder="价格ID" style="width:70%;" class="search" data-attr="id"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="searchForm.price1" placeholder="唤醒身体价格" style="width:70%;"class="search"data-attr="price1"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="searchForm.price2" placeholder="通行气血价格" style="width:70%;"class="search"data-attr="price2"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="searchForm.price3" placeholder="舒张筋骨价格" style="width:70%;"class="search"data-attr="price3"></el-input></div></el-col>
        <el-col :span="3" class="f-right">
          <el-button type="primary" @click="handleAdd()"><i class="icon-plus" style="margin-right:5px;"></i>新增</el-button>
        <el-button type="primary" @click="search()"><i class="icon-search"></i>查询</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" ><div><el-input v-model="searchForm.price_name" placeholder="价格描述" style="width:70%;"class="search"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="searchForm.time1" placeholder="唤醒身体时长" style="width:70%;"class="search"data-attr="time1"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="searchForm.time2" placeholder="通行气血时长" style="width:70%;"class="search"data-attr="time2"></el-input></div></el-col>
        <el-col :span="4" ><div class="grid-content"><el-input v-model="searchForm.time3" placeholder="舒张筋骨时长" style="width:70%;"class="search"data-attr="time3"></el-input></div></el-col>
      </el-row>
    </div>
    <el-table
      :data="datas"
      style="width: 100%;" >
      <el-table-column style=""
        type="index"
        width="60">
      </el-table-column>
      <el-table-column style=""
        prop="id"
        label="价格ID"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column style=""
        prop="price_name"
        label="价格名称"
        sortable
        style="text-align:center;"
        >
      </el-table-column>
      <el-table-column label="唤醒身体">
        <el-table-column style=""
          prop="price1"
          label="价格(元)"
          >
        </el-table-column>
        <el-table-column style=""
          prop="time1"
          label="时长(分钟)"
          >
        </el-table-column>
      </el-table-column>
      <el-table-column label="通行气血">
        <el-table-column style=""
          prop="price2"
          label="价格(元)"
          >
        </el-table-column>
        <el-table-column style=""
          prop="time2"
          label="时长(分钟)"
          >
        </el-table-column>
      </el-table-column>
      <el-table-column label="舒张筋骨">
        <el-table-column style=""
          prop="price3"
          label="价格(元)"
          >
        </el-table-column>
        <el-table-column style=""
          prop="time3"
          label="时长(分钟)"
          >
        </el-table-column>
      </el-table-column>
      <el-table-column style=""
        prop="is_enable"
        label="是否启用"
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
          <el-col :span="24" ><pagination :total="20" :current-pages="4"></pagination></el-col>
        </el-row>
    </div>
    <el-dialog title="价格信息" :visible.sync="priceDialog" size="tiny">
      <el-form :model="price" :rules="rulePrice" ref="price">
        <el-form-item label="价格名称" prop="price_name" :label-width="formLabelWidth">
          <el-input v-model="price.price_name" style="width:85%;"></el-input>
        </el-form-item>
        <div class="label-tip" >唤醒身体</div>
        <el-form-item label="价格：" prop="price1" class="lable-item" :label-width="formLabelWidth">
          <el-input v-model="price.price1" class="lable-item-w"></el-input>
        </el-form-item>
        <el-form-item label="时长：" prop="time1" class="lable-item":label-width="formLabelWidth">  
          <el-input v-model="price.time1" class="lable-item-w"></el-input>
        </el-form-item>
        <div class="label-tip">通行气血</div>
        <el-form-item label="价格：" prop="price2" class="lable-item":label-width="formLabelWidth">
          <el-input v-model="price.price2" class="lable-item-w"></el-input>
        </el-form-item>
        <el-form-item label="时长：" prop="time2" class="lable-item":label-width="formLabelWidth">
          <el-input v-model="price.time2" class="lable-item-w"></el-input>
        </el-form-item>
        </el-form-item>
        <div class="label-tip">舒张筋骨</div>
        <el-form-item label="价格：" prop="price3" class="lable-item":label-width="formLabelWidth">
          <el-input v-model="price.price3" class="lable-item-w"></el-input>
        </el-form-item>
        <el-form-item label="时长：" prop="time3" class="lable-item":label-width="formLabelWidth">
          <el-input v-model="price.time3" class="lable-item-w"></el-input>
        </el-form-item>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-right:30px;">
        <el-button @click="hideDialog">取 消</el-button>
        <el-button type="primary" @click="handleType">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<style scoped>
  table{
    width: 100%!important;
  }
</style>
<script>
  import pagination from '@/components/ccomponent/pagination'
  import { get,post,success,error,checkNull,filterData } from '@/common/js/common.js'
  import Qs from 'qs'
  export default {
    data() {
      return {
        flag:'',
        formLabelWidth:'80px',
        priceDialog:false,
        datas:[{
          is_enable:''
        }
        ],
        searchForm:{
          id: '',
          price_name: '',
          price1: '',
          time1: '',
          price2: '',
          time2: '',
          price3: '',
          time3: ''
        },
        price: {
          id: '',
          price_name: '',
          price1: '',
          time1: '',
          price2: '',
          time2: '',
          price3: '',
          time3: '',
          is_enable:''
        },
        rulePrice:{
          price_name: [
            { required: true, message: '请输入价格描述', trigger: 'blur' }
          ],
          price1: [
            { required: true, message: '请输入唤醒身体价格', trigger: 'blur' }
          ],
          price2: [
            { required: true, message: '请输入唤醒身体时长', trigger: 'blur' }
          ],
          price3: [
            { required: true, message: '请输入通行血气价格', trigger: 'blur' }
          ],
          time1: [
            { required: true, message: '请输入通行血气时长', trigger: 'blur' }
          ],
          time2: [
            { required: true, message: '请输入舒张筋骨价格', trigger: 'blur' }
          ],
          time3: [
            { required: true, message: '请输入舒张筋骨时长', trigger: 'blur' }
          ]
        }
      }
    },
    components: {
        pagination
    },
    created () {
      var data = { page:2,tab:'job',limit:20,mdrender:false};
      var url = "/web/v1/price/getPriceGroups";
      var flag = "price";
      
      //get(flag, url, success, error);
      this.$http.get(url).then(response => {
          // success callback
         this.datas = response.data.data.rows;
          console.log(response);
        }, response => {
          // error callback
      })
    },
    methods: {
      watchVal:function(){
        if(checkNull(this.priceid)){
            this.priceid = "0";
        }
      },
      getData:function(data){
        alert();
      },
      search:function(){
        var _this = this;
        var data = { id: _this.searchForm.id,price_name:_this.searchForm.price_name,price1:_this.searchForm.price1,time1:_this.searchForm.time1,price2:_this.searchForm.price2,time2:_this.searchForm.time2,price3:_this.searchForm.price3,time3:_this.searchForm.time3,is_enable:_this.searchForm.is_enable};
        filterData(data);
        var url = "/web/v1/price/getPriceGroups";
        _this.$http.get(url,{ params:data }).then(response => {
            // success callback
            alert('ock');
            _this.datas = response.data.data.rows;
        }, response => {
            // error callback
        })
      },
      success:function(){

      },
      handleType:function(){

      },
      handleAdd:function(){
        //需判断当前页的数据是否满足10条，如果小于10条，那么则把新增的数据成功的回调：this.tableData3.push(_data);到数据中
        var _this = this;
        _this.priceDialog = false;
        var dataTemp = {};
        dataTemp = {
                  price_name:this.price.price_name,
                  price1:this.price.price1*1000,
                  time1:this.price.time1,
                  price2:this.price.price2*1000,
                  time2:this.price.time2,
                  price3:this.price.price3*1000,
                  time3:this.price.time3,
                  is_enable:1
                }
        var url = "/web/v1/price/savePrice";
        _this.$http.post(url,
          Qs.stringify(dataTemp)
        ).then(response => {
            // success callback
            this.$message({
              message: '恭喜你，提交成功！',
              type: 'success'
            });
        }, response => {
            this.$messagef.error('哦哦，提交失败！');
            // error callback
        })
      },
      handleEdit:function(index,row){
        this.priceDialog = true;
        this.price = Object.assign({}, row);
        console.log(row);
      },
      hideDialog:function(){
        this.priceDialog = false;
        this.$refs.price.resetFields();
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