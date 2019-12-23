<template>
  <div class="home">    
    <div class="test co-img-scale">
      <img src="../assets/images/pc16.png" />
    </div>
    <item-list  :typeLi="5" :data="listTwo"></item-list>
    <item-list  :typeLi="2" :data="list"></item-list>
  </div>
</template>

<script>
import ItemList from 'components/itemList'
export default {
  name: 'home',
  data() {
    return {
      list:[],
      listTwo:[]
    }
  },
  components: {
    ItemList
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList(){
        let dataList = [];
        let dataListTwo = [];
        let that = this;
      // console.log(this.$axios)
      // this.$axios.get(`https://api.apiopen.top/getWangYiNews?page=2&count=4`).then(res =>{
        this.$axios.get(`devapi/getWangYiNews?page=2&count=4`).then(res =>{
          console.log("res:",res);
          if(res.data.code === 200){
          console.log(res.data.result)
          res.data.result.forEach((item,index) => {
            dataList.push({
              img:item.image,
              title:item.title,
              desc:item.title,
              path:item.path
            });
            dataListTwo.push({
              img:item.image,
              title:item.title,
              path:item.path
            });
            
          });
          console.log(dataList)
          that.listTwo = dataListTwo
          that.list =  dataList ;
        }else{
          this.$alert(JSON.stringify(res.data))

        }
      })
    }
  },
}
</script>
<style lang="less" scoped>


  .home{
    position: relative;
    .test{      
      color: @blue;
      .co-img-scale2(350px,350px)
    }
  }
</style>
