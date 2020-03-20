/*
 * @Author: tim
 * @Date: 2020-03-18 10:43:38
 * @LastEditors: tim
 * @LastEditTime: 2020-03-18 17:16:18
 * @Description: 
 */
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    console.log(new Date())
    this.setState({
      date:new Date()
    })
  }

  componentDidMount() {
    // if (! this.props.isToggleOn) return
    
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log('mount', this.timerID)
  }

  componentWillUnmount() {
    console.log('Unmount', this.timerID)
    clearInterval(this.timerID)
  }

  render() {
    // if (this.props.isToggleOn === true) {
      return (
        <div>
          {/* <h1>Hello, world!</h1> */}
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    // } 
    // return ''  
  }
}

export default Clock