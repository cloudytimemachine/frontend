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
      <div className="meta-information">
        <dl>
          <dt>ID:</dt><dd> {this.props.id} </dd>
          <dt>Created:</dt><dd> {this.props.createdAt} </dd>
          <dt>Host:</dt><dd> {this.props.domain}</dd>
          <dt>Req'd Url:</dt><dd> {this.props.requestedUrl}</dd>
        </dl>
      </div>
      );
  }
});

class StatusInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var statusSwitcher = () => {
      console.log(this.props);
      switch(this.props.snapshotStatus) {
        case 'PENDING':
          return (<div className="processing-screen">
                  <img src="/images/gears.svg" alt="Processing..." />
                  <h3>Processing your snapshot...</h3>
                </div>);
        case 'FAILED':
          return (<div className="processing-screen">
                    <i className="fa fa-exclamation-triangle fa-6" aria-hidden="true"></i>
                    <h2>Your snapshot has failed.</h2>
                  </div>);
        case 'SUCCESSFUL':
          break;
      }
    }
    return <div>{statusSwitcher()}</div>;
  }
};

export default React.createClass({
  loadDetailsFromServer: function() {
    var url = API_URL() +'/snapshots/' + this.props.id
    request
      .get(url)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        console.log(res);
        if (res.body.status == 'PENDING') {
          this.setState({snapshotStatus: 'PENDING'});
        }
        else if (res.body.status == 'SUCCESSFUL') {
          this.setState({data: res.body});
          this.setState({snapshotStatus: 'SUCCESSFUL'});
        }
        else if (res.body.status == 'FAILED') {
          this.setState({snapshotStatus: 'FAILED'});
        }
      });
  },
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.loadDetailsFromServer();
    var x = setInterval(() => {
      this.loadDetailsFromServer();
      if (this.state.snapshotStatus=='SUCCESSFUL'||this.state.snapshotStatus=='FAILED') {
        clearInterval(x);
      }
      console.log(this.state);
    }, 1000);
    this.setState({intervalId: x});
  },
  componentWillUnmount: function() {
    clearInterval(this.state.intervalId);
  },
  render: function() {
    var timeAgo =  moment(this.state.data['createdAt']).fromNow();
    var imgLink = this.state.data['originalImage'];
    console.log('snapshot status' + this.state.snapshotStatus);
    return(
      <div>
      <StatusInformation snapshotStatus={this.state.snapshotStatus} />
       <a href={imgLink} target="_blank"><img className="capture-details" src={imgLink} /></a>
       <CaptureMetaInformation
        createdAt={timeAgo}
        domain={this.state.data['host']}
        requestedUrl={this.state.data['requestedUrl']}
        id={this.state.data['id']}
        />
      </div>
      );
  }
});
