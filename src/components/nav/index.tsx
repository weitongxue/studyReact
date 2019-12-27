import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './index.less'

interface Props {
  navList: any
}

class Nav extends Component <Props, {}> {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { navList = [] } = this.props
    return (
      <>
        <nav>
          {navList.map((item,index) => {
            return (
              <Link to={item.navUrl} key={index} className='nav-item'>
                <img src={require(`@assets/imgs/nav/nav${index+1}.png`)} alt='' />
                <span>{item.navName}</span>
              </Link>
            )
          })}
        </nav>
      </>
    )
  }
}

export default connect(state => ({ navList: state.navList }))(Nav)