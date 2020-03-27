/*
 * @Author: tim
 * @Date: 2020-03-26 11:04:12
 * @LastEditors: tim
 * @LastEditTime: 2020-03-26 15:13:51
 * @Description: 
 */

import React from 'react'
import ModalBox from './ModalBox'
import Child from './Child'

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0, showModal: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM. 
    debugger
    this.setState(prevState => ({
      clicks: prevState.clicks + 1,
      showModal: ! prevState.showModal
    }));
    // console.log(this.state)
  }

  render() {
    return (
      <div>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        {this.state.showModal && (
          <ModalBox>
            <Child onClick={this.handleClick}/>
          </ModalBox>
        )}
      </div>
    );
  }
}
