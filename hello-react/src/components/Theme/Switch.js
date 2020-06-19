/*
 * @Author: tim
 * @Date: 2020-06-19 11:23:06
 * @LastEditors: tim
 * @LastEditTime: 2020-06-19 15:15:46
 * @Description: 
 */ 
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ThemeContext } from '../../utils/context'

class Switch extends Component {
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

  // dispatch action 去改变颜色
  handleSwitchColor (color) {
    const { store } = this.context
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }

  render () {
    return (
      <div>
        <button
          style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        <button
          style={{ color: this.state.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}

export default Switch
