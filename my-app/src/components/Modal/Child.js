/*
 * @Author: tim
 * @Date: 2020-03-26 11:09:34
 * @LastEditors: tim
 * @LastEditTime: 2020-03-26 15:14:36
 * @Description: 
 */
import React from 'react'

export default class Child extends React.Component {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  constructor(props) {
    super(props)
  }

  handleClick(e) { 
    debugger
    if (e.target.id === 'testBtn') {
      console.log('button')      
    } else {
      console.log('111111')  
    }
    e.stopPropagation()
    
    this.props.onClick()
    // console.log(this.props.onClick)
  }
  
  render() {
    return (
      <div className="modal">
        <button className="test-button" id="testBtn" onClick={this.handleClick.bind(this)}>Close Modal</button>
      </div>
    );
  }
}
