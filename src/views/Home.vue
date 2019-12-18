<template>
  <div class="home">    
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
