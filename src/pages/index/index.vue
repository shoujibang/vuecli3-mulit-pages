<template>
  <div id="app">
    <div v-if="!$route.meta.isShow"  v-fixed-dom="{bottom:'20px',right:'0px'}" class="fixe-dom">顶部</div>  
    <v-header v-if="!$route.meta.isShow">
        <carousel :cdataSub="cdataSub" isFixed :carouselHei="560" :data="cdata" />    
    </v-header>
    
    <!-- <a href="product.html">product</a> -->
    <router-view/>
    <v-fotter v-if="!$route.meta.isShow"></v-fotter>
  </div>
</template>
<script>
import remjs from "util/rem";

export default {
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .fixe-dom{
      font-size: 20px;
      padding: 10px;
      cursor: pointer;
   
    }
}

#nav {
  padding: 18px;
  font-size: 18px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
