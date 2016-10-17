import React from 'react'
import Carousel from './SearchResults/Carousel2'
import Alert from './SearchResults/Alert'
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
    var url = API_URL() + '/snapshots?' + this.props.params.splat
    //console.log(`hitting ${url}`)
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
  getSearchInfo: function(query) {
    var obj = {};
    query.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    console.log(obj);
    return (<div>{JSON.stringify(obj)}</div>);
  },
  render() {
    return (
      <div>
        <h2>Query Parameters: {this.getSearchInfo(this.props.params.splat)}</h2>
        {/*<CaptureList data={this.state.data} />*/}
        <Carousel results={this.state.data} />
      </div>
    )
  }
})
