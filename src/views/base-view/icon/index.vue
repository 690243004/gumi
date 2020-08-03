<template>
  <div class="component-view">
    <gu-navigation fixed back type="primary" title="图标"> </gu-navigation>
    <gu-tab v-model="active">
      <gu-tab-panel title="基础图标">
        <div class="icon-wrapper">
          <div class="icon-wrapper-item" v-for="(name, index) in baseIcons" :key="index">
            <gu-icon :size="20" :name="name" />
            <div class="icon-wrapper-item-name">{{ name }}</div>
          </div>
        </div>
      </gu-tab-panel>
      <gu-tab-panel title="线性图标">
        <div class="icon-wrapper">
          <div class="icon-wrapper-item" v-for="(name, index) in lineIcons" :key="index">
            <gu-icon :size="20" :name="name" />
            <div class="icon-wrapper-item-name">{{ name }}</div>
          </div>
        </div>
      </gu-tab-panel>
      <gu-tab-panel title="非线性图标">
        <div class="icon-wrapper">
          <div class="icon-wrapper-item" v-for="(name, index) in entityIcons" :key="index">
            <gu-icon :size="20" :name="name" />
            <div class="icon-wrapper-item-name">{{ name }}</div>
          </div>
        </div>
      </gu-tab-panel>
    </gu-tab>
  </div>
</template>

<script>
export default {
  props: {
    baseIcons: {
      type: Array,
      default: () => ['top', 'bottom', 'left', 'right', 'decrease', 'increase', 'more', 'search', 'fold']
    },
    lineIcons: {
      type: Array,
      default: () => ['cart', 'home', 'my', 'sort', 'error', 'success', 'warn']
    }
  },
  data() {
    return {
      entityIcons: this.lineIcons.map((str) => str + '-e'),
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  &-item {
    flex-basis: 25%;
    flex-shrink: 0;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-name {
      margin-top: 20px;
      font-size: 28px;
    }

    &:active {
      background: #f2f2f2;
    }
  }
}
</style>
