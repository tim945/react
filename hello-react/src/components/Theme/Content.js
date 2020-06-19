/*
 * @Author: tim
 * @Date: 2020-06-19 11:22:21
 * @LastEditors: tim
 * @LastEditTime: 2020-06-19 15:15:22
 * @Description: 
 */ 
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ThemeSwitch from './Switch'
import { ThemeContext } from '../../utils/context'

class Content extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  // static contextType = ThemeContext;

  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  componentDidMount () {
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
      <div>
        <p style={{ color: this.state.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

export default Content
