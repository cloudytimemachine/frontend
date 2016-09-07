import React from 'react'
import { Link } from 'react-router'
import SearchBox from '../shared_components/SearchBox'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">

          <div className="navbar-header">
            <a className="navbar-brand" href="/">Cloudy Time Machine</a>
          </div> {/*navbar-header*/}
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/captures">Captures</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <div className="pull-right">
              <SearchBox />
            </div>{/*pull-right*/}

        </nav>
      </div>
    )
  }
})
