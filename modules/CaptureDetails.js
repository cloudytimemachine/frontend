import React from 'react'
import CaptureDetailsContainer from './CaptureDetailsContainer/CaptureDetailsContainer'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Cloudy Capture Details</h2>
        <CaptureDetailsContainer id={this.props.params.snapshotId} />
      </div>
    )
  }
})
