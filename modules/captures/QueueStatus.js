import React from 'react'
import $ from 'jquery'

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
    const url = 'http://localhost:3001/api/queue?'
    $.getJSON(url,function(json){
      this.setState({data: json});
    }.bind(this));
  },
  render: function() {
    return(
      <div className="queueStatusBox">
        Current queue length: {this.state.data['queueLength']}
      </div>
    )
  }
})
