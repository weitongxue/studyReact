import React, { Component } from 'react'
import { ListView } from 'antd-mobile'

function MyBody () {
  return (
    <div>我是内容</div>
  )
}

/**
 * @name: 分页列表
 * @param ： renderBodyComponent：需要渲染的子组件, scrollRenderAheadDistance: 当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行
 * onEndReached：请求数据的callback; onEndReachedThreshold: 当距离底部多少像素的时候看是调用onEndReached
 * @return: any
 */
class List extends Component {
  constructor (props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })
    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4
    }
  }

  render () {
    console.log(this.props)
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED'
        }}
      />
    )

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderBodyComponent={() => <MyBody />}
        renderRow={MyBody}
        renderSeparator={separator}
        style={{
          height: this.state.height,
          overflow: 'auto'
        }}
        pageSize={4}
        onScroll={() => { console.log('scroll') }}
        scrollRenderAheadDistance={500}
        onEndReached={this.props.onEndReached}
        onEndReachedThreshold={10}
      />
    )
  }
}

export default List
