import React from 'react'
import { Link } from 'react-router'
import Navbar from './App/Navbar'
import FooterSocialButtons from './FooterSocialButtons'

export default React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <footer className="footer">
          <div className="container">
            <div className="col-sm-4 pull-left">
              <p className="text-muted">© Cloudy Time Machine</p>
            </div>
            <div className="col-sm-4 pull-right">
              <FooterSocialButtons className="pull-right" />
            </div>
            </div>
        </footer>
     </div>
    )
  }
})
