<template>
  <div class="about">
    <div class="nav-meta">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h1>权限管理</h1>
  </div>
</template>
<style lang="less" scoped>
 .about{
   .nav-meta{
      padding:30px 0px;
      border-bottom: 1px solid #c3c3c3ed;
      margin-bottom: 30px;
    }
   font-size: 30px;
 }
</style>
