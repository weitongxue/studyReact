import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Home from './views/home'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Home />
    )
  }
}

const app = document.getElementById('app')
ReactDom.render(<App />, app)
