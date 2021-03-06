import React from 'react'
import Carousel from './SearchResults/Carousel2'
import CaptureList from './Captures/CaptureList'
import request from 'superagent'

function API_URL () {
  if (process.env.NODE_ENV === 'production') {
    return 'http://api/api';
  }
  return '/api';
};

export default React.createClass({
  loadCapturesFromServer: function() {
    var url = API_URL() + '/snapshots?host=' + this.props.location.query['host'];
    console.log(`hitting ${url}`)
    request
      .get(url)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        this.setState({data: res.body });
        console.log(res.body);
    });
  },
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
      this.loadCapturesFromServer();
  },
  componentWillReceiveProps: function(nextprops){
    if (this.props.location.query['host'] !== nextprops.location.query['host'])
      setTimeout(() => { this.loadCapturesFromServer(), 1});
  },
  render() {
    return (
      <div>
        <Carousel results={this.state.data.reverse()} />
      </div>
    )
  }
})

