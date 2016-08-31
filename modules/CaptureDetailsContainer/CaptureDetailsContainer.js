import React from 'react'
import $ from 'jquery'
import moment from 'moment'

const CaptureMetaInformation = React.createClass({
  render: function() {
    return(
      <div>
        <p>ID: {this.props.id}</p>
        <p>Created At: {this.props.createdAt}</p>
        <p>Domain: {this.props.domain}</p>
        <p>Path: {this.props.path}</p>
      </div>
      );
  }
});

export default React.createClass({
  loadDetailsFromServer: function() {
   if (!this.isMounted())
      return;
    var url = 'http://localhost:3001/api/capture/' + this.props.id + '?'
    //console.log(url);
    $.getJSON(url,function(json){
      //console.log(json);
      this.setState({data: json['capture']});
    }.bind(this));
  },
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.loadDetailsFromServer();
  },
  render: function() {
    var timeAgo =  moment(this.state.data['createdAt']).fromNow();
    var imgLink = this.state.data['originalImage'];
    return(
      <div>
       <img className="captureDetails" src={imgLink} />
       <CaptureMetaInformation
        createdAt={timeAgo}
        domain={this.state.data['domain']}
        path={this.state.data['path']}
        id={this.state.data['id']}
        />
      </div>
      );
  }
});
