import globalMixin from "../../helper/mixins/global";
import { createNamespace } from "../../helper/util";
const _createNamespace = createNamespace("radio-group");
const [createComponent, bem] = _createNamespace;
import "./index.scss";
export default createComponent({
  props: {
    value: {
      type: [String, Number]
    }
  },
  mixin: [globalMixin],
  data() {
    return {
      childrenList: []
    };
  },
  methods: {
    onChange(name) {
      if (this.value === name) return;
      this.$emit("input", name);
    }
  },
  render(h) {
    return h(
      "div",
      {
        class: bem()
      },
      this.$slots.default
    );
  }
});
