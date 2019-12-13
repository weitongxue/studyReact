import { lazy } from 'react'
const Home = lazy(() => import(/* webpackChunkName: 'home.lazy' */'@views/home'))
const Mine = lazy(() => import(/* webpackChunkName: 'mine.lazy' */'@views/mine'))

export const routes = [
  {
    path: "/",
    exact: true, // 路由必须完全匹配
    component: Home
  },{
    path: "/mine",
    exact: true,
    component: Mine
  }
]