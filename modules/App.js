import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Cloudy Time Machine</h1>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/captures">Captures</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
})
