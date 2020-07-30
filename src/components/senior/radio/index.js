import globalMixin from "../../helper/mixins/global";
import { createNamespace } from "../../helper/util";
const _createNamespace = createNamespace("radio");
const [createComponent, bem, className] = _createNamespace;
import "./index.scss";
export default createComponent({
  props: {
    name: [String, Number]
  },
  mixin: [globalMixin],
  methods: {
    onClickHandler() {
      this.$parent.onChange(this.index);
    },
    setup() {
      const currentIndex = this.$parent.childrenList.length;
      if (typeof this.index === "undefined") {
        this.index = currentIndex;
      }
      this.$parent.childrenList.push(this);
    }
  },
  data() {
    return {
      index: this.name
    };
  },
  computed: {
    isSelect() {
      return this.$parent.value === this.index;
    }
  },
  mounted() {
    this.setup();
  },
  render(h) {
    return h(
      "div",
      {
        class: bem() + bem(this.isSelect ? "selected" : "unselected"),
        on: {
          click: this.onClickHandler.bind(this)
        }
      },
      [
        h("div", {
          class: bem("icon")
        }),
        this.$slots.default
      ]
    );
  }
});
