<template>
  <div id="app">
    <AppHeader />
    <post-list></post-list>
    <Svg />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';
export default {
  components: {
    'post-list': PostList,
  },
};
</script>

<style lang="less">

@import url("./assets/less/scaffolding.global.less");
</style>
