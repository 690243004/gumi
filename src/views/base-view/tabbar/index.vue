<template>
  <div class="component-view">
    <gl-navigation fixed back type="primary" title="工具栏"> </gl-navigation>

    <div class="component-display">
      <div class="component-display--title">基础用法</div>
    </div>
    <gl-tabbar v-model="active">
      <gl-tabbar-item icon="home">首页</gl-tabbar-item>
      <gl-tabbar-item icon="sort">分类</gl-tabbar-item>
      <gl-tabbar-item icon="cart">购物车</gl-tabbar-item>
      <gl-tabbar-item icon="my">我的</gl-tabbar-item>
    </gl-tabbar>
    <div class="component-display">
      <div class="component-display--title">颜色设置</div>
    </div>
    <gl-tabbar activeColor="#66ccff" v-model="activeSecond">
      <gl-tabbar-item icon="home">首页</gl-tabbar-item>
      <gl-tabbar-item icon="sort">分类</gl-tabbar-item>
      <gl-tabbar-item icon="cart">购物车</gl-tabbar-item>
      <gl-tabbar-item icon="my">我的</gl-tabbar-item>
    </gl-tabbar>
    <div class="component-display">
      <div class="component-display--title">使用名称</div>
    </div>
    <gl-tabbar @change="onTabbarChange" activeColor="#66ccff" v-model="activeThird">
      <gl-tabbar-item name="home" icon="home">首页</gl-tabbar-item>
      <gl-tabbar-item name="sort" icon="sort">分类</gl-tabbar-item>
      <gl-tabbar-item name="cart" icon="cart">购物车</gl-tabbar-item>
      <gl-tabbar-item name="user" icon="my">我的</gl-tabbar-item>
    </gl-tabbar>

    <div class="component-display">
      <div class="component-display--title">路由控制</div>
    </div>
    <gl-tabbar @change="onTabbarChange" activeColor="#66ccff" route>
      <gl-tabbar-item name="/" icon="home">首页</gl-tabbar-item>
      <gl-tabbar-item name="/base/tabbar" icon="my">工具栏</gl-tabbar-item>
    </gl-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      activeSecond: 0,
      activeThird: 'home'
    }
  },
  methods: {
    onTabbarChange(name) {
      console.log(name)
    }
  }
}
</script>

<style lang="scss" scoped></style>
