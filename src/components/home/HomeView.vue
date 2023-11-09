<template>
<div>
  homeview1
</div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {}
  },
  mounted() {
    // this.$store.dispatch
  },
  methods: {
    toIndex() {
      console.log("toIndex")
      this.$router.push("/index")
    },
    toCommonlyUsed() {
      console.log("toCommonlyUsed")
      this.$router.push("index/commonlyused")
    },
  }
}
</script>

<style scoped>

</style>
