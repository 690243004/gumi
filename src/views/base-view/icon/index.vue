<template>
  <div class="component-view">
    <gu-navigation fixed back type="primary" title="图标"></gu-navigation>
    <gu-tab v-model="active">
      <gu-tab-panel title="基础图标">
        <div class="icon-wrapper">
          <div @click="onCopy(name)" class="icon-wrapper-item" v-for="(name, index) in baseIcons" :key="index">
            <gu-icon :size="20" :name="name" />
            <div class="icon-wrapper-item-name">{{ name }}</div>
          </div>
        </div>
      </gu-tab-panel>
      <gu-tab-panel title="线性图标">
        <div class="icon-wrapper">
          <div @click="onCopy(name)" class="icon-wrapper-item" v-for="(name, index) in lineIcons" :key="index">
            <gu-icon :size="20" :name="name" />
            <div class="icon-wrapper-item-name">{{ name }}</div>
          </div>
        </div>
      </gu-tab-panel>
      <gu-tab-panel title="非线性图标">
        <div class="icon-wrapper">
          <div @click="onCopy(name)" class="icon-wrapper-item" v-for="(name, index) in entityIcons" :key="index">
            <gu-icon :size="20" :name="name" />
            <div class="icon-wrapper-item-name">{{ name }}</div>
          </div>
        </div>
      </gu-tab-panel>
    </gu-tab>

    <transition name="fade">
      <div v-show="isToast" class="toast">复制成功</div>
    </transition>
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
      active: 0,
      isToast: false
    }
  },
  methods: {
    onCopy(content) {
      const input = document.createElement('input')
      input.value = content
      document.body.appendChild(input)
      input.select()
      document.execCommand('Copy')
      document.body.removeChild(input)
      this.isToast = true
      setTimeout(() => (this.isToast = false), 1500)
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
      user-select: none;
    }

    &:active {
      background: #f2f2f2;
    }
  }
}

.toast {
  position: fixed;
  bottom: 20vw;
  left: 50%;
  transform: translateX(-50%);
  background: rgba($color: #000000, $alpha: 0.8);
  padding: 8px 32px;
  color: #fff;
  font-size: 28px;
  user-select: none;
  border-radius: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
