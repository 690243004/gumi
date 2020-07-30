<template>
  <div class="component-view">
    <gl-navigation back type="primary" title="输入框"> </gl-navigation>
    <div class="component-display">
      <div class="component-display--title">基本使用</div>
    </div>
    <gl-field label="姓名" value="雷电芽衣"></gl-field>
    <div class="component-display">
      <div class="component-display--title">必填</div>
    </div>
    <gl-field required label="姓名" value="雷电芽衣"></gl-field>
    <div class="component-display">
      <div class="component-display--title">右对齐</div>
    </div>
    <gl-field align-right label="公司"></gl-field>
    <div class="component-display">
      <div class="component-display--title">右侧添加按钮</div>
    </div>
    <gl-field label="短信验证">
      <template #button>
        <gl-button size="small" type="primary">发送验证码</gl-button>
      </template>
    </gl-field>

    <div class="component-display">
      <div class="component-display--title">文本框</div>
    </div>
    <gl-field textarea v-model="remark" label="留言"></gl-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remark: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
