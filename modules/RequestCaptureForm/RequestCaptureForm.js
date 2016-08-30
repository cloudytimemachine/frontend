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
    var apiUrl = 'http://localhost:3001/api/captures'
    console.log(apiUrl);
    $.post(apiUrl, { url: url });
    this.setState({ url: '' });
  },
  render: function() {
    return(
      <form className="searchForm form-inline" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Page to archive..."
          value={ this.state.url }
          onChange={ this.handleURLChange }
          className="form-control"
        />
        <input type="submit" value="Submit" className="btn btn-primary"/>
        </div>
      </form>
    );
  }
});
