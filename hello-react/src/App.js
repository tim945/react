/*
 * @Author: tim
 * @Date: 2020-06-12 17:45:25
 * @LastEditors: tim
 * @LastEditTime: 2021-01-04 15:28:55
 * @Description: 
 */ 
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import style from './test.module.css';
import MyLoadable from './loadable';
import Computer from './components/Test1'
import CommontApp from './components/Comment/CommentApp'
// import Card from './components/Card'
// import Theme from './components/Theme2'

const Card = MyLoadable({
  loader: () => import('./components/Card'),
});
const Theme = MyLoadable({
  loader: () => import('./components/Theme2'),
});
const Theme3 = MyLoadable({
  loader: () => import('./components/Theme3'),
});
const Articles = MyLoadable({
  loader: () => import('./components/Article'),
});
const Person = MyLoadable({
  loader: () => import('./components/Person'),
});
const Counter = MyLoadable({
  loader: () => import('./components/Counter'),
});
const Counter2 = MyLoadable({
  loader: () => import('./components/Counter/index2'),
});

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header className={"App-header " + style['App-header']}>
      {/* <header className="App-header" styleName="App-header"> */}  { /* 通过styleName使用Css Module, 需配合react-css-modules */ }
        <Person personId="1" />
        <Theme3 />
        <Counter initialCount="0" />
        <Counter2 initialCount="0" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <span className={style['App-header-test']}>JUST DO IT.</span>
        </p>
        <Computer />
        <CommontApp />
        <Card title="<h2>React.js 小书</h2>">
          {/* <h2>React.js 小书</h2> */}
          <div>开源、免费、专业、简单</div>
          订阅：<input />
        </Card>
        <Theme />

        <Articles />
      </header>      
    </div>
  );
}

export default App;
