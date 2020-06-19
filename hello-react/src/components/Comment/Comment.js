/*
 * @Author: tim
 * @Date: 2020-06-17 15:23:50
 * @LastEditors: tim
 * @LastEditTime: 2020-06-18 15:51:05
 * @Description: 编写组件：遵循 自顶而下，逐步求精
 */ 
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 任何以 `` 包含的内容都会用 <code> 包含起来显示到页面上
// content
//   .replace(/&/g, "&amp;")
//   .replace(/</g, "&lt;")
//   .replace(/>/g, "&gt;")
//   .replace(/"/g, "&quot;")
//   .replace(/'/g, "&#039;")
//   .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }

  render() {
    const { comment } = this.props
    
    return (
      <div>
        <span className="name">{ comment.name }</span>: { comment.content }
      </div>
    )
  }
}

export default Comment