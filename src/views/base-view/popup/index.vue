<template>
  <div class="component-view">
    <gl-navigation back type="primary" title="弹出框"> </gl-navigation>

    <div class="component-display">
      <div class="component-display--title">基础用法</div>
      <div class="component-display--content">
        <gl-button @click="onClick('bottom')">点击弹出</gl-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">不同位置弹出</div>
      <div class="component-display--content component-display--button__type">
        <gl-button @click="onClick('top')">上方</gl-button>
        <gl-button @click="onClick('left')">左侧</gl-button>
        <gl-button @click="onClick('right')">右侧</gl-button>
        <gl-button @click="onClick('bottom')">下方</gl-button>
      </div>
    </div>

    <gl-popup :position="position" v-model="isShowPopup"></gl-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowPopup: false,
      position: 'bottom'
    }
  },
  methods: {
    onClick(position) {
      this.position = position
      this.isShowPopup = true
    }
  }
}
</script>

<style lang="scss" scoped>
.component-display--title {
  margin-bottom: 0;
}
</style>
