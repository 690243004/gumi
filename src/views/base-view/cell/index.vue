<template>
  <div class="component-view">
    <gl-navigation back type="primary" title="单元格"> </gl-navigation>

    <div class="component-display">
      <div class="component-display--title">基础用法</div>
    </div>
    <gl-cell border value="雷电芽衣" label="昵称"></gl-cell>
    <gl-cell value="雷电芽衣" label="昵称"></gl-cell>

    <div class="component-display">
      <div class="component-display--title" label="昵称">显示链接</div>
    </div>
    <gl-cell is-link value="女">性别</gl-cell>

    <div class="component-display">
      <div class="component-display--title">属性</div>
    </div>
    <gl-cell meta="菊花花" is-link value="雷电芽衣" label="昵称"></gl-cell>

    <div class="component-display">
      <div class="component-display--title">图标</div>
    </div>
    <gl-cell icon="cart" is-link label="购物车"></gl-cell>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
