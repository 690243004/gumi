<template>
  <div class="component-view">
    <gl-navigation back type="primary" title="按钮组件"> </gl-navigation>

    <div class="component-display">
      <div class="component-display--title">默认类型</div>
      <div class="component-display--content component-display--button__type">
        <gl-button>默认</gl-button>
        <gl-button type="primary">主要</gl-button>
        <gl-button type="success">成功</gl-button>
        <gl-button type="danger">危险</gl-button>
        <gl-button type="warn">警告</gl-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">朴素按钮</div>
      <div class="component-display--content component-display--button__type">
        <gl-button plain type="primary">主要</gl-button>
        <gl-button plain type="success">成功</gl-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">按钮大小</div>
      <div class="component-display--content component-display--button__type">
        <gl-button size="small">小按钮</gl-button>
        <gl-button type="primary">默认</gl-button>
        <gl-button size="large" type="success">大按钮</gl-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">禁用状态</div>
      <div class="component-display--content component-display--button__type">
        <gl-button disabled>禁用</gl-button>
        <gl-button disabled type="primary">禁用</gl-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">圆角按钮</div>
      <div class="component-display--content component-display--button__type">
        <gl-button round size="large" type="primary">圆角按钮</gl-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">块级元素</div>
      <div class="component-display--content component-display--button__type">
        <gl-button block round size="large" type="primary">提交订单</gl-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">按钮链接</div>
      <div class="component-display--content component-display--button__type">
        <gl-button link="/">首页</gl-button>
        <gl-button type="primary" href="https://cn.bing.com/">必应</gl-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.component-display--button__type {
  .gl-button {
    & + .gl-button {
      margin-left: 20px;
    }
  }
}
</style>
