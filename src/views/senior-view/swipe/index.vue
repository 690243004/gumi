<template>
  <div>
    <gl-navigation back type="primary" title="轮播图"></gl-navigation>
    <div class="component-display">
      <div class="component-display--title">基础用法</div>
    </div>
    <gl-swipe>
      <gl-swipe-item>
        <img src="/scenery_1.jpg" />
      </gl-swipe-item>
      <gl-swipe-item>
        <img src="/scenery_2.jpg" />
      </gl-swipe-item>
      <gl-swipe-item>
        <img src="/scenery_3.jpg" />
      </gl-swipe-item>
      <gl-swipe-item>
        <img src="/scenery_4.jpg" />
      </gl-swipe-item>
    </gl-swipe>

    <div class="component-display">
      <div class="component-display--title">自动播放</div>
    </div>
    <gl-swipe autoplay="2000">
      <gl-swipe-item>
        <img src="/scenery_1.jpg" />
      </gl-swipe-item>
      <gl-swipe-item>
        <img src="/scenery_2.jpg" />
      </gl-swipe-item>
      <gl-swipe-item>
        <img src="/scenery_3.jpg" />
      </gl-swipe-item>
      <gl-swipe-item>
        <img src="/scenery_4.jpg" />
      </gl-swipe-item>
    </gl-swipe>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
