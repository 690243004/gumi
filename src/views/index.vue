<template>
  <div id="app">
    <div class="app-tile">
      <img :src="mainIcon" />
      <span>Glow</span>
    </div>
    <div class="app-meta">轻量vue移动端ui库</div>

    <div class="app-components">
      <gl-tab v-model="active">
        <gl-tab-panel title="基础组件">
          <gl-button
            type="primary"
            :key="index"
            v-for="(item, index) in basicList"
            block
            size="large"
            round
            :link="item.path"
            >{{ item.name }}</gl-button
          >
        </gl-tab-panel>
        <gl-tab-panel title="高级组件">
          <gl-button
            type="primary"
            :key="index"
            v-for="(item, index) in seniorList"
            block
            size="large"
            round
            :link="item.path"
            >{{ item.name }}</gl-button
          >
        </gl-tab-panel>
      </gl-tab>
    </div>
  </div>
</template>

<script>
import mainIcon from '../assets/main.png'
export default {
  name: 'App',
  data() {
    return {
      mainIcon,
      active: 0,
      basicList: [
        {
          name: '按钮组件',
          path: '/base/button'
        },
        {
          name: '单元格',
          path: '/base/cell'
        },
        {
          name: '导航栏',
          path: '/base/navigation'
        },
        {
          name: '工具栏',
          path: '/base/tabbar'
        },
        {
          name: '弹出框',
          path: '/base/popup'
        },
        {
          name: '图标',
          path: '/base/icon'
        }
      ],
      seniorList: [
        {
          name: '输入框',
          path: '/senior/field'
        },
        {
          name: '单选框',
          path: '/senior/radio'
        },
        {
          name: '步进器',
          path: '/senior/stepper'
        },
        {
          name: '下拉刷新',
          path: '/senior/pullRefresh'
        },
        {
          name: '上拉加载',
          path: '/senior/loadMore'
        },
        {
          name: '轮播图',
          path: '/senior/swipe'
        },
        {
          name: '标签栏',
          path: '/senior/tab'
        },
        {
          name: '加载中',
          path: '/senior/loading'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  padding: 0 30px;
  height: 100%;
  background: #fff;
}
.app-tile {
  position: relative;
  padding-top: 20vw;
  img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
  span {
    font-size: 80px;
    vertical-align: middle;
    margin-left: 20px;
    color: #333;
  }
}

.app-meta {
  margin-top: 20px;
  margin-left: 120px;
  color: #999;
  font-size: 32px;
}

.app-components {
  margin-top: 30px;
  .app-components-header {
    line-height: 100px;
    font-size: 48px;
  }
  .glow-button {
    & + .glow-button {
      margin-top: 20px;
    }
  }
}
</style>
