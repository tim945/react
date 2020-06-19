/*
 * @Author: tim
 * @Date: 2020-06-17 15:23:50
 * @LastEditors: tim
 * @LastEditTime: 2020-06-17 18:01:56
 * @Description: 编写组件：遵循 自顶而下，逐步求精
 */ 
import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
  render() {
    const { comments } = this.props

    return (
      <div className="comments">
        {
          comments.map((item, i) => (<Comment key={i} comment={ item } />))
        }
      </div>
    )
  }
}

export default CommentList