<template>
  <div id="app" class="admin-layout">
    <v-header style="background: #2e313b;">       
    </v-header>
    <el-row :gutter="20">
      <el-col :span="3">
        <home-left>

        </home-left>      
      </el-col>
      
      <el-col :span="21">
   
          
          <router-view></router-view>
        <!-- <homeright>
        </homeright> -->
      </el-col>
    </el-row>
    <v-fotter isShow>

    </v-fotter>
  </div>
</template>
<script>
import remjs from "util/rem";
import homeLeft from 'views/homeLeft'
import homeright from 'views/homeright'
export default {
  components:{
    homeLeft,
    homeright
  },
  data(){
    return {
      cdataSub:[
          {
            title:"最新活动",
            desc:"231232132312"
          },
          {
            title:"最新动态",
            desc:"dfsdfsdfsdf"
          },
          {
            title:"合作招商",
            desc:"oiioieroiweirower"
          },
          {
            title:"文档专区",
            desc:"dfsdkfjsdjfskdjfsd"
          }
      ],
cdata:[{
        img:require("assets/images/banner_1.png"),
        title:"Chain1",
        desc:"999999",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("assets/images/banner_2.png"),
        title:"Chain2",
        desc:"111111111111",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("assets/images/banner_3.png"),
        title:"Chain3",
        desc:"22222222222",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("assets/images/banner_4.png"),
        title:" Chain4",
        desc:"3333333333",
        btn:[{
          name:"了解产品",
          url:""
        }],
      }],
      itemList:[],


    }
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>
<style lang="less">
  @import "../../assets/css/reset.less";
  .admin-layout{
    font-size: 20px;
    min-height: 600px;
  }
</style>
