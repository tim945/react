/*
 * @Author: tim
 * @Date: 2020-06-17 15:23:50
 * @LastEditors: tim
 * @LastEditTime: 2020-06-18 15:14:35
 * @Description: 编写组件：遵循 自顶而下，逐步求精
 */ 
import React, { Component } from 'react';
import { getStorage, setStorage } from '../../utils'

class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      content:''
    }
    this.inputRef = React.createRef();
    this.textareaRef = React.createRef();
  }

  focusInput = (name) => {
    // 通过 "current" 来访问 DOM 节点
    const ref = name ? this.textareaRef:this.inputRef;
    ref.current.focus();
  }

  getName = () => {
    return getStorage('name')
  }

  handChange = (e) => {
    // console.log(e.target.name)
    const targetName = e.target.name;
    this.userName = e.target.value;   // 测试，直接设置 this.userName 
    console.log(this.userName);

    this.setState({
      [targetName]: e.target.value
    });
  }

  handleBlur = (e) => {
    setStorage('name', e.target.value)
  }

  handleSubmit = (e) => {    
    e.preventDefault();

    const { name, content } = this.state

    if (name && content) {
      this.props.onSubmit({name, content})

      this.setState({
        // name:'',
        content:''
      })
    } else {
      alert('请输入用户名及内容');
    }
  }

  init() {
    const name = this.getName();
    if (name) {
      this.setState({
        name
      })
    }

    this.focusInput(name);
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <div className="form-item">
          <div className="form-label">用户名：</div>
          <div className="form-content">
            <input name="name" ref={this.inputRef} value={this.state.name} onChange={this.handChange}></input>
          </div>
        </div>

        <div className="form-item">
          <div className="form-label">评论内容：</div>
          <div className="form-content">
            <textarea name="content" ref={this.textareaRef} value={this.state.content} onChange={this.handChange}></textarea>
          </div>
        </div>
        <div style={{'textAlign':'right'}}><button type="submit">发布</button></div>
      </form>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    // 用户名变化操作
    if (prevState.name !== this.state.name) {
      setStorage('name', this.state.name)
    }
  }

  componentDidMount() {
    this.init();
  }
}

export default CommentInput