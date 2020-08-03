<template>
  <div class="component-view">
    <gu-navigation fixed back type="primary" title="步进器"> </gu-navigation>
    <div class="component-display">
      <div class="component-display--title">基础用法</div>
      <div class="component-display--content">
        <gu-stepper v-model="num"></gu-stepper>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">禁用</div>
      <div class="component-display--content">
        <gu-stepper disabled v-model="num2"></gu-stepper>
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
