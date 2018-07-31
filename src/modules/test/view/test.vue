<template>
    <section id="view">
        <div class="msg_list" style="overflow-x: hidden;">
            <ul>
                <li v-for="(item,index) in getTypesList" :key="index" :data-menuid="item['MENUIDINDEX']" v-on:click="toTypeList(item)">
                    <dl>
                        <dt>
                            <i v-if="item['MENUBADAGEINDEX'].length>=2" class="padding">{{item['MENUBADAGEINDEX']}}</i>
                            <i v-else-if="item['MENUBADAGEINDEX'].length==1&&item['MENUBADAGEINDEX']!='0'">{{item['MENUBADAGEINDEX']}}</i>
                            <i v-else class="hidden">{{item['MENUBADAGEINDEX']}}</i>
                        </dt>
                        <dd>
                        <b>{{item['STIPTEXT']}}</b>
                        <p v-if="item['MENUIDINDEX']=='209'">{{'【'+item['STIPTEXT']+'】'+item['TITLEINDEX'].substring(5)}}</p>
                        <p v-else-if="item['MENUIDINDEX']=='206'">{{'【'+item['STIPTEXT']+'】'+item['TITLEINDEX']}}</p>
                        <p v-else>{{item['SUMMARYINDEX']}}</p>
                        </dd>
                    </dl>
                    <span class="slideReader" v-on:click="flagReadAll(item.MENUIDINDEX)">标记已读</span>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import store from '../store.js'
export default {
  data () {
    return {
    }
  },
  created () {
    if (!this.$store.msg) this.$store.registerModule('test', store)
  },
  computed: {
    ...mapGetters({
      getTypesList: 'test/getTypesList'
    })
  },
  mounted () {
    this.queryTypesList({
      Reqno: new Date().getTime(),
      ReqlinkType: '2',
      newindex: '1',
      action: '41035',
      uniqueid: '($tztuniqueid)',
      store: this.$store
    })
  },
  methods: {
    ...mapActions({
      queryTypesList: 'test/queryTypesList'
    }),
    flagReadAll () {

    },
    toTypeList () {

    }
  }
}
</script>
<style lang="scss" scoped>
    #view{
        background: yellow
    }
</style>