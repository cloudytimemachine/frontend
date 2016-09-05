import React from 'react'
import $ from 'jquery'

export default React.createClass({
  getInitialState: function() {
    return { url: '' };
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
    var apiUrl = '/api/captures'
    console.log('Requesting capture of ' + url + ' to ' + apiUrl);
    $.post(apiUrl, { url: url });
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
          <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-download"> Submit</i></button>
        </div> {/*input-group-btn*/}
        </div> {/*form-group*/}
      </form>
    );
  }
});
