/*
 * @Author: tim
 * @Date: 2020-06-19 11:19:26
 * @LastEditors: tim
 * @LastEditTime: 2020-06-19 17:05:36
 * @Description: 
 */ 

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'
import ThemeSwitch from './Switch'
import { ThemeContext } from '../../utils/context'

function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)

class Theme extends Component {
  constructor (props) {
    super(props)
    this.state = { themeColor: '' }
  }

  componentDidMount () {
    // this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  // dispatch action 去改变颜色
  handleSwitchColor = (color) => {
    // let { themeColor } = store.getState()    

    // store.dispatch({
    //   type: 'CHANGE_COLOR',
    //   themeColor: themeColor === 'blue' ? 'red':'blue'
    // })
    
    let { themeColor } = this.state

    if (! themeColor) {
      themeColor = color
    } else {
      themeColor = themeColor === 'blue' ? 'red':'blue'
    }

    this.setState({
      themeColor
    })
  }

  render () {
    return (
      // <ThemeContext.Provider value={{store}}>
      <ThemeContext.Provider value={this.state.themeColor}>
        <Header />
        <Content />
        <ThemeSwitch handleSwitchColor={this.handleSwitchColor} /> 
        <div>
          <button
            style={{ color: this.state.themeColor }}
            onClick={this.handleSwitchColor.bind(this)}>CHANGE COLOR</button>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default Theme