import React from 'react'
import $ from 'jquery'

function API_URL () {
  if (process.env.NODE_ENV === 'production') {
    return 'http://api/api';
  }
  return '/api';
};

export default React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  componentDidMount: function() {
    this.loadQueueLen();
    setInterval(this.loadQueueLen, 1000);
  },
  loadQueueLen: function() {
    if (!this.isMounted())
      return;
    const url = API_URL + '/queue?'
    request
      .get(url)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        console.log(res.body);
        this.setState({data: res.body})
      });
  },
  render: function() {
     // console.log(this.props);
    return(
      <div>
        Current queue length: {this.state.data['queueLength']}
      </div>
    )
  }
})
