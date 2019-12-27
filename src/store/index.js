/*
 * @Descripttion:redux组件之间传递state，需要借助react-redux 里的Provider和connect组件，见入口index.js 和 nav组件
 * @Author: weitongxue
 * @Date: 2019-12-25 14:35:15
 * @LastEditTime : 2019-12-25 17:13:30
 */

import { createStore } from 'redux'
import updataState from './reducers'
export default createStore(updataState, window.STATE_FROM_SERVER)
