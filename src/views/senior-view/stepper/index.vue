<template>
  <div class="component-view">
    <gl-navigation fixed back type="primary" title="步进器"> </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">基础用法</div>
      <div class="component-display--content">
        <gl-stepper v-model="num"></gl-stepper>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">禁用</div>
      <div class="component-display--content">
        <gl-stepper disabled v-model="num2"></gl-stepper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stepperpage',
  data() {
    return {
      num: 0,
      num2: 10
    }
  }
}
</script>

<style lang="scss" scoped></style>
