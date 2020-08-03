<template>
  <div class="component-view">
    <gu-navigation back type="primary" title="弹出框"></gu-navigation>

    <div class="component-display">
      <div class="component-display--title">基础用法</div>
      <div class="component-display--content">
        <gu-button @click="onClick('bottom')">点击弹出</gu-button>
      </div>
    </div>

    <div class="component-display">
      <div class="component-display--title">不同位置弹出</div>
      <div class="component-display--content component-display--button__type">
        <gu-button @click="onClick('top')">上方</gu-button>
        <gu-button @click="onClick('left')">左侧</gu-button>
        <gu-button @click="onClick('right')">右侧</gu-button>
        <gu-button @click="onClick('bottom')">下方</gu-button>
      </div>
    </div>
    <div class="component-display">
      <div class="component-display--title">圆角</div>
      <div class="component-display--content component-display--button__type">
        <gu-button @click="isShowRoundPopup = true">圆角</gu-button>
      </div>
    </div>

    <gu-popup :position="position" v-model="isShowPopup"></gu-popup>
    <gu-popup round v-model="isShowRoundPopup"></gu-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowPopup: false,
      isShowRoundPopup: false,
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
