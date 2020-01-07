<template>
<!--列表组件
arg:isCover 
示意：该属性配置列表是否显示遮罩；默认不显示遮罩；
值类型：Boolean；
值：true/false（default）;
arg:data 
示意：要渲染的数据源；
值类型：Array；
值：[];
arg:typeLi 
示意：渲染类型；
值类型：Number；
值：1(默认一行三列)，2一行两列，3图文标题,4左图右文，5上图下文图片抖动,6一行显示;


-->

  <div class="column-three">
      <ul ref="typeUl">
        <li class="" @mousemove="discoverMove($event,index)" @mouseleave="discoverLeave($event,index)" v-for = "(item,index) in data" :key="index">
          <div class="img-box">
            <img :src="item.img" />
          </div>
          <div class="main-box">
            <h2 @click="urlRoute(item.path)" class="tit">{{item.title}}</h2>
            <p class="desc">{{item.desc}}</p>
            <p v-if="item.time" class="time">{{item.time |timeFilter('YY-MM-DD')}}</p>
          </div>
          <div ref="discover" class="discover">
              discover
          </div>
        </li>
        
      </ul>
      <div class="loading" v-if="isLoading">加载更多</div>
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  mounted() {
    this.$nextTick(function(){
      console.log(this.data)
      this.typeAuto();
    })
 
  },
  props: {
    data:{
      type:Array,
      required:true,
      default:[]
    },
    isCover:{
      type:Boolean,
      default:false
    },
    typeLi:{
      type:Number      
    },
    isLoading:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    urlRoute(url){
      // debugger;
      window.open(url);
    },
    typeAuto(){
     
      console.log(this.typeLi)
      switch (this.typeLi) {
        case 1:
          this.$refs.typeUl.className = " ";
          break;
        case 2:
          this.$refs.typeUl.className = "col-two";
          break;  
        case 3:
          this.$refs.typeUl.className = "pic-tit";
          break;
        case 4:
          this.$refs.typeUl.className = "pic-tits";
          break; 
        case 5:
          this.$refs.typeUl.className = "pic-three";
          break; 
        case 6:
          this.$refs.typeUl.className = "pic-six";
          break; 
        default:
          break;
      }
    },
    discoverMove(e,index){
      if(!this.isCover){
        return false;
      }
      this.$refs.discover[index].style.top = 0;
      
    },
    discoverLeave(e,index){
      if(!this.isCover){
        return false;
      }
      this.$refs.discover[index].style.top = "100%";
    }
  },
};
</script>
<style lang="less" scoped>
  .column-three{
    width:1200px;
    margin:0 auto;
    font-size:16px;
    color: #7D818A;
    .loading{
      cursor: pointer;
    }

  }
  .column-three img{
    width: 100%;
    height: 100%;
  }
  .column-three ul{
    display: flex;
    justify-content: space-between;
  }
  .column-three ul li{
    width: 360px;
    box-sizing: border-box;     
    margin-right: 60px;       
    border:1px solid rgba(238,238,238,1);
    border-bottom: none;
    position: relative;
    overflow: hidden;
    
  }
  .column-three ul li:last-child{
    margin-right:-0.001px;
  }
  .column-three ul li .discover{
    position: absolute;
    top:100%;
    left: 0;
    right: 0;
    height: 100%;
    padding:30px;
    background: rgba(0, 111, 240, 0.96);
    transition: top 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 20px;
  }
  .column-three ul li:hover{
    box-shadow:0px 3px 19px 0px rgba(219,219,219,0.5);
  }
  .column-three ul li .main-box{ 
     box-sizing: border-box; 
    padding:36px 29px 79px 36px;

    border-bottom:1px solid rgba(238,238,238,1);
  }
  .column-three ul li .main-box .desc{
    line-height: 30px;
    font-size: 14px;
    color: #808080;
  }
  .column-three ul li .tit{
    font-size:20px;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin-bottom: 11px;
    
  }
  .column-three ul li .img-box{
    height: 242px;
    overflow: hidden;
  }
   .column-three ul li .img-box img{
    transition: all 0.8s ;

   }
  .column-three ul li .img-box img:hover{
    transform: scale(1.1);
  }
  /**
    两列布局样式
   */
   .column-three .col-two{
     display:flex;
     flex-flow:row wrap;
    justify-content: space-between;
   }
   .column-three .col-two li .main-box .desc{
    line-height: 24px;
    font-size: 14px;
    color: #808080;
  }
   .column-three .col-two li{
     width:560px;
     margin-right:36px;
     display: flex;
     margin-bottom:20px;
   }
   .column-three .col-two li:nth-child(2n) {
     margin-right:-0.001px;
   }
   .column-three .col-two li .img-box{
     width:274px;
     height:232px
   }
   .column-three .col-two li h2{
     cursor: pointer;
   }
   .column-three .col-two li .main-box{
     width:286px;
     height:232px
   }
   /**
    三列布局样式--图和标题
   */
   
   .column-three .pic-tit{
     display:flex;
     flex-flow:row wrap;
    justify-content: space-between;
   }
   .column-three .pic-tit li .main-box .desc{
    line-height: 24px;
    font-size: 14px;
    color: #808080;
  }
   .column-three .pic-tit li{
     width:364px;
     margin-right:0;
     display: flex;
     align-items: center;
    justify-content: center;
     margin-bottom:20px;
     border-bottom:1px solid rgba(238,238,238,1);
   }
   .column-three .pic-tit li .tit{
     margin-top:10px;
   }
   .column-three .pic-tit li:hover{
     border:1px solid #fff;
   }
   .column-three .pic-tit li:last-child {
     margin-right:-0.001px;
   }
   .column-three .pic-tit li .img-box{
     width:49px;
     height:49px;
     margin-right:48px;
   }
   .column-three .pic-tit li .main-box{
     padding: 43px 0 46px 0;
     border:none;
     width: 130px;
   }
.column-three .pic-tit li .img-box img:hover{
    transform: none;
  }
  /**
    三列布局样式--图和标题方案二
   */
   
   .column-three .pic-tits{
     display:flex;
     flex-flow:row;
    // justify-content: space-between;
    
   }
   .column-three .pic-tits li .main-box .desc{
    line-height: 24px;
    font-size:14px;
    color: #FFFFFF;
  }
   .column-three .pic-tits li{
     width:364px;
     margin-right:0;
     display: flex;
     align-items: center;
    justify-content: center;
     margin-bottom:20px;
     border:none;
   }
   .column-three .pic-tits li .tit{
     margin-top:10px;
     color: #FFFFFF;
   }
   .column-three .pic-tits li:hover{
     border:none;
     box-shadow: none;
   }
   .column-three .pic-tits li:last-child {
     margin-right:-0.001px;
   }
   .column-three .pic-tits li .img-box{
     width:49px;
     height:49px;
     margin-right:48px;
   }
   .column-three .pic-tits li .main-box{
     padding: 43px 0 46px 0;
     border:none;
     width: 130px;
   }
.column-three .pic-tits li .img-box img:hover{
    transform: none;
  }
  /**
    三列布局样式--上图下文-图片抖动
   */
   
   .column-three .pic-three{
     display:flex;
     flex-flow:row;
    // justify-content: space-between;
    
   }
   .column-three .pic-three li .main-box .desc{
    line-height: 24px;
    font-size:14px;
    color: #FFFFFF;
  }
   .column-three .pic-three li{
     width:364px;
     margin-right:0;
     display: flex;
     align-items: center;
    justify-content: center;
     margin-bottom:20px;
     border:none;
    flex-direction: column;
    padding: 0 10px;
    
   }
   .column-three .pic-three li .tit{
     margin-top:10px;
     color: #333;
   }
   .column-three .pic-three li:hover{
     border:none;
     box-shadow: none;
     color: red !important;
     img{
       animation: shake 0.3s;
     }
   }
   @keyframes shake {
          0% {
            -webkit-transform: rotate(0deg);
          }
          25% {
            -webkit-transform: rotate(8deg);
          }
          50% {
            -webkit-transform: rotate(-8deg);
          }
          75% {
            -webkit-transform: rotate(8deg);
          }
          100% {
            -webkit-transform: rotate(-8deg);
          }
    }
   .column-three .pic-three li:last-child {
     margin-right:-0.001px;
   }
   .column-three .pic-three li .img-box{
     width:100px;
     height:100px;
    //  margin-right:48px;
   }
   .column-three .pic-three li .main-box{
     padding: 43px 0 46px 0;
     border:none;
    //  width: 130px;
   }
.column-three .pic-three li .img-box img:hover{
    transform: none;
  }

/**
  6 一行显示
*/
.column-three .pic-six{
     display:flex;
     flex-flow:row;
     flex-direction: column;
    // justify-content: space-between;
    
   }
   .column-three .pic-six li .main-box .desc{
    line-height: 24px;
    color: #646464;
    font-size: 14px;
  }
   .column-three .pic-six li{
     width:100%;
     margin-right:0;
     padding: 20px;
     display: flex;
    //  align-items: center;
    // justify-content: center;
     margin-bottom:20px;
     border:none;
     background:#fff;
     border-radius: 10px;
     box-shadow:0px 3px 19px 0px rgba(219,219,219,0.5);     
     margin-bottom: 30px;
   }
   .column-three .pic-six li .tit{
     margin-top:10px;
     color: #323232;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    
   }
   .column-three .pic-six li .time{
     margin-top:10px;
     color: #323232;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
   }
   .column-three .pic-six li:hover{
     border:none;
     box-shadow: none;
   }
   .column-three .pic-six li:last-child {
     margin-right:-0.001px;
   }
   .column-three .pic-six li .img-box{
     width:200px;
     height:200px;
     margin-right:48px;
   }
   .column-three .pic-six li .main-box{
     width: 1000px;
     padding: 0;
     border:none;
     display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    //  width: 130px;
   }
.column-three .pic-six li .img-box img:hover{
    transform: none;
  }




</style>
