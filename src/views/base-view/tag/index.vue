<template>
  <div class="component-view">
    <gl-navigation fixed back type="primary" title="标签"> </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">基础用法</div>
      <div class="component-display--content component-display--tag">
        <gl-tag>标签1</gl-tag>
        <gl-tag type="primary">标签2</gl-tag>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">颜色设置</div>
      <div class="component-display--content component-display--tag">
        <gl-tag color="#66ccff">标签1</gl-tag>
        <gl-tag color="#f50000">标签1</gl-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.component-display--tag {
  .glow-tag {
    & + .glow-tag {
      margin-left: 20px;
    }
  }
}
</style>
