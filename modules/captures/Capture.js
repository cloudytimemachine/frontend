import React from 'react'
import { Link } from 'react-router'

var moment = require('moment')

export default React.createClass({
  render: function() {
    var timeAgo =  moment(this.props.createdAt).fromNow();
    var captureLink = '/capture/' + this.props.id;
    return(
      <tr className="capture">
        <td>{timeAgo}</td>
        <td>{this.props.href}</td>
        <td>{this.props.path}</td>
        <td><Link to={captureLink}><img src={this.props.thumb} width="200px"/></Link></td>
      </tr>
      )
  }
})
