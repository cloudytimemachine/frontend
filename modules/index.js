import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { Route } from 'react-router'
import { browserHistory } from 'react-router'
import Layout from './Layout'
import About from './About'
import Captures from './Captures'
import CaptureDetails from './CaptureDetails'
import SearchResults from './SearchResults'
import Home from './Home'

render((
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route component={Home} path="/" />
      <Route component={SearchResults} path="search/" />
      <Route component={CaptureDetails} path="snapshots/:snapshotId" />
      <Route component={Captures} path="snapshots" />
      <Route component={About} path="about" />
    </Route>
  </Router>
), document.getElementById('app'));
