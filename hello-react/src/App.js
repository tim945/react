import React from 'react';
import logo from './logo.svg';
import './App.css';
import style from './test.module.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header className={"App-header " + style['App-header']}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
