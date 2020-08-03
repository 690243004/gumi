<template>
  <div class="component-view">
    <gu-pull-refresh @load="onLoad" v-model="loading">
      <gu-navigation back type="primary" title="下拉刷新"> </gu-navigation>

      <div class="component-display">
        <div class="component-display--title">基本使用</div>
      </div>

      <div class="refresh-message">{{ message }}</div>
    </gu-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      message: '未刷新',
      loading: false
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.loading = false
        this.message = '刷新了'
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.refresh-message {
  height: 500px;
  line-height: 500px;
  text-align: center;
}
</style>
