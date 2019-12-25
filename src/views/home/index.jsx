import React, { Component } from 'react'
import Store from '@store'

import Banner from '@components/carousel'
import Nav from '@components/nav'
import { bannerProps, navProps } from '@assets/js/resetProps'
import Action from '@store/action'

import './index.less'

class Home extends Component {
  componentWillMount () {
    Store.dispatch(Action.getNav(navProps))
  }

  render () {
    return (
      <>
        <div className='head-wrap'>
          <header>
            <img src={require('@assets/imgs/public/icon-logo.png')} alt='logo' />
            <input type='text' placeholder='输入商品名称' />
          </header>
          <div className='banner-wrap'>
            <Banner {...bannerProps} />
          </div>
          <Nav />
        </div>
      </>
    )
  }
}

export default Home
