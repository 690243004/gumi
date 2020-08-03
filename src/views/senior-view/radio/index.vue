<template>
  <div class="component-view">
    <gu-navigation back type="primary" title="单选框"> </gu-navigation>
    <div class="component-display">
      <div class="component-display--title">基本使用</div>

      <div class="component-display--content">
        <gu-radio-group v-model="active">
          <gu-radio :name="1">选项 1</gu-radio>
          <gu-radio :name="2">选项 2</gu-radio>
        </gu-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style lang="scss" scoped></style>
