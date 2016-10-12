import React from 'react'
import { Link } from 'react-router'
import RequestCaptureForm from '../Common/RequestCaptureForm'

export default React.createClass({
  render() {
    return (
      <div>
        <h4>Archive a website</h4>
        <RequestCaptureForm />
      </div>
    )
  }
})
