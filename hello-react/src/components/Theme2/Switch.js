/*
 * @Author: tim
 * @Date: 2020-06-19 11:23:06
 * @LastEditors: tim
 * @LastEditTime: 2020-06-19 17:08:04
 * @Description: 
 */ 
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ThemeContext } from '../../utils/context'

class Switch extends Component {
  // static contextType = ThemeContext;
  static propTypes = {
    handleSwitchColor: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { themeColor: '' }
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

  // dispatch action 去改变颜色
  handleSwitchColor = (color) => {
    // const { store } = this.context
    // store.dispatch({
    //   type: 'CHANGE_COLOR',
    //   themeColor: color
    // })

    this.props.handleSwitchColor(color)
  }

  render () {
    return (
      <ThemeContext.Consumer>
        {
          (themeColor) => (
            <div>
            <button
              style={{ color: this.state.themeColor }}
              onClick={() => this.handleSwitchColor('red')}>
                Red
            </button>
            <button
              style={{ color: this.state.themeColor }}
              onClick={() => this.handleSwitchColor('blue')}>
                Blue
            </button>
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default Switch
