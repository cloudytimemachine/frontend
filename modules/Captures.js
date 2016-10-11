import React from 'react'
import CaptureListContainer from './Captures/CaptureListContainer'

class Captures extends React.Component {
  render() {
    return (
      <div>
        <h2>Cloudy Captures</h2>
        {/*<RequestCaptureForm />*/}
        {/*<QueueStatus />*/}
        <CaptureListContainer />
      </div>
    )
  }
}

export default Captures;
