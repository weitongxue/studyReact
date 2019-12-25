/*
 * @Descripttion:处理store的核心轮子
 * @Author: weitongxue
 * @Date: 2019-12-25 14:35:24
 * @LastEditTime : 2019-12-25 16:52:34
 */
import { initState } from './state'
// import { combineReducers } from 'redux' 可以把多个reducer合并在一起

export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_NAV':
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
