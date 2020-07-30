<template>
  <div class="component-view">
    <gl-navigation back type="primary" title="单选框"> </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">基本使用</div>

      <div class="component-display--content">
        <gl-radio-group v-model="active">
          <gl-radio :name="1">选项 1</gl-radio>
          <gl-radio :name="2">选项 2</gl-radio>
        </gl-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  }
};
</script>

<style lang="scss" scoped></style>
