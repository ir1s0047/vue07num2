<template>
  <div>
    <div>
      <router-link to="/Index">首页</router-link> &ndash;
      <router-link to="/Sort">分类</router-link> &ndash;
      <router-link to="/Order">订单</router-link> &ndash;
      <router-link to="/My">我的</router-link>
      <h3>显示路由切换的页面</h3>
    </div>
    <div></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
