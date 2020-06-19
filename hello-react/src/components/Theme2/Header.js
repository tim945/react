/*
 * @Author: tim
 * @Date: 2020-06-19 11:21:12
 * @LastEditors: tim
 * @LastEditTime: 2020-06-19 17:05:21
 * @Description: 
 */ 
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ThemeContext } from '../../utils/context'

class Header extends Component {
  // static contextType = ThemeContext;

  constructor (props) {
    super(props)
    this.state = { themeColor: 'blue' }
  }

  componentDidMount () {
    console.log(this.context)
    // const { store } = this.context
    // this._updateThemeColor()
    // store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  render () {
    return (
      <ThemeContext.Consumer>
        {
          (themeColor) => <h1 style={{ color: themeColor }}>React.js 小书</h1>
        }
      </ThemeContext.Consumer>      
    )
  }
}

export default Header
