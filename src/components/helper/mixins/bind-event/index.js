import { on, off } from "../../dom";

export default function(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, on, true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
};
