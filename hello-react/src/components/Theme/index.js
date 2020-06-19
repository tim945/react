/*
 * @Author: tim
 * @Date: 2020-06-19 11:19:26
 * @LastEditors: tim
 * @LastEditTime: 2020-06-19 15:17:34
 * @Description: 
 */ 

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'
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
    themeColor: ''
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
  static childContextTypes = {
    store: PropTypes.object
  }

  // React17中会被废弃
  getChildContext () {
    return { store }
  }

  render () {
    return (
      <div>
        {/* <ThemeContext.Provider value={{store}}> */}
        <Header />
        <Content />
      {/* // </ThemeContext.Provider> */}
      </div>
    )
  }
}

export default Theme