import React from 'react'
import CaptureListContainer from './captures/CaptureListContainer'

export default React.createClass({
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
})
