import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import About from './About'
import Captures from './Captures'
import CaptureDetails from './CaptureDetails'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/captures" component={Captures}/>
      <Route path="/capture/:captureID" component={CaptureDetails} />
    </Route>
  </Router>
), document.getElementById('app'))
