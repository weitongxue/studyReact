import React from 'react'
import { Carousel } from 'antd-mobile'

interface Props {
  bannerList:any [], // 图片列表
  imgHeight: number, // 图片高度 默认100
  autoplay: boolean, // 是否自动播放 默认不自动播放
  dots: boolean // 是否显示指示器 默认显示
}

class Banner extends React.Component <Props, {}>{
  constructor (props) {
    super(props)
  }
  render() {
    const { bannerList = [], imgHeight = 100, autoplay = false, dots = true } = this.props
    return (
      <Carousel
        autoplay={autoplay}
        infinite
        dots={dots}
      >
        {bannerList.map(item => (
          <a
            key={item}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: imgHeight + 'px'}}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}
              alt=""
              style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    );
  }
}
export default Banner
