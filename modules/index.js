import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import About from './About'
import Captures from './Captures'
import CaptureDetails from './CaptureDetails'
import Home from './Home'

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route component={Home} path="/" />
      <Route component={Captures} path="/captures" />
    </Route>
  </Router>
), document.getElementById('app'))
