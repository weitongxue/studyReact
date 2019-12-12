import React, { Component } from 'react'

interface State {
  name: string
}

class Mine extends Component<{}, State>{
  constructor (props) {
    super(props)
    this.state = {
      name: '世界'
    }
  }
  
  render () {
    return (
    <div>欢迎来到{this.state.name}</div>
    )
  }
}
export default Mine