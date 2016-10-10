import React from 'react'
import { Link } from 'react-router'
import Navbar from './Common/Navbar'
import FooterSocialButtons from './Common/FooterSocialButtons'

export default React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <footer className="footer">
          <div className="container">
            <div className="col-sm-4 pull-left">
              <p className="text-muted">&copy; Ross Kukulinski, Eric Hole and <a href="http://github.com/cloudytimemachine">Contributors</a></p>
            </div>
            <div className="col-sm-4 pull-right">
              <FooterSocialButtons className="row content" />
            </div>
            </div>
        </footer>
     </div>
    )
  }
})
