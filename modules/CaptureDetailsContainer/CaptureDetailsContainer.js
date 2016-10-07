import React from 'react'
import request from 'superagent'
import moment from 'moment'

function API_URL () {
  if (process.env.NODE_ENV === 'production') {
    return 'http://api/api';
  }
  return '/api';
};

const CaptureMetaInformation = React.createClass({
  render: function() {
    console.log(this.props);
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

class ProcessingScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const spinnerSwitcher = () => {
      console.log('snapshotStatus:' + this.props.snapshotStatus);
      //if (this.props.snapshotStatus === 'PENDING')
        return <div><h1>processing</h1><img src="images/spin.gif" alt="Processing..." /></div>
    }
    return <div>{spinnerSwitcher}</div>;
  }
};

export default React.createClass({
  loadDetailsFromServer: function() {
    var url = API_URL() +'/snapshots/' + this.props.id
    request
      .get(url)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        console.log(res.body);
        if (res.body.status == 'SUCCESSFUL') {
          this.setState({data: res.body})
          this.setState({snapshotStatus: 'SUCCESSFUL'})
        }
      });
  },
  getInitialState: function() {
    return { data: [], snapshotStatus: 'PENDING' };
  },
  componentDidMount: function() {
    this.loadDetailsFromServer();
    var interval = setInterval(function() {
      this.loadDetailsFromServer;
      console.log(this.state);
      if (this.state.snapshotStatus != 'PENDING') {
          clearInterval(interval);
      }
    }, 1000);
  },
  render: function() {
    var timeAgo =  moment(this.state.data['createdAt']).fromNow();
    var imgLink = this.state.data['originalImage'];
    console.log('snapshot status' + this.state.snapshotStatus);
    return(
      <div>
      <ProcessingScreen snapshotStatus={this.state.snapshotStatus} />
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
