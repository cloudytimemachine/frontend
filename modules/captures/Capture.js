import React from 'react'
import { Link } from 'react-router'

var moment = require('moment')

export default React.createClass({
  render: function() {
    // console.log(this.props.capture);
    const capture = this.props.capture;
    const timeAgo =  moment(capture.createdAt).fromNow();
    var captureLink = '/snapshot/' + capture.id;

    return(
      <tr className="capture">
        <td>{timeAgo}</td>
        <td>{capture.host}</td>
        <td><Link to={captureLink}><img src={capture.thumbnailImage} width="200px"/></Link></td>
      </tr>
      )
  }
})
