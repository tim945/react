/*
 * @Author: tim
 * @Date: 2020-06-17 15:23:50
 * @LastEditors: tim
 * @LastEditTime: 2020-06-18 13:58:51
 * @Description: 编写组件：遵循 自顶而下，逐步求精。  
 * 某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，
 * 用 props 传递数据或者函数来管理这种依赖或着影响的行为。通过 Redux 共享状态。
 */ 
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments:[{name:'tim', content:'test'}, {name:'tim', content:'test'}, {name:'tim', content:'test'}]
    }
  }

  handSubmit = (comment) => {
    const comments = [comment, ...this.state.comments]
    this.setState({
      comments
    })
  }

  render() {
    return (
      <div>
        <CommentInput onSubmit={ this.handSubmit }/>
        <CommentList comments={ this.state.comments } />
      </div>
    )
  }
}

export default CommentApp