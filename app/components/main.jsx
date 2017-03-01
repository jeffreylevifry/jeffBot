var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./index.jsx');
var Chatbox = require('./chatbox.jsx');
var Portfolio = require('./portfolio.jsx');
require('../../public/main.scss');
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";







ReactDOM.render(   
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Portfolio} />
      <Route path="/chatbox" name="chatbox" component={Chatbox}/>
    </Route>
  </Router>, 
  document.getElementById('app'));