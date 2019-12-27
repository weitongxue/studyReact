import React, { FC } from 'react'
import { NoticeBar } from 'antd-mobile';

import './index.less'

interface props {
  notice: string
}
const Notice: FC<props> = (props) => {
  return (
    <NoticeBar mode="link" onClick={() => alert('1')} marqueeProps={{ loop: true, style: { padding: '0 7.5px', color: '#999999' } }}>
      {props.notice}
    </NoticeBar>
  )
}
export default Notice