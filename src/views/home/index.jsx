import React, { Component } from 'react'

import { Button } from 'antd-mobile'

import './index.less'

class Home extends Component {
  render () {
    return (
      <>
        <div>我是首页</div>
        <Button loading>点击</Button>
      </>
    )
  }
}

export default Home
