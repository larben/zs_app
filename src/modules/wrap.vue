<template>
    <section>
        <transition :name="direction" mode="out-in"> <!--动态获得transition 的name值-->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </section>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    direction () {
      const viewDir = this.$store.state.viewDirection
      let tranName = ''
      if (viewDir === 'left') {
        tranName = 'view-out'
      } else if (viewDir === 'right') {
        tranName = 'view-in'
      } else {
        tranName = 'fade'
      }
      return tranName
    }
  }
}
</script>
<style lang="scss">
  @import '../common/scss/base.scss';
</style>
