import globalMixin from "../../helper/mixins/global";
import { createNamespace } from "../../helper/util";
import Icon from "../icon";
import "./index.scss";
const _createNamespace = createNamespace("tabbar-item");
const [createComponent, bem] = _createNamespace;

export default createComponent({
  data() {
    return {
      index: undefined
    };
  },
  props: {
    icon: {
      type: String
    },
    name: {
      type: String
    }
  },
  mixins: [globalMixin],
  mounted() {
    const length = this.$parent.childrenNode.length;
    this.$parent.childrenNode.push(this);
    this.index = this.name || length;
  },
  computed: {
    isActive() {
      return this.$parent.route
        ? this.$route.path === this.index
        : this.$parent.value === this.index;
    }
  },
  components: {
    [Icon.name]: Icon
  },
  methods: {
    onClick() {
      if (this.isActive) return;
      this.$parent.onChange(this.index);
    }
  },
  render(h) {
    const iconNodes = [];
    const style = {};
    const acitveColor = this.$parent.activeColor;
    const color = this.$parent.color;
    if (this.isActive && acitveColor) {
      style.color = acitveColor;
    }
    if (!this.isActive && color) {
      style.color = acitveColor;
    }
    if (this.icon) {
      iconNodes[0] = h(Icon, {
        props: {
          name: this.icon
        }
      });
    }
    if (this.$slots.icon) {
      iconNodes[0] = this.$slots.icon;
    }

    return h(
      "div",
      {
        class:
          bem() +
          bem({
            active: this.isActive
          }),
        on: {
          click: this.onClick.bind(this)
        },
        style
      },
      [
        h(
          "div",
          {
            class: bem("icon")
          },
          iconNodes
        ),
        h(
          "div",
          {
            class: bem("text")
          },
          this.$slots.default
        )
      ]
    );
  }
});
