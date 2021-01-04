<template>
  <div id="app">

      <h3>欢迎访问百知教育管理系统</h3>
      <router-link to="/first">用户管理</router-link>
      <router-link to="/second">地址管理</router-link>
      <router-link to="/three">留言板</router-link>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>


</style>
