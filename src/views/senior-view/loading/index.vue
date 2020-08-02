<template>
  <div class="component-view">
    <gl-navigation back type="primary" title="加载中"></gl-navigation>

    <div class="component-display">
      <div class="component-display--title">默认类型</div>
      <div class="component-display--content">
        <gl-loading backgroundColor="#f9f9f9" />
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">条状类型</div>
      <div class="component-display--content">
        <gl-loading type="bar" />
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">设置文字</div>
      <div class="component-display--content">
        <gl-loading type="bar" title="加载中" />
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">设置颜色</div>
      <div class="component-display--content">
        <gl-loading backgroundColor="#f9f9f9" color="#66ccff" />
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">设置大小</div>
      <div class="component-display--content">
        <gl-loading backgroundColor="#f9f9f9" color="#66ccff" size="80" />
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">继承父节点的宽度(用于自适应布局)</div>
      <div class="component-display--content inherit-parent">
        <gl-loading backgroundColor="#f9f9f9" color="#66ccff" inherit />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      strokeLength: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.inherit-parent {
  width: 300px;
}
// circle {
//   -webkit-transition: stroke-dasharray 0.25s;
//   stroke-dasharray: 0.25s;
// }
</style>
