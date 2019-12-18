<template>
  <div id="app">
    <v-header>
        <carousel :cdataSub="cdataSub" isFixed :carouselHei="560" :data="cdata" />    
    </v-header>
    
    <router-view/>
    <v-fotter></v-fotter>
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
            desc:"京东数科与京东云联袂发布智臻链“云”"
          },
          {
            title:"最新动态",
            desc:"京东数科获智博会区块链高峰论坛两大奖项 应用落地已成行业趋势"
          },
          {
            title:"合作招商",
            desc:"区块链全流程可追溯 京东联合中国检科院看清进口燕窝“前世今生”"
          },
          {
            title:"文档专区",
            desc:"京东区块链白皮书重磅发布"
          }
      ],
cdata:[{
        img:require("assets/images/banner_1.png"),
        title:"京东区块链底层引擎JD Chain1",
        desc:"南京产业云",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("assets/images/banner_2.png"),
        title:"京东区块链底层引擎JD Chain2",
        desc:"南京产业云",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("assets/images/banner_3.png"),
        title:"京东区块链底层引擎JD Chain3",
        desc:"南京产业云",
        btn:[{
          name:"了解产品",
          url:""
        }],
      },{
        img:require("assets/images/banner_4.png"),
        title:"京东区块链底层引擎JD Chain4",
        desc:"南京产业云",
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
