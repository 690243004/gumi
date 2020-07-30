import globalMixin from "../../helper/mixins/global";
import { createNamespace, addAnimateEndEvent } from "../../helper/util";
import { mount } from "../../helper/util";
import Overlay from "../overlay";
import "./index.scss";

const _createNamespace = createNamespace("popup");
const [createComponent, bem] = _createNamespace;

let zIndex = 2000;
export default createComponent({
  props: {
    value: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: "bottom"
    }
  },
  mixins: [globalMixin],
  data() {
    return {
      zIndex
    };
  },
  methods: {
    mountOverlay() {
      if (this.overlayInstance) return;
      this.overlayInstance = mount(Overlay, {
        on: {
          click: () => {
            this.$emit("input", false);
            this.overlayInstance.value = false;
          }
        },
        props: {
          zIndex: 100
        }
      });
    },
    removeOverlay() {
      const el = this.overlayInstance.$el;
      el.parentNode.removeChild(el);
    },
    updateOverlay() {
      this.overlayInstance.value = this.value;
    },
    setup() {
      zIndex++;
    }
  },
  mounted() {
    this.mountOverlay();
    this.setup();
  },
  watch: {
    value() {
      this.updateOverlay();
    }
  },
  render(h) {
    return h(
      "transition",
      {
        attrs: {
          name: bem(this.position)
        }
      },
      [
        h(
          "div",
          {
            class: bem() + bem(this.position),
            ref: "popup",
            style: {
              zIndex: this.zIndex
            },
            directives: [
              {
                name: "show",
                value: this.value
              }
            ]
          },
          this.slot.default
        )
      ]
    );
    // return h(
    //   "div",
    //   {
    //     class: bem() + bem([this.value ? "active" : "unactive", this.position]),
    //     style: this.style,
    //     ref: "popup"
    //   },
    //   this.$slots.default
    // );
  }
});
