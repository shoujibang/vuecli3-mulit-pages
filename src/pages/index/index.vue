<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div><router-link to="/logins">登录</router-link></div>
      <div><router-link to="/user">用户中心</router-link></div>
      <p>{{msg | sliceStr}}</p>
      <div 
        v-fixed-dom="50"
        style="width:70px;height:70px;line-height:70px;border:1px solid red;right:0;">
        返回顶部
      </div>
    </div>
    <div>
      <el-row>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
      </el-row>
    </div>
    <router-view/>
  </div>
</template>
<<script>
export default {
  data(){
    return {
      msg:"发大水发斯蒂芬法第三方三房范德萨发生的已"
    }
  },
  mounted() {
    debugger;
    console.log(this);
  },
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
