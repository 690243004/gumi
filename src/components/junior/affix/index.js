import { createNamespace } from "../../helper/util";
import globalMixin from "../../helper/mixins/global";
import BindEventMixin from "../../helper/mixins/bind-event";
import { getScroller } from "../../helper/dom";
import "./index.scss";
const _createNamespace = createNamespace("affix");
const [createComponent, bem] = _createNamespace;

export default createComponent({
  props: {
    top: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      affixStyle: {},
      hasFixed: false
    };
  },
  mixins: [
    globalMixin,
    BindEventMixin(function(bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el, true);
      }
      bind(this.scroller, "scroll", this.check);
    })
  ],
  methods: {
    check() {
      this.$nextTick(() => {
        const el = this.$el;
        const scrollerRect = el.getBoundingClientRect();
        const affixStyle = {};
        if (scrollerRect.top < 0) {
          affixStyle.position = "fixed";
          affixStyle.top =
            typeof this.top === "string" ? this.top : this.top + "px";
          affixStyle.zIndex = 1000;
          affixStyle.width = "100%";
        }
        this.affixStyle = affixStyle;
      });
    }
  },
  render(h) {
    this.memorize = this.slot.default;
    return h(
      "div",
      {
        class: bem()
      },
      [h("div", { style: this.affixStyle }, [this.slot.default])]
    );
  }
});
