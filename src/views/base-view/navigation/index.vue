<template>
  <div class="component-view">
    <gl-navigation back type="primary" title="导航栏"></gl-navigation>

    <div class="component-display">
      <div class="component-display--title">基础用法</div>
    </div>
    <gl-navigation title="导航栏"></gl-navigation>

    <div class="component-display">
      <div class="component-display--title">类型</div>
    </div>
    <gl-navigation type="primary" title="导航栏"></gl-navigation>

    <div class="component-display">
      <div class="component-display--title">返回</div>
    </div>
    <gl-navigation back type="primary" title="导航栏"></gl-navigation>

    <div class="component-display">
      <div class="component-display--title">固钉</div>
    </div>
    <gl-navigation fixed back type="primary" title="导航栏"></gl-navigation>
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
