<template>
    <section id="app">
        <loading v-show="getUptateLoadingFlag"></loading>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </section>
</template>
<script>
import loading from './components/loading/loading.vue'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getUptateLoadingFlag: 'getUptateLoadingFlag'
    })
  },
  components: {
    'loading': loading
  }
}
</script>
<style lang="scss">

</style>
