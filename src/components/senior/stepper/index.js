import { createNamespace, isDef } from "../../helper/util";
import Icon from "../../junior/icon";
import "./index.scss";
const _createNamespace = createNamespace("stepper");
const [createComponent, bem] = _createNamespace;

export default createComponent({
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 200
    },
    min: {
      type: Number,
      default: 0
    },
    zeroHide: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },
  methods: {
    onIncrease() {
      if (this.disabled) return;
      const result = this.value + 1;
      if (result > this.max) return;
      this.$emit("input", this.value + 1);
    },
    onDecrease() {
      if (this.disabled) return;
      const result = this.value - 1;
      if (result < this.min) return;
      this.$emit("input", this.value - 1);
    }
  },
  render(h) {
    const isShow = !isDef(this.value) || this.value !== 0 || !this.zeroHide;
    const increase = h(
      "div",
      {
        class: bem("increase"),
        on: {
          click: this.onIncrease
        }
      },
      [
        h(Icon, {
          props: {
            name: "increase"
          }
        })
      ]
    );

    const decrease = h(
      "div",
      {
        class: bem("decrease"),
        style: {
          visibility: isShow ? "visible" : "hidden"
        },
        on: {
          click: this.onDecrease
        }
      },
      [
        h(Icon, {
          props: {
            name: "decrease"
          }
        })
      ]
    );
    const num = h(
      "div",
      {
        class: bem("num"),
        style: {
          visibility: isShow ? "visible" : "hidden"
        }
      },
      this.value
    );
    return h(
      "div",
      {
        class:
          bem() +
          bem({
            disabled: this.disabled
          })
      },
      [decrease, num, increase]
    );
  }
});
