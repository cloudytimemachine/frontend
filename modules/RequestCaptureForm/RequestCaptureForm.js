import React from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery'

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
    this.setState({ isPending: true });
    e.preventDefault();
    var url = this.state.url.trim();
    if (!url) {
      return;
    }
    var apiUrl = '/api/captures'
    console.log('Requesting capture of ' + url + ' to ' + apiUrl);
    $.post(apiUrl, { url: url });
    this.setState({ url: '' });
    var pushHistory = function() {
      browserHistory.push({ pathname: '/captures/' + url });
    }
    setTimeout(pushHistory, 3000);
  },
  renderPending: function() {
    if (this.state.isPending)
      return (<h5>Processing your request...</h5>);
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
          <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-download"> Submit</i></button>
        </div> {/*input-group-btn*/}
        </div> {/*form-group*/}
        {this.renderPending()}
      </form>
    );
  }
});
