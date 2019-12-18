<template>
<!--轮播组件
arg:isFixed 
示意：该属性配置是否吸顶；
值类型：Boolean；
值：true/false（default）;
arg:data 
示意：要渲染的数据源；
值类型：Array；
值：[];
arg:carouselHei 
示意：轮播的高度；
值类型：Number；
值：0默认值，比如：500


-->

  <div ref="carouselComp" class="carousel-comp ">
      <el-carousel 
        indicator-position
        :autoplay="true"
        :interval="3000"
        arrow="never"
        :style="{height:remHei + 'rem'}"
         >
        <el-carousel-item
           class="el-carousel-item"
          :style="{backgroundImage: 'url(' + item.img + ')',height:remHei +'rem'}" 
          v-for="(item,index) in data" :key="index">
          <h3 class="small">{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <a href="" v-for="(val,index) in item.btn" :key="index">
            {{val.name}}
          </a>
        </el-carousel-item>
     </el-carousel>
    <div class="banner-list">
        <ul>
          <li v-for="(values,index) in cdataSub" :key="index">
            <h2>{{values.title}}</h2>
            <p>{{values.desc}}</p>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name:"Carousel",
  data() {
    return {
      aa:"ddd"
    }
  },
  mounted() {
    this.$nextTick(function(){
      this.init();
    })
 
  },
  props: {
    data:{
      type:[Array, Object],
      required: true
    },
    cdataSub:{
      type:[Array, Object],
      required: true
    },
    carouselHei:{
      type:[Number],
      default:0
    },
    isFixed:{
      type:[Boolean],
      default:false
    }
  },
  computed:{
    //把px转换成rem，carouselHei是设计稿储存，
    // 100：是基础单位这里100和nuxt.config.js的postcss.rootValue一样
    remHei:function () {
      return this.carouselHei / 100 ;
      }
  },
  methods: {
    init(){
      debugger;
      let navHei = $(".nav-box").height() / 100;
      let hei = (this.remHei + navHei);
      if(this.isFixed === true){
        this.$refs.carouselComp.className =  "carousel-comp carousel-comp-b"
        $(".carousel-comp").parent().css("margin-bottom",(hei) + "rem");
        }else{
        this.$refs.carouselComp.className =  "carousel-comp";
        $(".carousel-comp").css("margin-bottom",(navHei + 0.8) + "rem");
        }
    }
    
    
  },
};
</script>
<style lang="less" scoped>
// @import "@/assets/stylus/_reset.scss";
.carousel-comp{
  position: relative;
  
}

.carousel-comp /deep/ .el-carousel__indicators {
  bottom: 220px ;
  height:4px ;
  z-index: 9999999999999;
}
.carousel-comp .el-carousel-item{
  width: 100%;
  background-size: 100% 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow:column;
  align-items: center;
  justify-content: center;
  h3{
    font-size:41px;
    color:rgba(255,255,255,1);
    margin-bottom: 11px;
  }
  p{
    font-size:20px;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-bottom: 22px;
  }
  a{
    width: 136px;
    height: 39px;
    text-align: center;
    line-height: 39px;
    display: inline-block;
    border:1px solid rgba(255,255,255,1);
    font-size:18px;
    color:rgba(255,255,255,1);
  }
}
.carousel-comp .banner-list{
  width: 100%;
    height: 120px;
    background: rgba(17, 15, 56, 0.7);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;    
    // color: $white-color;
    ul{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      li{
        // width: 301px;        
        display: flex;
        flex-wrap: wrap;
        font-size:14px;
        height: 120px;
        padding:20px;
        h2{
          font-size: 20px;
        }
      }
      li:hover{
        background:rgba(57,55,115,0.4213);
      }
    }
}
// 吸顶样式
.carousel-comp-b{
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  left: 0;
}

</style>
