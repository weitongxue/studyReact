/*
 * @Descripttion: 提供store.dispatch() 参数模板，把数据进行同步
 * @Author: weitongxue
 * @Date: 2019-12-25 14:48:17
 * @LastEditTime : 2019-12-25 16:33:46
 */
export default {
  // 获取nav
  getNav: (data) => {
    return {
      type: 'GET_NAV',
      data
    }
  },
  // 获取banner
  getBanner: (data) => {
    return {
      type: 'GET_BANNER',
      data
    }
  }
}
