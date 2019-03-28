<template>
  <div id="timeLimt" :data="divData" >
    <el-form ref="queryParams" :model="queryParams" >
    <h1 class="title">订餐时限设置</h1>
    <div class="u24173_input" style="">
      早餐&nbsp;&nbsp;&nbsp;&nbsp;
      <el-select v-model="queryParams.breakfast" placeholder="请选择" style="width: 180px" prop = "breakfast" clearable>
        <el-option
          v-for="item in options"
          :key="item.breakfast"
          :label="item.label"
          :value="item.breakfast">
        </el-option>
      </el-select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-time-picker
        v-model="queryParams.breakfastTime"
        :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }"
        placeholder="任意时间点" prop = "breakfastTime">
      </el-time-picker>
    </div>
    <div class="u24174_input">
      午餐&nbsp;&nbsp;&nbsp;&nbsp;
      <el-select v-model="queryParams.lunch" placeholder="请选择" style="width: 180px" clearable>
        <el-option
          v-for="item in options1"
          :key="item.lunch"
          :label="item.label1"
          :value="item.lunch">
        </el-option>
      </el-select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-time-picker
        v-model="queryParams.lunchTime"
        :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }"
        placeholder="任意时间点">
      </el-time-picker>
    </div>
    <div class="u24175_input">
      晚餐&nbsp;&nbsp;&nbsp;&nbsp;
      <el-select v-model="queryParams.dinner" placeholder="请选择" style="width: 180px" clearable>
        <el-option
          v-for="item in options2"
          :key="item.dinner"
          :label="item.label2"
          :value="item.dinner">
        </el-option>
      </el-select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-time-picker
        v-model="queryParams.dinnerTime"
        :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }"
        placeholder="任意时间点">
      </el-time-picker>
    </div>
    <div class="u24176_input" >
      <!--<template slot-scope="scope">-->
        <!--<el-tooltip v-if="hasPerm(otf-timeLimit-list)">-->
          <el-button type="primary" @click="check">确认</el-button>
        <!--</el-tooltip>-->
      <!--</template>-->
    </div>
    </el-form>
  </div>
</template>
<style>
  #timeLimt{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 680px;
    height: 460px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(204, 204, 204, 1);
    border-radius: 15px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-top: 270px;
    margin-left: 550px;
  }
  .title{
    margin-top: 50px;
    text-align: center;
    font-size: 35px;
  }
  .u24173_input{
    margin-left: 105px;
    margin-top: 50px;
  }
  .u24174_input{
    margin-left: 105px;
    margin-top: 30px;
  }
  .u24175_input{
    margin-left: 105px;
    margin-top: 30px;
  }
  .u24176_input{
    margin-left: 320px;
    margin-top: 30px;
  }

</style>
<script>
  import TimeLimit from  '../../common/otf/TimeLimit'
  import createPersistedState from "vuex-persistedstate"
  // import plusing from '../../../../store/modules/timeLimtit'
  import computed from 'vuex'
  export default {
    components:[
      TimeLimit,
      createPersistedState,
      // plusing
      computed
    ],
    props:{
      show:{
        type:Boolean,
        default:false,
      }
    },
    watch: {
      show() {
        this.visible = this.show;
        if (!this.materialData) {
          for (let k in this.queryParams) {
            this.queryParams[k] = '';
          }
          this.queryParams.state = 1;
          this.isEdit = false;
        }
      },
    },
    data() {
      return {
        visible: this.show,
        isEdit: false,
        message:'',
        divData:[],
        queryParams:{
          id:'',
          breakfast:'',
          lunch:'',
          dinner:'',
          breakfastTime:'',
          lunchTime:'',
          dinnerTime:''
        },
        options: [{
          breakfast: '选项1',
          label: '前一天'
        }, {
          breakfast: '选项2',
          label: '前两天'
        }, {
          breakfast: '选项3',
          label: '前三天'
        }, {
          breakfast: '选项4',
          label: '前四天'
        }, {
          breakfast: '选项5',
          label: '前五天'
        }],
        breakfast: '',
        breakfastTime: new Date(),
        options1: [{
          lunch: '选项1',
          label1: '前一天'
        }, {
          lunch: '选项2',
          label1: '前两天'
        }, {
          lunch: '选项3',
          label1: '前三天'
        }, {
          lunch: '选项4',
          label1: '前四天'
        }, {
          lunch: '选项5',
          label1: '前五天'
        }],
        lunch:'',
        lunchTime: new Date(),
        options2: [{
          dinner: '选项1',
          label2: '前一天'
        }, {
          dinner: '选项2',
          label2: '前两天'
        }, {
          dinner: '选项3',
          label2: '前三天'
        }, {
          dinner: '选项4',
          label2: '前四天'
        }, {
          dinner: '选项5',
          label2: '前五天'
        }],
        dinner:'',
        dinnerTime:new Date(),
        selectedRows:[]
      }
    },
    mounted:function(){
      this.query();
    },
    methods:{
      check: function(){
        this.$refs.queryParams.validate((valid) => {
          if (valid) {
            let _url = '';
            if (!this.isEdit) {
              _url = '/otf/timeLimit/add';
            }
            else {
              _url = '/otf/timeLimit/update';
            }
            this.api.post(_url, this.queryParams)
              .then((data) => {
                if (data.result === '200') {
                  this.visible = false;
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  });
                  this.$parent.query();
                } else {
                  this.$message.error(data.data);
                }
              });
          } else {
            return false;
          }
        });
      },
      query: function(currPage){
        if(!currPage)
        this.api.post('/otf/timeLimit/list', this.queryParams)
          .then((data) => {
            this.divData = data.data.records;
            this.tableDataTotal = data.data.total;
            this.loading = false;
          });
      },
    }
  }
</script>
