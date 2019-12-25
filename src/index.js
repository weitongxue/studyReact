import React, { Component, Suspense } from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// BrowserRouter是history模式，没有#; HashRouter是Hash模式，有#

import { Provider } from 'react-redux'
import store from '@store'
import { routes } from './router'
import Footer from '@components/footer'

import '@assets/style/reset.css'
import '@assets/style/animation.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <>
        {/* 使用react.lazy加载的组件必须使用<Suspense />组件进行临界状态处理 */}
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Footer />
            <Switch>
              {routes.map((route, i) => {
                return (
                  <Route key={i} {...route} />
                )
              })}
            </Switch>
          </Router>
        </Suspense>
      </>
    )
  }
}

const app = document.getElementById('app')
ReactDom.render(<Provider store={store}><App /></Provider>, app)
