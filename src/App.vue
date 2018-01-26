<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" rel="stylesheet/less">
  @import "assets/css/reset.less";
  #app {
    height: 100%;
  }
</style>
