<template>
    <section id="view">
        <p v-text="msg"></p>
    </section>
</template>
<script>
import store from '../store.js'
export default {
  data () {
    return {
      msg: 'this is test view'
    }
  },
  created () {
    if (!this.$store.test) this.$store.registerModule('msgTest', store)
  }
}
</script>
<style lang="scss" scoped>
    #view{
        background: blue
    }
</style>