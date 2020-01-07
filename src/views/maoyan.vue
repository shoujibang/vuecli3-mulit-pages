<template>
  <div class="mao-yan">
    <h1 class="title"><span class="fa fa-newspaper-o"></span>最新资讯</h1>
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
    this.scroll()
    document.addEventListener('scroll', this.scroll, false)
   
  },
  methods: {
    ...mapActions('user',['newsList']),
    getData(){
      let that = this;
      let dataList = [];
      let pageNo = this.pageIndex += 1;
      this.newsList({page:pageNo,count:this.pageSize}).then(res =>{
        console.log("resresresresresresresres");
        console.log(res);
        res.data.result.forEach((item,index) => {
            dataList.push({
              img:item.image,
              title:item.title,
              desc:item.title,
              time:item.passtime,
              path:item.path
            });
            
            
          });
        that.listTwo = dataList;
      })
    },
    scroll(){      
      let base = 0;
      let dataList = [];
      let that = this;
      let offsetHeight = document.documentElement.offsetHeight || document.body.offsetHeight //网页可见区域高(包括边线的宽)
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop //滚动高度
      let winHei = document.documentElement.clientHeight || window.screen.availHeight //屏幕可用工作区高度
      let bottomOfWindow = offsetHeight - scrollTop - winHei <= 200
      
        // if(bottomOfWindow && isLoading === false){
        if((scrollTop + winHei) + 50 >= offsetHeight && this.isScroll){
          that.isScroll = false;
          that.loadingMore =false;
          let pageNo = this.pageIndex += 1;
            console.log("res--000000000000")
          that.newsList({page:pageNo,count:this.pageSize}).then(res =>{
            that.loadingMore = true;
            if (res.data.result.length > 0) {
                that.isScroll = true ;
                res.data.result.forEach((item,index) => {
                  dataList.push({
                    img:item.image,
                    title:item.title,
                    desc:item.title,
                    time:item.passtime,
                    path:item.path
                    
                  });
                  
                  
                });
                that.listTwo = dataList;                
            } else {
                // this.show = true
            }
          }).catch((err) =>{
            let that = this;
            setTimeout(() =>{
              that.isScroll = true;
              that.loadingMore = true;
              that.listTwo.push({
                "img":require('@/assets/images/pc17.png'),
                "title":`平台版本${base}`,
                "desc":"22222",
                "time":new Date(),
                "path":"www.baidu.com"
              });

            },3000);
          })

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
      span{
        margin-right: 20px;
      }
    }
  }
</style>
