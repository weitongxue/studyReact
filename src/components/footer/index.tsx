import React, { FC } from 'react'
import { NavLink as Link } from 'react-router-dom'
import './index.less'

const Footer: FC<{}> = () => {
  return (
    <footer>
      <div className='nav-wrap'>
        <Link exact to='/' activeClassName='active'>
          <i className='icon tab-icon-home'></i>
          <span>首页</span>
        </Link>
        <Link exact to='/mine' activeClassName='active'>
          <i className='icon tab-icon-mine'></i>
          <span>我的</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer