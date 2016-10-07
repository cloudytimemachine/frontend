import React from 'react'
import { Link } from 'react-router'

var moment = require('moment')

function API_URL () {
  if (process.env.NODE_ENV === 'production') {
    return 'http://api/api';
  }
  return '/api';
};

export default React.createClass({
  render: function() {
    // console.log(this.props.capture);
    const capture = this.props.capture;
    const timeAgo =  moment(capture.createdAt).fromNow();

    console.log(capture.thumbnailImage);
    const captureLink = API_URL() + '/snapshots/'+capture.id;
    console.log(captureLink);
    return(
      <tr className="capture">
        <td>{timeAgo}</td>
        <td>{capture.host}</td>
        <td><Link to={captureLink}><img src={capture.thumbnailImage} width="200px"/></Link></td>
      </tr>
      )
  }
})
