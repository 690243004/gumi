<template>
  <div class="component-view">
    <gu-navigation fixed back type="primary" title="工具栏"> </gu-navigation>

    <div class="component-display">
      <div class="component-display--title">基础用法</div>
    </div>
    <gu-tabbar v-model="active">
      <gu-tabbar-item icon="home">首页</gu-tabbar-item>
      <gu-tabbar-item icon="sort">分类</gu-tabbar-item>
      <gu-tabbar-item icon="cart">购物车</gu-tabbar-item>
      <gu-tabbar-item icon="my">我的</gu-tabbar-item>
    </gu-tabbar>
    <div class="component-display">
      <div class="component-display--title">颜色设置</div>
    </div>
    <gu-tabbar activeColor="#66ccff" v-model="activeSecond">
      <gu-tabbar-item icon="home">首页</gu-tabbar-item>
      <gu-tabbar-item icon="sort">分类</gu-tabbar-item>
      <gu-tabbar-item icon="cart">购物车</gu-tabbar-item>
      <gu-tabbar-item icon="my">我的</gu-tabbar-item>
    </gu-tabbar>
    <div class="component-display">
      <div class="component-display--title">使用名称</div>
    </div>
    <gu-tabbar @change="onTabbarChange" activeColor="#66ccff" v-model="activeThird">
      <gu-tabbar-item name="home" icon="home">首页</gu-tabbar-item>
      <gu-tabbar-item name="sort" icon="sort">分类</gu-tabbar-item>
      <gu-tabbar-item name="cart" icon="cart">购物车</gu-tabbar-item>
      <gu-tabbar-item name="user" icon="my">我的</gu-tabbar-item>
    </gu-tabbar>

    <div class="component-display">
      <div class="component-display--title">路由控制</div>
    </div>
    <gu-tabbar @change="onTabbarChange" activeColor="#66ccff" route>
      <gu-tabbar-item name="/" icon="home">首页</gu-tabbar-item>
      <gu-tabbar-item name="/base/tabbar" icon="my">工具栏</gu-tabbar-item>
    </gu-tabbar>
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
