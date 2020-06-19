/*
 * @Author: tim
 * @Date: 2020-06-19 11:21:12
 * @LastEditors: tim
 * @LastEditTime: 2020-06-19 15:15:09
 * @Description: 
 */ 
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ThemeContext } from '../../utils/context'

class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  // static contextType = ThemeContext;

  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  componentDidMount () {
    console.log(this.context)
    const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  render () {
    return (
      <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
    )
  }
}

export default Header
