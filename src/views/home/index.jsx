import React, { Component } from 'react'
import Store from '@store'
import Action from '@store/action'

import Banner from '@components/carousel'
import Nav from '@components/nav'
import Notice from '@components/notice'

import { bannerProps, navProps } from '@assets/js/resetProps'

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
        </div>
        <Nav />
        <main>
          <div className='notice-wrap'>
            <Notice notice='好消息：中艺优美2019春夏新品上市，更多新品等你来抢' />
          </div>
        </main>
      </>
    )
  }
}

export default Home
