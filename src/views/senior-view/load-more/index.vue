<template>
  <div class="component-view">
    <gu-navigation back type="primary" title="加载更多"></gu-navigation>
    <gu-load-more @load="onLoad" v-model="loading" :finished="finished">
      <div class="load-more-content-item" v-for="(item, index) in array" :key="index">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vitae rerum illo tempora quas placeat sunt aliquam
        provident, deserunt cum optio consequatur nulla tenetur libero voluptatibus ipsa accusantium nemo explicabo!
      </div>
    </gu-load-more>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: new Array(10).fill(''),
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.array.length >= 30) {
          return (this.finished = true)
        }
        for (let index = 0; index < 10; index++) {
          this.array.push('')
        }
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.load-more-content {
  height: 500px;
  overflow-y: scroll;
}
.load-more-content-item {
  background: #fff;
  text-align: center;
  font-size: 32px;
  margin-bottom: 10px;
  padding: 20px 30px;
  box-sizing: border-box;
  user-select: none;
  &:last-child {
    border-bottom: none;
  }
}
</style>
