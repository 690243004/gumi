import globalMixin from "../../helper/mixins/global";
import { createNamespace } from "../../helper/util";
import Icon from "../icon";
const _createNamespace = createNamespace("cell");
const [createComponent, bem] = _createNamespace;
import "./index.scss";

export default createComponent({
  props: {
    label: String,
    value: [String, Number],
    border: Boolean,
    isLink: Boolean,
    meta: String,
    icon: String
  },
  components: {
    [Icon.name]: Icon
  },
  mixins: [globalMixin],
  render(h) {
    // slot better then props
    let icon;
    if (this.slot.icon || this.icon) {
      icon = h(
        "div",
        {
          class: bem("icon")
        },
        [
          this.slot.icon ||
            h(Icon, {
              attrs: { name: this.icon }
            })
        ]
      );
    }

    const label = h(
      "div",
      {
        class: bem("label")
      },
      [this.label || this.slot.default]
    );

    const link = this.isLink
      ? h(Icon, {
          class: bem("link"),
          attrs: {
            name: "right"
          }
        })
      : undefined;

    let meta;
    if (this.slot.meta || this.meta) {
      meta = h(
        "div",
        {
          class: bem("meta")
        },
        [
          this.slot.meta ||
            h(
              "span",
              {
                class: bem("meta") + "--text"
              },
              this.meta
            )
        ]
      );
    }

    const value = h(
      "div",
      {
        class: bem("value")
      },
      [this.slot.value || this.value, link]
    );

    return h(
      "div",
      {
        class:
          bem() +
          bem({
            border: this.border,
            isLink: this.isLink
          })
      },
      [icon, label, value, meta]
    );
  }
});
