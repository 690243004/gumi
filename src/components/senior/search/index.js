import globalMixin from "../../helper/mixins/global";
import { createNamespace } from "../../helper/util";
const _createNamespace = createNamespace("search");
const [createComponent, bem] = _createNamespace;
import "./index.scss";

export default createComponent({
  props: {},
  data() {
    return {};
  },
  methods: {},
  render(h) {
    return h(
      "div",
      {
        class: bem()
      },
      [
        h(
          "div",
          {
            class: bem("input")
          },
          [h("input")]
        ),
        h(
          "div",
          {
            class: bem("button")
          },
          "搜索"
        )
      ]
    );
  }
});
