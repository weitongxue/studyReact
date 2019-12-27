import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';


interface Props {
  tabs: []
  initialPage: number // 当前激活的tab下标（从0开始）
  tabBarActiveTextColor: string // 激活的文字颜色
  tabBarInactiveTextColor: string // 未激活的文字颜色
  swipeable: boolean // 是否支持滑动切换 （默认支持）
  page: number // 一行显示几个tab
  underStyle: {} // 下划线样式
  renderContent: any // 内容组件
}
// tabBarUnderlineStyle: 激活下滑线样式 默认有border
class NavTab extends Component <Props, {}>{
  renderContent = this.props.renderContent
  render() {
    const { page = 4, underStyle } = this.props
    const Style: React.CSSProperties = underStyle
    return (
      <Tabs {...this.props} tabBarUnderlineStyle={Style} renderTabBar={props=>
        <Tabs.DefaultTabBar {...props} page={page} />}>
        {this.renderContent}
      </Tabs>
    );
  }
}

export default NavTab