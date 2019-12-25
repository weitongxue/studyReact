import React, { Component } from 'react'

import Banner from '@components/carousel'
import './index.less'

const Props = {
  bannerList: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
  imgHeight: 97,
  autoplay: true,
  dots: false
}
class Home extends Component {
  render () {
    return (
      <>
        <div className='head-wrap'>
          <header>
            <img src={require('@assets/imgs/public/icon-logo.png')} alt='logo' />
            <input type='text' placeholder='输入商品名称' />
          </header>
          <div className='banner-wrap'>
            <Banner {...Props} />
          </div>
        </div>
      </>
    )
  }
}

export default Home
