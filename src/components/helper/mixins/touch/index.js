const MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return "horizontal";
  }

  if (y > x && y > MIN_DISTANCE) {
    return "vertical";
  }

  return "";
}

function getHorizonDirection(deltaX) {
  // if (Math.abs(deltaX) < MIN_HORIZONDISTANCE) return "";
  return deltaX > 0 ? "right" : "left";
}

export default () => {
  return {
    data() {
      return {
        direction: "",
        horizonDirection: "",
        deltaX: 0,
        deltaY: 0,
        offsetX: 0,
        offsetY: 0,
        touchContext: null
      };
    },
    methods: {
      touchStart(event) {
        this.resetTouchStatus();
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
      },
      resetTouchStatus() {
        this.direction = "";
        this.horizonDirection = "";
        this.deltaX = 0;
        this.deltaY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
      },
      touchMove(event) {
        const touch = event.touches[0];
        this.deltaX = touch.clientX - this.startX;
        this.deltaY = touch.clientY - this.startY;
        this.offsetX = Math.abs(this.deltaX);
        this.offsetY = Math.abs(this.deltaY);
        this.direction =
          this.direction || getDirection(this.offsetX, this.offsetY);
      },
      touchEnd() {
        this.horizonDirection = getHorizonDirection(this.deltaX);
      }
    }
    // mounted() {
    //   this.touchContext = isGlobal ? document : this.$el;
    //   const touchStart = this.touchStart.bind(this);
    //   const touchMove = this.touchMove.bind(this);
    //   const touchEnd = this.touchEnd.bind(this);
    //   this.touchContext.addEventListener("touchstart", touchStart, {
    //     passive: true
    //   });
    //   this.touchContext.addEventListener("touchmove", touchMove, {
    //     passive: true
    //   });
    //   this.touchContext.addEventListener("touchend", touchEnd, {
    //     passive: true
    //   });
    //   this.remove = () => {
    //     this.touchContext.removeEventListener("touchstart", touchStart);
    //     this.touchContext.removeEventListener("touchmove", touchMove);
    //     this.touchContext.removeEventListener("touchmove", touchEnd);
    //   };
    // },
    // destoryed() {
    //   this.remove && this.remove();
    // }
  };
};
