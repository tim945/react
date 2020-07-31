/*
 * @Author: tim
 * @Date: 2020-07-31 13:43:22
 * @LastEditors: tim
 * @LastEditTime: 2020-07-31 14:38:51
 * @Description: 
 */ 
import React from 'react';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import App from '../App';

const Global404 = () => (
  <div>
    <h1>Oh, no!</h1>
    <p>You weren't supposed to see this... it was meant to be a surprise!</p>
  </div>
)

const Home = () => (
  <div>
    The links to "How?" and "Random" have no matching routes, so if you click on either of them, you will get a "global" 404 page.
    <App />
  </div>
)
const Question = ({ q }) => (
  <div>
    <div>Question: {q}</div>
    <div>Answer: I have no idea</div>
  </div>
)
const Who = () => <Question q={"Who?"}/>
const What = () => <Question q={"What?"}/>
const Where = () => <Question q={"Where?"}/>
const When = () => <Question q={"When?"}/>
const Why = () => <Question q={"Why?"}/>
const How = () => <Question q={"How?"}/>

// const RedirectAs404 = ({ location }) =>  <Redirect to={Object.assign({}, location, { state: { is404: true }})}/>

const RedirectAs404 = (props) => {
  console.log(props)
  return (
    <Redirect to={Object.assign({}, props.location, { state: { is404: true }})}/>
  )
};

const Nav = () => (
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/faq/who'>Who?</Link></li>
      <li><Link to='/faq/what'>What?</Link></li>
      <li><Link to='/faq/where'>Where?</Link></li>
      <li><Link to='/faq/when'>When?</Link></li>
      <li><Link to='/faq/why'>Why?</Link></li>
      <li><Link to='/faq/how'>How?</Link></li>
      <li><Link to='/random'>Random</Link></li>
    </ul>
  </nav>
)

const FAQ = () => (
  <div>
    <h1>Frequently Asked Questions</h1>
    <Switch>
      <Route path='/faq/who' component={Who}/>
      <Route path='/faq/what' component={What}/>
      <Route path='/faq/where' component={Where}/>
      <Route path='/faq/when' component={When}/>
      <Route path='/faq/why' component={Why}/>
      <Route path='/faq/how' component={How}/>
      <Route component={RedirectAs404}/>
    </Switch>
  </div>
)

const Apps = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/faq' component={FAQ}/>
    <Route component={RedirectAs404}/>
  </Switch>
)

const Routes = () => (
  <HashRouter>
    <div>
      <Nav />
      <Route render={({ location }) => (
        location.state && location.state.is404
          ? <Global404 />
          : <Apps />
      )}/>
    </div>
  </HashRouter>
)

export default Routes
