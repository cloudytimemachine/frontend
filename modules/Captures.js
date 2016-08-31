import React from 'react'
import CaptureListContainer from './captures/CaptureListContainer'
import RequestCaptureForm from './RequestCaptureForm/RequestCaptureForm'
import QueueStatus from './captures/QueueStatus'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Cloudy Captures</h2>
        <RequestCaptureForm />
        <QueueStatus />
        <CaptureListContainer url="/api/captures" pollInterval={2000}/>
      </div>
    )
  }
})
