<template>
  <div class="component-view">
    <gu-navigation fixed back type="primary" title="标签"> </gu-navigation>
    <div class="component-display">
      <div class="component-display--title">基础用法</div>
      <div class="component-display--content component-display--tag">
        <gu-tag>标签1</gu-tag>
        <gu-tag type="primary">标签2</gu-tag>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">颜色设置</div>
      <div class="component-display--content component-display--tag">
        <gu-tag color="#66ccff">标签1</gu-tag>
        <gu-tag color="#f50000">标签1</gu-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.component-display--tag {
  .gumi-tag {
    & + .gumi-tag {
      margin-left: 20px;
    }
  }
}
</style>
