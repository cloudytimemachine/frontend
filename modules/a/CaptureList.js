import React from 'react'
import Capture from './Capture'

export default React.createClass({
  render: function() {
    var captureNodes = this.props.data.map(function(capture) {
      return (
        <Capture key={capture.id} capture={capture}></Capture>
        );
    });
    return (
      <div className="captureList">
      <div className="table-responsive">
      <table className="table">
        <thead>
        <tr>
          <th>Taken</th>
          <th>URL</th>
          <th>Image</th>
        </tr>
        </thead>
        <tbody>
          {captureNodes}
        </tbody>
      </table>
      </div>
      </div>
    );
  }
})
