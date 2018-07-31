import Request from '../../api/request.js'
const QUERYTYPESLIST = 'QUERYTYPESLIST'
export default {
  namespaced: true,
  state: {
    TypesList: []
  },
  getters: {
    getTypesList: state => state.TypesList
  },
  actions: {
    async queryTypesList ({ commit }, req) {
      const result = await Request({ url: '/reqxml' }, req)
      const response = result.data
      const list = []
      const Indexs = {
        IMAGEIDINDEX: 0, // 栏目图标
        MENUTYPEINDEX: 1, // 栏目类型
        MENUIDINDEX: 2, // 栏目ID
        MENUNAMEINDEX: 3, // 栏目名称
        MENUTIPINDEX: 4, // 栏目说明
        MENUBADAGEINDEX: 5, // 栏目未读条数
        MENUSETINDEX: 6, // 栏目设置状态
        TITLEINDEX: 7, // 最近一条消息标题
        SUMMARYINDEX: 8, // 最近一条消息简介
        MSGDATEINDEX: 9 // 最近一条消息时间yyyyMMddhhmmss
      }
      if (response.GRID0 && response.GRID0.length > 1) {
        response.GRID0.map(function (item) {
          let temp = item.split('|')
          let MENUIDINDEX = temp[Indexs['MENUIDINDEX']]
          let obj = {
            IMAGEIDINDEX: temp[Indexs['IMAGEIDINDEX']], // 栏目图标
            MENUTYPEINDEX: temp[Indexs['MENUTYPEINDEX']], // 栏目类型
            MENUIDINDEX: MENUIDINDEX, // 栏目ID
            MENUNAMEINDEX: temp[Indexs['MENUNAMEINDEX']], // 栏目名称
            MENUTIPINDEX: temp[Indexs['MENUTIPINDEX']], // 栏目说明
            MENUBADAGEINDEX: temp[Indexs['MENUBADAGEINDEX']], // 栏目未读条数
            MENUSETINDEX: temp[Indexs['MENUSETINDEX']], // 栏目设置状态
            TITLEINDEX: temp[Indexs['TITLEINDEX']], // 最近一条消息标题
            SUMMARYINDEX: temp[Indexs['SUMMARYINDEX']], // 最近一条消息简介
            MSGDATEINDEX: temp[Indexs['MSGDATEINDEX']] // 最近一条消息时间yyyyMMddhhmmss
          }
          if (MENUIDINDEX === '209') {
            obj.STIPTEXT = '新股提醒'
            list[1] = obj
          }
          if (MENUIDINDEX === '205') {
            obj.STIPTEXT = '股价预警'
            list[2] = obj
          }
          if (MENUIDINDEX === '210') {
            obj.STIPTEXT = '交易成交提醒'
            list[3] = obj
          }
          if (MENUIDINDEX === '211') {
            obj.STIPTEXT = '新股中签'
            list[4] = obj
          }
          if (MENUIDINDEX === '206') {
            obj.STIPTEXT = 'zs资讯'
            list[0] = obj
          }
        })
      }
      commit(QUERYTYPESLIST, list)
    }
  },
  mutations: {
    [QUERYTYPESLIST] (state, list) {
      state.TypesList = list
    }
  }
}
