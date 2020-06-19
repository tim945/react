/*
 * @Author: tim
 * @Date: 2020-06-18 11:09:33
 * @LastEditors: tim
 * @LastEditTime: 2020-06-18 13:37:35
 * @Description: props.children 和容器类组件
 */ 
import React, { Component } from 'react'

class Card extends Component {
  render() {
    // dangerouslySetInnerHTML 可能会导致跨站脚本攻击（XSS）
    return (
      <div className='card'>
        { this.props.title && <div className="card-title" dangerouslySetInnerHTML={{__html: this.props.title}} ></div> }
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Card