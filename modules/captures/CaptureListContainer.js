import React from 'react'
import CaptureList from './CaptureList'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import $ from 'jquery'

export default React.createClass({
  loadCapturesFromServer: function() {
    if (!this.isMounted())
      return;
    var url = apiForwardingUrl + '/api/captures?'
    $.getJSON(url,function(json){
      console.log(json);
      this.setState({data: json['captures']});
    }.bind(this));
  },
  getInitialState: function() {
    return { data: [],
             value: '' };
  },
  componentDidMount: function() {
      this.loadCapturesFromServer();
      setInterval(this.loadCapturesFromServer, this.props.pollInterval);
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    let filteredCaptures = this.state.data.filter(
      (capture) => {
        return capture.domain.indexOf(this.state.value) !== -1;
        }
    );
    return(
      <div>
      <form>
        <FormGroup>
        <ControlLabel>Filter results</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </FormGroup>
      </form>
      <div>
      <ul>
        <CaptureList data={filteredCaptures}/>
      </ul>
      </div>
      </div>
      )
  }
})
