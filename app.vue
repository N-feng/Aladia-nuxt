<template>
  <div id="app">
    <AppHeader />
    <AppContent />
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
@import url("./assets/less/paid-course-landing-page.less");
@import url("./assets/less/intro-asset.less");
@import url("./assets/less/lede.global.less");
@import url("./assets/less/styles.less");
</style>
