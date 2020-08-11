<template>
  <div class="component-view">
    <gu-navigation back type="primary" title="输入框"></gu-navigation>
    <div class="component-display">
      <div class="component-display--title">基本使用</div>
    </div>
    <gu-field label="姓名" v-model="name"></gu-field>
    <div class="component-display">
      <div class="component-display--title">必填</div>
    </div>
    <gu-field required label="姓名" value="雷电芽衣"></gu-field>
    <div class="component-display">
      <div class="component-display--title">右对齐</div>
    </div>
    <gu-field align-right label="公司"></gu-field>
    <div class="component-display">
      <div class="component-display--title">右侧添加按钮</div>
    </div>
    <gu-field label="短信验证">
      <template #button>
        <gu-button size="small" type="primary">发送验证码</gu-button>
      </template>
    </gu-field>

    <div class="component-display">
      <div class="component-display--title">文本框</div>
    </div>
    <gu-field textarea v-model="remark" label="留言"></gu-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remark: '',
      name: '雷电芽衣'
    }
  }
}
</script>

<style lang="scss" scoped></style>
