import React from 'react'
import Logo from './Home/Logo'
import About from './Home/About'
import SearchBox from './Home/SearchBox'
import RequestCaptureBox from './Home/RequestCaptureBox'
import { Link } from 'react-router'

class Home extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row content">
            <div className="col-sm-4">
              <div className="well">
                <Logo />
              </div>
              <div className="well">
                <About />
              </div>
            </div> {/*col-sm-4*/}
            <div className="col-sm-8">
              <div className="well">
                <SearchBox />
              </div> {/*well*/}
              <div className="well">
                <RequestCaptureBox />
              </div> {/*well*/}
            </div> {/*col-sm-8*/}
          </div> {/*row content*/}
        </div>
    )
  }
}

export default Home;
