<template>
  <div id="app" class="ud-main-content-wrapper">
    <AppHeader />
    <AppContent />
    <AppFooter />
    <!-- <post-list></post-list> -->
    <Svg />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';
import Svg from './components/Svg.vue';
export default {
  components: {
    'post-list': PostList,
    'AppHeader': AppHeader,
    'AppContent': AppContent,
    'AppFooter': AppFooter,
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
@import url("./assets/less/money-back-guarantee.global.less");
@import url("./assets/less/money-back-guarantee.less");
@import url("./assets/less/purchase-team-tabs.less");
@import url("./assets/less/margin.less");
@import url("./assets/less/font.less");
@import url("./assets/less/color.less");
@import url("./assets/less/layout.less");
@import url("./assets/less/purchase-section-container.less");
@import url("./assets/less/list.less");
@import url("./assets/less/border.less");
@import url("./assets/less/panel.less");
@import url("./assets/less/flex.less");
@import url("./assets/less/sidebar.less");
@import url("./assets/less/instructor.less");
@import url("./assets/less/coding-exercise-promotion.less");
</style>
