/*
 * @Author: tim
 * @Date: 2020-06-17 10:53:37
 * @LastEditors: tim
 * @LastEditTime: 2020-06-17 15:07:23
 * @Description: 
 */ 
import React, { Component } from 'react';

class Computer extends Component {
  constructor () {
    super();
    this.state = {
      status: 'OFF',
      showContent: '无内容'
    }
  }
  
  onHandClick = ()=> {
    // this.setState((state, props) => ({
    //   status: state.status === 'OFF' ? 'ON':'OFF'
    // }))
    this.setState((state, props) => {
      let status = state.status === 'OFF' ? 'ON':'OFF';
      let showContent = status === 'OFF' ? '显示器关了':'显示器亮了';
      return {
        status,
        showContent
      }
    })
  }
  
  render () {
    return (
      <div>
        <button onClick={this.onHandClick}>{/* 开关 */ this.state.status}</button>
        <Screen showContent={this.state.showContent} />
        <Users />
        <LessonsList></LessonsList>
      </div>
    )
  }
}

class Screen extends Component {
  // props 未赋值，但又不能为 nul
  // static defaultProps = {
  //   showContent: '无内容'
  // }
  // constructor(props) {
  //   super(props)
  // }
  render () {
    console.log(this.props)
    return (
      <div className='screen'>{this.props.showContent}</div>
      
    )
  }
}

const Users = (props) => {
  const list = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ];

  return (
    <ul className="users">
      {
        list.map(user => (<li key={user.username}><User user={user} /></li>)) // 注意循环须加 key 属性
      }
    </ul>
  );
}

class User extends Component {
  render() {
    const { user } = this.props
    return (
      // <React.Fragment>
      <>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
      </>
      // </React.Fragment>
    )
  }
}

class LessonsList extends Component {
  render() {
    const lessons = [
      { id:1,  title: 'Lesson 1: title', description: 'Lesson 1: description' },
      { id:2, title: 'Lesson 2: title', description: 'Lesson 2: description' },
      { id:3, title: 'Lesson 3: title', description: 'Lesson 3: description' },
      { id:4, title: 'Lesson 4: title', description: 'Lesson 4: description' }
    ]

    return (
      lessons.map((lesson, i) => <Lesson key={lesson.id} order={i} lesson={ lesson } />)
    )
  }
}

class Lesson extends Component {
  // onHandClick(lesson, order) {
  //   console.log(order, lesson.title)
  // }
  
  onHandClick = (lesson, order) => {
    console.log(order, lesson.title)
  }

  render() {
    const { lesson, order } = this.props

    return (
      <div>
        {/* {<h3 onClick={ this.onHandClick.bind(this, lesson, order)}>{ lesson.title }</h3>} */}
        <h5 onClick={ () => this.onHandClick(lesson, order) }>{ lesson.title }</h5>
        <p>{ lesson.description }</p>
      </div>
    )
  }
}

export default Computer