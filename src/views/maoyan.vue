<template>
  <div class="mao-yan">
    <h1 class="title">最新资讯</h1>
    <item-list  :typeLi="6" :data="listTwo"></item-list>

    <router-view></router-view>
  </div>
</template>
<script>
import ItemList from 'components/itemList'
export default {
  data() {
    return {
      listTwo:[{
        img:require('@/assets/images/pc17.png'),
        title:"11111",
        desc:"22222",
        path:"www.baidu.com"
      },{
        img:require('@/assets/images/pc16.png'),
        title:"11111",
        desc:"22222",
        path:"www.baidu.com"
      }],
    }
  },
  components:{
    ItemList
  }
}
</script>
<style lang="less" scoped>
  .mao-yan{
    width: 1200px;
    margin:0 auto;
    
    font-size:20px;
    margin-bottom:560px;
    .title{
      padding:10px 0;
      border-bottom: 1px solid #ccc;
      text-align: left;
      margin-bottom: 20px;
    }
  }
</style>
