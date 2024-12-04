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
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import Svg from './components/Svg.vue';
export default {
  components: {
    'post-list': PostList,
    'AppHeader': AppHeader,
    'AppContent': AppContent,
    'Svg': Svg,
  },
};
</script>

<style lang="less">
@import url("./assets/less/scaffolding.global.less");
@import url("./assets/less/paid-course-landing-page.less");
@import url("./assets/less/intro-asset.less");
@import url("./assets/less/lede.global.less");
@import url("./assets/less/styles.less");
@import url("./assets/less/instructor-links.global.less");
@import url("./assets/less/instructor-links.less");
@import url("./assets/less/last-update-date.global.less");
@import url("./assets/less/caption.less");
@import url("./assets/less/discount-expiration.less");
@import url("./assets/less/buy-box.less");
</style>
