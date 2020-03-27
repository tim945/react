/*
 * @Author: tim
 * @Date: 2020-03-26 11:05:09
 * @LastEditors: tim
 * @LastEditTime: 2020-03-26 11:13:44
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}
