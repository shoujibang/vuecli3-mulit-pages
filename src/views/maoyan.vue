<template>
  <div class="mao-yan">
    <h1 class="title">最新资讯</h1>
    <item-list :isLoading="loadingMore" :typeLi="6" :data="listTwo"></item-list>

    <router-view></router-view>
  </div>
</template>
<script>
import ItemList from 'components/itemList';
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      listTwo:[],
      isScroll: true,//是否可以滚动
      loadingMore: true,//loading 加载更多
      pageIndex: 1,
      pageSize: 10,
      // listTwo:[{
      //   img:require('@/assets/images/pc17.png'),
      //   title:"11111",
      //   desc:"22222",
      //   path:"www.baidu.com"
      // },{
      //   img:require('@/assets/images/pc16.png'),
      //   title:"11111",
      //   desc:"22222",
      //   path:"www.baidu.com"
      // }],
    }
  },
  components:{
    ItemList
  },
  mounted() {
    this.getData();
    document.addEventListener('scroll', this.scroll, false)
   
  },
  methods: {
    ...mapActions('user',['newsList']),
    getData(){
      this.newsList({page:2,count:4}).then(res =>{
        console.log("resresresresresresresres");
        console.log(res);
        this.listTwo = res;
      })
    },
    scroll(){      
      let base = 0;
      let that = this;
      let offsetHeight = document.documentElement.offsetHeight || document.body.offsetHeight //网页可见区域高(包括边线的宽)
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop //滚动高度
      let winHei = document.documentElement.clientHeight || window.screen.availHeight //屏幕可用工作区高度
      let bottomOfWindow = offsetHeight - scrollTop - winHei <= 200
      
        // if(bottomOfWindow && isLoading === false){
        if((scrollTop + winHei) >= offsetHeight && this.isScroll){
          that.isScroll = false;
          that.loadingMore =false;
          let pageNo = this.pageIndex += 1;
        //   that.newsList({page:pageNo,count:this.pageSize}).then(res =>{
        //     that.loadingMore = true;
        //     if (res.data.list.length > 0) {
        //         that.isScroll = true ;
        //          that.listTwo = res.data.list;                
        //     } else {
        //         this.show = true
        //     }
        // })

          setTimeout(() =>{
            that.isScroll = true;
            that.loadingMore = true;
            that.listTwo.push({
              "img":require('@/assets/images/pc17.png'),
              "title":`平台版本${base}`,
              "desc":"22222",
              "path":"www.baidu.com"
            });

          },2000);
        }
      
    }


  },
  destroyed() {
     document.removeEventListener('scroll', this.scroll, false)
  },
}
</script>
<style lang="less" scoped>
  .mao-yan{
    width: 1200px;
    margin:0 auto;
    
    font-size:20px;
    margin-bottom:60px;
    .title{
      padding:10px 0;
      border-bottom: 1px solid #ccc;
      text-align: left;
      margin-bottom: 20px;
    }
  }
</style>
