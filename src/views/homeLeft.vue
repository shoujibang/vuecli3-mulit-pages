<template>
  <div class="home-left">
      <!-- <el-menu-item>
        <div @click="menuBtns" :label="isCollapse" class="left-menu-btn">
        {{isCollapse == false ? "收起" : '展开'}}
      </div>
      </el-menu-item> -->
    <div>
      <el-menu
      class="el-menu-vertical-demo menu-box"      
      @open="handleOpen"
       @close="handleClose"
      :collapse="isCollapse"
      >
        <div v-for="(item,index) in menuDatas" :key="index" >
            <el-submenu v-if="item.children" :index="item.keys">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item-group v-for="(values,index) in item.children" :key="index">
                <!-- <template slot="title">{{values.groupName}}</template> -->
                <el-menu-item 
                v-for="(val,index) in values.subThree" 
                :key="index" 
                :index="val.keys"
                @click="routerPush(val.url)"
                v-if="values.subThree">
              
                  {{val.name}}
                
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
           
              <el-menu-item v-else @click="routerPush(item.url)"  :index="item.keys">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            
        </div>
        
        
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name:'home-left',
  data() {
    return {
      menuDatas:[
        {
          name:"首页",
          url:"/admin",
          icon:"fa fa-home",
          keys:"1"
        },
        {
          name:"CMS管理",
          url:"",
          icon:"fa fa-cog fa-fw",
          keys:"2",
          children:[
            {
            groupName:"栏目一",
            keys:"2-1",
            subThree:[
              {
                name:"cms综合",
                url:"/admin/cmsNews",
                icon:"fa fa-home",
                keys:"2-1-1",
              },{
                name:"栏目管理",
                url:"/admin/cmsColumn",
                icon:"fa fa-home",
                keys:"2-1-2",
              }
            ]
            
          },{
            groupName:"栏目二",
            keys:"2-2",
            subThree:[
              {
                name:"资讯管理",
                url:"/cms/info",
                icon:"fa fa-home",
                keys:"2-2-1",
              },{
                name:"栏目管理",
                url:"/cms/column",
                icon:"fa fa-home",
                keys:"2-2-2",
              }
            ]
            
          }]
        },{
          name:"认证管理",
          url:"/auth",
          icon:"fa fa-user",
          keys:"3",
          children:[{
            groupName:"",
            keys:"3-1",
            subThree:[{
              name:"增加用户",
              url:"/auth/userAdd",
              icon:"fa fa-home",
              keys:"3-1-1",
            }]
          },{
            groupName:"",
            keys:3-2,
            subThree:[{
              name:"增加用户",
              url:"/auth/userAdd",
              icon:"fa fa-home",
              keys:"3-2-1",
            },{
              name:"修改用户",
              url:"/auth/userAdd",
              icon:"fa fa-home",
              keys:"3-2-2",
            },{
              name:"删除用户",
              url:"/auth/userAdd",
              icon:"fa fa-home",
              keys:"3-2-3",
            }]
          }]
        },
        {
          name:"订单管理",
          url:"/admin/orderList",
          icon:"fa fa-home",
          keys:"4",
        },{
          name:"开发管理",
          url:"/admin/devList",
          icon:"fa fa-home",
          keys:"5",
        },{
          name:"运营管理",
          url:"/admin/businessList",
          icon:"fa fa-home",
          keys:"6",
        }
      ],
      isCollapse:false, //控制菜单隐藏和显示
    }
  },
  props:{
    // menuData:{
    //   type:[Array],
    //   required:true
    // }
  },
  mounted() {
    let that = this;
    that.init();
    window.onresize = function(){
      that.init();
    }
    console.log(that)
  },
  methods: {
    routerPush(url){
      debugger;
      this.$router.push({path:url});
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    init(){
      let navigatorHei = this.$(window).height();
      let headerHei = document.querySelector(".header-box").offsetHeight;
      let fotterHei = document.querySelector(".fotter-box").offsetHeight;
      let leftMenuHei = navigatorHei - (headerHei + fotterHei) ;
      let rightHeight=parseInt(this.$(".home-right").height());
     if(rightHeight > leftMenuHei){
       this.$(".menu-box").height(rightHeight + 'px');
     }else{

       this.$(".menu-box").height(leftMenuHei + 'px');
     }

      console.log("this.$('.home-right').height()",parseInt(this.$(".home-right").height()))
    }
  },
}
</script>
<style lang="less" scoped>
  .home-left{
    border-right: 1px solid#c3c3c3ed;
  }
</style>
