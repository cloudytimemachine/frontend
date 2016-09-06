import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState: function() {
    return { url: '' };
  },
  handleURLChange: function(e) {
    this.setState({ url: e.target.value });
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var url = this.state.url.trim();
    if (!url) {
      return;
    }
    this.setState({ url: '' });
    this.context.router.push({
        pathname: '/captures/'+this.refs.q.value
      })
  },
  render() {
    return (
      <form className="navbar-form" role="search" onSubmit={this.handleSubmit}>
        <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              ref="q"
              value={this.state.url}
              onChange={this.handleURLChange}
              />
            <div className="input-group-btn">
                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
            </div> {/*input-group-btn*/}
        </div> {/*input-group*/}
      </form>
    )
  }
})
