import React from 'react'
import CaptureList from './CaptureList'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import request from 'superagent'

function API_URL () {
  if (process.env.NODE_ENV === 'production') {
    return 'http://api/api';
  }
  return '/api';
};

export default React.createClass({
  loadCapturesFromServer: function() {
    var url = API_URL() + '/snapshots'
    //console.log(`hitting ${url}`)
    request
      .get(url)
      .set('Content-Type', 'application/json')
      .end((err, res) => {
        this.setState({data: res.body})
      });
  },
  getInitialState: function() {
    return { data: [],
             value: '' };
  },
  componentDidMount: function() {
      this.loadCapturesFromServer();
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    console.log(this.state.data);
    return(
      <div>
      <ul>
        <CaptureList data={this.state.data}/>
      </ul>
      </div>
      )
  }
})
