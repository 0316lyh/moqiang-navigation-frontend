<template>
  <div>
    Footer页脚
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      activeName: this.$store.state.index,
      index: this.$store.state.index,
    }
  },
  mounted() {
    // this.$store.dispatch
  },
  methods: {
    // handleClick() {
    //   this.$store.dispatch("increment")
    // }
  }
}
</script>

<style scoped>

</style>
