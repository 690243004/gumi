<template>
  <div>
    <gu-navigation back type="primary" title="轮播图"></gu-navigation>
    <div class="component-display">
      <div class="component-display--title">基础用法</div>
    </div>
    <gu-swipe>
      <gu-swipe-item>
        <img src="/scenery_1.jpg" />
      </gu-swipe-item>
      <gu-swipe-item>
        <img src="/scenery_2.jpg" />
      </gu-swipe-item>
      <gu-swipe-item>
        <img src="/scenery_3.jpg" />
      </gu-swipe-item>
      <gu-swipe-item>
        <img src="/scenery_4.jpg" />
      </gu-swipe-item>
    </gu-swipe>

    <div class="component-display">
      <div class="component-display--title">自动播放</div>
    </div>
    <gu-swipe :autoplay="2000">
      <gu-swipe-item>
        <img src="/scenery_1.jpg" />
      </gu-swipe-item>
      <gu-swipe-item>
        <img src="/scenery_2.jpg" />
      </gu-swipe-item>
      <gu-swipe-item>
        <img src="/scenery_3.jpg" />
      </gu-swipe-item>
      <gu-swipe-item>
        <img src="/scenery_4.jpg" />
      </gu-swipe-item>
    </gu-swipe>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
