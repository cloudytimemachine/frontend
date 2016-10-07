import React from 'react'
import CaptureDetailsContainer from './CaptureDetailsContainer/CaptureDetailsContainer'

class CaptureDetails extends React.Component{
  render() {
    return (
      <div>
        <h2>Cloudy Capture Details</h2>
        <CaptureDetailsContainer id={this.props.params.snapshotId} />
      </div>
    )
  }
}

export default CaptureDetails;
