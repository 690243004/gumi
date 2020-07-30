export default {
  data() {
    return {
      slot: {}
    }
  },
  mounted() {
    this.slot = this.$slots
  },
  updated() {
    this.slot = this.$slots
  }
}
