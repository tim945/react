import React from 'react';
import logo from './logo.svg';
import './App.css';
import style from './test.module.css';
import Computer from './components/Test1'
import CommontApp from './components/Comment/CommentApp'
import Card from './components/Card'
import Theme from './components/Theme2'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header className={"App-header " + style['App-header']}>
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
      </header>      
    </div>
  );
}

export default App;