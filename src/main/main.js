var React = require('react');
var CaptureTable = require('./captureTable');

ReactDOM.render(
  <CaptureTable url="http://localhost:3001/api/captures" pollInterval={2000}/> , document.getElementById('content'));
