import { createNamespace } from "../../helper/util";
import "./index.scss";
const _createNamespace = createNamespace("tab-panel");
const [createComponent, bem] = _createNamespace;

export default createComponent({
  props: {
    name: String,
    title: String
  },
  data() {
    return {
      index: undefined,
      inited: false
    };
  },
  computed: {
    isActive() {
      return this.index === this.$parent.value;
    }
  },
  watch: {
    isActive(val) {
      this.inited = this.inited || val;
    }
  },
  mounted() {
    this.index = this.name || this.$parent.childrenNodes.length;
    this.$parent.childrenNodes.push(this);
  },
  render(h) {
    const shouldRender = this.inited || !this.$parent.lazyRender;
    const Content = shouldRender ? this.$slots.default : h();
    return h(
      "div",
      {
        class:
          bem() +
          bem({
            inactive: !this.isActive
          })
      },
      [Content]
    );
  }
});
