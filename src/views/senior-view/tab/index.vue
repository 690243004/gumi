<template>
  <div>
    <gl-navigation back type="primary" title="标签栏"> </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">基础用法</div>
    </div>
    <gl-tab v-model="active1">
      <gl-tab-panel title="标签栏1">
        <div class="content1">内容1</div>
      </gl-tab-panel>
      <gl-tab-panel title="标签栏2">
        <div class="content2">内容2</div>
      </gl-tab-panel>
    </gl-tab>

    <div class="component-display">
      <div class="component-display--title">视图过度</div>
    </div>
    <gl-tab v-model="active2" animatable>
      <gl-tab-panel title="标签栏1">
        <div class="content1">内容1</div>
      </gl-tab-panel>
      <gl-tab-panel title="标签栏2">
        <div class="content2">内容2</div>
      </gl-tab-panel>
    </gl-tab>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active1: 0,
      active2: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content1,
.content2 {
  @extend .center;
  color: #fff;
  height: 200px;
}

.content1 {
  background: #f7c6d0;
}

.content2 {
  background: #72d6e8;
}
</style>
