import globalMixin from "../../helper/mixins/global";
import { createNamespace } from "../../helper/util";
const _createNamespace = createNamespace("tag");
const [createComponent, bem] = _createNamespace;
import "./index.scss";
export default createComponent({
  props: {
    type: {
      type: String,
      default: "default"
    },
    color: String
  },
  mixin: [globalMixin],
  render(h) {
    return h(
      "div",
      {
        class: bem() + bem(this.type),
        style: {
          backgroundColor: this.color
        }
      },
      this.$slots.default
    );
  }
});
