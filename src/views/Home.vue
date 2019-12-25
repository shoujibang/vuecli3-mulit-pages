<template>
  <div class="home">    
    <div class="test co-img-scale">
      {{count}}
      {{itemArr}}

      <ul>
        <li v-for="(item,index) in userInfor" :key="index">
          {{item}}
        </li>
      </ul>
      <div>
        <el-button @click="addFn" type="primary">加</el-button>
        <el-button @click="removeFn">减</el-button>
      </div>
    </div>
    <item-list  :typeLi="5" :data="listTwo"></item-list>
    <item-list  :typeLi="2" :data="list"></item-list>
  </div>
</template>

<script>
import ItemList from 'components/itemList'
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex'
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
  computed: {
    ...mapState({
      count: state => state.count,
    }),
    ...mapState('user',['userInfor','login']),
    ...mapState('home',['homeTitle']),
    ...mapState(['itemArr']),
    ...mapGetters([
      'itemArrFilter'
    ])
  },
  mounted() {
    this.getList();
    console.log("this.$store",this.$store)
    this.SET_USER_INFO_COOKIE({
      name:"guset",
      password:"guest"
    });
    debugger;
    this.setList([11,12,13]);
  },
  methods: {
    ...mapActions(['setList']),
    addFn(){
      this.ADD_COUNT(2)
    },
    removeFn(){
      this.REMOVE_COUNT(2);
    },
    ...mapMutations('user',['SET_USER_INFO_COOKIE']),
    ...mapMutations([
      'ADD_COUNT',
      'REMOVE_COUNT'
    ]),
    getList(){
        let dataList = [];
        let dataListTwo = [];
        let that = this;
      // console.log(this.$axios)
      // this.$axios.get(`https://api.apiopen.top/getWangYiNews?page=2&count=4`).then(res =>{
        this.$axios.get(`/devapi/getWangYiNews?page=2&count=4`).then(res =>{
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
      text-align: center;
    }
  }
</style>
