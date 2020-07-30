import {
  bfsScroller,
  traceScroller,
  getScrollHeight,
  getWindowHeight,
  scrollUtil
} from "../../dom";
export default () => {
  return {
    props: {
      offset: {
        type: Number,
        default: 300
      }
    },
    data() {
      return {
        scroller: null,
        isTop: true,
        isBottom: false
      };
    },
    methods: {
      onElementscroll() {
        let scrollTop,
          scrollHeight,
          clientHeight = this.scroller.getBoundingClientRect().clientHeight;
        scrollTop = this.scroller.scrollHeight;
        this.isTop = scrollTop === 0;
        this.isBottom = scrollTop + clientHeight === scrollHeight;
      },
      onWindowScroll() {
        const scrollTop = window.pageYOffset;
        const scrollHeight = getScrollHeight();
        const clientHeight = getWindowHeight();
        const result$1 = scrollTop === 0;
        const result$2 =
          Math.floor(scrollTop) + clientHeight > scrollHeight - 300;
        if (result$1 !== this.isTop) this.isTop = result$1;
        if (result$2 !== this.isBottom) this.isBottom = result$2;
      }
    },
    mounted() {
      this.scroller =
        bfsScroller(this.$el) || traceScroller(this.$el) || window;

      if (this.scroller === window) {
        this.scrollEvent = this.onWindowScroll.bind(this);
        this.release = scrollUtil.addEvent(this.scrollEvent);
      } else {
        this.scrollEvent = this.onElementscroll.bind(this);
        this.scroller.addEventListener("scroll", this.scrollEvent);
        this.release = this.scroller.removeEventListener(
          "scroll",
          this.scrollEvent
        );
      }
    },
    destoryed() {
      this.release && this.release();
    }
  };
};
