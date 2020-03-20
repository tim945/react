/*
 * @Author: tim
 * @Date: 2020-03-17 16:18:06
 * @LastEditors: tim
 * @LastEditTime: 2020-03-18 10:57:17
 * @Description: 
 */
import React from 'react';

class Hello extends React.Component {
  constructor (props) {
    super(props);
    this.state = {name:'dd'}
  }

  render() {
    const { name } = this.props;

    return (
      <span>Hello, {name || this.state.name || 'world'}！</span>
    )
  }
}

export default Hello;