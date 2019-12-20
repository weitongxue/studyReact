import React, { Component } from 'react'

import './index.less'

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
      <>
        <div>欢迎来到{this.state.name}</div>
        <div className='wrap'>
          <div className='box box-front'>1</div>
          <div className='box box-back'>2</div>
          <div className='box box-left'>3</div>
          <div className='box box-right'>4</div>
          <div className='box box-top'>5</div>
          <div className='box box-bottom'>6</div>
        </div>
      </>
    )
  }
}
export default Mine