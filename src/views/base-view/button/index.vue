<template>
  <div class="component-view">
    <gu-navigation back type="primary" title="按钮组件"> </gu-navigation>

    <div class="component-display">
      <div class="component-display--title">默认类型</div>
      <div class="component-display--content component-display--button__type">
        <gu-button>默认</gu-button>
        <gu-button type="primary">主要</gu-button>
        <gu-button type="success">成功</gu-button>
        <gu-button type="danger">危险</gu-button>
        <gu-button type="warn">警告</gu-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">朴素按钮</div>
      <div class="component-display--content component-display--button__type">
        <gu-button plain type="primary">主要</gu-button>
        <gu-button plain type="success">成功</gu-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">按钮大小</div>
      <div class="component-display--content component-display--button__type">
        <gu-button size="small">小按钮</gu-button>
        <gu-button type="primary">默认按钮</gu-button>
        <gu-button size="large" type="success">大按钮</gu-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">禁用状态</div>
      <div class="component-display--content component-display--button__type">
        <gu-button disabled>禁用</gu-button>
        <gu-button disabled type="primary">禁用</gu-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">圆角按钮</div>
      <div class="component-display--content component-display--button__type">
        <gu-button round size="large" type="primary">圆角按钮</gu-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">块级元素</div>
      <div class="component-display--content component-display--button__type">
        <gu-button block round size="large" type="primary">提交订单</gu-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">按钮链接</div>
      <div class="component-display--content component-display--button__type">
        <gu-button link="/">首页</gu-button>
        <gu-button type="primary" href="https://cn.bing.com/">必应</gu-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.component-display--button__type {
  .gu-button {
    & + .gu-button {
      margin-left: 20px;
    }
  }
}
</style>
