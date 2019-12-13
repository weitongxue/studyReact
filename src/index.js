import React, { Component, Suspense } from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
// BrowserRouter是history模式，没有#; HashRouter是Hash模式，有#

import { routes } from './router'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      // 使用react.lazy加载的组件必须使用<Suspense />组件进行临界状态处理
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/mine'>Mine</Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, i) => {
              return (
                <Route key={i} {...route} />
              )
            })}
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

const app = document.getElementById('app')
ReactDom.render(<App />, app)
