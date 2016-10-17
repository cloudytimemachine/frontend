import React from 'react'
import CaptureListContainer from './Captures/CaptureListContainer'

class Captures extends React.Component {
  render() {
    console.log(this.props.params);
    return (
      <div>
        {/*<RequestCaptureForm />*/}
        {/*<QueueStatus />*/}
        <CaptureListContainer />
      </div>
    )
  }
}

export default Captures;
