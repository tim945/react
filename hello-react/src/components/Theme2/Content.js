/*
 * @Author: tim
 * @Date: 2020-06-19 11:22:21
 * @LastEditors: tim
 * @LastEditTime: 2020-06-19 16:45:05
 * @Description: 
 */ 
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import ThemeSwitch from './Switch'
import { ThemeContext } from '../../utils/context'

class Content extends Component {
  // static contextType = ThemeContext;

  constructor (props) {
    super(props)
    this.state = { themeColor: 'blue' }
  }

  componentDidMount () {
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
          (themeColor) => <p style={{ color: themeColor }}>React.js 小书内容 { this.state.themeColor }</p>
        }
      </ThemeContext.Consumer>
    )
  }
}

export default Content
