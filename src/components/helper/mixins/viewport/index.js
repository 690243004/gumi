import { getClientRect, resize } from '../../dom'
export default {
  data() {
    return {
      clientWidth: 0
    }
  },
  mounted() {
    if (this.$el) {
      this.clientWidth = getClientRect(this.$el).width
    }
    resize(() => (this.clientWidth = getClientRect(this.$el).width))
  }
}
