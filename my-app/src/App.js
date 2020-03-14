import React, { Component } from 'react';
import { Button } from 'element-react';  //引入element-react
import 'element-theme-default';          //引入主题
import logo from './logo.svg';
import './App.css';

// class App extends React.Component {
class App extends Component {
  constructor() {
    super();
    this.state = {isClick:true, buttonText: "Click me, please", clickTimes: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { isClick, clickTimes } = this.state
    isClick = ! isClick
    let buttonText = isClick ? "Thanks, been clicked!":"Click me, please"

    clickTimes++

    /* this.setState(() => {
      // return { buttonText: "Thanks, been clicked!" };
      return {
        isClick,  buttonText
      }     
    }); */
    this.setState(() => ({
      isClick,  buttonText, clickTimes
    }))      
  }

  render() {
    const { buttonText, isClick, clickTimes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Learn React */}
              <Button type="primary">element按钮</Button>   {/* 按钮组件 */}
            </a>
            <Button type="primary" onClick={this.handleClick} style={{marginLeft:"10px"}}>{buttonText}</Button>
            {this.state.isClick} / {clickTimes}
          </p>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* Learn React */}
//           <Button type="primary">element按钮</Button>   {/* 按钮组件 */}
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
