import globalMixin from "../../helper/mixins/global";
import { createNamespace } from "../../helper/util";
import Affix from "../affix";
import Icon from "../icon";
const _createNamespace = createNamespace("navigation");
const [createComponent, bem] = _createNamespace;
import "./index.scss";
export default createComponent({
  props: {
    title: String,
    back: Boolean,
    more: Boolean,
    type: {
      type: String,
      default: "default"
    },
    fixed: Boolean
  },
  mixins: [globalMixin],
  methods: {
    onLeftIconClick() {
      this.$emit("onLeftClick");
      if (this.back) {
        this.$router.go(-1);
      }
    },
    onRightIconClick() {
      this.$emit("onRightClick");
    }
  },
  render(h) {
    const iconNodes = [];
    const rightIconNodes = [];
    if (this.back) {
      iconNodes[0] = h(Icon, {
        props: {
          name: "left"
        }
      });
    }
    if (this.slot.icon) {
      iconNodes[0] = this.slot.icon;
    }
    if (this.more) {
      rightIconNodes[0] = h(Icon, {
        props: {
          name: "more"
        }
      });
    }
    if (this.slot.right) {
      rightIconNodes[0] = this.slot.right;
    }

    let navigation = h(
      "div",
      {
        class: bem() + bem(this.type)
      },
      [
        h(
          "div",
          {
            class: bem("icon"),
            on: {
              click: this.onLeftIconClick
            }
          },
          iconNodes
        ),
        h(
          "div",
          {
            class: bem("title")
          },
          [this.title]
        ),
        h(
          "div",
          {
            class: bem("right-icon"),
            on: {
              click: this.onRightIconClick
            }
          },
          rightIconNodes
        )
      ]
    );

    if (this.fixed) {
      navigation = h(Affix, {}, [navigation]);
    }

    return navigation;
  }
});
