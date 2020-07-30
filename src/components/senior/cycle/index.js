import { createNamespace } from "../../helper/util";
import { cacPixel, resize } from "../../helper/dom";
const _createNamespace = createNamespace("cycle");
const [createComponent, bem] = _createNamespace;
import "./index.scss";

const OUTER_COLOR = "#f05815";
const INNER_COLOR = "#fff";
export default createComponent({
  props: {
    value: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 45
    },
    max: {
      type: Number,
      default: 75
    }
  },
  data() {
    return {
      circleWidth: cacPixel(this.width)
    };
  },
  mounted() {
    resize(() => {
      this.circleWidth = cacPixel(this.width);
    });
  },
  computed: {
    svgProps() {
      return {
        width: this.circleWidth,
        height: this.circleWidth,
        viewbox: `0 0 ${this.circleWidth} ${this.circleWidth}`
      };
    },
    radius() {
      return (this.circleWidth * 2) / 5;
    },
    circleProps() {
      return {
        cx: this.circleWidth / 2,
        cy: this.circleWidth / 2,
        r: this.radius,
        "stroke-width": this.circleWidth / 10,
        fill: "none"
      };
    },
    dasharray() {
      const perimeter = Math.PI * 2 * this.radius;
      const percent = (this.value > this.max ? this.max : this.value) / 100;
      const result = perimeter * percent + " " + perimeter * (1 - percent);
      return result;
    },
    transform() {
      return `matrix(0,-1,1,0,0,${this.circleWidth})`;
    }
  },
  render(h) {
    return h(
      "svg",
      {
        attrs: this.svgProps
      },
      [
        h("circle", {
          attrs: {
            ...this.circleProps,
            stroke: INNER_COLOR
          }
        }),
        h("circle", {
          attrs: {
            ...this.circleProps,
            stroke: OUTER_COLOR,
            "stroke-dasharray": this.dasharray,
            transform: this.transform
          }
        })
      ]
    );
  }
});
