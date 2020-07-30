<template>
  <div class="component-view">
    <gl-navigation back type="primary" title="导航栏"> </gl-navigation>

    <div class="component-display">
      <div class="component-display--title">默认类型</div>
    </div>
    <gl-navigation back title="默认类型"> </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">主要类型</div>
    </div>
    <gl-navigation type="primary" title="主要类型"> </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">返回</div>
    </div>
    <gl-navigation back type="primary" title="返回"> </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">使用插槽</div>
    </div>
    <gl-navigation back type="primary" title="右插槽">
      <template #right>
        <gl-icon name="gl-icongengduo" />
      </template>
    </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">固钉</div>
    </div>
    <gl-navigation fixed back type="primary" title="使用固钉"> </gl-navigation>
    <div class="component-display" style="height: 1000px;"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.component-display--title {
  margin-bottom: 0;
}
</style>
