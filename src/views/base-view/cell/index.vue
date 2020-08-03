<template>
  <div class="component-view">
    <gu-navigation back type="primary" title="单元格"> </gu-navigation>

    <div class="component-display">
      <div class="component-display--title">基础用法</div>
    </div>
    <gu-cell border value="雷电芽衣" label="昵称"></gu-cell>
    <gu-cell value="雷电芽衣" label="昵称"></gu-cell>

    <div class="component-display">
      <div class="component-display--title" label="昵称">显示链接</div>
    </div>
    <gu-cell is-link value="女">性别</gu-cell>

    <div class="component-display">
      <div class="component-display--title">属性</div>
    </div>
    <gu-cell meta="菊花花" is-link value="雷电芽衣" label="昵称"></gu-cell>

    <div class="component-display">
      <div class="component-display--title">图标</div>
    </div>
    <gu-cell icon="cart" is-link label="购物车"></gu-cell>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
