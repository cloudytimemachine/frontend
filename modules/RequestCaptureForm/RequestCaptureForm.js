import React from 'react'
import { browserHistory } from 'react-router'
import request from 'superagent'

function API_URL () {
  if (process.env.NODE_ENV === 'production') {
    return 'http://api/api';
  }
  return '/api';
};

export default React.createClass({
  getInitialState: function() {
    return { url: '', isPending: false };
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  handleURLChange: function(e) {
    this.setState({ url: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var url = this.state.url.trim();
    if (!url) {
      return;
    }
    var apiUrl = API_URL() + '/snapshots'
    console.log('Requesting capture of ' + url + ' to ' + apiUrl);

    request
      .post(apiUrl)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({requestedUrl:url}))
      .end((err, res) => {
        console.log(res.body.id);
        if (res.statusCode != 200) {
          console.log('Invalid request. Something has gone wrong.');
          // TODO: visual representation of failure in the request box.
        } else {
            var snapshotId = res.body.id;
            browserHistory.push({ pathname: '/snapshots/' + snapshotId });
        }
      });
    this.setState({ url: '' });
  },
  render: function() {
    return(
      <form className="navbar-form" onSubmit={this.handleSubmit}>
        <div className="input-group">
        <input
          type="text"
          placeholder="Page to archive..."
          value={ this.state.url }
          onChange={ this.handleURLChange }
          className="form-control"
          name="q"
        />
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit"><i className="fa fa-cloud-download" aria-hidden="true"></i></button>
        </div> {/*input-group-btn*/}
        </div> {/*form-group*/}
      </form>
    );
  }
});
