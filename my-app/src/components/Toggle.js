/*
 * @Author: tim
 * @Date: 2020-03-18 15:00:42
 * @LastEditors: tim
 * @LastEditTime: 2020-03-18 15:38:18
 * @Description: 
 */
import React from 'react'
import { Button } from 'element-react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   isToggleOn: false
    // }
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  
  render() {
    return (
    // <Button type="primary" onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON':'OFF'}</Button>
    <Button type="primary" onClick={() => this.props.onClick()}>{this.props.isToggleOn ? 'ON':'OFF'}</Button>
    )
  }
}

export default Toggle