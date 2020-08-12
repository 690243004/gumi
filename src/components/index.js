import Affix from './junior/affix'
import Button from './junior/button'
import Cell from './junior/cell'
import Icon from './junior/icon'
import Navigation from './junior/navigation'
import Overlay from './junior/overlay'
import Popup from './junior/popup'
import Tabbar from './junior/tabbar'
import TabbarItem from './junior/tabbar-item'
import Tag from './junior/tag'

import Field from './senior/field'
import LoadMore from './senior/load-more'
// import Loading from "./senior/loading";
import pullRefresh from './senior/pull-refresh'
import Radio from './senior/radio'
import RadioGroup from './senior/radio-group'
import Search from './senior/search'
import Stepper from './senior/stepper'
import Swipe from './senior/swipe'
import SwipeItem from './senior/swipe-item'
import Tab from './senior/tab'
import TabPanel from './senior/tab-panel'
import Loading from './senior/loading'

import ToTop from './profession/to-top'

const version = '0.0.0'

function install(Vue) {
  const components = [
    Affix,
    Button,
    Cell,
    Icon,
    Navigation,
    Overlay,
    Popup,
    Tabbar,
    TabbarItem,
    Tag,
    Field,
    LoadMore,
    // Loading,
    pullRefresh,
    Radio,
    RadioGroup,
    Search,
    Stepper,
    Swipe,
    SwipeItem,
    Tab,
    TabPanel,
    ToTop,
    Loading
  ]
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item)
    } else if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

export {
  version,
  install,
  Affix,
  Button,
  Cell,
  Icon,
  Navigation,
  Overlay,
  Popup,
  Tabbar,
  TabbarItem,
  Tag,
  Field,
  LoadMore,
  // Loading,
  pullRefresh,
  Radio,
  RadioGroup,
  Search,
  Stepper,
  Swipe,
  SwipeItem,
  Tab,
  TabPanel,
  ToTop,
  Loading
}
